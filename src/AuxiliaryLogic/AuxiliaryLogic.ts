
import {filterValueType,tasckType} from "../App";

export const getTasksForRender = (filter:filterValueType, tasks:Array<tasckType>) => {
    switch (filter) {
        case "Active":
            return tasks.filter(t => !t.isDone);
        case "Complited":
            return tasks.filter(t => t.isDone);
        default:
            return tasks;
    }}

export const validateInputValue=(inputValue:string,errSeater:(err:boolean)=>void)=>{
    if (inputValue.trim()) {
        errSeater(false);
        return true
    }else{
        errSeater(true);
        return false
    }
}


