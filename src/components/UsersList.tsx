import React, {useEffect, useState} from 'react';
import {usersAPI} from "../API/usersAPI";
import SearchInput from "./SearchInput";
import UserItem from "./UserItem";
import classes from "./UsersList.module.css"
import UserDetailInfo from "./UserDetailInfo";
import {IUser} from "../types";

const UsersList = () => {
    const [searchUser, setSearchUser] = useState<string | null>(null);
    const [queryUser, setQueryUser] = useState<string | null>(null)
    const {data: users, isLoading, isError} = usersAPI.useGetUsersQuery(queryUser);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);


    //debounce fn
    useEffect(() => {
        const delay = 200;

        const timeoutId = setTimeout(() => {
            setQueryUser(searchUser)
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchUser]);

    const handleOpenModal = (user: IUser) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleSearch = (name: string) => {
        setSearchUser(name);
    };

    return (
        <section className={classes.container}>
            <SearchInput searchUser={searchUser} handleSearchUser={handleSearch}/>
            <section className={classes.item_holder}>
                {isError &&
                    <div>Error</div>
                }
                {isLoading &&
                    <div>Loading</div>
                }
                {users && users.map(user =>
                    <UserItem key={user.email} user={user} handleOpenModal={handleOpenModal}/>
                )}
            </section>
            {isModalOpen && <UserDetailInfo user={selectedUser} handleCloseModal={handleCloseModal}/>}
        </section>
    );
};

export default UsersList;