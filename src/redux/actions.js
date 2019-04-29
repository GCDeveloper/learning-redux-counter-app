export const INC = "INC";
export const DEC = "DEC";

export const CREATE_COUNTER = "CREATE_COUNTER";
export const DELETE_COUNTER = "DELETE_COUNTER";
export const SET_RANDOM_COLOUR = "SET_RANDOM_COLOUR";
export const SET_RANDOM_COLOUR_DELAYED = "SET_RANDOM_COLOUR_DELAYED";

export const inc = ({ id, amount = 1}) => (
  {
    type: INC,
    payload: {
      id,
      amount
    }
  }
);
export const dec = ({ id, amount = 1}) => (
  {
    type: DEC,
    payload: {
      id,
      amount
    }
  }
);

export const createCounter = () => ({ type: CREATE_COUNTER });
export const deleteCounter = (id) => ({ type: DELETE_COUNTER, payload: { id } });
export const setRandomColour = (id) => ({
  type: SET_RANDOM_COLOUR,
  payload: {
    id
  }
})
export const setRandomColourDelayed = (id, ms, sagaType) => ({
  type: SET_RANDOM_COLOUR_DELAYED,
  payload: {
    id,
    ms,
    sagaType
  }
})