import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home/Home';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './redux/reducer/globalReducer';

// Store
// const storeRedux = createStore(rootReducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={storeRedux}>
//        <Home />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
