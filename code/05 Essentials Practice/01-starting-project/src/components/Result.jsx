import { calculateInvestmentResults } from '../util/investment.js';

export default function Result({ input }) {
  const resultsData = calculateInvestmentResults(input);
  return (
    <p>Result</p>
  )
}
