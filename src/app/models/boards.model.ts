export interface Subtask {
    title: string;
    isCompleted: boolean;
  }
  
export interface Task {
    title: string;
    description: string;
    status: string;
    subtasks: Subtask[];
}
  
export interface Column {
    name: string;
    tasks: Task[];
}
  
export interface Board {
    name: string;
    columns: Column[];
    isActive: string;
}
  
export interface Data {
    boards: Board[];
}
