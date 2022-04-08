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
let aa=0
let bb=0
let cc=0
let dd=0

for(i=0; i<=99; i++){
    if(a[i]==="A"){
        aa++
    }
    else if(a[i]==="B"){
        bb++
    }
    else if(a[i]==="C"){
        cc++
    }
    else {
        dd++
    }
}
console.log("Sugeneruoto masyvo reiksmes:",a)
console.log("A -reiksmiu masyve: ",aa)
console.log("B -reiksmiu masyve: ",bb)
console.log("C -reiksmiu masyve: ",cc)
console.log("D -reiksmiu masyve: ",dd)
 */

/* #8 */

function lygineSuma (a,b){
   
    if(typeof a === typeof b && (Array.isArray(a)===true || typeof a==='number')){
        if(typeof a==='number'){
           let z=(a+b)
           if(z%2!==0){
               return("Suma: "+z+";"+" suma yra nelygine")
           }
           else{
               return("Suma: "+z)
           }
        }
        else{
          let z=a.concat(b).length
          if(z%2!==0){
              return("Sudejus masyvus ju ilgis yra: "+z+"; Sis ilgis yra nelyginis")
          }
          else{
              return("Sudejus masyvus ju ilgis yra: "+z)
          }
            
        }
    }
    else{
        return("pateikti kintamieji nera vienodo tipo")
    }
   
}
console.log(lygineSuma([4,5,6],[1,4,7,7]))

/* #9 */

/* function pirminisSkaicius(n){

    if(typeof n =='number'){
        for(let i=2; i <n;i++)
    {
        if(n % i == 0){
            return (n, "skaicius yra pirminis")
        }
        else {
            return ("tai nera pirminis skaicius")
        }
    }
    }
    else {
        return ("tai nera skaicius")
    }
   
}
console.log(pirminisSkaicius("2"))

 */



/* #10 */

/* function telefonoNumeris (n) {
    if(Array.isArray(n)== true){
        if(n.length===10)
        {
            for(let i=0; i<10; i++){
                if (typeof n[i]==='number'){ 
                }
                else{
                    return ("masyve nevisi skaiciai yra skaiciai")
                }
            }
        }
        else{
            return("masyvas yra per ilgas/trumpas")
        }
    }
    else{
        return("Tai nera masyvas")
    }
    let telNumeris = "("
    for (x=0;x<3;x++){
        telNumeris+=+n[x]
    }
    telNumeris+=")"+" "

    for(x=3;x<6;x++){
        telNumeris+=+n[x]
    }
    telNumeris+=" "
    for(x=6;x<10;x++){
        telNumeris+=n[x]
    }
    return(telNumeris)

}
let z =[3, 7, 0, 6, 1, 4, 4, 9, 0, 9]
console.log(telefonoNumeris(z)) */
