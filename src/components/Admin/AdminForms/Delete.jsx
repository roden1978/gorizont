import React from 'react'
import {NavLink} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const Delete = (props) =>{
    return(
        <div>
            Delete Form
            <div>
                <NavLink to = '/admin'>Back to admin menu</NavLink>
            </div>
        </div>
    )
};

export default compose(withAuthRedirect)(Delete)