import { userState, UserAction } from './user.types';



const login = (state:userState, action:UserAction)=>{

    state.data = action.payload
}

const reducers = {login}

export default reducers