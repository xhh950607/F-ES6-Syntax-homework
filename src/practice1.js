const parseData = ({ data, column }) => {
    const keys = column.map(col => col.name);

    return data.map(values => {
        const entries = keys.map((key, index) => ({ [key]: values[index] }));
        return Object.assign(...entries);
    })
}
export { parseData };
