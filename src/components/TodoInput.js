import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../redux/actions'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleInput = e => {
        this.setState({value: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e, this.state.value)}>
                <Grid container spacing={3} justify='center' alignItems='center'>
                    <Grid item md={3}>
                        <TextField 
                            id='outlined-name' 
                            label='Enter ToDo Item' 
                            margin='normal' 
                            variant='outlined' 
                            value={this.state.value} 
                            onChange={this.handleInput} 
                        />
                    </Grid>
                    <Grid item md={1}>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            size='large' 
                            style={{marginTop: '5px'}} 
                            type='submit'
                        >
                            Save
                            <SaveIcon style={{marginLeft: '8px'}} />
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        handleAddItem: (content) => {
            dispatch(addItem(content))
        }
    })
}

export default connect(null, mapDispatchToProps)(TodoInput);