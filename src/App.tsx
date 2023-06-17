import React, {useState} from 'react';
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

type tasckType = {
    id:string,
    title:string,
    isDone:boolean,
}

type stateTascksType = {
    [key:string]:Array<tasckType>
}


function App() {
    const Id1 = v1();
    const Id2 = v1();
    const Id3 = v1();
    const [toodoLists, setToodoLists] = useState(
        [  {id:Id1, title:"list1", filter:"All"},
                    {id:Id2, title:"list2", filter:"Complited"},
                    {id:Id3, title:"list3", filter:"Active"},
        ]);


    const [tasks, setTascks] = useState<stateTascksType>({
            [Id1]:[{id:v1(),title:"first tasck",isDone:false}],
            [Id2]:[{id:v1(),title:"first tasck",isDone:true}],
            [Id3]:[{id:v1(),title:"first tasck",isDone:false}],
    });


    const fileterForRenderedTaskc = (toodoList:toodooListType) => {
        switch (toodoList.filter) {
            case "Active":
                return tasks[toodoList.id].filter(t => !t.isDone);
            case "Complited":
                return tasks[toodoList.id].filter(t => t.isDone);
            default:
                return tasks[toodoList.id];
       }}

    return (
        <div>
            <div style={styles.too_doo_contayner}>
                to
            </div>
        </div>


  );
}

export default App;
