export const fetcher = async (url: string, method: string) => {
  const res = await fetch(url, {
    method: method,
  });
  const data = await res.json();
  return data;
};
