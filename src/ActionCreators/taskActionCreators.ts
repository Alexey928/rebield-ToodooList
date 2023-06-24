

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    listId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    listId: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    listId: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    title: string
    listId: string
}


export const removeTaskAC = (taskId: string, listId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, listId}
}
export const addTaskAC = (title: string, listId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, listId}
}
export const changeTaskStatusAC = (taskId: string, listId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', taskId, listId}
}
export const changeTaskTitleAC = (taskId: string, title: string, listId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', taskId, title, listId}
}