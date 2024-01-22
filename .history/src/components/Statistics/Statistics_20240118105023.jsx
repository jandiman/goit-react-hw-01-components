export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item">
            <span className="label">{stat.id}</span>
            <span className="percentage">{stat.per}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
