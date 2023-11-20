// export
// برای فرستادن به سایر ماژول‌ها استفاده میشه

// حالت نام دار
// در این مورد باید نام موجودیت رو موقع اکسپورت بیاریم

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

// میتونیم اکسپورت های نام دار رو موقع اکسپورت تغییرنام بدیم

function sum(x, y) {
	return x + y
}

function multiple(a, b) {
	return a + b
}

export { sum, multiple as multi }

// حالت پیشفرض
// فقط یکی از موجودیت ها رو میشه به صورت پیشفرض اکسپورت کرد

var hello = 'hello imported file'
export default hello

// این روش نمیشه پیش از اعلان متغیر بیاد

// export default var hello = 'hello imported file'        // Error
// export default let hello = 'hello imported file'        // Error
// export default const hello = 'hello imported file'      // Error
