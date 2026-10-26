import { questions } from './data/questions.js';

const expected = {
  'Prepare the data': 130,
  'Model the data': 140,
  'Visualize and analyze the data': 130,
  'Manage and secure Power BI': 120
};
const ids = new Set();
const stems = new Set();
const counts = {};
const errors = [];
for (const q of questions) {
  counts[q.domain] = (counts[q.domain] || 0) + 1;
  if (ids.has(q.id)) errors.push(`Duplicate ID: ${q.id}`);
  ids.add(q.id);
  if (stems.has(q.question)) errors.push(`Duplicate question text: ${q.id}`);
  stems.add(q.question);
  if (!q.question || !q.explanation || !Array.isArray(q.options) || q.options.length !== 4) errors.push(`Incomplete question: ${q.id}`);
  if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some(i => !Number.isInteger(i) || i < 0 || i >= q.options.length)) errors.push(`Invalid answer key: ${q.id}`);
  if (!Object.hasOwn(expected, q.domain)) errors.push(`Unknown domain: ${q.id}`);
}
for (const [domain, expectedCount] of Object.entries(expected)) {
  if (counts[domain] !== expectedCount) errors.push(`${domain}: expected ${expectedCount}, found ${counts[domain] || 0}`);
}
if (questions.length !== 520) errors.push(`Expected 520 questions, found ${questions.length}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Question bank validation passed: ${questions.length} questions, ${stems.size} unique question stems.`);
console.log(counts);
