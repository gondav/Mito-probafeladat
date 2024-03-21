const getMonth = (date: Date): string => {
  return date.toLocaleString('en-US', { month: 'short' });
};

const getDay = (date: Date): string => {
  return date.getDate().toString();
};

const formatTime = (time: Date): string => {
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const getDayName = (date: Date): string => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
};

export { getMonth, getDay, formatTime, getDayName };
