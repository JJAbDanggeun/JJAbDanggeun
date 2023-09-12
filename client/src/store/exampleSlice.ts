import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface ExampleType {
	a: number;
	b: number;
}

const initialState: ExampleType = {
	a: 5,
	b: 10,
};

const exampleSlice = createSlice({
	//store 이름
	name: "count",
	//초기값
	initialState,
	//처리하고자 하는 메서드(state는 초기값 initialState를 가르키고, action은 내가 변경하고자 하는 값을 넣습니다.)
	reducers: {
		addNum(state, action: PayloadAction<number>) {
			state.a += action.payload;
		},
		minusNum(state, action: PayloadAction<number>) {
			state.b -= action.payload;
		},
	},
});

export const { addNum, minusNum } = exampleSlice.actions;
export const createAddNum = (state: RootState) => state.exampleSlice.a;
export const createMinusNum = (state: RootState) => state.exampleSlice.b;
export default exampleSlice.reducer;

//사용 방법
//Ex. createAddNum 사용하기 : 상태 읽기
// import { createAddNum } from './store/exampleSlice';

// const addNumValue = createAddNum(rootState);

//Ex. 상태값 변경하기
// import { useDispatch } from 'react-redux';
// import { addNum } from './store/exampleSlice';

// const dispatch = useDispatch();
// dispatch(addNum(10)); - 10을 추가하는 acrtion dispatch
