export type WordCount = Array<{word: string, count: number, frequency: number}>;

export default function getWordCount(text: string): WordCount {
  if (text === '') {
    return [];
  }

  const words = text.split(/\W+/gi); // Poor man's tokenizer
  const result = new Map<string, number>();

  // Count occurrences of each word:
  words.forEach((word) => {
    const occurrences = result.get(word);
    if (typeof occurrences === 'undefined') {
      result.set(word, 1);
    } else {
      result.set(word, occurrences + 1);
    }
  });

  return [...result.entries()]
    .sort(([, a], [, b]) => b - a)
    .map(([word, count]) => ({word, count, frequency: count / words.length}));
}
