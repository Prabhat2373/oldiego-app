export const getAcronym = (name: string | undefined) => {
  if (!name) return "";
  const nameArray = name.split(" ");
  const initials = nameArray.map((word) => word[0]).join("");
  return initials.toUpperCase();
};
