import React from 'react';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import TodoInput from './components/TodoInput';
import TodoNav from './components/TodoNav';

const App = () => {
    return (
        <Container>
            <TodoInput />
            <Divider style={{margin: '30px 0px'}} />
            <TodoNav />
        </Container>
    )
}

export default App;