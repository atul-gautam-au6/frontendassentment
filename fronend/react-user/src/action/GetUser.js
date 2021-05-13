import axios from "axios";
import {
  GET_REQ,
  GET_REQ_FAIL,
  GET_REQ_SUCCESS,
} from "src/constance/userConstant";
let service = "http://localhost:7000";

const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ });
    const {data} = await axios.get(service + "/users");
    // console.log(data)
    dispatch({ type: GET_REQ_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_REQ_FAIL, Error: error.message });
  }
};

export { getUser };
