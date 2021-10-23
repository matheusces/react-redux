import { configureStore } from '@reduxjs/toolkit';
import { EmployeReducer } from './reducer';

export const store = configureStore({
    reducer: {
        employe: EmployeReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;