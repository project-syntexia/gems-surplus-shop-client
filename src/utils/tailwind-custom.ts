/**
 * Joins an array of strings with spaces, but only if the string is not empty.
 * Derive from [Tailwind using-tailwinds-important-modifier](https://github.com/dcastil/tailwind-merge/blob/v2.5.2/docs/when-and-how-to-use-it.md#using-tailwinds-important-modifier)
 * as a lightweight alternative.
 */
export function join(...args: string[]) {
  return args.filter(Boolean).join(" ");
}
