import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ResultsData } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})


export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  // results = input.required<ResultsData[]>();

  results = computed(() => this.investmentService.resultsData())
  // results = this.investmentService.resultsData.asReadonly();
  // get results(){
  //   return this.investmentService.resultsData;
  // }

}
