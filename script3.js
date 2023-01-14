const str = 'How do you do';
let strRev = [];

for (let i = str.length; i >=0; i--){
    strRev[str.length-i] = str.charAt(i);
}
console.log(strRev.join(''));