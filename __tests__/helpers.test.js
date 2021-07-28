const format_plural = require('../utils/helpers');

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('tomato', 1);
  const word2 = format_plural('bread', 2);

  expect(word1).toBe('tomato');
  expect(word2).toBe('breads');
});