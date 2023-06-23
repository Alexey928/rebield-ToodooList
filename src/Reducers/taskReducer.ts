import {stateTasksType} from "../App";
import {AddTodolistActionType, RemoveTodolistActionType} from "../ActionCreators/toodoListsActionCreators";
import {
    AddTaskActionType,
    ChangeTaskStatusActionType,
    ChangeTaskTitleActionType,
    RemoveTaskActionType
} from "../ActionCreators/taskActionCreators";
import {v1} from "uuid";


type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType


export const taskReducer = (state:stateTasksType={}, action:ActionsType)=>{
switch (action.type){
    case "REMOVE-TASK" :
        return {...state, [action.listId]: state[action.listId].filter(t => t.id !== action.taskId)}
    case  "CHANGE-TASK-STATUS":
        return {...state,[action.listId]:state[action.listId].
                map((t)=>t.id===action.taskId?{...t,isDone:!t.isDone}:t)}
    case "ADD-TASK":
        return {...state,[action.listId]:[...state[action.listId],{id:v1(),tittle:action.title,isDone:false}]}
    case "CHANGE-TASK-TITLE":
        

}

}