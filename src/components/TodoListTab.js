import React from 'react';

import { connect } from 'react-redux';

import { toggleItem, deleteItem } from '../redux/actions'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

const TodoListTab = props => {
    let temp;

    if(props.filter === 'All') {
        temp = props.savedItems;
    }
    else if(props.filter === 'Pending') {
        temp = props.savedItems.filter(ele => !ele.isChecked);
    }
    else if(props.filter === 'Finished') {
        temp = props.savedItems.filter(ele => ele.isChecked);
    }
    
    return(
        <List role='tabpanel' hidden={props.value !== Number(props.index)}>
            {temp.map((ele, i) => {
                let decor;
                
                if(ele.isChecked) {
                    decor = { textDecoration: 'line-through' }
                }
                else decor = { textDecoration: 'none' }
                
                return (
                    <ListItem 
                        dense 
                        button 
                        onChange={(e) => props.toggleFunction(e,i)} 
                        key={ele.item}
                    >
                        <ListItemIcon>
                            <Checkbox edge='start' checked={ele.isChecked} />
                        </ListItemIcon>
                        <ListItemText primary={ele.item} style={decor} />
                        <ListItemSecondaryAction>        
                            <IconButton 
                                edge='end' 
                                onClick={(e) => {props.deleteFunction(e,i)}}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })}
        </List>
    )
}

const mapStateToProps = state => {
    return {
        savedItems: state.savedItems
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        toggleFunction: (e, id) => {
            dispatch(toggleItem(id))
        },
        deleteFunction: (e, id) => {
            dispatch(deleteItem(id))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListTab);