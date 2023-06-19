import React, {ChangeEvent, useState} from 'react';


type EditableSpanPropsType = {
    id:string
    titlle: string
    onChange: (newValue: string,id:string) => void
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
        props.onChange(title,props.id);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input  value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.titlle}</span>
}
