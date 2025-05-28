const disabledMonthBtn = (date: string, time: string) => {
  const disabledDate = date.split(":");
  const disabledTime = time.split(":");
  if (
    Number(disabledDate[0]) < Number(disabledTime[0]) ||
    Number(disabledDate[1]) <= Number(disabledTime[1])
  ) {
    return true;
  }
  return false;
};
export default disabledMonthBtn;
