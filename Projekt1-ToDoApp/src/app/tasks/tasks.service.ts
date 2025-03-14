import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn:'root'})
export class TasksService{
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Tidy up',
          description: 'Tidy up your room and clean the kitchen',
          dueDate: '2021-09-30',
          done: false
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Clean Kitchen',
          description: 'Clean the kitchen and wash the dishes',
          dueDate: '2021-05-30',
          done: false
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Do Homework',
          description: 'Do your homework for the next day',
          dueDate: '2021-02-30',
          done: false
        },
        {
          id: 't4',
          userId: 'u1',
          title: 'Go Shopping',
          description: 'Go shopping for the next week',
          dueDate: '2021-09-30',
          done: false
        }
    ];

    constructor(){
        const tasks = localStorage.getItem('tasks');

        // wenn tasks gefunden wurden
        if(tasks){
            this.tasks = JSON.parse(tasks); // localStorage speichert die info als string, deshalb muss man das parsen
        }
    }

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId && task.done === false); // zweite Bedingung lass ich drin
    }

    addTask(taskData: NewTaskData, userId: string){
        this.tasks.push({
            id: new Date().getTime().toString(), // nur vorübergehnde lösung um eine einzigartige id zu erstellen 
            userId: userId,
            title: taskData.title,
            description: taskData.summary,
            dueDate: taskData.date,
            done: false
        });
        this.saveTasks();
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks)) // um das als string im localStorage zu speichern
    }
}