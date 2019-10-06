import React from 'react';

import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TodoListTab from './TodoListTab';

class TodoNav extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }

    handleChange = (e,val) => {
        this.setState({value: val});
    }

    render() {
        return (
            <Grid container justify='center'>
                <Grid item md={5} xs={12}>
                    <AppBar position='static' color='default'>
                        <Tabs 
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor='primary'
                            textColor='primary'
                            variant='fullWidth'
                        >
                            <Tab label='All' />
                            <Tab label='Pending' />
                            <Tab label='Finished' />
                        </Tabs>
                    </AppBar>
                    <TodoListTab value={this.state.value} index='0' filter='All' />
                    <TodoListTab value={this.state.value} index='1' filter='Pending' />
                    <TodoListTab value={this.state.value} index='2' filter='Finished'/>
                </Grid>
            </Grid>
        )
    }
}

export default connect(null, null)(TodoNav);