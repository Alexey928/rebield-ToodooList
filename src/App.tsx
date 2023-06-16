import React, {useState} from 'react';
import TooDooList from "./Components/TooDooList";
const styles = {
  too_doo_contayner:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  }
}

const v1 = ():string =>{
    return Math.random().toString()
}

export type filterValueType = "All"|"Active"|"Complited"

export type toodooListType  = {

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
    const [toodoLists, setToodoLists] = useState([{id:v1(), title:"list1", filter:"All"}]);


    const [tascks, setTascks] = useState<stateTascksType>({
        ["0.1123214142"]:[{id:v1(),title:"first tasck",isDone:false}]
    });

    
    
    return (
      <div style={styles.too_doo_contayner}>
        <TooDooList />
      </div>

  );
}

export default App;
