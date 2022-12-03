import { isUpper } from "../../utils";

export const magicNumbers = {
  upper: 38,
  lower: 96,
};

export const getPriority = (char: string) =>
  char.charCodeAt(0) -
  (isUpper(char) ? magicNumbers.upper : magicNumbers.lower);
