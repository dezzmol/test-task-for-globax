import React, {FC} from 'react';
import {IUser} from "../types";
import classes from "./UserDetailedInfo.module.css"
const close_button_img =  require("../assets/close_button.png");

interface Props {
    user: IUser | null;
    handleCloseModal: () => void;
}

const UserDetailInfo: FC<Props> = ({user, handleCloseModal}) => {

    if (!user) {
        return (
            <div></div>
        )
    }

    return (
        <section className={classes.modal} onClick={() => handleCloseModal()}>
            <section className={classes.modal_content} onClick={(e) => e.stopPropagation()}>
                <div className={classes.name_holder}>
                    <h2>{user.name}</h2>
                    <button onClick={() => handleCloseModal()}>
                        <img src={close_button_img} alt={"img"}/>
                    </button>
                </div>
                <div className={classes.info_holder}>
                    <p>Телефон:</p>
                    <p>{user.phone}</p>
                    <p>Почта:</p>
                    <p>{user.email}</p>
                    <p>Дата приема:</p>
                    <p>{user.hire_date}</p>
                    <p>Должность:</p>
                    <p>{user.position_name}</p>
                    <p>Подразделение:</p>
                    <p>{user.department}</p>
                </div>
                <div className={classes.additional_info}>
                    Дополнительная информация:
                    <div>
                        Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
                    </div>
                </div>
            </section>
        </section>
    );
};

export default UserDetailInfo;