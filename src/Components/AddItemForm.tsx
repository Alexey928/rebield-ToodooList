import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {validateInputValue as validator} from "../AuxiliaryLogic/AuxiliaryLogic"

type AddItemFormPropsType ={
    addItem:(title:string)=>void
}

const AddItemForm:React.FC<AddItemFormPropsType> = ({addItem}) => {
    const [inputValue,setInputValue]=useState<string>("")
    const [error,setError] = useState<boolean>(false)

    return (
        <div>
            <input type="text"
                   value={inputValue}
                   onChange={(e:ChangeEvent<HTMLInputElement>)=> {
                       setInputValue(e.currentTarget.value);
                       setError(false);
                   }}
                   onKeyDown={(e:KeyboardEvent<HTMLInputElement>)=> {
                       e.key==="Enter" &&
                       validator(inputValue,setError) &&
                       addItem(inputValue);
                       e.key==="Enter"&&setInputValue("");
                   }}
            />
            <button onClick={()=>{validator(inputValue,setError) && addItem(inputValue);setInputValue("")}}>Add</button>
            {error && <span>ER</span>}
        </div>
    );
};
export default AddItemForm;