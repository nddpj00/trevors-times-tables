// Retrieve highScores from localStorage if they exist, or use the default values
//
export const highScores = JSON.parse(
  localStorage.getItem("highScoresData")
) || [
  { 1: 0 },
  { 2: 0 },
  { 3: 0 },
  { 4: 0 },
  { 5: 0 },
  { 6: 0 },
  { 7: 0 },
  { 8: 0 },
  { 9: 0 },
  { 10: 0 },
  { 11: 0 },
  { 12: 0 },
];
