export function joinClassNames(
  ...parts: Array<string | null | undefined | false>
): string {
  return parts.filter(Boolean).join(" ");
}

