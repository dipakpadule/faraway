function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your list🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything lets go !"
          : `You have ${numItems} items on list, you have packed ${numPacked}
          items(${percentage}%)`}
      </em>
    </footer>
  );
}
export default Stats;
