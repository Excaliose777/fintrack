import "./Transaction.scss";
import type { Transactions } from "../../types";

const Transaction = () => {
  const transactions: Transactions[] = [
    {
      id: "1",
      date: "2023-10-01",
      remark: "Salary",
      amount: 3000,
      currency: "USD",
      type: "Credit"
    },
    {
      id: "2",
      date: "2023-10-02",
      remark: "Groceries",
      amount: -150,
      currency: "USD",
      type: "Debit"
    },
    {
      id: "3",
      date: "2023-10-03",
      remark: "Gym Membership",
      amount: -50,
      currency: "USD",
      type: "Debit"
    },
    {
      id: "4",
      date: "2023-10-04",
      remark: "Dinner",
      amount: -40,
      currency: "USD",
      type: "Debit"
    },
    {
      id: "5",
      date: "2023-10-05",
      remark: "Movie Tickets",
      amount: -30,
      currency: "USD",
      type: "Debit"
    },
    {
      id: "6",
      date: "2023-10-06",
      remark: "Rent",
      amount: -1200,
      currency: "USD",
      type: "Debit"
    },
    {
      id: "7",
      date: "2023-10-07",
      remark: "Utilities",
      amount: -100,
      currency: "USD",
      type: "Debit"
    },
    {
      id: "8",
      date: "2023-10-08",
      remark: "Car Payment",
      amount: -400,
      currency: "USD",
      type: "Debit"
    },
    {
      id: "9",
      date: "2023-10-09",
      remark: "Insurance",
      amount: -200,
      currency: "USD",
      type: "Debit"
    }
  ];

  const formatAmount = (amount: number): string => {
    const sign = amount >= 0 ? '' : '-';
    const absAmount = Math.abs(amount);
    return `${sign}$${absAmount.toLocaleString()}`;
  };

  return (
    <div className="transaction">
      <div className="transaction__container">
        {/* Header */}
        <div className="transaction__header">
          <div className="transaction__header-cell">
            Date
            <span className="sort-arrow">▼</span>
          </div>
          <div className="transaction__header-cell">
            Remark
            <span className="sort-arrow">▼</span>
          </div>
          <div className="transaction__header-cell">
            Amount
            <span className="sort-arrow">▼</span>
          </div>
          <div className="transaction__header-cell">
            Currency
            <span className="sort-arrow">▼</span>
          </div>
          <div className="transaction__header-cell">
            Type
            <span className="sort-arrow">▼</span>
          </div>
        </div>

        {/* Rows */}
        <div className="transaction__body">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction__row">
              <div className="transaction__cell" data-label="Date">{transaction.date}</div>
              <div className="transaction__cell" data-label="Remark">{transaction.remark}</div>
              <div className={`transaction__cell ${transaction.amount < 0 ? 'negative' : 'positive'}`} data-label="Amount">
                {formatAmount(transaction.amount)}
              </div>
              <div className="transaction__cell" data-label="Currency">{transaction.currency}</div>
              <div className="transaction__cell" data-label="Type">
                <span className={`type-badge ${transaction.type.toLowerCase()}`}>
                  {transaction.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
