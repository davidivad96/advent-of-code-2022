export const partOne = (input: string) => {
  const N = 4;
  for (let i = 0; i < input.length; i++) {
    const characters = Array.from({ length: N }, (_, j) => input[i + j]);
    const uniqueCharacters = new Set(characters);
    if (uniqueCharacters.size === N) {
      return i + N;
    }
  }
};
