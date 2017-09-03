const initialState = [
  {
    id: 0,
    name: 'add react-router',
    checked: false
  },
  {
    id: 1,
    name: 'install react',
    checked: true
  }, {
    id: 2,
    name: 'install redux',
    checked: true
  }, {
    id: 3,
    name: 'install create-react-app',
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