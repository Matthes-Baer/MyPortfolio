export const get_expiration_date: () => Date = (): Date => {
  const oneYearInSeconds: number = 365 * 24 * 60 * 60;
  const expirationDate: Date = new Date(Date.now() + oneYearInSeconds * 1000);

  return expirationDate;
};
