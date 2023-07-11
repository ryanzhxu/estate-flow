import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import modalReducer from "../components/worker/modalWorker";
import propertiesReducer from '../redux/properties/reducer';
import workersReducer from "../redux/workersRedux/workersReduecer";
import workerDetailsReducer from "../redux/workersRedux/workerDetailsReducer";
import tenantsReducer from "../redux/tenants/tenantsReducer";
export default configureStore({
  reducer: {
    user: userReducer,
    workers: workersReducer,
    workerDetails: workerDetailsReducer,
    modal: modalReducer,
    properties: propertiesReducer,
    tenants : tenantsReducer
  },
  devTools: true
});