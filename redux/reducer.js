// import {SELECT_STREAM} from './actionTypes';

const initialState = {
    title : "XXX",    
    uri: 'https://i.ytimg.com/vi/ky3QozZIFfU/maxresdefault.jpg',
    id: ''
}

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_STREAM': 
            return {
                ...state, 
                uri: action.payload.uri,
                title: action.payload.title
            };
        case 'USER_LOGIN' :
            return{
                ...state,
                id: action.payload.id
            }
        
    }
    return (state);

}

// export default Reducer;