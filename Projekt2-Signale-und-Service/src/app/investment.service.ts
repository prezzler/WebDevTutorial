import { Injectable, signal } from "@angular/core";
import { InvestmentInput, ResultsData } from "./investment-input.model";

@Injectable({providedIn:"root"})
export class InvestmentService{
    public resultsData = signal<ResultsData[] | undefined>(undefined);
    
    calculateInvestmentResults(data: InvestmentInput) {
  
        const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
        let investmentValue = initialInvestment;
        let annualData: ResultsData[] = [];
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
        this.resultsData.set(annualData);
        // this.resultsData = annualData;
      }
}