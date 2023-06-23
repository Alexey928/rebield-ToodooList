import {todoListType} from "../App";
import {
    AddTodolistActionType,
    ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType,
    RemoveTodolistActionType
} from "../ActionCreators/toodoListsActionCreators";

type ActionsType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType;


export const todoLstReduser = (state:Array<todoListType>,action:ActionsType)=>{

}