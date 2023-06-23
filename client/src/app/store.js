import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import workersReducer from "../components/worker/workerSlice";
import modalReducer from "../components/worker/modalWorker";
import propertiesReducer from '../redux/properties/reducer';

export default configureStore({
  reducer: {
    user: userReducer,
    workers: workersReducer,
    modal: modalReducer,
    properties: propertiesReducer,
  },
  devTools: true
});
