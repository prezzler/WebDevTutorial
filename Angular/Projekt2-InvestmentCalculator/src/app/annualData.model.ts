export interface AnnualData{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}
export interface Parameters{
    initInvest: number;
    anualInvest: number;
    expectedReturn: number;
    duration: number;
}