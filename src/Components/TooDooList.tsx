import React  from 'react';
import Task from "./Task";
import {filterValueType, tasckType} from "../App";
import {getTasksForRender as tasksFilter} from "../AuxiliaryLogic/AuxiliaryLogic"
import FilteredButtonsInterface from "./FilteredButonsInterfase";
import AddItemForm from "./AddItemForm";

type tooDoListPropsType = {
    title:string
    listID:string
    tasks:Array<tasckType>,
    filter:filterValueType,
    changeTaskStatus:(tascID:string, listID:string)=>void,
    removeTask:(ascID:string, listID:string)=>void,
    setToodoListFilter:(listID:string,filter:filterValueType)=>void,
    addTAsk:(listID:string,title:string)=>void
}

const TooDooList:React.FC<tooDoListPropsType> = ({
                                                     title,
                                                     listID,
                                                     tasks,
                                                     filter,
                                                     changeTaskStatus ,
                                                     removeTask,
                                                     setToodoListFilter,
                                                     addTAsk
                                                 }) => {

    return (
        <div >
            <h1>TooDooList</h1>
            <AddItemForm ID={listID} addItem={addTAsk}/>
            <div>
                {tasksFilter(filter,tasks).map((t) =>
                    (<Task remuveTask={()=>removeTask(t.id,listID)}
                           changeTascStatus={()=>changeTaskStatus(t.id,listID)}
                           isDone={t.isDone}
                           id={t.id}
                           key={t.id}
                           tittle={t.title}
                    />))
                }
            </div>

            <FilteredButtonsInterface listID={listID} setToodoListFilter={setToodoListFilter}/>
        </div>
    );
};

export default TooDooList;