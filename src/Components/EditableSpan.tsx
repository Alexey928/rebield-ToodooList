import React, {KeyboardEvent,ChangeEvent, useState} from 'react';


type EditableSpanPropsType = {
    id:string
    titlle: string
    onChange: (id:string,newValue:string) => void
}

export function EditableSpan(props: EditableSpanPropsType){

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.titlle);


    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.titlle);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(props.id,title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode ?
        <input  value={title}
                  onChange={changeTitle}
                  autoFocus onBlur={activateViewMode}
                  onKeyDown={(e:KeyboardEvent<HTMLInputElement>)=>e.key==="Enter"&&activateViewMode()}
        /> :
        <span onDoubleClick={activateEditMode}>{props.titlle}</span>
}
