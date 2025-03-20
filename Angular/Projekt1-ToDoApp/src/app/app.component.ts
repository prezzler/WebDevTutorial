import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  

  selectedUserId?: string;
  get selectedUser(){
    // nutzt js find() Methode um den User zu finden
    return this.users.find((user) => user.id === this.selectedUserId)!;     // also sucht in der users Liste nach dem User mit der id selectedUserId und gibt diesen zurück
  }

 
  onSelectUser(id: string) {
    console.log('User selected:' + id);

    // Besserer Weg
    this.selectedUserId = id;
  }
}

 // mein Weg
// selectedUser = 0;
// onSelectUser(id: string) {
//   console.log('User selected:' + id);
  // for(let i = 0; i<this.users.length; i++){
  //   if(this.users[i].id === id)
  //     this.selectedUser = i;
  // }
// }