// const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(letters[4]);

// const newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);
// console.log(letters);

const people = ["Harry", "Ron", "Hermione"];

let result;

result = people.push("Draco");
console.log(result);
console.log(people);
//Draco er blevet tilføjet til people array. result = 4.

result = people.push("Draco");
console.log(result);
console.log(people);
//Endnu en Draco er blevet tilføjet til people array. result = 5.

result = people.pop();
console.log(result);
console.log(people);
//Den sidste i array bliver smidt ud

result = people.push("Neville");
console.log(result);
console.log(people);

result = people.push("Luna");
console.log(result);
console.log(people);
// tilføjer neville og luna

result = people.slice(0, 3);
console.log(result);
console.log(people);
// Giver dig et stykke af people array og laver et nyt array. 0 = hvor skal det starte. 3= hvor er det allerede slut (gangen efter det sidste item der skal med i slice)

result = people.splice(1, 0, "Cho");
console.log(result);
console.log(people);
//result=[]
// Plads 1 er vores start. Den fjerne 0 items til nyt array. Tilføjer "cho" på plads 1.

people[1] = "Ginny";
console.log(result);
console.log(people);
// Erstatter plads nummer 1 (Cho) med Ginny

result = people.push("Fred", "George");
console.log(result);
console.log(people);
// Tilføjer både Fred og George til sidst i people og i den rækkefølge

result = people.indexOf("Fred");
console.log(result);
console.log(people);
// result giver den plads Fred står på

result = people.splice(result, 1);
console.log(result);
console.log(people);
// result er plads 7. Det er vores start - Herfra skal der fjernes 1 / overføres 1 item til det nye array. Der er ikke nogle ting der skal tilføjes.

result = people.shift();
console.log(result);
console.log(people);

result = people.unshift();
console.log(result);
console.log(people);

const letters = Array.from("abcdefghijklmn");
console.log(letters);

const str = "abcdefghijklmn";
const aar1 = str.split();

console.log(aar1);

const newLetters = letters.toString(letters);
console.log(newLetters);
//a,b,c,d,e,f,g,h,i,j,k,l,m,n

const anotherNewLetters = letters.join(letters);
console.log(anotherNewLetters);
//abcdefghijklmn
