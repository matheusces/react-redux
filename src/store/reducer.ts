import { EmployeState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: EmployeState = {
    employes: [],
    employe: {},
    loading: false,
    error: false,
};

const reducerSlice = createSlice({
    name: 'employe',
    initialState: INITIAL_STATE,
    reducers: {
        loadRequest(state) {
            return { ...state, loading: true };
        },
        loadSuccess(state, action) {
            return { 
                ...state,
                loading: false,
                error: false,
                employe: action.payload
            };
        },
        loadFailure(state) {
            return { ...state, error: true, data: [] };
        }
    }
});

export const { loadRequest, loadSuccess, loadFailure } = reducerSlice.actions;
export const EmployeReducer = reducerSlice.reducer;