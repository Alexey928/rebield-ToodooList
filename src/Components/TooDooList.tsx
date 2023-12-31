import React  from 'react';
import Task from "./Task";
import {filterValueType, taskType} from "../App";
import {getTasksForRender as tasksFilter} from "../AuxiliaryLogic/AuxiliaryLogic"
import FilteredButtonsInterface from "./FilteredButonsInterfase";
import AddItemForm from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

type tooDoListPropsType = {
    title:string
    listID:string
    tasks:Array<taskType>,
    filter:filterValueType,
    changeTaskStatus:(tascID:string, listID:string)=>void,
    removeTask:(ascID:string, listID:string)=>void,
    setToodoListFilter:(listID:string,filter:filterValueType)=>void,
    addTAsk:(listID:string,title:string)=>void
    removeTodooList:(listID:string)=>void
    changeToodoListTitle:(listID:string,newTitle:string)=>void
    changeTaskTitle:(listID:string, taskID:string, newTitle:string)=>void
}

const TooDooList:React.FC<tooDoListPropsType> = ({
                                                     title,
                                                     listID,
                                                     tasks,
                                                     filter,
                                                     changeTaskStatus ,
                                                     removeTask,
                                                     setToodoListFilter,
                                                     addTAsk,
                                                     removeTodooList,
                                                     changeToodoListTitle,
                                                     changeTaskTitle,
                                                 }) => {

    return (
        <div style={{margin:5}}>
            <EditableSpan id={listID} titlle={title} onChange={changeToodoListTitle}/> <button onClick={()=>removeTodooList(listID)} >X</button>
            <AddItemForm  addItem={(title)=>addTAsk(listID,title)}/>
            <ol>
                {tasksFilter(filter,tasks).map((t) =>
                    (<Task changeTaskTitle={(taskID,title)=>changeTaskTitle(listID,taskID,title)}
                           remuveTask={()=>removeTask(t.id,listID)}
                           changeTascStatus={()=>changeTaskStatus(t.id,listID)}
                           isDone={t.isDone}
                           id={t.id}
                           key={t.id}
                           tittle={t.title}
                    />))
                }
            </ol>
            <FilteredButtonsInterface listID={listID} setToodoListFilter={setToodoListFilter}/>
        </div>
    );
};

export default TooDooList;