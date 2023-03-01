"use strict";

function getWeekDay(date) {
  let dayOfTheWeek = date.getDay();

  switch (dayOfTheWeek) {
    case 0:
      dayOfTheWeek = "ВС";
      break;
    case 1:
      dayOfTheWeek = "ПН";
      break;
    case 2:
      dayOfTheWeek = "ВТ";
      break;
    case 3:
      dayOfTheWeek = "СР";
      break;
    case 4:
      dayOfTheWeek = "ЧТ";
      break;
    case 5:
      dayOfTheWeek = "ПТ";
      break;
    case 6:
      dayOfTheWeek = "СБ";
      break;
  }
  
  return dayOfTheWeek;
}

let date = new Date(2012, 0, 3);
alert( getWeekDay(date) ); 

/* Второй вариант
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
*/