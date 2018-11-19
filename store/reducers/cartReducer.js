import * as actionTypes from "../actions/types";
const initialState = {
  list: [],
  num: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let choice = action.payload;
      let item = state.list.find(
        item => item.drink === choice.drink && item.option === choice.option
      );
      let list;
      if (item) {
        item.quantity++;
        list = [...state.list];
      } else {
        list = state.list.concat(choice);
      }

      return {
        ...state,
        list,
        num: state.num + 1
      };

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter(item => item != action.payload)
      };
    case actionTypes.CHECKOUT:
      alert("Thank you for shopping with us, Enjoy your coffee!");
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
}
