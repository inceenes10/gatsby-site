

function capitalize(str) {
    if (typeof str !== "string") return "";

    return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

export default capitalize;