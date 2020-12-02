const s = window.localStorage;
export const setCache = (k: string, v: any, type = "string") => {
  if (type === "object") {
    s.setItem(k, JSON.stringify(v));
  } else {
    s.setItem(k, v);
  }
};

export const getCache = (k: string, type = "string") => {
  if (type === "object") {
    const v = s.getItem(k);
    if (v) {
      return JSON.parse(v);
    }
    return "";
  }
  return s.getItem(k);
};
