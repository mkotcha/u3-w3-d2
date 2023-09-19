import storage from "redux-persist/lib/storage";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../reducers/jobs";
import favCompReducer from "../reducers/favComp";
import persistReducer from "redux-persist/es/persistReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  jobs: jobsReducer,
  favComp: favCompReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
