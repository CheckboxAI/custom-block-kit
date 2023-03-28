import type { Option } from "./types";

export const sortOptions = (a: Option, b: Option) => {
  const la = a.label.toLowerCase(),
    lb = b.label.toLowerCase();
  if (la < lb) {
    return -1;
  }
  if (la > lb) {
    return 1;
  }
  return 0;
};
