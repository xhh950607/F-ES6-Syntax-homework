const inject = (items, sections) => {
    sections.sort((a, b) => a.index - b.index)

    let i = 0;
    sections.forEach(section => {
        items.splice(section.index + i, 0, section.content);
        i++;
    });
    return items;
}
export { inject };