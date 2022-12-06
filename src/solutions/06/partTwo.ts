export const partTwo = (input: string) => {
  const N = 14;
  for (let i = 0; i < input.length; i++) {
    const characters = input.split("").slice(i, i + N);
    const uniqueCharacters = new Set(characters);
    if (uniqueCharacters.size === N) {
      return i + N;
    }
  }
};
