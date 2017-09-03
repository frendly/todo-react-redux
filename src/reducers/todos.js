const initialState = [
  {
    id: 1,
    name: 'test',
    checked: false
  }, {
    id: 2,
    name: 'test02',
    checked: true
  }, {
    id: 3,
    name: 'test3',
    checked: true
  }
];

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          checked: false
        }
      ]
    default:
      return state;
  }
}

export default todoList;