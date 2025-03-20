import { Component, computed, inject, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TASK_STATUS_OPTIONS, TaskStatusOptions, TaskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers:[TaskStatusOptionsProvider]
})
export class TasksListComponent {
  private taskService = inject(TasksService);
  private selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  tasks = computed(() => {
    switch(this.selectedFilter()){
      case 'all':
        return this.taskService.allTasks();
      case 'open':
        return this.taskService.allTasks().filter(task => task.status === 'OPEN');
      case 'in-progress':
        return this.taskService.allTasks().filter((task) => task.status === 'IN_PROGRESS')
      case 'done':
        return this.taskService.allTasks().filter((task) => task.status === 'DONE')
      default:
        return this.taskService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
    // this.tasks = this.taskService.getTasks(this.selectedFilter());
    console.log(this.tasks);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.tasks = this.taskService.getTasks(this.selectedFilter());
  // }

  // ngOnInit(): void {
  //   this.tasks = this.taskService.getTasks(this.selectedFilter());
  // }
}
