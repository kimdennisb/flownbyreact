import React, { Component } from "react";
import Posts from "./Components/Posts";
import LimitInput from "./Components/LimitInput";
import PropTypes from "prop-types";
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { dataR } from "./Reducers/data";
import { limitR } from "./Reducers/limit";
import { pageR } from "./Reducers/page";
import { pagesR } from "./Reducers/pages";
import { postsperpageR } from "./Reducers/postsperpage";
import "./App.css";

/**
 * THIS COMPONENT HAS TO BE A CLASS COMPONENT TO PASS DOWN CONTEXT TO CHILDREN WITH GETCHILDCONTEXT
 *
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      postsperpage: 5,
      pages: 1,
      limit: 50,
    };

    this.storeFactory = this.storeFactory.bind(this);
    this.fetchFromApi = this.fetchFromApi.bind(this);
    this.logger = this.logger.bind(this);
    this.saver = this.saver.bind(this);
  }

  //adding context to a component requires that you use the getChildContext life‐
  //cycle function. It will return the object that defines the context. In this case, we add
  //the store to the context, which we can access through props.
  getChildContext() {
    return { store: this.storeFactory() };
  }

  fetchFromApi = () => {
    fetch(`https://dummyapi.io/data/v1/post?limit=${this.state.limit}`, {
      method: "GET",
      headers: {
        "app-id": process.env.REACT_APP_APP_ID,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        //this.setState({ data: res.data });s
        this.storeFactory().dispatch({ type: "DATA", data: res.data });
      });
  };

  componentDidMount() {
    console.log(`Did mount`);
    this.unsubscribe = this.storeFactory().subscribe(() => {
      console.log(`damn`);
      this.forceUpdate();
    });

    this.fetchFromApi();
    console.log(this.storeFactory().getState().data);
  }

  componentWillUnmount() {
    console.log(`Unmounted`);
    this.unsubscribe();
  }

  //create a factory-function that manages the process of creating stores
  //In this case, the factory will create a store that
  //has middleware for logging and saving data.
  //In Redux, middle‐ware consists of a series of functions that are executed in a row in the
  //process of dis‐patching an action.
  //These higher-order functions allow you to insert functionality before or after actions
  //are dispatched and state is updated. Each middleware function is executed sequen‐tially
  //Each piece of middleware is a function that has access to the action, a dispatch func‐
  //tion, and a function that will call next. next causes the update to occur. Before next is
  //called, you can modify the action. After next, the state will have changed.

  logger = (store) => (next) => (action) => {
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    next(action);
    console.log("next state", store.getState());
    console.groupEnd();
  };

  saver = (store) => (next) => (action) => {
    let result = next(action);
    //localStorage['redux-store'] = JSON.stringify(store.getState())
    return result;
  };

  storeFactory = () =>
    applyMiddleware(this.logger, this.saver)(createStore)(
      combineReducers({
        data: dataR,
        page: pageR,
        postsperpage: postsperpageR,
        pages: pagesR,
        limit: limitR,
      }),
      this.state
    );

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LimitInput />
        </header>
        <section>
          {this.storeFactory().getState().data.length > 0 ? (
            <Posts posts={this.storeFactory().getState().data} />
          ) : null}
        </section>
      </div>
    );
  }
}

// specify childContextTypes on the component instance and define your context object
// This is similar to adding propTypes or defaultProps to a
// component instance. However, for context to work, you must take this step.

/*App.propTypes = {
  store: PropTypes.object.isRequired,
};*/

App.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
