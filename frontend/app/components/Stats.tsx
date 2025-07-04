export default function Stats() {
  const stats = [
    {
      title: "总访问量",
      value: "25.6K",
      change: "↗︎ 400 (22%)",
      color: "primary"
    },
    {
      title: "新用户",
      value: "2.6M",
      change: "↗︎ 1800 (14%)",
      color: "secondary"
    },
    {
      title: "满意度",
      value: "98%",
      change: "↗︎ 2% (12%)",
      color: "accent"
    }
  ];

  return (
    <div className="stats shadow mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          <div className="stat-title text-base-content">{stat.title}</div>
          <div className={`stat-value text-${stat.color}`}>{stat.value}</div>
          <div className="stat-desc text-base-content">{stat.change}</div>
        </div>
      ))}
    </div>
  );
} 