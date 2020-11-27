const INITIAL_STATE = {
    user:[
        {
    email: "",
    userName: ""
    }
]
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SETDATA':
        return({
            ...state,
            user:[...state.user,action.user]
        })
    }
    return state;
}