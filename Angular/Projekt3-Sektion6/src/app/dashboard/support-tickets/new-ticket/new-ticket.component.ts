import { Component, ElementRef, output, signal, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string, text: string}>();
  enteredTitle = '';
  enteredText = '';

  
  onSubmit() {
    // console.dir(titleElement); // hier findet man die ganzen Elemente und Methoden von diesem HTMLInputElement
    // const enteredTitle = titleElement.value;

    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    this.form()?.nativeElement.reset(); // clears the form
    
    // man kann das form auch hiermit clearen (und die Template Variable "form" entfernen)
    // this.enteredText = '';
    // this.enteredTitle = '';
  }
}
