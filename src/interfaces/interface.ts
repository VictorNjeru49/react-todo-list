export interface Task {
    title: string;
    completed: boolean;
  }
  
 export interface State {
    tasks: Task[];
    newTask: string;
    filter: 'all' | 'active' | 'completed';
  }