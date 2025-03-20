import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
import { AnnualData } from '../annualData.model';
import { Parameters } from '../annualData.model';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() showResults = new EventEmitter<boolean>();
  enteredInitInvest = '100';
  enteredAnualInvest = '10';
  enteredExpectedReturn = '1000';
  enteredDuration = '5';
  params!: Parameters;


  constructor(private investService: InvestmentService){}
    
  
  onCalculate(){
    this.params = {
      initInvest: +this.enteredInitInvest,
      anualInvest: +this.enteredAnualInvest,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    };
    this.investService.calculateInvestmentResults(this.params);
    console.log(this.investService.getAnnualData());
    
    this.showResults.emit(true);
  }
                                                  
}
