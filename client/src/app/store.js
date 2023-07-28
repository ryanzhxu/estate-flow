import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import propertiesReducer from '../redux/properties/reducer';
import workersReducer from '../redux/workers/reducer';
import workerDetailsReducer from '../redux/workers/workerDetailsReducer';
import tenantsReducer from '../redux/tenants/reducer';
export default configureStore({
  reducer: {
    user: userReducer,
    workers: workersReducer,
    workerDetails: workerDetailsReducer,
    properties: propertiesReducer,
    tenants: tenantsReducer,
  },
  devTools: true,
});
