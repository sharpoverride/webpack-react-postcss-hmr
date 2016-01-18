import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as css from './demo.css'

import Demo from './demo';

let appMountPoint = document.querySelector('#app');
ReactDOM.render(<Demo css={css}/>, appMountPoint);
