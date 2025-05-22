const filters = {
  category: "books",
  price: "100-500",
  sort: "popular"
};

// 1 Object.entries() и map()
const queryString = Object.entries(filters)
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  .join('&');

console.log(queryString); // "category=books&price=100-500&sort=popular"

// 2 URLSearchParams
const searchParams = new URLSearchParams();
for (const [key, value] of Object.entries(filters)) {
  searchParams.append(key, value);
}
console.log(searchParams.toString()); // "category=books&price=100-500&sort=popular"