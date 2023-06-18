import React ,{useState as State} from 'react';
import TooDooList from "./Components/TooDooList";
import {v1} from "uuid";
const styles = {
  too_doo_contayner:{
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
    const [toodoLists, setToodoLists] = State<Array<toodooListType>>(
        [  {id:Id1, title:"list1", filter:"All"},
                    {id:Id2, title:"list2", filter:"Complited"},
                    {id:Id3, title:"list3", filter:"Active"},
        ]);

    const [tasks, setTascks] = State<stateTascksType>({
            [Id1]:[
                {id:v1(),title:"first task1",isDone:false},
                {id:v1(),title:"first task2",isDone:true},
                {id:v1(),title:"first task3",isDone:false},
            ],
            [Id2]:[
                {id:v1(),title:"first task1",isDone:true},
                {id:v1(),title:"first task2",isDone:true},
                {id:v1(),title:"first task3",isDone:false},
            ],
            [Id3]:[
                {id:v1(),title:"first task1",isDone:true},
                {id:v1(),title:"first task2",isDone:false},
                {id:v1(),title:"first task3",isDone:false},
            ],
    });


    return (
        <div>
            <div style={styles.too_doo_contayner}>
                {toodoLists.map((tl)=><TooDooList filter = {tl.filter} tasks={tasks[tl.id]} key={tl.id}/>)}
            </div>
        </div>
    );
}

export default App;
