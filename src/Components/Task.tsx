import React from 'react';


type TasksPropsType = {
    changeTascStatus:()=>void
    remuveTask:()=>void
    id:string
    tittle:string,
    isDone:boolean
}
const Task:React.FC<TasksPropsType>= ({tittle,isDone,changeTascStatus,remuveTask}) => {

    return (
        <div>
            <input onChange={changeTascStatus} type="checkbox" checked={isDone}/>
            <span>"{tittle}</span>
            <button onClick={remuveTask} style={{marginLeft:10}}>del</button>
        </div>
    );
};

export default Task;