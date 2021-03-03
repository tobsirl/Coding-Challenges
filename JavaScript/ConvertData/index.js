const obj = {
  start_minute: 90,
  end_minute: 210,
  days: [0, 1, 2],
};

const s = 'days';

function getDays(obj) {
  const { key, value } = obj;

  return `Key ${key} Value ${value}`; //?
}

getDays(obj);

const arr = [...obj.days];

arr.map((el) => {
  if (el === 0) {
  }
}); //?

// obj.days.push(obj.start_minute)
// obj.days.push(obj.end_minute)

obj.days; //?

const days = 'days';
const test = obj[days].map((d) => {
  let arrTest = []
  let key
  let value = obj.start_minute
  if (d === 0) {
    key = 'Sunday';
  }
  if (d === 1) {
    key = 'Monday';
  }
  if (d === 2) {
    key = 'Tuesday';
  }

  if (d === 3) {
    key = 'Wednesday';
  }

  return {
    [key]: arrTest[0].start_minute = value,
  };
});

const key = 'Sunday';

test; //?

Object.values(test); //?

const covertedObj = Object.entries(obj).map((data) => {
  const x = 'days';
  const value = data[x];
  return value;
});

covertedObj; //?

function convert(obj) {
  const arr = [...obj.days];

  const newObj = arr.map((day) => {
    let key;
    if (day === 0) {
      key = 'Sunday';
    }

    if (day === 1) {
      key = 'Monday';
    }

    if (day === 2) {
      key = 'Tuesday';
    }

    return {
      [key]: [],
    };
  });
  return newObj;
}

const [sunday, monday, tuesday] = convert(obj); //?

const t = sunday;

t.Sunday.push(obj.start_minute);

sunday; //?

// convert to
const converted = {
  Sunday: [{ start_minute: 90, end_minute: 210 }],
  Monday: [{ start_minute: 90, end_minute: 210 }],
  Tuesday: [{ start_minute: 90, end_minute: 210 }],
};
