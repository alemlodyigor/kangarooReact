export const insert = (data) => {
    if (!Array.isArray(data) || data.length === 0) return;

    const columns = Object.keys(data[0]);

    const insertValues = data.map(row => {
        const values = columns.map(column => {
            const value = row[column];
            return typeof value === 'string ' ? `'${value}'` : value;
        })
        return `(${values.join(', ')})`;
    }).join(',\n');

    const query = `INSERT INTO ${data.tableName} (${columns.join(', ')}) VALUES\n${insertValues}`;
    return query;
}