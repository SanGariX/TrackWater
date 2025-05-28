const disabledBtn = (date: string, time: string) => {
  const dateArray = date.split(":");
  const timeArray = time.split(":");
  if (
    Number(dateArray[0]) < Number(timeArray[0]) ||
    (Number(dateArray[1]) === Number(timeArray[1]) &&
      Number(dateArray[2]) < Number(timeArray[2])) ||
    Number(dateArray[1]) < Number(timeArray[1])
  ) {
    return true;
  }
  return false;
};
export default disabledBtn;
