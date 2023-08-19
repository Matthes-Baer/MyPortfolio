export const get_expiration_date: () => Date = (): Date => {
  const oneDayInSeconds: number = 24 * 60 * 60;
  const expirationDate: Date = new Date(Date.now() + oneDayInSeconds);

  return expirationDate;
};
