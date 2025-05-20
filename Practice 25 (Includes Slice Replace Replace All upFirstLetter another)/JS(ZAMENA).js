function parseUrl(url) {
  // Используем конструктор URL для разбора (поддерживает http/https/ftp и другие протоколы)
  const urlObj = new URL(url);
  
  return {
    // A) Полный путь (без якоря, если не нужен)
    fullPath: urlObj.origin + urlObj.pathname + urlObj.search,
    
    // Б) Протокол (без двоеточия и слешей)
    protocol: urlObj.protocol.replace(':', ''),
    
    // В) Домен (хост)
    domain: urlObj.hostname,
    
    // Г) Якорь (хэш, без #)
    hash: urlObj.hash.slice(1)
  };
}

// Примеры использования:
const url1 = parseUrl("https://www.example.com/path?query=123#hash");
console.log("A) Полный путь:", url1.fullPath); // "https://www.example.com/path?query=123"
console.log("Б) Протокол:", url1.protocol);    // "https"
console.log("В) Домен:", url1.domain);        // "www.example.com"
console.log("Г) Якорь:", url1.hash);          // "hash"

const url2 = parseUrl("ftp://yandex.ru");
console.log("\nA) Полный путь:", url2.fullPath); // "ftp://yandex.ru/"
console.log("Б) Протокол:", url2.protocol);     // "ftp"
console.log("В) Домен:", url2.domain);          // "yandex.ru"
console.log("Г) Якорь:", url2.hash);            // ""

const url3 = parseUrl("http://www.youtube.com?query=123");
console.log("\nA) Полный путь:", url3.fullPath); // "http://www.youtube.com/?query=123"
console.log("Б) Протокол:", url3.protocol);     // "http"
console.log("В) Домен:", url3.domain);          // "www.youtube.com"
console.log("Г) Якорь:", url3.hash);            // ""

// Альтернатива
function parseUrlLegacy(url) {
  // Ручной разбор через регулярные выражения
  const match = url.match(/^(.*?):\/\/([^\/?#]+)([^?#]*)(\?[^#]*)?(#.*)?$/);
  
  return {
    fullPath: match[1] + '://' + match[2] + (match[3] || '') + (match[4] || ''),
    protocol: match[1],
    domain: match[2],
    hash: match[5] ? match[5].slice(1) : ''
  };
}
