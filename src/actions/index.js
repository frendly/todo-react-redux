let nextTodoId = 10;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name: text,
  checked: false
});