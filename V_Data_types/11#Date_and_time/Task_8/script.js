"use strict";


function formatDate(date) {
  let currentTime = Date.now();
  let difference = currentTime - date;
  
  if (difference < 1000) {
    return 'прямо сейчас';
  } else if (difference < 60000) {
    return `${Math.floor(difference / 1000)} сек. назад`;
  } else if (difference < 3600000) {
    return `${Math.floor(difference / (60 * 1000))} мин. назад`;
  } else {
    let d = date;
	  d = [
	    '0' + d.getDate(),
	    '0' + (d.getMonth() + 1),
	    '' + d.getFullYear(),
	    '0' + d.getHours(),
	    '0' + d.getMinutes()
	  ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
	}
   
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );