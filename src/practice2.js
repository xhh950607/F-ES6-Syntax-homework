// TODO 挺不错的，思路正确简洁，且没有逻辑纰漏
const inject = (items, sections) => {
    sections.sort((a, b) => a.index - b.index)

    // TODO 这里没有必要声明i，forEach内函数第二个参数就是index
    let i = 0;
    sections.forEach(section => {
        items.splice(section.index + i, 0, section.content);
        i++;
    });
    return items;
}
export { inject };