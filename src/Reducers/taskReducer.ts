import {stateTasksType} from "../App";
import {AddTodolistActionType, RemoveTodolistActionType} from "../ActionCreators/toodoListsActionCreators";
import {
    AddTaskActionType,
    ChangeTaskStatusActionType,
    ChangeTaskTitleActionType,
    RemoveTaskActionType
} from "../ActionCreators/taskActionCreators";


type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType


export const taskReducer = (state:stateTasksType, action:ActionsType)=>{

}