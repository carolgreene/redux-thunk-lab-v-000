const initialState = {
  pictures: [],
  loading: false
}

const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CATS':
      return {...state, loading: true }
            
    
    case 'FETCH_CATS':
      return {...state, loading: false, pictures: action.payload}
        

    default:
      return state;
  }
}

export default catsReducer;