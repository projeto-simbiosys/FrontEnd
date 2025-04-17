export default function availableYearsListAdapter(listYears) {
  const list = listYears?.map(year => year);

  return list?.sort((current, next) => next - current);
}
