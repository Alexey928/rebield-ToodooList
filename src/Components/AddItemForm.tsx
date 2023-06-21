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
                   onChange={(e:ChangeEvent<HTMLInputElement>)=> {
                       setInputValue(e.currentTarget.value);
                       setError(false);
                   }}
                   onKeyPress={(e:any)=> {
                       e.key==="Enter" &&
                       validator(inputValue,setError) &&
                       addItem(ID,inputValue);
                       e.key==="Enter"&&setInputValue("");
                   }}
            />
            <button onClick={()=>{validator(inputValue,setError) && addItem(ID,inputValue);setInputValue("")}}>Add</button>
            {error&&<span>ER</span>}
        </div>
    );
};
export default AddItemForm;