import React from 'react';
import {EditableSpan} from "./EditableSpan";


type TasksPropsType = {
    changeTascStatus:()=>void
    remuveTask:()=>void
    changeTaskTitle:(taskID:string,title:string)=>void
    id:string
    tittle:string,
    isDone:boolean

}
const Task:React.FC<TasksPropsType>= ({id,tittle,isDone,changeTascStatus,remuveTask,changeTaskTitle}) => {

    return (
        <div>
            <input onChange={changeTascStatus} type="checkbox" checked={isDone}/>
            <EditableSpan id={id} titlle={tittle} onChange={changeTaskTitle}/>
            <button onClick={remuveTask} style={{marginLeft:10}}>del</button>
        </div>
    );
};

export default Task;