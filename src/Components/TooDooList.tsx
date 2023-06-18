import React  from 'react';
import Task from "./Task";
import {tasckType} from "../App";
import {getTasksForRender as tasksFilter} from "../AuxiliaryLogic/AuxiliaryLogic"
import FilteredButtonsInterface from "./FilteredButonsInterfase";

type tooDoListPropsType = {
    tasks:Array<tasckType>,
    filter:string
}

const TooDooList:React.FC<tooDoListPropsType> = ({tasks,filter}) => {

    return (
        <div>
            <h1>TooDooList</h1>
            <Task/>
            <FilteredButtonsInterface/>
        </div>
    );
};

export default TooDooList;