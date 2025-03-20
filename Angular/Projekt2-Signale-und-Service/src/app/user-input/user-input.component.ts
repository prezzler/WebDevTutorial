import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<investmentInput>();
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('100');
  enteredAnualInvestment = signal('10');
  enteredExpectedReturn = signal('500');
  enteredDuration = signal('10');

  private investmentInput: InvestmentInput = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };
  
  constructor(private investmentService: InvestmentService){}

  onSubmit(){
    console.log("submitted  ")
    
    this.investmentInput.initialInvestment = +this.enteredInitialInvestment();
    this.investmentInput.annualInvestment = +this.enteredAnualInvestment();
    this.investmentInput.expectedReturn = +this.enteredExpectedReturn();
    this.investmentInput.duration = +this.enteredDuration();
    
    this.investmentService.calculateInvestmentResults(this.investmentInput)
    // this.calculate.emit(this.investmentInput);
  }
}
