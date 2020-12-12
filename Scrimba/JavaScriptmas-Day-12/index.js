function formatTime(time) {
  const [h, m] = time.split(':');

  const hours = parseInt(h);
  const minutes = parseInt(m);
  return {
    hours,
    minutes,
  };
}

function validTime(str) {
  const time = formatTime(str);

  return (
    time.hours >= 0 && time.hours < 24 && time.minutes >= 0 && time.minutes < 60
  );
}

module.exports = validTime;
