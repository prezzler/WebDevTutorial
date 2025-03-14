import { Injectable } from "@angular/core";
import { type AnnualData } from "./annualData.model"; // Ensure AnnualData is a class or interface
import { type Parameters } from "./annualData.model";
@Injectable({providedIn:"root"})
export class InvestmentService{
    parameters: Parameters = {
        initInvest: 0,
        anualInvest: 0,
        expectedReturn: 0,
        duration: 0
      };
    
    private annualData: AnnualData[] = [];
    

    calculateInvestmentResults(params :Parameters){
        const annualData = [];
        let investmentValue = params.initInvest;

        this.parameters.initInvest = params.initInvest;
        this.parameters.anualInvest = params.anualInvest;
        this.parameters.expectedReturn = params.expectedReturn;
        this.parameters.duration = params.duration;

        for (let i = 0; i < params.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (params.expectedReturn / 100);
            investmentValue += interestEarnedInYear + params.anualInvest;
            const totalInterest =
            investmentValue - params.anualInvest * year - params.initInvest;
            annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: params.anualInvest,
            totalInterest: totalInterest,
            totalAmountInvested: params.initInvest + params.anualInvest * year,
            });
        }


        this.annualData = annualData;
    }

    getAnnualData(){
        return this.annualData;
    }
}