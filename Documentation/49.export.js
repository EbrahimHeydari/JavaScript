// export
// برای فرستادن به سایر ماژول‌ها استفاده می‌شود

function sum(x, y) {
    return x + y
}

function multi(a, b) {
    return a + b;
}

var hello = 'hello imported file';

export default hello;
export { sum, multi }