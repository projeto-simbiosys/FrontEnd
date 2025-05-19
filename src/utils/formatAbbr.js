export default function formatAbbr(str) {
  if (!str) return "";
  return str.substring(0, 3);
}
