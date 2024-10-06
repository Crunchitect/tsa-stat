export function dotIndex(obj: { [k: string | number | symbol]: any }, attr: string) {
    let currObj = obj;
    attr.split('.').forEach((part) => {
        if (currObj == null) return '-';
        currObj = currObj[part];
    });
    return currObj;
}

export function dotCheck(obj: { [k: string | number | symbol]: any }, attr: string) {
    let currObj = obj;
    try {
        attr.split('.').forEach((part) => {
            currObj = currObj[part];
        });
    } catch {
        return false;
    }
    return true;
}

export function dotAll(obj: { [k: string | number | symbol]: any }) {
    const keys: string[] = [];
    Object.keys(obj).forEach((key) => keys.push(key));
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            dotAll(obj[key]).forEach((xkey) => keys.push(xkey));
        }
    }
    return keys;
}
