export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

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
