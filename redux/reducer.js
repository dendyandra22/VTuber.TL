// import {SELECT_STREAM} from './actionTypes';

const initialState = {
    title : "XXX",    
    uri: 'https://i.ytimg.com/vi/ky3QozZIFfU/maxresdefault.jpg'
}

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_STREAM': 
            return {
                ...state, 
                uri: action.payload.uri,
                title: action.payload.title
            } 
        
    }
    return (state);

}

// export default Reducer;