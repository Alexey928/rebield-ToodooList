import {stateTascksType,toodooListType} from "../App";

export const getTasksForRender = (list:toodooListType,tasks:stateTascksType) => {
    switch (list.filter) {
        case "Active":
            return tasks[list.id].filter(t => !t.isDone);
        case "Complited":
            return tasks[list.id].filter(t => t.isDone);
        default:
            return tasks[list.id];
    }}


