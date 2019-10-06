import { ADD_ITEM, TOGGLE_ITEM, EDIT_ITEM, DELETE_ITEM } from './actionTypes';

const addItem = content => ({
    type: ADD_ITEM,
    content
})

const toggleItem = id => ({
    type: TOGGLE_ITEM,
    id
})

const editItem = id => ({
    type: EDIT_ITEM,
    id
})

const deleteItem = id => ({
    type: DELETE_ITEM,
    id
})

export { addItem, toggleItem, editItem, deleteItem };