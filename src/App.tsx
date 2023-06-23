import React ,{useState as State} from 'react';
import TooDooList from "./Components/TooDooList";
import {v1} from "uuid";
import AddItemForm from "./Components/AddItemForm";
const styles = {
  too_dooLists_container:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
  },
}

export type filterValueType = "All" | "Active" | "Completed";

export type todoListType = {
     id:string,
     title:string,
     filter:filterValueType
}
export type taskType = {
    id:string,
    title:string,
    isDone:boolean,
}
export type stateTasksType = {
    [key:string]:Array<taskType>
}

function App() {

    const [todoLists,setTodoLists ] = State<Array<todoListType>>([]);
    const [tasks, setTasks] = State<stateTasksType>({});

    const changeTaskStatus = (taskID:string,listID:string)  => {
        setTasks({...tasks,[listID]:tasks[listID].map((t)=>t.id===taskID?{...t,isDone:!t.isDone}:{...t})});
    }

    const changeTaskTitle = (listID:string, taskID:string, newTitle:string)=>{
        setTasks({...tasks,[listID]:tasks[listID].map((t)=>t.id===taskID?{...t,title:newTitle}:t)});
    }

    const changeTodoListTitle = (listID:string,newTitle:string)=>{
        setTodoLists(todoLists.map((l)=>l.id===listID?{...l,title:newTitle}:l));
    }

    const removeTask = (taskID:string,listID:string) => {
        setTasks({...tasks,[listID]:tasks[listID].filter((t)=>t.id!==taskID)});
    }

    const setTodoListFilter = (listID:string,filter:filterValueType)=>{
        setTodoLists(todoLists.map((tl)=>tl.id===listID?{...tl,filter}:tl))
    }
    const addTAsk = (listID:string,title:string)=>{
        setTasks({...tasks,[listID]:[{id: v1(), title: title, isDone: false},...tasks[listID]]});
    }

    const addTodoList = (ID:string,title:string)=>{
        const forigenKeyID = v1();
        setTodoLists([...todoLists,{id:forigenKeyID,title:title,filter:"All"}]);
        setTasks({...tasks,[forigenKeyID]:[]});
    }

    const removeTodoList = (listID:string)=>{
        setTodoLists(todoLists.filter(list=>list.id!==listID))
       delete tasks[listID]
    }

    return (
        <div>
            <AddItemForm ID={""} addItem={addTodoList}/>
            <div style={styles.too_dooLists_container}>
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
}

export default App;
