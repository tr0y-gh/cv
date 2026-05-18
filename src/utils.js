export const $ = {
  one: (...selectors) => document.querySelector(...selectors),
  all: (...selectors) => document.querySelectorAll(...selectors),
}
export function format(str, ...args) {
  return str.replace(/%s/g, () => args.shift())
}
