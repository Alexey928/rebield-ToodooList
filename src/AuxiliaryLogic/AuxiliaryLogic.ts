
import {filterValueType,taskType} from "../App";

export const getTasksForRender = (filter:filterValueType, tasks:Array<taskType>) => {
    switch (filter) {
        case "Active":
            return tasks.filter(t => !t.isDone);
        case "Completed":
            return tasks.filter(t => t.isDone);
        default:
            return tasks;
    }}

export const validateInputValue=(inputValue:string,errSeater:(err:boolean)=>void):boolean=>{
    if (inputValue.trim()) {
        errSeater(false);
        return true
    }else{
        errSeater(true);
        return false
    }
}


