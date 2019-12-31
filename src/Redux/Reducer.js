const ADD_COMMENT = "ADD_COMMENT"
const DELETE_DATA = "DELETE_DATA"

const initState  = {
    comments:[]
}
const addingComment = (state = initState, action) => {
    switch(action.type){
        case ADD_COMMENT:
            let newComment = {
                name:action.name,
                email:action.email,
                phone:action.phone,
                sale:action.sale,
                id:action.id
            }
     
        return{
            ...state,
            // comments:action.comments
            comments: [...state.comments, newComment]
        }

        case DELETE_DATA:
         return state.filter((each)=>each.id !== action.id);

        default:
            return state
    }
}

export default addingComment