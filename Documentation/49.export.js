// export
// برای فرستادن به سایر ماژول‌ها استفاده می‌شود

// حالت نام دار
// در این مورد باید نام موجودیت را موقع اکسپورت بیاریم

// روش اول
// export function sum(x, y) {
//     return x + y
// }
// export function multi(a, b) {
//     return a + b
// }

// روش دوم
// function sum(x, y) {
//     return x + y
// }
// function multi(a, b) {
//     return a + b
// }
// export { sum, multi }

// می توان اکسپورت های نام دار را هنگام اکسپورت تغییرنام داد

function sum(x, y) {
	return x + y
}

function multiple(a, b) {
	return a + b
}

export { sum, multiple as multi }

// حالت پیشفرض
// فقط یکی از موجودیت ها را می توان به صورت پیشفرض اکسپورت کرد

var hello = 'hello imported file'
export default hello

// این روش نمی تواند پیش از اعلان متغیر بیاید

// export default var hello = 'hello imported file'        // Error
// export default let hello = 'hello imported file'        // Error
// export default const hello = 'hello imported file'      // Error
