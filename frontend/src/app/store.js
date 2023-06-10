import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import workersReducer from "../components/WorkerComponent/workerSlice";
import modalReducer from "../components/WorkerComponent/modalWorker";

export default configureStore({
  reducer: {
    user: userReducer,
    workers: workersReducer,
    modal: modalReducer,
  },
});
