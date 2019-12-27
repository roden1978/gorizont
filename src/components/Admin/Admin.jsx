import React from 'react'
import s from './Admin.module.css'
import {NavLink} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Admin = (props) => {
    return (
        <div>
            <div>Login</div>
            <div>
                Admin menu
            </div>
            <div className={s.div_bkg}>
                <ul>
                    <li><NavLink to='/admin/create' className={s.tc}>Create</NavLink></li>
                    <li><NavLink to='/admin/update' className={s.tc}>Update</NavLink></li>
                    <li><NavLink to='/admin/delete' className={s.tc}>Delete</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default compose(withAuthRedirect)(Admin)