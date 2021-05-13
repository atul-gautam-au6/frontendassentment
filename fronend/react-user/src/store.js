import { createStore,compose, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { GetList } from "./reducer/UserReducer";
const initialState = {
  sidebarShow: "responsive",
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":     
    return { ...state, ...rest };
    default:
      return state;
    }
  };
  // console.log(type, ...rest )
const reducer = combineReducers({

  userList:GetList,
  changeStateM:changeState
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  // reducer,
  // initialState,
  changeState,
  // composeEnhancer(applyMiddleware(thunk))
);
export default store;
