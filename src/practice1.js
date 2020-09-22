// TODO 可以思考一下可否用reduce来做
const parseData = ({ data, column }) => {
    // TODO keys没有太大必要性
    const keys = column.map(col => col.name);

    // TODO 对知识点掌握点挺不错的
    // TODO 一般遍历内参数不使用复数命名（values）
    return data.map(values => {
        const entries = keys.map((key, index) => ({ [key]: values[index] }));
        return Object.assign(...entries);
    })
}
export { parseData };
