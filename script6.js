const array = ['4', '4', '4', '4', '4'];
let isFalse = 0;

for(let i = 0; i < array.length-1; i++) {
    if (array[i] !== array[i + 1]) {
        console.log(false);
        isFalse = 1;
        break;
    }
}
if (isFalse === 0)
    console.log(true);
