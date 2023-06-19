import React from 'react';
import {filterValueType} from "../App";

type FilteredButtonsType = {
    listID:string
    setToodoListFilter:(listID:string,filter:filterValueType)=>void
}


const FilteredButtonsInterface:React.FC<FilteredButtonsType> = ({setToodoListFilter,listID}) => {
    return (
        <div>
            <button onClick={()=>setToodoListFilter(listID,"All")}>All</button>
            <button onClick={()=>setToodoListFilter(listID,"Active")}>Active</button>
            <button onClick={()=>setToodoListFilter(listID,"Complited")}>Completed</button>
        </div>
    );
};

export default FilteredButtonsInterface;