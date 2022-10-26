
//Pirma
console.log("Pirma uzd---------------------");
let name = "Evelina";
let surname = "Venckute";
let born = 1996;
let currentYear = 2022;
//let currentYear = new Date().getFullYear();
console.log("Aš esu " + name + " " + surname + ". " + "Man yra " + (currentYear - born) + " metai");


//Antra

console.log("Antra uzd---------------------");
let value1 = Math.round(Math.random() * 5);
let value2 = Math.round(Math.random() * 5);
if (value1 != 0 && value2 != 0) {
    if (value1 > value2) {
        console.log("Value 1 bigger than value 2");
        console.log(result1 = value1 / value2);
    }
    else {
        console.log("Value 2 bigger than value 1");
        result2 = value2 / value2;
    }
}
else {
    console.log("Dalyba is 0 negalima");

}

//console.log(Math.round(result1));
//console.log(Math.round(result1 * 100));
//console.log(Math.round(result1 * 100) / 100);

//console.log(Math.round(result2));
//console.log(Math.round(result2 * 100));
//console.log(Math.round(result2 * 100) / 100);

//Trecia

console.log("Trecia uzd---------------------");

let a = Math.round(Math.random() * 5);
let b = Math.round(Math.random() * 5);
let c = Math.round(Math.random() * 5);

if ((a < b && b < c) || (a > b && b > c)) {
    console.log("Average num is " + b);
}

if ((b > c && c < b) || (c > a && c > a)) {
    console.log("Average num is " + c);
}

if ((a < b && a < c) || (c < a && b < c)) {
    console.log("Average num is " + a);
}

console.log("Ketvirta uzd---------------------");


let d = 1 + Math.round(Math.random() * (10 - 1));
console.log("Pirma krastine " + d);
let e = 1 + Math.round(Math.random() * (10 - 1));
console.log("Antra krastine " + e);
let f = 1 + Math.round(Math.random() * (10 - 1));
console.log("Trecia krastine " + f);

if ((d + e) > f && (f + e) > d && (d + f) > e) {
    console.log("Galima sudaryti trikampi");
} else {
    console.log("Negalima sudaryti trikampio");
}


console.log("Penkta uzd---------------------");

let g = Math.round(Math.random() * 2);
let h = Math.round(Math.random() * 2);
let z = Math.round(Math.random() * 2);
let x = Math.round(Math.random() * 2);

console.log("Šešta uzd---------------------");

let first = (-10) + Math.round(Math.random() * 20);
let second = (-10) + Math.round(Math.random() * 20);
let third = (-10) + Math.round(Math.random() * 20);

if ((first > 0) || (first === 0)) {
    console.log("a = {" + first + "}");
} else {
    console.log("a = [" + first + "]");
}

if ((second > 0) || (second === 0)) {
    console.log("a = {" + second + "}");
} else {
    console.log("a = [" + second + "]");
}

if ((third > 0) || (third === 0)) {
    console.log("a = {" + third + "}");
} else {
    console.log("a = [" + third + "]");
}

console.log("Septinta uzd---------------------");
let kiekis = 5 + Math.round(Math.random() * 3000);
console.log(kiekis + " vnt.")

if (kiekis > 1000 && kiekis < 2000 || kiekis === 1000) {
    let kaina = (((kiekis - (kiekis / 100 * 3))) / kiekis);
    let newKaina = (kiekis - (kiekis / 100 * 3));
    console.log("Suma = " + (Math.round(newKaina * 100) / 100) + " eur");
    console.log("Vnt.kaina = " + (Math.round(kaina * 100) / 100) + " eur");

}

if (kiekis > 2000 && kiekis < 3000 || kiekis === 2000) {
    let kaina = (((kiekis - (kiekis / 100 * 4))) / vienetai);
    let newKaina = (kiekis - (kiekis / 100 * 4));
    console.log("Suma = " + (Math.round(newKaina * 100) / 100) + " eur");
    console.log("Vnt.kaina = " + (Math.round(kaina * 100) / 100) + " eur");
}

if (kiekis < 1000) {
    console.log("Suma = " + kiekis + " eur");
    console.log("Vnt.kaina = " + 1 + " eur");

}

console.log("--------- 8 Uzduotis--------- ");
let var1 = Math.round(Math.random() * 100);
let var2 = Math.round(Math.random() * 100);
let var3 = Math.round(Math.random() * 100);
console.log("a=" + vart1 + " b=" + vart2 + " c=" + var3 + " ");

let vidurk = Math.round((var1 + var2 + var3) / 3);

if (vidurk > 10 && vidurk < 90) {
    console.log("Tinkamas vidurkis = " + vidurk);
} else {
    console.log("Netinkamas vidurkis...");
}