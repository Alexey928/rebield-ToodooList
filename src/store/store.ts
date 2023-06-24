import {combineReducers, createStore} from "redux";
import {taskReducer} from "../Reducers/taskReducer";
import {todolistsReducer} from "../Reducers/TodoListReduser";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: taskReducer,
    todoLists: todolistsReducer
})
console.log(typeof rootReducer)// function
//  создаём store
export const store = createStore(rootReducer)

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

//  чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
