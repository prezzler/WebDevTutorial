import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { type NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({required: true}) name!: string;
  @Input ({required: true}) userId!: string;
  @Output() add = new EventEmitter<boolean>();
  // @Input () name: string | undefined; // union type
  
  isAddingTasks = false;

  constructor(private tasksService: TasksService){
  } // dependency injection

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
    // return this.tasks.filter((task) => task.userId === this.userId && task.done === false); // zweite Bedingung lass ich drin
  }

  // wird von task.ts übernommen
  // onTaskCompleted(completedTask: Task){
  //   console.log("Task Completed", completedTask.id)
  //   return this.tasksService.removeTask(completedTask.id);
  //   // this.tasks = this.tasks.filter((task) => task.id !== completedTask.id);

  // }

  onStartAddTask(){
    console.log("Add Task has been clicked")
    this.isAddingTasks = true
    this.add.emit(true);
  }

  onCloseAddTask(){
    console.log("Close Add Task")
    this.isAddingTasks = false;
  }

} 