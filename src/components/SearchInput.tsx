import React, {FC} from 'react';
import classes from "./SearchInput.module.css"

interface Props {
    searchUser: string | null;
    handleSearchUser: (name: string) => void;
}

const SearchInput: FC<Props> = ({searchUser, handleSearchUser}) => {
    return (
        <input
            className={classes.input}
            value={searchUser ? searchUser : ""}
            onChange={event => handleSearchUser(event.target.value)} />

    );
};

export default SearchInput;