import React, {useReducer} from 'react';
import AddItemForm from "./Components/AddItemForm";
import TooDooList from "./Components/TooDooList";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
} from "./ActionCreators/toodoListsActionCreators";
import { todolistsReducer} from "./Reducers/TodoListReduser"
import {taskReducer} from "./Reducers/taskReducer"
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, } from "./ActionCreators/taskActionCreators";
import {filterValueType, stateTasksType} from "./App";

const styles = {
    too_dooLists_container:{
        display:"flex",
        justifyContent:"space-around",

    },
}



const AppWidthReducers = () => {

    const [todoLists, dispatchToTodoLists] = useReducer(todolistsReducer, [])
    const [tasks, dispatchToTasks] = useReducer(taskReducer, {})

    const changeTaskStatus = (taskID:string,listID:string)  => {
        dispatchToTasks(changeTaskStatusAC(taskID,listID));
    }
    const changeTaskTitle = (listID:string, taskID:string, newTitle:string)=>{
        dispatchToTasks(changeTaskTitleAC(listID,taskID,newTitle));
    }
    const changeTodoListTitle = (listID:string,newTitle:string)=>{
       dispatchToTodoLists(changeTodolistTitleAC(listID, newTitle));
    }
    const removeTask = (taskID:string,listID:string) => {
        dispatchToTasks(removeTaskAC(taskID,listID));
    }
    const setTodoListFilter = (listID:string,filter:filterValueType)=>{
            dispatchToTodoLists(changeTodolistFilterAC(listID,filter));
    }
    const addTAsk = (listID:string,title:string)=>{
        dispatchToTasks(addTaskAC(title,listID))
    }
    const addTodoList = (title:string)=>{
        const action = addTodolistAC(title)
        dispatchToTodoLists(action)
        dispatchToTasks(action)
    }
    const removeTodoList = (listID:string)=>{
        dispatchToTodoLists(removeTodolistAC(listID));
        dispatchToTasks(removeTodolistAC(listID));
    }

    return (
        <div>
            <AddItemForm  addItem={addTodoList}/>
            <div style={{...styles.too_dooLists_container,flexWrap:"wrap"}}>
                {todoLists.map((tl)=><TooDooList  changeTaskTitle={changeTaskTitle}
                                                  changeToodoListTitle={changeTodoListTitle}
                                                  removeTodooList={removeTodoList}
                                                  addTAsk={addTAsk}
                                                  setToodoListFilter={setTodoListFilter}
                                                  removeTask={removeTask}
                                                  changeTaskStatus={changeTaskStatus}
                                                  filter = {tl.filter}
                                                  tasks={tasks[tl.id]}
                                                  key={tl.id}
                                                  listID={tl.id}
                                                  title={tl.title}/>)
                }
            </div>
        </div>
    );
};

export default AppWidthReducers;