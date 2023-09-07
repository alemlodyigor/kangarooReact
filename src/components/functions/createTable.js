export const createTable = (data) => {
  if (!Array.isArray(data) || data.length === 0) return;

  const columns = Object.keys(data[0]);

  const query = `
    create table ${data.tableName} (
      ${columns.map(column => `${column.dataType}`).join(',\n')}
    );
  `
  return query;
};
