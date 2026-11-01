let str1 = 'listen';
let str2 = 'silent';

let sort1 = str1.split('').sort().join(''); // e,i,l,n,s,t
let sort2 = str2.split('').sort().join(''); // e,i,l,n,s,t

if (sort1 === sort2) {
    console.log('anagram');
}

else {
    console.log('Not Anagram')      
}