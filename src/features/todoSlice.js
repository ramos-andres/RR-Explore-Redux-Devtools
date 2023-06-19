import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        removeTodo: (state, action) => {
            return { items: state.items.filter(item => item.id !== action.payload.id) }
        },
        clearTodo: () => {
            return { items: [] }
        }
    }
});

export const {addTodo, removeTodo, clearTodo} = todoSlice.actions;

export default todoSlice.reducer;