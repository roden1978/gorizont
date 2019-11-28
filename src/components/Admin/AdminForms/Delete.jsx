import React from 'react'
import {NavLink} from "react-router-dom";

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

export default Delete;