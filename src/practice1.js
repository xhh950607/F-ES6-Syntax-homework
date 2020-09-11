const parseData = ({ data, column }) => {
    const keys = column.map(col => col.name);

    return data.map(values => {
        const entries = keys.map((key, index) => [key, values[index]]);
        return Object.fromEntries(entries);
    })

    // return data.map(values => {
    //     const res = {};
    //     keys.forEach((key, index) => res[key] = values[index]);
    //     return res;
    // })
}
export { parseData };
