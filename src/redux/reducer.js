import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from './actionTypes';

const initState = {
    savedItems: [],
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            return { savedItems: [...state.savedItems, { item: action.content, isChecked: false }] }
        }
        case TOGGLE_ITEM: {
            let temp = state.savedItems.map((ele, index) => {
                if(index === action.id) {
                    return { ...ele, isChecked: !ele.isChecked }
                }
                else return ele;
            })
            return { savedItems: temp, editing: '' }
        }
        case DELETE_ITEM: {
            let temp = state.savedItems.filter((ele, index) => index !== action.id);
            return { savedItems: temp, editing: '' }
        }
        default: return state;
    }
}

export default todoReducer;