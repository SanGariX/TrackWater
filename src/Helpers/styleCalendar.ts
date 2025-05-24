const styleCalendar = (number: number, s: any) => {
  if (number >= 0 && number <= 99) {
    return s.have;
  } else if (number > 120) {
    return s.critical;
  }
};
export default styleCalendar;
