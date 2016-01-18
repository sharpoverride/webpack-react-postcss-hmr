import * as React from 'react';
import styleable from 'react-styleable'

import css from './demo.css'

@styleable(css)
export default class Demo extends React.Component {
    static displayName = 'Demo';

    render() {
        return (<div className={this.props.css.item}>
            <h1>Hello Mihai!</h1>
        </div>);
    }
}
