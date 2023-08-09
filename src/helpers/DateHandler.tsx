export const SECONDS_UNIT = 'seconds';
export const MINUTES_UNIT = 'minutes';
export const HOURS_UNIT = 'hours';
export const DAYS_UNIT = 'days';
export const MONTHS_UNIT = 'months';
export const YEARS_UNIT = 'years';

type TimeUnits = 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years';

export function removeTime(date: Date, amount: number, unit: TimeUnits): Date {
  const timeInMilliseconds = {
    seconds: amount * 1000,
    minutes: amount * 60 * 1000,
    hours: amount * 60 * 60 * 1000,
    days: amount * 24 * 60 * 60 * 1000,
    months: amount * 30 * 24 * 60 * 60 * 1000,
    years: amount * 365 * 24 * 60 * 60 * 1000,
  };

  return new Date(date.getTime() - timeInMilliseconds[unit]);
}

export function formatDate(date: Date): string {
  const months: string[] = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const day: number = date.getDate();
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  return `${day} de ${month} de ${year} às ${hours}:${minutes}`;
}

export function formatTimeDifference(publishedAt: Date): string {
  const now: Date = new Date();
  const timeDiff: number = now.getTime() - publishedAt.getTime();

  const minute: number = 60 * 1000;
  const hour: number = 60 * minute;
  const day: number = 24 * hour;
  const month: number = 30 * day;
  const year: number = 365 * day;

  let result = 0;

  if (timeDiff < minute) {
    result = Math.floor(timeDiff / 1000);
    return result === 1 ? `${result} segundo` : `${result} segundos`;
  } else if (timeDiff < hour) {
    result = Math.floor(timeDiff / minute);
    return result === 1 ? `${result} minuto` : `${result} minutos`;
  } else if (timeDiff < day) {
    result = Math.floor(timeDiff / hour);
    return result === 1 ? `${result} hora` : `${result} horas`;
  } else if (timeDiff < month) {
    result = Math.floor(timeDiff / day);
    return result === 1 ? `${result} dia` : `${result} dias`;
  } else if (timeDiff < year) {
    result = Math.floor(timeDiff / month);
    return result === 1 ? `${result} mês` : `${result} meses`;
  } else {
    result = Math.floor(timeDiff / year);
    return result === 1 ? `${result} ano` : `${result} anos`;
  }
}
