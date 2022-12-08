import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'],
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnchancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
// export const store = configureStore({ reducer: rootReducer }, composeEnhancers);
