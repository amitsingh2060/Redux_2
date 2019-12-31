const ADD_COMMENT = "ADD_COMMENT"


const addComment = (e) => {
    console.log(e)
    return{
      type:ADD_COMMENT,
            name:e.name,
            email:e.email,
            phone:e.phone,
            sale:e.sale,
            id:e.id
    }
    
}

export {addComment}