import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './types';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});
