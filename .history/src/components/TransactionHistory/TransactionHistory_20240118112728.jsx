export const TransactionHistory = ({ id, type, amount, currency }) => {
  return (
    <table className="transaction-history" key={id}>
      <thead>
        <tr>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{type}</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};
