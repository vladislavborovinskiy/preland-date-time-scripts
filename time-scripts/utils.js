// Опции для форматирования дат
export const optionsDownload = {day: '2-digit', month: '2-digit', year: 'numeric'};
export const optionsTime = {hour: '2-digit', minute: '2-digit'};
export const optionsWeeks = {weekday: 'long'};

// Функция для расчета даты, времени и дня недели
export const contentDate = (addHours, t, format) => {
  let quantityHours = -24;
  let OldDate = new Date();
  let hours = OldDate.getHours();
  let minutes = OldDate.getMinutes();
  let random = Math.floor(Math.random() * 20);

  if (hours < 9) {
    quantityHours = -24 + 8;
  }
  if (hours > 19) {
    quantityHours = -24 - 6;
  }
  OldDate.setHours(hours + addHours + quantityHours);
  OldDate.setMinutes(minutes + random);
  let options = t;
  let newdate = OldDate.toLocaleDateString(format, options);

  return newdate;
};

export const formatDate = (date, locale, monthType = 'long') => {
  return date.toLocaleString(locale || dateLocaleCode, {
    month: monthType,
    day: 'numeric',
    year: 'numeric',
  });
};

// Функция для расчета даты комментариев
export const commentsDate = (addMinutes, t, format) => {
  let commentOldDate = new Date();
  let minutes = commentOldDate.getMinutes();
  let random = Math.floor(Math.random() * 10);

  commentOldDate.setMinutes(minutes + addMinutes + random);
  let options = t;
  let commentNewDate = commentOldDate.toLocaleDateString(format, options);
  return commentNewDate;
};
