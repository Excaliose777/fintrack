import "./Summary.scss";
import type { DashboardSummary } from "../../types";

const Summary = () => {
  const summary: DashboardSummary = {
    totalBalance: 12345,
    totalCredits: 7890,
    totalDebits: 4455,
    transactionCount: 150,
    balanceChange: 5,
    creditsChange: 3,
    debitsChange: -2,
    transactionChange: 10
  };

  const formatCurrency = (amount: number): string => {
    return `$${amount.toLocaleString()}`;
  };

  const formatChange = (change: number): string => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change}%`;
  };

  const metrics = [
    {
      title: "Total Balance",
      value: formatCurrency(summary.totalBalance),
      change: formatChange(summary.balanceChange),
      changeType: summary.balanceChange >= 0 ? "positive" : "negative"
    },
    {
      title: "Total Credits",
      value: formatCurrency(summary.totalCredits),
      change: formatChange(summary.creditsChange),
      changeType: summary.creditsChange >= 0 ? "positive" : "negative"
    },
    {
      title: "Total Debits",
      value: formatCurrency(summary.totalDebits),
      change: formatChange(summary.debitsChange),
      changeType: summary.debitsChange >= 0 ? "positive" : "negative"
    },
    {
      title: "Transactions",
      value: summary.transactionCount.toString(),
      change: formatChange(summary.transactionChange),
      changeType: summary.transactionChange >= 0 ? "positive" : "negative"
    }
  ];

  return (
    <div className="summary">
      <h1 className="summary__title"> Summary </h1>
      <div className="summary__grid">
        {metrics.map((metric, index) => (
          <div key={index} className="summary__card">
            <div className="summary__card-header">
              <h3 className="summary__card-title">{metric.title}</h3>
              <button className="summary__card-menu">⋯</button>
            </div>
            <div className="summary__card-value">{metric.value}</div>
            <div className={`summary__card-change ${metric.changeType}`}>
              {metric.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
