import { combineReducers } from "redux";
import { INC, DEC, CREATE_COUNTER, DELETE_COUNTER, SET_RANDOM_COLOUR, SET_RANDOM_COLOUR_DELAYED } from "./actions";
import uuid from 'uuid/v4';
import randomColour from '../utils/randomColour';
//import imutableArrayItemSet from './imutableArrayItemSet';

const countersReducer = (counters = { [uuid()]: {count:1000}, [uuid()]: {count:500}, [uuid()]: {count:1500} }, {type, payload: { id, amount = 1 } = {} }) => {
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
    case SET_RANDOM_COLOUR: {
      // const newCounters = {};
      // Object.entries(counters).forEach(([key, counter]) => {
      //   newCounters[key] = {
      //     ...counter,
      //     colour: randomColour()
      //   }
      // });
      // return newCounters;
      return Object.assign({}, counters, { [id]: { ...counters[id], colour: randomColour()  } });
    }
    case SET_RANDOM_COLOUR_DELAYED: {
      return counters;
      //return counters;
      // const newCounters = {};
      // Object.entries(counters).forEach(([key, counter]) => {
      //   newCounters[key] = {
      //     ...counter,
      //     colour: randomColour()
      //   }
      // });
      // return newCounters;
      //return Object.assign({}, counters, { [id]: { colour: randomColour() } });
    }
    default: {
      return counters;
    }
  }
}

export default combineReducers({
  counters: countersReducer
});