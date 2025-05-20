// Написать функцию, которая принимает строку в качестве параметра и проверяет содержится ли в ней слово ‘script’
// Сделать двумя вариантами indexOf, includes
// В обоих случаях выводить true\false
// let str1 = "I love Scripting"
// let str2 = "I love Scripting".toLowerCase()
// let str3 = "I love Scripting".toLowerCase().trim();
// let str4 = "I love Scripting".toLowerCase().trim().startsWith();
// let str5 = "I love Scripting".toLowerCase().trim().endsWith();
// let str6  = "https://itacademypvt.clickmeeting.com/gld-fd1-35-25-tat-yana-protskaya_-25_19-05-2025".startsWith();
// let str7  = "https://itacademypvt.clickmeeting.com/gld-fd1-35-25-tat-yana-protskaya_-25_19-05-2025".endsWith();
// console.log(str6.startsWith("com"));
// console.log(str7.endsWith("com"));

// console.log(str1.indexOf("script"));
// console.log(str1.indexOf("cry"));
// // 
// console.log(str2.indexOf("script"));
// console.log(str2.indexOf("cry"));
// // 
// console.log(str3.indexOf("script"));
// console.log(str3.indexOf("cry"));
// //
// console.log(str1.includes("script"));
// console.log(str1.includes("cry"));
// // 
// console.log(str2.includes("script"));
// console.log(str2.includes("cry"));
// // 
// console.log(str3.includes("script"));
// console.log(str3.includes("cry"));

// =========== Правильный подход
function startsWithHttp(url) {
  return url.startsWith('https://itacademypvt.clickmeeting.com/gld-fd1-35-25-tat-yana-protskaya_-25_19-05-2025') || url.startsWith('https://');
}

// Примеры:
console.log(startsWithHttp('http://example.com')); // true
console.log(startsWithHttp('https://google.com')); // true
console.log(startsWithHttp('ftp://files.com'));    // false
// =========== Вариант с регулярным выражением:
function startsWithHttpRegex(url) {
  return /^https?:\/\//i.test(url);
}

//==Проверка, заканчивается ли строка на .com, .by или .ru
function endsWithDomain(url) {
  return url.endsWith('.com') || url.endsWith('.by') || url.endsWith('.ru');
}

// Примеры:
console.log(endsWithDomain('example.com')); // true
console.log(endsWithDomain('website.by')); // true
console.log(endsWithDomain('page.ru'));    // true
console.log(endsWithDomain('site.org'));   // false

// Вариант с регулярным выражением:
function endsWithDomainRegex(url) {
  return /\.(com|by|ru)$/i.test(url);
}

// Улучшенная версия (проверка всего URL):
function isValidUrl(url) {
  return /^https?:\/\/.+(\.com|\.by|\.ru)$/i.test(url);
}

console.log(isValidUrl('https://example.com')); // true
console.log(isValidUrl('http://site.by'));    // true
console.log(isValidUrl('ftp://page.ru'));     // false
console.log(isValidUrl('https://test.org'));   // false

// Все функции возвращают true или false. Вы можете выбрать любой вариант в зависимости от потребностей. Первые варианты (startsWith/endsWith) более читаемы, а регулярные выражения дают больше гибкости.