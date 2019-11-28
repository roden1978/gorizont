import React from 'react'
import {NavLink} from "react-router-dom";

const Create = (props) =>{
    return(
        <div>
            Create Form
            <div>
                <NavLink to = '/admin'>Back to admin menu</NavLink>
            </div>
        </div>
    )
};

export default Create;