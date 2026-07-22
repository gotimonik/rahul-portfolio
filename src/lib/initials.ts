/** Derives up-to-`maxLength` initials from a full name, e.g. "Rahul Goti" -> "RG". */
export function getInitials(name: string, maxLength = 2) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, maxLength)
    .toUpperCase();
}
