export type CharacterCount = Array<{character: string, count: number, frequency: number}>;

export default function getCharacterCount(text: string): CharacterCount {
  if (text === '') {
    return [];
  }

  const characters = text.split('');
  const result = new Map<string, number>();

  // Count occurrences of each character:
  characters.forEach((character) => {
    const occurrences = result.get(character);
    if (typeof occurrences === 'undefined') {
      result.set(character, 1);
    } else {
      result.set(character, occurrences + 1);
    }
  });

  return [...result.entries()]
    .sort(([, a], [, b]) => b - a)
    .map(([character, count]) => ({character, count, frequency: count / characters.length}));
}
