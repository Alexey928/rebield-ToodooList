import React, {FC} from 'react';
import Tasck from "./Tasck";
import {stateTascksType} from "../App";

type tooDoListPropsType = {
    tascs:stateTascksType,

}

const TooDooList = () => {
    return (
        <div>
            <h1>TooDooList</h1>
            <Tasck/>
        </div>
    );
};

export default TooDooList;