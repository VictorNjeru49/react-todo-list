import { State,Task } from "../../interfaces/interface";

export type Action =
  | { type: 'ADDTASK'; addtask: string }
  | { type: 'TOGGLETASK'; toggle: string }
  | { type: 'DELETETASK'; delete: string }
  | { type: 'CLEARCOMPLETED' }
  | { type: 'SETFILTER'; filter: 'all' | 'active' | 'completed' }
  | { type: 'SETNEWTASK'; set: string }
  | { type: 'SAVETASK'; save: { id: string; title: string } };

export const Initialstate: State = {
  tasks: [],
  newTask: '',
  filter: 'all',
};

export const Reducing = (state: State, action: Action): State => {
    switch (action.type) {
      case 'ADDTASK':
        if (action.addtask !== '') {
          const newTask: Task = {
            title: action.addtask,
            completed: false,
          };
          return { ...state, tasks: [...state.tasks, newTask], newTask: '' };
        }
        return state;
      case 'TOGGLETASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.title === action.toggle
              ? { ...task, completed: !task.completed }
              : task
          ),
        };
      case 'DELETETASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.title !== action.delete),
        };
      case 'CLEARCOMPLETED':
        return {
          ...state,
          tasks: state.tasks.filter((task) => !task.completed),
        };
      case 'SETFILTER':
        return { ...state, filter: action.filter };
      case 'SETNEWTASK':
        return { ...state, newTask: action.set };

      default:
        return state;
    }
  };