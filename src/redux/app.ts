import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './user/auth/reducer'
import { useCasePointSlice } from './mainFuture'
export const userReducer = combineReducers({
    rootAuth:authSlice.reducer,
    rootUseCasePoint:useCasePointSlice.reducer
})