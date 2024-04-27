/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}
function isWeekend(day: DayWeek): boolean {
  return day === DayWeek.Wednesday || day === DayWeek.Saturday;
}
console.log(isWeekend(DayWeek.Saturday));

export {};