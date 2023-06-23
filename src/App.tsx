import React ,{useState as State} from 'react';
import TooDooList from "./Components/TooDooList";
import {v1} from "uuid";
import AddItemForm from "./Components/AddItemForm";
const styles = {
  too_dooLists_contayner:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
  },
}

export type filterValueType = "All" | "Active" | "Complited";

export type toodooListType  = {
     id:string,
     title:string,
     filter:filterValueType
}
export type tasckType = {
    id:string,
    title:string,
    isDone:boolean,
}
export type stateTascksType = {
    [key:string]:Array<tasckType>
}

function App() {

    const [toodoLists,setToodoLists ] = State<Array<toodooListType>>([]);
    const [tasks, setTasks] = State<stateTascksType>({});

    const changeTaskStatus = (tascID:string,listID:string)  => {

        setTasks({...tasks,[listID]:tasks[listID].map((t)=>t.id===tascID?{...t,isDone:!t.isDone}:{...t})});
    }
    const changeTaskTitle = (listID:string, taskID:string, newTitle:string)=>{
        setTasks({...tasks,[listID]:tasks[listID].map((t)=>t.id===taskID?{...t,title:newTitle}:t)});
    }
    const changeToodoListTitle = (listID:string,newTitle:string)=>{
        debugger
        setToodoLists(toodoLists.map((l)=>l.id===listID?{...l,title:newTitle}:l));
    }

    const removeTask = (tascID:string,listID:string) => {
        setTasks({...tasks,[listID]:tasks[listID].filter((t)=>t.id!==tascID)});
    }

    const setToodoListFilter = (listID:string,filter:filterValueType)=>{
        setToodoLists(toodoLists.map((tl)=>tl.id===listID?{...tl,filter}:tl))
    }
    const addTAsk = (listID:string,title:string)=>{
        setTasks({...tasks,[listID]:[{id: v1(), title: title, isDone: false},...tasks[listID]]});
    }

    const addTodooList = (ID:string,title:string)=>{
        const forigenKeyID = v1();
        setToodoLists([...toodoLists,{id:forigenKeyID,title:title,filter:"All"}]);
        setTasks({...tasks,[forigenKeyID]:[]});
    }

    const removeTodooList = (listID:string)=>{
        setToodoLists(toodoLists.filter(list=>list.id!==listID))
       delete tasks[listID]
    }



    return (
        <div>
            <AddItemForm ID={""} addItem={addTodooList}/>
            <div style={styles.too_dooLists_contayner}>
                {toodoLists.map((tl)=><TooDooList  changeTaskTitle={changeTaskTitle}
                                                                changeToodoListTitle={changeToodoListTitle}
                                                                removeTodooList={removeTodooList}
                                                                addTAsk={addTAsk}
                                                                setToodoListFilter={setToodoListFilter}
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
