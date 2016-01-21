import * as React from 'react';
import styleable from 'react-styleable'

import css from './demo.css'

@styleable(css)
export default class Demo extends React.Component {
    static displayName = 'Demo';

    doSomething() {
       require.ensure([], () => {
           var {default:One} = require('./one.js');
           
           var x = new One();
           x.hello();
           
       }); 
    }
    render() {
        const classes = ['container', this.props.css.item];
        return (<div className={classes.join(' ')}>
        <a 
            onClick={this.doSomething.bind(this)}
            className="btn-floating btn-large waves-effect waves-light red">
        <i className="material-icons">R</i></a>
        
            <nav>
                <div className="nav-wrapper">
      <a href="#" className="brand-logo">Hello Mihai</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

   <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name" className="active">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
          <label htmlFor="disabled" className="active">Disabled</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
    </form>
  </div>
        
        </div>);
    }
}
