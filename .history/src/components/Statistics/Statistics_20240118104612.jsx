export const Statistics = ({ id, label, percentage }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item">
            <span className="label">.docx</span>
            <span className="percentage">4%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
