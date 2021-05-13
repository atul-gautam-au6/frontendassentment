import { GET_REQ, GET_REQ_SUCCESS } from "src/constance/userConstant";


const GetList = (state = {}, action) => {
    switch (action.type) {
      case GET_REQ:
        return { loading: true };
      case GET_REQ_SUCCESS:
        return { loading: false, userData: action.payload };
      case GET_REQ:
        return { loading: false, subError: action.Error };
      
      default:
        return state;
    }
  };

  export {GetList}
  