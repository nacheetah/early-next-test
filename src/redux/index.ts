import { type Tuple, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState, rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
// import { useMemo } from 'react';
// import { initialState } from '../features/user-profile/user-profile-reducer';

const persistConfig = {
  key: 'root',
  storage: storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    [
      ...getDefaultMiddleware({ serializableCheck: false, thunk: false }),
      sagaMiddleware
    ] as Tuple
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
