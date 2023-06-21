import React ,{useState as State} from 'react';
import TooDooList from "./Components/TooDooList";
import {v1} from "uuid";
const styles = {
  too_dooLists_contayner:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
  }
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
    const Id1 = v1();
    const Id2 = v1();
    const Id3 = v1();
    const [toodoLists,setToodoLists ] = State<Array<toodooListType>>(
        [  {id:Id1, title:"list1", filter:"All"},
                    {id:Id2, title:"list2", filter:"All"},
                    {id:Id3, title:"list3", filter:"All"},
        ]);

    const [tasks, setTasks] = State<stateTascksType>({
            [Id1]:[
                {id:v1(),title:"first task1",isDone:false},
                {id:v1(),title:"first task2",isDone:false},
                {id:v1(),title:"first task3",isDone:false},
            ],
            [Id2]:[
                {id:v1(),title:"first task1",isDone:false},
                {id:v1(),title:"first task2",isDone:false},
                {id:v1(),title:"first task3",isDone:false},
            ],
            [Id3]:[
                {id:v1(),title:"first task1",isDone:false},
                {id:v1(),title:"first task2",isDone:false},
                {id:v1(),title:"first task3",isDone:false},
            ],
    });

    const changeTaskStatus = (tascID:string,listID:string)  => {
        setTasks({...tasks,[listID]:tasks[listID].map((t)=>t.id===tascID?{...t,isDone:!t.isDone}:{...t})})
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
    const addTodooList = (title:string)=>{
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
            <div style={styles.too_dooLists_contayner}>
                {toodoLists.map((tl)=><TooDooList  addTAsk={addTAsk}
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
