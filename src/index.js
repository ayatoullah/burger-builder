import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import axios from 'axios';

// const app = (
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );


ReactDOM.render( <App/>, document.getElementById( 'root' ) );
registerServiceWorker();
