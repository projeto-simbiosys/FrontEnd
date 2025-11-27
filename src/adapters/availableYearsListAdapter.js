export default function availableYearsListAdapter() {
  const yearBase = 2025;
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - yearBase;

  const years = Array.from(
    { length: yearDiff + 1 },
    (_, i) => yearBase + i
  ).sort((a, b) => b - a);

  return ["todos", ...years];
}
