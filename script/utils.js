export function getURLParams() {
    const params = {};
    const searchParams = window.location.search.slice(1).split('&');
    for (const param of searchParams) {
        const [key, value] = param.split("=");
        params[key] = value;
    }
    return params;
}
export function getDate(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
}
