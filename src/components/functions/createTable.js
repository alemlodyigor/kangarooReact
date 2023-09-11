export const createTableFunction = (data) => {
  const tableName = data.tableName;
  const tableData = data.tableData;

  if (!Array.isArray(tableData) || tableData.length === 0 || tableName.trim() < 1) return;

  const query = `
    create table ${tableName} (
      ${tableData.map(column => `${column.name} ${column.dataType}`).join(',\n')}
    );
  `

  return query;
};
