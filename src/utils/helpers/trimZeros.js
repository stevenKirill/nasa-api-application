export function trimZeros(str) {
    if(str[0] === '0') {
        return str.slice(1);
    } else {
        return str;
    }
}