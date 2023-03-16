console.log('hi');

function divideNum(num1, num2){
	result = num1 / num2;

	return result;
}

let quotientResult = divideNum(50, 5)
console.log(`The result of the operation is: ${quotientResult}`)


let variable = 'initial value';


let assignNumber = 8;
assignNumber = assignNumber + 2
console.log(`The result of the addition assignment operator is ${assignNumber}`)

assignNumber += 2;
console.log	(`The result of the addition assignment operator is ${assignNumber}`)

let x = 2;
console.log(x)
a = ++x
console.log(a)

b = x++
console.log(b)


let assignResult = 4;
assignResult -= 2
console.log(`The result of assign operator is ${assignResult}`)
assignResult *= 2
console.log(`The result of assign operator is ${assignResult}`)
assignResult /= 2
console.log(`The result of assign operator is ${assignResult}`)
assignResult %= 2
console.log(`The result of assign operator is ${assignResult}`)

let mdas = 1 + 2 - 3 * 4 / 5;
console.log(`The result of mdas ${mdas}`)

let pemdas = 1 + (2 - 3) * (4 / 5);
console.log(`The result of mdas ${pemdas}`)


let z = 3;

let decrement = --z;
console.log(`The result of pre-decrement is ${decrement}`)

console.log(`The result of pre-decrement is ${z}`)

decrement = z--

console.log(`The result of pre-decrement is ${decrement}`)

console.log(`The result of pre-decrement is ${z}`)


console.log(1==1)
console.log(1=='1')

console.log(1==2)
console.log(true == 1)

console.log(null == undefined)

console.log(2===2)
console.log(2==='2')

console.log(2===1)
console.log(true===1)


console.log(null === undefined)

let numA = '10';
let numB = '12';

let coercion = numA = numB;
console.log(coercion)
console.log(typeof coercion)

let numC = 16
let numD = 14

let nonCoercion = numC + numD
console.log(nonCoercion)
console.log(typeof nonCoercion)


let numE = true + 1
console.log(numE)

let numF = false + 1
console.log(numF)

console.log('1' != 1)

console.log('jungkook' != 'jin')

console.log(true != 1)

console.log(true != 'true')

console.log('0' != false )

console.log('5' !== 5)

let name1 = 'Juan'
let name2 = 'Jimin'
let name3 = 'JHope'
let name4 = 'RM'

let number1 = 50
let number2 = 60
let numString1 = '50'
let numString2 = '60'

console.log(numString1 == number1)
console.log(numString2 === number2)
console.log(numString1 !== number1)
console.log(name1 == 'juan')
console.log(name2 === 'Jimin')
console.log(name3 !== 'Jhope')

let x1 = 500
let y = 700
let w = 8000
let numString3 = '5500'

console.log(x1 > y)
console.log(w > y)
console.log(numString3 < 1000)
console.log(numString3 < "suga")

console.log(y <= y)

let isAdmin = false
let isRegistered = true
let isLegalAge = true
let authorization1 = isAdmin && isRegistered;
console.log(authorization1)
let authorization2 =isLegalAge &&
isRegistered;
console.log(authorization2)
let authorization3 =isAdmin && isLegalAge;
console.log(authorization3)

let requiredLevel = 95;
let requiredAge = 18;

let authorization4 = isRegistered && requiredLevel === 25;
console.log(authorization4)
let authorization5 = isRegistered && isLegalAge && requiredLevel === 95;
console.log(authorization5)

let userName1 = "gamer2001"
let userName2 = 'shadow1991'
let userAge1 = 15
let userAge2 = 30

let registration1 = userName1.length > 8 && userAge1 >= requiredAge
console.log(registration1)

let registration2 = userName1.length > 8 && userName2 >= requiredAge
console.log(registration2)

let userLevel1 = 100;
let userLevel2 = 65;

let guildRequirement1 = isRegistered || userLevel2 >= requiredLevel || userAge1 >= requiredAge
console.log(guildRequirement1)

let guildRequirement2 = userLevel1 >= requiredLevel || userAge2 >= requiredAge;
console.log(guildRequirement2)

let guildAdmin = isAdmin || userLevel2 >= requiredLevel;
console.log(guildAdmin)

let guildAdmin1 = !isAdmin || userLevel2 >= requiredLevel;
console.log(guildAdmin1)

console.log(!isAdmin)
let opposite1 = !isAdmin
console.log(opposite1);