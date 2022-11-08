const STATUS_CHECKED = 'bookstore/categories/SATUS_CHECKED';

const checkStatus = () => ({ type: STATUS_CHECKED });

const reducer = (state = [], action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
};

export default reducer;
export { checkStatus };
