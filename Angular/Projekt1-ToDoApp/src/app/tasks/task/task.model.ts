export interface Task {
  id: string,
  userId: string,
  title: string,
  description: string,
  dueDate: string,
  done: boolean
}
export interface NewTaskData {
  title: string;
  summary: string; 
  date: string
}