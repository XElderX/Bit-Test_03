/* #1 */

/* let a = 5
let b = 6

if(a-b==0){
    console.log("skaiciai: ",a,"ir",b,"yra lygus")
}
else if (a-b<0){
    console.log(b,"skaicius yra didesnis uz skaiciu -",a)
}
else{
    console.log(a,"skaicius yra didesnis uz",b)
} */

/* #2 */

/* for (i=1; i>=0 && i<=10; i++){
    console.log(i)
} */

/* #3 */

/* for (i=0; i>=0 && i<=10; i+=2){
    console.log(i)
}  */

/* #4 */

/* 
for(i=0; i<5; i++){
        console.log(Math.floor(Math.random()*(10-1+1)+1))
} */

/* #5 */

/* let n
do{
    n=Math.floor(Math.random()*(10-1+1)+1);
    console.log(n)
} while(n!==5); */


/* #6 */


/* let a=[29, 30, 10, 12, 11, 27, 16, 26, 28, 25, 24, 13, 15, 23, 14, 18, 16, 20, 17, 19, 21]

let b=0 ///didziausias skaicius

for (let i=0; i < a.length; i++){
    if(a[i] > b){
        b=a[i];
    }
}
console.log("didziausia masyvo reiksme yra:",b)
 */

/* #7 */

/* let a=[]


for(let i=0; i<100; i++){
    z=Math.floor(Math.random()*(4-1+1)+1);
    switch(z){
        case 1:
            a.push("A")
            break;
            case 2:
            a.push("B")
            break;
            case 3:
            a.push("C")
            break;
            case 4:
            a.push("D")
            break;
    }
}

console.log(a)


 */


/* #8 */

/* #9 */

function pirminisSkaicius(n){
    if(typeof n =='number' && (n/n==1)){
        return (n, "skaicius yra pirminis")
    }
    else {
        return ("tai nera pirminis skaicius")
    }
}
console.log(pirminisSkaicius(4.41))

