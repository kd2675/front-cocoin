// *** counterSlice.ts 파일
// 슬라이스를 생성해준다.

import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';

import {v4} from "uuid";
import {Alert} from "@redux/types/alertType";

// initialState 타입 정의
// export interface CounterState {
//     value: number;
//     status: 'idle' | 'loading' | 'failed';
// }

// initialState 생성
const initialState: Alert[] = [];

// Thunk 예시
// export const fetchAsync = createAsyncThunk('counter/fetchAsync', async (text: string) => {
//     console.log('thunk...', text);
//     const resp = await fetch('https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits');
//     const data = await resp.json();
//     return data.value;
// });

// slice 생성
const alertReducer = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        // action의 타입은 PayloadAction<제네릭> 으로 지정해준다.
        addAlert: (state: Alert[], action: PayloadAction<Alert>) => {
            action.payload.uuid = v4();
            // state.push(action.payload);
            return [
                {...action.payload},...state
            ];
        },
        deleteAlert: (state: Alert[]) => {
            return [...state.slice(0, state.length - 1)];
            // return state.slice(0, state.length - 1);
        },
        deleteAllAlert: (state: Alert[]) => {
            return state = [];
        }
    },
    // thunk 처리
    // extraReducers: {
    //     [fetchAsync.pending.type]: (state) => {
    //         state.status = 'loading';
    //     },
    //     [fetchAsync.fulfilled.type]: (state, action) => {
    //         state.status = 'idle';
    //         state.value = action.payload;
    //     },
    //     [fetchAsync.rejected.type]: (state) => {
    //         state.status = 'failed';
    //     }
    // }
});

const { actions, reducer: alert } = alertReducer

export const alertActions = actions
export default alert

// *** 참고: extraReducers 를 buidler.addCase 로 작성해도 된다.
// const couterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         plusCounter: (state: CounterState, action: PayloadAction<number>) => {
//             state.value += action.payload;
//         },
//         minusCounter: (state: CounterState, action: PayloadAction<number>) => {
//             state.value -= action.payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchAsync.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchAsync.fulfilled, (state, action) => {
//                 state.status = 'idle';
//                 state.value = action.payload;
//             })
//             .addCase(fetchAsync.rejected, (state) => {
//                 state.status = 'failed';
//             });
//     }
// });