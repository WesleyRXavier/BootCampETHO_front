import { Action } from './../store/store.types';

export type User = {
    email:string,
    password:string,
}


export type userState = {

    data: User | null
}

export type UserAction = Action<User>
    
