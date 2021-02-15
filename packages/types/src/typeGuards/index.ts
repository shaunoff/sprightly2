export const exclude = <T extends Record<string, unknown>, K extends (keyof T)[]>(
  map: T,
  omitted: K,
): { [k: string]: unknown } => {
  return Object.keys(map)
    .filter((k) => !omitted.includes(k))
    .reduce<{ [key: string]: unknown }>((a, k) => ((a[k] = map[k]), a), {})
}
