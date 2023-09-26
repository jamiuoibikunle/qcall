import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import welcomeSlice from './slices/welcomeSlice';
import userSlice from './slices/userSlice';
import locationSlice from './slices/locationSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['welcome', 'user'],
  blackList: ['location'],
};

const rootReducer = combineReducers({
  welcome: welcomeSlice,
  user: userSlice,
  location: locationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
