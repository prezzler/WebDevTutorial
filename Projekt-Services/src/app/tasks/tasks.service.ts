import { Injectable } from "@angular/core";
import { Task } from "./task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks: Task[] = [{
        id: "1423",
        title: "Kochen",
        description: "Wie koch ei",
        status: "IN_PROGRESS"
    }
    ];

    add(task: Task){
        this.tasks.push(task);
    }

    showAll(){
        return this.tasks;
    }
}