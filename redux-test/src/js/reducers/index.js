/* eslint-disable default-case */
import { ADD_ARTICLE } from "../constants/action-types";
import { FOUND_BAD_WORD } from "../constants/action-types";
// src/js/reducers/index.js
const initialState = {
    articles: []
  };
  function rootReducer(state = initialState, action) {
    switch(action.type){
        case (ADD_ARTICLE):
                return Object.assign({}, state, {
                    articles: state.articles.concat(action.payload)
                  });
        case (FOUND_BAD_WORD):
            alert('Bad Word Detected');
        default :
                console.log('error')
                break;
    }
    return state;
  }
  export default rootReducer;
