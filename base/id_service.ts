const repeat = (stringR: string, count: number): string => {
  let res = "";
  if (count < 0) return "";
  for (let i = 0; i < count; i++) {
    res += stringR;
  }
  return res;
};
export default function CreateID(
  decimal: number = 3,
  prefix: string = "",
  baseArr: any[] = [],
  lastIndex: number = 0
): string {
  const newIndex = lastIndex + 1;
  const defaultDecimal = "0";
  if (!baseArr.length)
    return `${prefix.toUpperCase()}${repeat(
      defaultDecimal,
      decimal - newIndex.toString().length
    )}${newIndex}`;
  let arr = [...baseArr];
  let res = "";
  let lastElement = arr.pop();
  res = `${prefix.toUpperCase()}${repeat(
    defaultDecimal,
    decimal - newIndex.toString().length
  )}${lastElement.ID}`;

  return res;
}
