const total = 105;
const records = [];
for (let i = 0; i < total; i++) {
  records.push({
    id: i + 1,
    name: `User ${i + 1}`,
    age: i + 25,
    city: `City ${i + 1}`
  });
}
export function backend({ limit, offset, filters }) {
  const filterKeys = Object.keys(filters);
  let data = [];
  if (filterKeys.length > 0) {
    data = records.filter(row => {
      let result = true;
      for (let i = 0; i < filterKeys.length; i++) {
        const key = filterKeys[i];
        if (!filters[key]) {
          continue;
        }
        if (row[key] !== filters[key]) {
          return false;
        }
      }
      return result;
    });
  }
  const total = data.length;
  data = data.filter((row, i) => i >= offset && i < offset + limit);

  return Promise.resolve({
    total,
    data
  });
}
