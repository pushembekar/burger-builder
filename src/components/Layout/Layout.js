import React from 'react';

import Auxilary from '../../hoc/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar'

import classes from './Layout.module.css';

const layout = (props) => (
    <Auxilary>
        <Toolbar />
        <main className={ classes.Content }>
            {props.children}
        </main>
    </Auxilary>
    
);

export default layout;