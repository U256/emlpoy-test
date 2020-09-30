export function indexOfElem(el) {
  if (!el) return -1;
  let i = 0;
  do {
    i++;
  } while ((el = el.previousElementSibling));
  return i - 1;
}
