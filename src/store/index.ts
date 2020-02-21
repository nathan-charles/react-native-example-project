import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reduxThunk from 'redux-thunk';

import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const getMiddleware = () => {
  const middlewares = [reduxThunk];

  if (__DEV__) {
    // Add development middleware here
    // middlewares.push(logMiddleware);
  }

  return applyMiddleware(...middlewares);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(getMiddleware()));

export const persistor = persistStore(store);
export default store;
