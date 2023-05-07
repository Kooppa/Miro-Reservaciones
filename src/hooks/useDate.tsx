
export const useDate = () => {

  const currentDate = new Date();

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const plusOneMonthFromToday = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));

  const firstDayOfMonthFormatted = `${firstDayOfMonth.getFullYear()}-${(firstDayOfMonth.getMonth() + 1 ).toString().padStart(2, '0')}-01`;
  const lastDayOfMonthFormatted = `${lastDayOfMonth.getFullYear()}-${(lastDayOfMonth.getMonth() + 1 ).toString().padStart(2, '0')}-${lastDayOfMonth.getDate().toString().padStart(2, '0')}`;
  const currentDateFormatted = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1 ).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
  const plusOneMonthFormatted = `${plusOneMonthFromToday.getFullYear()}-${(plusOneMonthFromToday.getMonth() + 1 ).toString().padStart(2, '0')}-${plusOneMonthFromToday.getDate().toString().padStart(2, '0')}`;

  return {
    firstDayOfMonthFormatted,
    lastDayOfMonthFormatted,
    currentDateFormatted,
    plusOneMonthFormatted,
  };

};
