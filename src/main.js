console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

var i = 20
console.log(i)
console.log(++i)
console.log(i++)
console.log(--i)
console.log(i--)
console.log(i)// i


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10
var myTest = 20
console.log(myTest)// myTest
myTest += myNum
console.log(myTest)// +=
myTest -= myNum
console.log(myTest)// –=
myTest *= myNum
console.log(myTest)// *=
myTest /= myNum
console.log(myTest)// /=
myTest %= myNum
console.log(myTest)// %=


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

const myPi = Math.PI
console.log(myPi)// константа Pi → myPi
var myRound = Math.round(89.279)
console.log(myRound)// округлене значення числа 89.279 → myRound
var myRandom = Math.floor(Math.random() * 10)
console.log(myRandom)// випадкове число між 0..10 (10 не включено) → myRandom
var myPow = Math.pow(3, 5)
console.log(myPow)// 3 у 5 степені → myPow


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */


const strObj = {
    str: "Мама мыла раму, рама мыла маму"
};// Мама мыла раму, рама мыла маму
strObj.length = strObj.str.length
console.log(strObj)// strObj


/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

const isRamaPos = strObj.str.indexOf('рама')
console.log(isRamaPos)// isRamaPos
const isRama = strObj.str.includes('рама')
console.log(isRama)// isRama


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

const strReplace = strObj.str
.replace('мыла', 'моет')
.replace('рама мыла маму', 'Рама держит маму')
console.log(strReplace) // strReplace

/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

var someStr = 'some STRING'
console.log(someStr)// var someStr = 'some STRING'
var upperStr = someStr.toUpperCase()
console.log(upperStr)// var upperStr
var lowerStr = someStr.toLowerCase()
console.log(lowerStr)// var lowerStr


