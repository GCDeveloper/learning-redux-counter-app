export const INC = "INC";
export const DEC = "DEC";

export const CREATE_COUNTER = "CREATE_COUNTER";
export const DELETE_COUNTER = "DELETE_COUNTER";

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