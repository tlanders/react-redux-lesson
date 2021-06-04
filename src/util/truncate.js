// for truncating note content
const truncate = (content = '', length = 50) =>
    `${content.substr(0, length)}${content.length > length ? '...' : ''}`;

export default truncate;