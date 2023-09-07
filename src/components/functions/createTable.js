export const createTable = (props) => {
  return `
        create table ${props.tableName} (
            ${props.tableData.forEach((e) => {
              return `${e.rowName} ${e.rowType}`;
            })}
        )
    `;
};
