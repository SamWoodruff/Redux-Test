import {ADD_ARTICLE} from '../constants/action-types.js'
// src/js/actions/index.js
export const addArticle = (payload) =>{
    return { type: ADD_ARTICLE, payload }
  };