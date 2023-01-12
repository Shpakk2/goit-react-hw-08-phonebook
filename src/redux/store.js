import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice"
import { filterSlice } from "./filterSlice"
import { userSlice } from "./userSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'isLogin'],
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);


export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    user: persistedReducer
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
