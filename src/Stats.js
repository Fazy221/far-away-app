export default function Stats({ items }) {
  const total = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  // const totalPacked = packedItem.length;
  const packedPercentage =
    total > 0 ? Math.round((packedItem / total) * 100) : 0;
  return (
    <div className="stats">
      Total Items are {total} and packed are {packedItem} ({packedPercentage}%){" "}
    </div>
  );
}
