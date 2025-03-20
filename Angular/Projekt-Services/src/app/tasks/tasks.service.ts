import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = signal<Task[]>([]);
    private loggingService = inject(LoggingService);
    public allTasks = this.tasks.asReadonly();

    addTask(taskData:{title: string, description: string}){
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        };
        this.tasks.update((oldTasks) => [...oldTasks, newTask]);

        this.loggingService.log('ADDED TASK with title ' + taskData.title);
    };

    updateTaskStatus(taskId: string, newStatus: TaskStatus){
        this.tasks.update((oldTasks) => 
            oldTasks.map((task) => 
                task.id === taskId ? {...task, status: newStatus} : task
            )
        );
        this.loggingService.log('CHANGED TASK STATUS to ' + newStatus);
    }



    // private tasks: Task[] = [{
    //     id: "1423",
    //     title: "Kochen",
    //     description: "Wie koch ei",
    //     status: "IN_PROGRESS"
    // }
    // ];

    // addTask(title: string, description: string){
    //     let newTask:Task = { 
    //         id: Math.random.toString(),
    //         title: title,
    //         description: description,
    //         status: "OPEN"
    //     }
    //     this.tasks.push(newTask);
    // }

    // getTasks(filter: string){
    //     console.log(filter);
    //     return (filter === 'ALL')? this.tasks :this.tasks().filter((task) => task.status === filter);
    // }
}