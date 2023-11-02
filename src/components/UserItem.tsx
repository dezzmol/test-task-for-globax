import React, {FC} from 'react';
import {IUser} from "../types";
import classes from "./UserItem.module.css"
const phone = require("../assets/phone.png")
const mail = require("../assets/mail.png")

interface Props {
    user: IUser
    handleOpenModal: (user: IUser) => void;
}

const UserItem: FC<Props> = ({user, handleOpenModal}) => {
    return (
        <section className={classes.item} onClick={() => handleOpenModal(user)}>
            <h2>{user.name}</h2>
            <div className={classes.info_holder}>
                <img src={phone} alt={"img"}/>
                <div>{user.phone}</div>
            </div>
            <div className={classes.info_holder}>
                <img src={mail} alt={"img"}/>
                <div>{user.email}</div>
            </div>
        </section>
    );
};

export default UserItem;