const links = document.querySelectorAll("a");
console.log(links);
console.log(Array.isArray(links));

const loginLinks = [...links].filter(link => link.textContent === "Login"); // [a, a]
console.log(loginLinks);
console.log(Array.isArray(loginLinks));