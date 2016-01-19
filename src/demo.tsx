import * as React from 'react';
import * as css from './demo.css';

const style = css;
export default class Demo extends React.Component<any, any> {
    static displayName = 'Demo';

    render() { 
        return (<div className={style.item}>
            <h1>Hello, Mihai!</h1>
            <p>Some content</p>
        </div>);
    }
}
