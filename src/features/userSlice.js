import { createSlice } from '@reduxjs/toolkit'

//const [userName , setUsername] = useState(null)
//const [userEmail , setUserEmail] = useState(null)

const initialState = {
    userName : null,
    userEmail : null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName  //setUsername and give in the action.payload
            state.userEmail = action.payload.userEmail
        },
        setUserLogOutState: state => {
            state.userName = null
            state.userEmail = null
        }
    }
});

export const { setActiveUser ,setUserLogOutState } = userSlice.actions

export const selectUsername = state => state.user.userName     //grab the user username from that specific state
export const selectUserEmail = state => state.user.userEmail

export default userSlice.reducer