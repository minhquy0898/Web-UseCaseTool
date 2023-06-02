import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './index';


export const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
    reducer:rootReducer,
    middleware:[...getDefaultMiddleware({ thunk: false }),sagaMiddleware]
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;