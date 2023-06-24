import React from 'react';
import TooDooList from "./Components/TooDooList";
import AddItemForm from "./Components/AddItemForm";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
} from "./ActionCreators/toodoListsActionCreators";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./ActionCreators/taskActionCreators";
import {AppRootStateType} from "./store/store";
import {filterValueType, stateTasksType, todoListType} from "./App"
import {useDispatch, useSelector} from 'react-redux';
import logo from "./reduxLogo.svg";

const styles = {
    too_dooLists_container:
        {
            display:"flex",
            justifyContent:"space-around",

        },
    header_span:
        {
            marginBottom: 0,
            height: 1,
            display: "inline-block",
            paddingBottom: 0,
            backgroundColor: "#1acbf5",
        },
}

const AppWidthRedux = () => {

    const tasks = useSelector<AppRootStateType, stateTasksType>(state => state.tasks);
    const todoLists =useSelector<AppRootStateType,Array<todoListType>>(state => state.todoLists);// или так -->
    //const {tasks,todoLists} = useSelector<AppRootStateType,AppRootStateType>(state => state);
    const dispatch= useDispatch();

    const changeTaskStatus = (taskID:string,listID:string)  => {
        dispatch(changeTaskStatusAC(taskID,listID));
    };
    const changeTaskTitle = (listID:string, taskID:string, newTitle:string)=>{
        dispatch(changeTaskTitleAC(listID,taskID,newTitle));
    }
    const changeTodoListTitle = (listID:string,newTitle:string)=>{
        dispatch(changeTodolistTitleAC(listID, newTitle));
    }
    const removeTask = (taskID:string,listID:string) => {
        dispatch(removeTaskAC(taskID,listID));
    }
    const setTodoListFilter = (listID:string,filter:filterValueType)=>{
        dispatch(changeTodolistFilterAC(listID,filter));
    }
    const addTAsk = (listID:string,title:string)=>{
        dispatch(addTaskAC(title,listID))
    }
    const addTodoList = (title:string)=>{
        const action = addTodolistAC(title)
        dispatch(action)

    }
    const removeTodoList = (listID:string)=>{
        dispatch(removeTodolistAC(listID));
    }



    return (
        <div>
            <img alt={"img"} src={logo} style={{width:50}}/><span style={styles.header_span}>State on Redux</span>
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

export default AppWidthRedux;