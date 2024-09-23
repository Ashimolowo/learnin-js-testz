// const BMI = mass/height **2

// when marks height/weight 1.69m/78kg and johns height/weight is 1.95m/92kg 

// when marks height/weight 1.88m/95kg and johns height/weight is 1.76m/85kg

const BMIM1 = 78/1.69**2
const BMIJ1 = 92/1.95**2

const BMIM2 = 95/1.88**2
const BMIJ2 = 85/1.76**2

const markHigherBMI = true;

if (!markHigherBMI) {
    console.log(`BMIM1: ${BMIM1},BMIJ1: ${BMIJ1}`);
}else{
    console.log(`BMIM2: ${BMIM2},BMIJ2: ${BMIM2}`);
}

///using objects insted

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass/this.height**2
        return this.bmi;
    }
};

const john = {
    fullName: 'john Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass/this.height**2
        return this.bmi;
    } 
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi>john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.BMI}) `);
}else if(john.bmi>mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.BMI}) `);
}
///copying objects

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
//console.log('jessica before marriage:', jessica2);
//console.log(`jessica after marriage`, jessicaCopy);
//object.assign only works on the shallow properties and not deep check below

const jessica3 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family:['Alice','Bob']
}
const jessicaCopy1 = Object.assign({}, jessica3);
jessicaCopy1.lastName = 'Davis';
//console.log('jessica before marriage:', jessica3);
//console.log(`jessica after marriage`, jessicaCopy1);
jessicaCopy1.family.push('Maark')
jessicaCopy1.family.push('John')
console.log('jessica before marriage:', jessica3);
console.log(`jessica after marriage`, jessicaCopy1); //checking the console u will realize that and this can only be achieve by what is called 'deep cloning' in  javascript


/////test 2 using the loop 

//Test Data: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip =  function (bill) {
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill * 0.2
    
}
for (let i = 0; i < bills .length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(`bills: ${bills}, tips: ${tips}, totals: ${totals}`);
console.log(bills, tips, totals);

const calcSum = function (arr) {
    let sum = 0; //initial value of sum
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i] //sum equals current of sum and the array that we receive as the input
        sum += arr[i]  //replacing sum = sum + arr[i]
    }
    console.log(sum);
}
calcSum([2,3,4,5,9,0])

//now to find the average
const calcAverage = function (arr) {
    let sum = 0; //initial value of sum
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i] //sum equals current of sum and the array that we receive as the input
        sum += arr[i]  //replacing sum = sum + arr[i]
    }
    return sum/arr.length
}
//calcAverage([2,3,4,5,9,0])
console.log(calcAverage([2,3,4,5,9,0]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

//A function changes any name to uppercase

const capitalizeName = function (name) {
    const names = name.split(' ')
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(names.join(' '));
    
}
capitalizeName('ashimolowo ridwan')
capitalizeName('jonas')

//this is also a function changes any name to uppercase

const capitalizeNames = function (name) {
    const names = name.split(' ')
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(names.join(' '));
    
}
capitalizeNames('ashimolowo ridwan')
capitalizeNames('jonas')


/////code challenge 
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);

    for (const row in rows) {
         {
            const [first,second] = rows.toLowerCase().trim().split('_')
            const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
            
        }
        console.log(`${output.padEnd(20)}✅`);
    }
})

//------------------------------------------
//   //SLICE METHOD
  let arr = ['a','b','c','d','e','f'];

  console.log(arr.slice(2));
  console.log(arr);
  console.log(arr.slice(2,4));
  console.log(arr.slice(-2));
  console.log(arr.slice(-1));
  console.log(arr.slice(1,-2));
  //creating shallow copy of an array using splice or spreadopeerator
  console.log(arr.slice());
  console.log([...arr]);

  //splice: similar to slice but change the original array
  console.log(arr.splice(2));
  console.log(arr);
  arr.splice(-1)
  console.log(arr);
  ///-----REVERSE---- changes the array by reversing the array
 const arr1 = ['a','p','q','r','s','t'];
 console.log(arr1.reverse());
 //-----CONCAT to join arrB to arrA-----
 const arrA = ['a','p','q','r','s','t'];
 const arrB = [1,2,3,4,5,6,7,8]
 console.log(arrA.concat(arrB));
 //the spreadopeerator can also be used as below;
 console.log([...arrA,...arrB]);

 //---join METHOD----
 console.log(arrB.join('-'));

 //-------AT METHOD--------

 const arrT = [23,45,11,12,67,89,0,5];
 console.log(arrT[0]);
 console.log(arrT.at(0));
 //getting the last element of an array;
 console.log(arrT[arrT.length-1]);
 console.log(arrT.slice(-1));
 console.log(arrT.slice(-1)[0]);
 console.log(arrT.at(-1));
 //at method also works on string;
 console.log('ashimolowor'.at(-1));

// ----------Foreach loop----------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
    if (movement>0) {
        console.log(`you deposited ${movement}`);
    }else{
        console.log(`you withdraw ${Math.abs(movement)}`);
     
    }
}

//using foreach method instead of for loop above

movements.forEach(function(movement) {
    if (movement>0) {
        console.log(`you deposited ${movement}`);
    }else{
        console.log(`you withdraw ${Math.abs(movement)}`);
     
    }
});
//the foreach method requires a callback function which takes an argument as above it is the callback the executes

// ---if you need access to a counter variable, then you will need for of loop
for (const [i,movement] of movements.entries()) {
    if (movement>0) {
        console.log(`Movement ${i + 1}: you deposited ${movement}`);
    }else{
        console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
     
    }
}
/////using foreach method to achieve the above:
movements.forEach(function(mov, i, arr) {
    if (mov>0) {
        console.log(`Movement ${i + 1}: you deposited ${mov}`);
    }else{
        console.log(`Movement ${i + 1}: you withdraw ${Math.abs(mov)}`);
     
    }
});

//you can note breakout of foreach loop; the continue and break statement dont work on foreach loop


//FOREACH ON MAPS AND SETS 
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
  currencies.forEach(function(value,key,map){
    console.log(`${key}: ${value}`);
    
  });

  //FOREACH ON SET
  const currenciesUnique = new Set(['USD','GDP','USD','EUR', 'EUR'])
  console.log(currenciesUnique);
  currenciesUnique.forEach((value,key,map) => {
    console.log(`${key}: ${value}`);
    //note that set does not have value nor index unlike map but it is done in order not to cause confusion
    
  });

  ///TEST DATA [3,5,2,12,7] [4,1,15,8,3]
  const julia1 = [3,5,2,12,7]
  const kate1 = [4,1,15,8,3]
  const julia2 = [9,16,6,8,3]
  const kate2 = [10,5,6,1,4]
  const checkDogs  = (dogsJulia, dogsKate) => {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2)
    console.log(dogsJuliaCorrected);
    const dogsT = dogsJuliaCorrected.concat(dogsKate)
console.log(dogsT);
dogsT.forEach((dog,i) => {
    if (dog>=3) {
        console.log(`Dog number ${i +1} is an adult, and is ${dog}years old`);
    } else {
        console.log(`Dog number ${i +1} is a puppy`);
    }
});
}
  checkDogs(julia1,kate1)
  checkDogs(julia2,kate2)


  //MAP- FILTER- REDUCE 
  const euroToUsd = 1.1;
 
const movementsUSD = movements.map(function(mov){
    return mov*euroToUsd;
});

//or const movementsUSD = movements.map(mov=>mov*euroToUsd )
console.log(movements);
console.log(movementsUSD);

///using for of loop instead of map

const movementsUSDfor = [];
for (const mov of movements ) {
    movementsUSDfor.push(mov*euroToUsd)
}
console.log(movementsUSDfor);

//using map in place of foreach in line 255 
const movementsDesc = movements.map((mov,i,arr) =>
    `Movement ${i + 1}: you ${mov > 0 ? "deposited" : "withdraw"} ${Math.abs(mov)}`
    );
    console.log(movementsDesc);

// or

// const movementsDesc = movements.map((mov,i,arr) => {

//         if (mov>0) {
//             return (`Movement ${i + 1}: you deposited ${mov}`);
//         }else{
//             return (`Movement ${i + 1}: you withdraw ${Math.abs(mov)}`);
//         }
//     });
//   console.log(movementsDesc);

//---___composing username with the first letters
const user = 'Steven Thomas Williams'
const username = user.toLowerCase().split(' ').map(function(name){
    return name[0]
}).join('')
//or
// const user = 'Steven Thomas Williams'
// const username = user.toLowerCase().split(' ').map(name => name[0]).join('')
console.log(username);

//FILTER
const deposits = movements.filter(function (mov){
    return mov > 0;
});
console.log(movements);
console.log(deposits);
//using for of loop instead of filter

const depositsFor = []
for (const mov of movements) if (mov>0) {
    depositsFor.push(mov)
}
console.log(depositsFor);
const withdraws = movements.filter((mov)=> mov < 0);
console.log(withdraws);


//REDUCE METHOD: in the reduce method the first argument is the accumulator, followed by current element, then the index and the entire array
const balance = movements.reduce(function (acc, cur, i, arr) {
    console.log(`iteration ${i}: ${acc}`);
    return acc + cur
}, 0)
console.log(balance); //totals

///we can achieve the above also by using our for loop
let balance2 = 0;
for (const mov of movements) {
    balance2 += mov
}
console.log(balance2);

//getting the maximum number using  the reduce method

const max = movements.reduce( (acc, mov) => {
    if (acc > mov) {
        return acc;
    }else{
        return mov;
    }
},movements[0])

console.log(max);
const min = movements.reduce( (acc, mov) => {
    if (acc < mov) {
        return acc;
    }else{
        return mov;
    }
},movements[0])
console.log(min);

const DataOne = [5,2,4,1,15,8,3]
const DataTwo  = [16,6,10,5,6,1,4]

//  function calcAverageHumanAge(ages) {
//     const humanAges = ages.map((age)=>{
//       return  age <= 2 ? age * 2 : 16 + age * 4
//       })
//console.log(humanAges);
//   } 
//   console.log(calcAverageHumanAge(DataOne)); 
const calcAverageHumanAge = function (ages) {
    //converting the ages
    const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4)
    console.log(humanAges); 

    const LhumanAges = humanAges.filter((humanAges)=> humanAges <= 18)
    //removing less than 18
    console.log(LhumanAges);

    const AhumanAges = humanAges.filter((humanAges) => humanAges >= 18)
    //Adult ages
    console.log(AhumanAges);
    // finding the average
    // const  totalHumanAges = AhumanAges.reduce((acc, ThA) => {
    //     return acc + ThA
    // },0)
    // console.log(totalHumanAges/AhumanAges.length);
    //  ---OR---
     const  totalHumanAgesAvg = AhumanAges.reduce((acc, ThA, i, arr) => {
         return acc + ThA/arr.length
     },0)
    console.log(totalHumanAgesAvg);
}
calcAverageHumanAge(DataOne);
calcAverageHumanAge(DataTwo);
//Using chaining for the above Data
const calcAverage2 = function (ages) {
    const avAge = ages
                  .map((age) => age <= 2 ? 2 * age : 16 + age * 4 )
                  .filter((age) => age >= 18)
                  .reduce((acc, age, i, arr) => {
                    return acc + age / arr.length
                  },0)
                  console.log(avAge);
                  console.log(avAge);
}
calcAverage2(DataOne);
calcAverage2(DataTwo)
const totalDeposit = movements
                    .filter(mov => mov > 0)
                    .map((mov, i, arr) => {
                        console.log(arr);
                        return mov * euroToUsd
                    })
                    //.map(mov => mov * euroToUsd)

                    .reduce((acc, mov) => acc + mov,0);
                    console.log(totalDeposit);

const totalWithdraw = movements
                    .filter(mov => mov < 0)
                    .map((mov, i, arr) => {
                        console.log(arr);
                        return mov * euroToUsd
                    })
                    //.map(mov => mov * euroToUsd)

                    .reduce((acc, mov) => acc + mov,0);
                    console.log(totalWithdraw);

    // ---------- //-------------THE FIND METHOD: is used to retrieve an element from an array
    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
      };
      
      const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
      };
      
      const account3 = {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
      };
      
      const account4 = {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
      };
      
      const accounts = [account1, account2, account3, account4];
    const firstWithdraw = movements.find(mov => mov < 0)
    console.log(movements);
    console.log(firstWithdraw);
    console.log(accounts);
// the difference between the find method and the filter method; as shown above, filter retuns a new array while find retuns the first element that match the given condition..find retuns a value and not an array
const account = accounts.find(account => account.owner === 'Jessica Davis');
console.log(account);
//as you can see above we can only use the find method to get on element thats why the condition is set as in the above 

//using for of loop in the above
for (const account of accounts) {

    if (account.owner === 'Jessica Davis') {
        console.log(account);
    }
    
}
//FINDINDEX METHOD: similaar to the find method but returns the element at the a stated index, to delete an element in an array we use the slice method with the index coming from the find index

///SOME, EVERY AND INCLUDE METHODS
console.log(movements);
console.log(movements.includes(-130));
console.log(movements.some(mov => mov === -130));
//the includes method can only test for quality, if we want to test for conditions then the every method should be used, for example if we want to test if our movements contains some positive value

const anyDeposit = movements.some(mov => mov > 0)
console.log(anyDeposit);

//EVERY METHOD is similar to the SOME METHOD but the difference is that in every method all element in the array must satisfy the given condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//USING a callback function instead of direct function
const deposit = mov => mov > 0;
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(account4.movements.every(deposit));

//FLAT AND FLATMAP
const larr = [[1,2,3,],[4,5,6],7,8]
console.log(larr.flat()); /*the flat method removes the nested array and flatted it into one single array*/
const larrDeep = [[[1,2],3],[4,[5,6]],7,8]
console.log(larrDeep.flat())/*the default deep value of flat is one that is why it flattened the larr easily in this it will not, see the console below */
console.log(larrDeep.flat(2))

const accountMovements = accounts.map(acct => acct.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat()
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov,0)
console.log(overallBalance);

///using chaining to achieve the above, result
const overallBalance2 = accounts.map(acct => acct.movements)
                        .flat().reduce((acc,mov) => acc + mov,0)
                        console.log(overallBalance2);

//FLATMAP: this method combines the flat and map in just one function, it will receive callback fuction just like the map method

const overallBalance3 = accounts.flatMap(acct => acct.movements)
                        .reduce((acc,mov) => acc + mov,0)
                        console.log(overallBalance3); /*the flatMap cannot go deeper but if we need to go deeper we use the flat method

//SORTING ARRAYS*/
const owners = ['jonas','zach','adam','martha'];
console.log(owners);
console.log(owners.sort());
console.log(owners);

console.log(movements);
//console.log(movements.sort());
///console.log(movements);/*the result in the console(line 581,582) shows that the movements are not arranged in numerical order to do these we pass in a callback function

//ascending
movements.sort((a,b) => {
    if(a>b){
        return 1
    }
    if(a<b){
       return -1
    }
})
console.log(movements);

//descending
movements.sort((a,b) => {
    if(a>b){
        return -1
    }
    if(a<b){
       return 1
    }
})
console.log(movements);
//in a short form, check below
movements.sort((a,b) => a - b)
console.log(movements);
movements.sort((a,b) => b - a)
console.log(movements);

//ways of creating and filling arrays 
console.log([1,2,3,4,5,6,7,8,9,0]);
console.log(new Array(1,2,3,4,5,6,7,8,9,0));
//using array constructor function 
const x = new Array(7)
console.log(x); /* the array constructor (new Array), returns an empty array 7times, this happens when a single number is passed into the array;
//the empty array is not useful except(e.g. x.map(()=>3)), we want to fill it with 3 7times, which will still return an empty array) for one thing which is the fill method.*/
console.log(x.map(()=>3));
console.log(x.fill(4));
/*we also specify a starting index as seen below*/
const y = new Array(8)
console.log(y.fill(2,4));

const z = new Array(9)
console.log(z.fill(3,2,4));

const arraw = [1,2,3,4,5,6,7,8,9,0]
console.log(arraw.fill(23,4,6));

//using Array.from method
const creatArray = Array.from({length: 7}, () => 1)
console.log(creatArray);
const createArray = Array.from({length: 10}, (cur, i) => i + 1)
console.log(createArray); /* the underscore is just a throwaway value */
const creatNew = Array.from({length: 7}, (_,i) => i + 1);
console.log(creatNew);

//using array.from to creaye an array of 100 random dice roll
function rollDice() {
    return Math.floor(Math.random()*6) + 1 /*generates a random number between 1 and 6*/
}
const diceRolls = Array.from({length: 100}, () => rollDice());
console.log(diceRolls);

console.log(0.2 + 0.1 === 0.3);

for (let i = 0; i < 5; ++i) {
setTimeout(() => console.log(i),0)    
}

//TEST DATA
// const dogs = [
//     {weight: 22, curFood: 250, owners: ['Alice','Bob']},
//     {weight: 8, curFood: 200, owners: ['Matilda']},
//     {weight: 13, curFood: 275, owners: ['Sarah','John']},
//     {weight: 32, curFood: 340, owners: ['Micheal']}
// ];
//1looping over the array containing dog object and calculating the recommended food portion and adding it to the object as a new property. DO NOT CREATE A NEW ARRAY
//2find sarah's dog and log it to the console whether it is eating to much or too little
//3create an array containing all owners of dog eating too much and array containing those who eat little
//4log a string to the console for each array created above
//5log to the console whether a dog is eating exactly what is recommended for it.
//6log to the console whether a dog is eating an OKAY amount of food
//7creaating an array containing the dogs that are eating an OKAY amount of food
//8create a shallow copy of the dog's arrray an sort it by the recommended food in ascending order

/**SOLUTION */ 
const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice','Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah','John']},
    {weight: 32, curFood: 340, owners: ['Micheal']}
];
/*1. to loop over the array foreach method is used*/ 

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))
console.log(dogs);
/**or */
dogs.forEach(dog => {
    //dog.recFood = dog.weight ** 0.75
    dog.recFood = Math.trunc(Math.pow(dog.weight, 0.75) * 28)
       
});
console.log(dogs);

 /*2. find sarah dog*/
 const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
 console.log(dogSarah); 
 console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);
/*2. creating an array of dogs eating to much*/
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch);
/*3. creating an array of dogs eating to much*/
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
/*4. creating a string for the above*/
const TooMuch = `${ownersEatTooMuch.join(' ')} eat too much`
console.log(TooMuch);
const TooLittle = `${ownersEatTooLittle.join(' and ')}'s eat too little`
console.log(TooLittle);
/*5. if any dog is eating exactly the recommended */
const exactly = dogs.some(dog => dog.curFood === dog.recFood)
console.log(exactly);
/*6. eating an okay amount of food... using the relation; current > (recommended * 0.9) && current < (recommended * 1.10)*/
const okay = dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1)
console.log(okay);
/*7. array containing those eating okay food */
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
const dogEatingOkay = dogs.filter(checkEatingOkay)
console.log(dogEatingOkay);
/*sorting the recommended food in ascending order */
const dogSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood)
console.log(dogSorted);

///operations with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);
const daysRemaining = (date1, date2) => (date2 - date1)
const dayz = daysRemaining(new Date(2037, 3, 14), new Date(2037, 3, 24))
console.log(dayz); /*to convert to days simply divide by (1000 * 60 * 60 * 24) */
console.log(dayz/(1000 * 60 * 60 * 24));
const daysPassed = (date1,date2)  => (date2 - date1)
const dayx = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4))
console.log(Math.abs(dayx/(1000 * 60 * 60 * 24)));
/*for advance operations on dates check date liberay like moments.js */

/*DATE formating based on different geographical location */
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')
const now1 = new Date();
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric', /*we can also specify long or 2-digit for month instead of numeric */
    year: 'numeric', /*we can also specify long or 2-digit for year instead of numeric */
    weekday: 'long' /*we can also specify long or narrow for weekday instead of long */
}
h1.textContent = new Intl.DateTimeFormat('en-US', options).format(now1)
h2.textContent = new Intl.DateTimeFormat('en-GB', options).format(now1)
h3.textContent = new Intl.DateTimeFormat('ar-SY', options).format(now1)
h4.textContent = new Intl.DateTimeFormat('pt-PT', options).format(now1)

/*for more on locale country location date formating go to ISO language code (www.lingoes.net)*/

//getting locale froom the users browsers
const h5 = document.querySelector('h5')
const locale = navigator.language;
console.log(locale);
h5.textContent = locale
const h6 = document.querySelector('h6')
h6.textContent = new Intl.DateTimeFormat(locale, options).format(now1)

//NUMBER FORMAT IN javascript
const num = 3884764.23
console.log('US:',new Intl.NumberFormat("en-US").format(num));
console.log('Portugal:',new Intl.NumberFormat("pt-PT").format(num));
console.log('Syria:',new Intl.NumberFormat("ar-SY").format(num));
console.log('British:',new Intl.NumberFormat("en-GB").format(num));
console.log('Germany:',new Intl.NumberFormat("de-DE").format(num));
console.log('Browser:',new Intl.NumberFormat(navigator.language).format(num));
/**we can also specify thestyle */
const optionss = {
    style: 'unit', /*we can also styles like percent, currency etc */
    unit: 'mile-per-hour', /*we can also specify other units depending on what we are working on, like celcius etc */
    //if we have a currency then the unit is completely ignored thus we have to redefine the currency',
    // month: 'numeric', 
    // year: 'numeric', 
    // weekday: 'long' /*we can also specify long or narrow for weekday instead of long */
}
const numb = 3884764.23
console.log('US:',new Intl.NumberFormat("en-US", optionss).format(numb));
console.log('Portugal:',new Intl.NumberFormat("pt-PT",optionss).format(numb));
console.log('Syria:',new Intl.NumberFormat("ar-SY",optionss).format(numb));
console.log('British:',new Intl.NumberFormat("en-GB",optionss).format(numb));
console.log('Germany:',new Intl.NumberFormat("de-DE",optionss).format(numb));

const optionz = {
    style: 'currency', 
    currency: 'EUR',
    useGrouping: false /*useGrouping if set to false removes spaaces or commas between numbers*/
}
const numbb = 3884764.23
console.log('US:',new Intl.NumberFormat("en-US", optionz).format(numbb));
console.log('Portugal:',new Intl.NumberFormat("pt-PT",optionz).format(numbb));
console.log('Syria:',new Intl.NumberFormat("ar-SY",optionz).format(numbb));
console.log('British:',new Intl.NumberFormat("en-GB",optionz).format(numbb));
console.log('Germany:',new Intl.NumberFormat("de-DE",optionz).format(numbb));

const formattedMov = new Intl.NumberFormat().format(locale, {
    style: 'currency', 
    currency: 'USD',
})

//creating a function that format currencies
const formatCurrency = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: 'currency', 
        currency: currency,
    }).format(value)
}

//TIMERS (set-timeout/set-interval)
setTimeout(() => {
    console.log('Here is your pizza 🎉');
}, 3000);
/**pasing more argument into the settimeout */
setTimeout((ing1,ing2 ) => {
    console.log(`Here is your pizza 🎉 with ${ing1} and ${ing2}`);
}, 3000, 'olives','spinach');
/*cancelling the timeout before the time passed */
const ingredients = ['olives','spinach']
const ingT = setTimeout((ing1,ing2 ) => {
    console.log(`Here is y'olives','spinach'our pizza 🎉 with ${ing1} and ${ing2}`);
}, 3000, ...ingredients);
if (ingredients.includes('spinach')) {
    clearTimeout(ingT)
    
}
//setINTERVAL
setInterval(() => {
    const me = new Date
    console.log(me);
}, 1000);

//fuction that logout user after a specific time
// const startLogoutTimer = function(){
//     //set time to five minutes
//   let time = 100;
//     //converting the current time to min
//   const min = (Math.trunc(time/60));
//   const sec = (time % 60);
//   const newMin = String(min).padStart(2,"0")
//   const newSec = String(sec).padStart(2,"0")
//     //call timer every second
//     const timer = setInterval(() => {
//         //In each call print the remaining time to the UI
//         labelTimer.textContent = `${newMin}:${newSec}`;
//         //decrease by 1s
//         time-- /**time = time -1 or  time-- */
//         //when time is zero stop time out and logout user
//         if (time === 0) {
//           clearInterval(timer)
//         }
    
    
        
//     }, 1000);
//     }
    // const startLogoutTimer = function(){
        //set time to five minutes
    //   let time = 100;
        //call timer every second
    //    const timer = setInterval(() => {
    //        //decrease by 1s
    //        time = time - 1; /**or  time-- */
    //        //converting the current time to min
    //   const min = Math.trunc(time/60);
    //   const sec = time % 60;
    //   const newMin = String(min).padStart(2,"0");
    //    const newSec = String(sec).padStart(2,"0");
    //        console.log(newMin,newSec);
    //       //In each call print the remaining time to the UI
    //       labelTimer.textContent = `${newMin}:${newSec}`;
    //        console.log(`we are here`, time);
    //         //when time is zero stop time out and logout user
    //         if (time === 0) {
    //           clearInterval(timer)
    //           console.log(`logged out`)
    //           labelWelcome.textContent = 'You are logged-out, kindly login again'
    //           containerApp.style.opacity = 0;
    //         }
        // },1000)
        // }
        /**OR**/
        function Tick() {
            let time = 100;
              //decrease by 1s
           time = time - 1; /**or  time-- */
           //converting the current time to min
            const min = Math.trunc(time/60);
            const sec = time % 60;
            const newMin = String(min).padStart(2,"0");
           const newSec = String(sec).padStart(2,"0");
           console.log(newMin,newSec);
          //In each call print the remaining time to the UI
          labelTimer.textContent = `${newMin}:${newSec}`;
           console.log(`we are here`, time);
            //when time is zero stop time out and logout user
            if (time === 0) {
              clearInterval(timer)
              console.log(`logged out`)
              labelWelcome.textContent = 'You are logged-out, kindly login again'
              containerApp.style.opacity = 0;
            }

            Tick()
       const timer =  setInterval((Tick) => 1000);
        return timer
        }
        
        /**Attaching event listeners to two different buttons usning the for loop or for each loop */
       
//  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//  for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

//   btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
//DOM
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
/* and html collection is different from a node list because an html collection is a live collection i.e if the dom changes the html collection immediately changes */

/* creating and inserting elements */
/* 1. the .insertAdjacentElement method */
/* 2. the document.createElement method */
const message = document.createElement('div'); /* creating a div */
message.classList.add('cookie-message'); /* add a class to be style in css*/
//message.textContent = 'we love you all'; /* adding textcontent*/
message.innerHTML = 'we are happpy to have you all <button class = "button">Go for Goal</button>' /* adding html*/
const hone = document.querySelector('.hone')
hone.prepend(message)
hone.append(message.cloneNode(true)) /* to insert multiple copies of the element i.e message*/
hone.before(message)
hone.after(message.cloneNode(true)) /* to insert multiple copies of the element i.e message above or below*/
//DELETING ELEMENTS on the DOM
document.querySelector('.button').addEventListener('click', () => message.remove())
//ADDING STYLES AND ATTRIBUTES on the DOM
message.style.backgroundColor = '#37383d'
message.style.width = '120%'
console.log(message.style.backgroundColor);/**line 935 and 936 will only give you styles added from js not added styles in css but to get that of css then you will have to use get computed styles */
console.log(message.style.width);

/*Using the getcomputed styles you need to pass in the element*/
console.log(getComputedStyle(message));
/* to get the particular style you use the dot notation */
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
/* we can also manipulate the already existing values*/
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'
console.log(getComputedStyle(message).height);

//SETTING CUSTOM PROPERTY IN javascript
document.documentElement.style.setProperty('--color-primary', 'orange')/* for custom properties/variable we have to call the setProperty */
 
//ATTRIBUTES /*javascript can access standard attributes only, any attributes created manually willl be undefined check below*/
const image = document.querySelector("img");
console.log(image);
console.log(image.alt) /*we can also reset attributes e.g image.alt = 'handsome Shaybah' */
console.log(image.src);
console.log(image.title);
console.log(image.class); /**none standard attributes */
console.log(image.classList);
console.log(image.className);
console.log(image.id);
console.log(image.designer); /**none standard attributes */

//TO GET the value of none-standard attributes
console.log(image.getAttribute('designer',));

// WE CAN ALSO SET attributes 
console.log(image.setAttribute('Date', 'days a numbers'));

//note yhe difference
console.log(image.src);
console.log(image.getAttribute('src'));

//data attributes
console.log(image.dataset.versionNumber);

//classes
image.classList.add('c','j')/*we can add and remove multiple classes */
image.classList.remove('c','j')
image.classList.toggle('c')
image.classList.contains('j')

//ways of handling events in js
/*1. addEventListener */ 
     //h1.addEventListener('click', function (e) alert('this is addeventlistener menthe ')})
/*2. Onevent old school*/
    //h1.onmouseenter = function (e) {alert('this is addeventlistener menthe ')}

/*addeventlistener is better because it always for multiple eevent which all will run but the onevent method will overide other event only the first event will run*/

//we can also remove an event handler if we dont need it anymore
const alertt = document.querySelector('.alert')
const alertH2 = function (e) {
    alert('you are on H2')
    //TO REMOVE THE EVENT
    alertt.removeEventListener('click', alertH2)
}
alertt.addEventListener('click', alertH2)

//removing the eventlistener after a certain time
const whatz = document.querySelector('.whatz')
const alertWat = function (e) {
    alert('ALHAMDULILAH💧')
}
whatz.addEventListener('mouseenter', alertWat)
setTimeout(() => {
    whatz.removeEventListener('mouseenter', alertWat)
}, 50000);

/*---------------- creating a random color------*/

const randomInt = (min,max) => {
    return Math.floor(Math.random()*(max - min + 1) + 1)
  }
   const randomColor = () => {
     return `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`  
  }
  console.log(randomColor(0,255));

///////////----------------COMPLEX OBJECT DESTRUCTURING   
const data = {
    ab:{name:'Abiola', nickNames: ['abefe', 'showbaba'], class: 'ss3' , hobby: {games: 'football', leisure: 'reading', excercise: 'sleeping'}},
        ac:{name:'Sola', nickName: ['Abbey', 'Scholar'], class: 'ss2' , hobby: {games: 'handball', leisure: 'reading', excercise: 'Jugging'}},
        ad:{name:'Aola', nickName: ['Boniface', 'Giggs'], class: "ss3" , hobby: {games: 'football', leisure: 'reading', excercise: 'running'}},
        ae:{name:'Arinola', nickNames: ['Harin', 'shakez'], class: 'ss3' , hobby: {games: 'football', leisure: 'reading', excercise: 'sleeping'}},
        af:{name:'BIola', nickName: ['biO', 'ScholarI'], class: 'ss2' , hobby: {games: 'handball', leisure: 'reading', excercise: 'Jugging'}},
        ag:{name:'Alabi', nickName: ['labby', 'Acme'], class: "ss3" , hobby: {games: 'football', leisure: 'reading', excercise: 'running'}},
        ah:{name:'Abbass', nickNames: ['adigun', 'hubb'], class: 'ss3' , hobby: {games: 'football', leisure: 'reading', excercise: 'sleeping'}},
        ai:{name:'Shade', nickName: ['shade', 'luv'], class: 'ss2' , hobby: {games: 'handball', leisure: 'reading', excercise: 'Jugging'}},
        aj:{name:'Ridwan', nickName: ['Reader', 'Ayo'], class: "ss3" , hobby: {games: 'football', leisure: 'reading', excercise: 'running'}},
        ak:{name:'Adigun', nickNames: ['Ay', 'Bbaba'], class: 'ss3' , hobby: {games: 'football', leisure: 'reading', excercise: 'sleeping'}},
        al:{name:'Quadri', nickName: ['quadri', 'Scholar'], class: 'ss2' , hobby: {games: 'handball', leisure: 'reading', excercise: 'Jugging'}},
        am:{name:'ibrahim', nickName: ['Ololade', 'Mr. money'], class: "ss3" , hobby: {games: 'football', leisure: 'reading', excercise: 'running'}}
  };
  
  const arrays = Object.entries(data)
  
  const filter = (name) => {
      let index;
      arrays.forEach((array, arrayIndex) => {
          const arr = array[1]
  if (arr.name === name) {
      index = arrayIndex;
  }
      })
      return arrays[index]
  }
  console.log(filter("Ridwan"));
  console.log(filter("Ridwan")[1].name);
  console.log(filter("Ridwan")[1].nickNames);
  console.log(filter("Adigun"));
  console.log(filter("Adigun")[1].name);
  console.log(filter("Adigun")[1].nickNames);