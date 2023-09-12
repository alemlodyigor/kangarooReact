export const insert = (data) => {
    if (!Array.isArray(data.tableData) || data.tableData.length === 0) return;
    const {tableData} = data;
    console.log(tableData);
    const columns = Object.keys(tableData[0]);

    const insertValues = tableData.map(row => {
        const values = columns.map(column => {
            const value = row[column];
            return typeof value === 'string ' ? `'${value}'` : value;
        })
        return `(${values.join(', ')})`;
    }).join(',\n');

    const query = `INSERT INTO ${data.tableName} (${columns.join(', ')}) VALUES\n${insertValues}`;
    return query;
}