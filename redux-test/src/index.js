import React from 'react';
import './index.css';
import App from './js/components/App';

import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import index from "./js/index"

render(
    <Provider store={store}>
      <App />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
  );

// yarn add react-redux --save-dev
// react-redux is a Redux binding for React. It’s a small library for connecting Redux and React in an efficient way.
// What does react-redux’s connect do? Unsurprisingly it connects a React component with the Redux store.

// What does mapStateToProps: connects a part of the Redux state to the props of a React component.
// mapDispatchToProps connects Redux actions to React props

// To start off connecting Redux with React we’re going to use Provider.
// Provider is an high order component coming from react-redux.
// Using layman’s terms, Provider wraps up your React application and makes it aware of the entire Redux’s store.

// yarn add uid --save-dev
// Generates id for action items in Form.jsx

// A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer
// there is no better place than a middleware for abstracting away business logic
// inside the middleware you can access getState and dispatch

// You should always return next(action) in your middlewares. 
// If you forget to return next(action) the application will stop, 
// and no other action will reach the reducer.