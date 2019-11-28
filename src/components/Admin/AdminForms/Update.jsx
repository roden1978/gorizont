import React from 'react'
import {NavLink} from "react-router-dom";

const Update = (props) =>{
    return(
        <div>
            Update Form
            <div>
                <NavLink to = '/admin'>Back to admin menu</NavLink>
            </div>
        </div>
    )
};

export default Update;