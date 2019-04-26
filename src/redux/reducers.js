import { combineReducers } from "redux";
import { INC, DEC, CREATE_COUNTER, DELETE_COUNTER } from "./actions";
import uuid from 'uuid/v4';
//import imutableArrayItemSet from './imutableArrayItemSet';

const countersReducer = (counters = { [uuid()]: {count:0} }, {type, payload: { id, amount = 1 } = {} }) => {
  switch(type){
    case INC: {
      return Object.assign({}, counters, { [id]: { count: counters[id].count+amount } });
      //return imutableArrayItemSet(counters, index, (count) => count+amount);
    }
    case DEC: {
      return Object.assign({}, counters, { [id]: { count: counters[id].count-amount } });
      //return imutableArrayItemSet(counters, index, (count) => count-amount);
    }
    case CREATE_COUNTER: {
      return Object.assign({}, counters, { [uuid()]: {count:0}});
      //return [...counters, 0];
    }
    case DELETE_COUNTER: {
      const { [id]: removedItem, ...newCounters } = counters;
      return newCounters;
      //return counters.slice(0, -1);
    }
    default: {
      return counters;
    }
  }
}

export default combineReducers({
  counters: countersReducer
});