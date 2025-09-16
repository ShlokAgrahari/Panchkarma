
const NutritionInfo = ({ nutrients }) => {
  if (!nutrients || nutrients.length === 0) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        textAlign: "left",
        maxWidth: "400px",
        marginInline: "auto",
      }}
    >
      <h4>Nutrition Info:</h4>
      <ul>
        {nutrients.map((n, idx) => (
          <li key={idx}>
            {n.nutrientName}: {n.value} {n.unitName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionInfo;
