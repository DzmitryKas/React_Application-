import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [
      {
        id: 1,
        text: 'Купить туалетную бумагу',
        isCompleted: true,
      },
      {
        id: 2,
        text: 'Купить гречку',
        isCompleted: false,
      },
      {
        id: 3,
        text: 'Купить антисептик',
        isCompleted: false,
      }
    ]
  }
} 
  
  const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
    switch (type) {
      case "ADD_TASK" :
        return [
          ...state, {
            id,
            text,
            isCompleted,
          }
        ];
      case "REMOVE_TASK":
        return [...state].filter(task => task.id !== id);
      case "COMPLETE_TASK":
          return [...state].map(task => {
            if(task.id === id) {
              task.isCompleted = !task.isCompleted;
            }
            return task;
          });
      default:
        return state;
    }
  }
  
  export default tasks;