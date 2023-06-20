import React, {ChangeEvent, useState} from 'react';
import {validateInputValue as validator} from "../AuxiliaryLogic/AuxiliaryLogic"

type AddItemFormPropsType ={
    ID:string
    addItem:(titile:string,id:string)=>void
}

const AddItemForm:React.FC<AddItemFormPropsType> = ({addItem,ID}) => {
    const [inputValue,setInputValue]=useState<string>("")
    const [error,setError] = useState<boolean>(false)

    return (
        <div>
            <input type="text"
                   value={inputValue}
                   onChange={(e:ChangeEvent<HTMLInputElement>)=> setInputValue(e.currentTarget.value)}
                   autoFocus
            />
            <button
                onClick={()=>validator(inputValue,setError) && addItem(inputValue,ID)}
                onKeyPress={(e:any)=> e.key==="Enter" && validator(inputValue,setError) && addItem(inputValue,ID)}>
                Add</button>
        </div>
    );
};

export default AddItemForm;