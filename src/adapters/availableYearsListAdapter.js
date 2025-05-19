export default function availableYearsListAdapter() {
  const yearBase = 2025;
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - yearBase;

  const years = Array.from({ length: yearDiff + 1 }, (_, i) => ({
    year: yearBase + i,
  }));

  return years?.sort((current, next) => next - current).map(item => item.year);
}
