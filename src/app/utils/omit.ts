export function omit(obj: { [key: string]: any }, ...props: string[]) {
  const result = { ...obj };
  props.forEach(function (prop) {
    delete result[prop];
  });
  return result;
}
