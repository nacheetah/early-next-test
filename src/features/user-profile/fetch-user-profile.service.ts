const getDataProperty = (res: any) => {
  return res.json();
};

export function fetchCurrentUserProfile(name: string) {
  const res = fetch(
    `https://jsonplaceholder.typicode.com/users?email=${name}`
  ).then(getDataProperty);
  return res;
}
