const words = ['agus', 'aren', 'ari sandi', 'awaludin', 'arie akbar']
const result = words.filter(word => word.length > 6);
console.log(result);
// output: ["ari sandi", "awaludin", "arie akbar"]


const names = ['agus', 'aren', 'ari sandi', 'awaludin', 'arie akbar']
const hasil = names.filter((name) => name.includes("w"));
console.log(hasil);
// output: ["ari sandi", "awaludin", "arie akbar"]