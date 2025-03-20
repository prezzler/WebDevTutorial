import { Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared-ui/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  @Output() select = new EventEmitter<string> ();
  // select = output<string>(); // ist 1zu1 das gleiche wie oben @Output()
  // // kein Signal!

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  } 
}
