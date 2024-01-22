export const Statistics = ({id, label, percentage}) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map(stat => (
            <li class="item">
            <span class="label">.docx</span>
            <span class="percentage">4%</span>
          </li>
        ))}
    </section>
  );
};
