'use strict';

//===================================================================
//#1

// let findTagsOfElem = (id, tag) => {
// 	let findId = document.getElementById(id);
// 	let arrWhithTags = [];
// 	if (findId) {
// 		for (let tags of findId.children) {
// 			if (tags.localName === tag) {
// 				arrWhithTags.push(tags);
// 			}
// 		}
// 	} else {
// 		for (let tags of document.body.children) {
// 			if (tags.localName === tag) {
// 				arrWhithTags.push(tags);
// 			}
// 		}
// 	}
// 	return arrWhithTags.length;
// };

// console.log(findTagsOfElem('div', 'div'));

//=========================================================================

//#2

const arrayOfPersons = [
	{
		name: 'Ferdinant',
		surname: 'Foch',
		age: 54,
		nationality: 'French',
		skill: 'Military management',
		zodiacSign: undefined,
		height: 173,
		isAlive: false
	},
	{
		name: 'Jackson',
		surname: 'Bricks',
		age: 20,
		nationality: 'USA',
		skill: 'farmer',
		height: 187,
		specialTrait: 'mechanical arms',
		isFictionalCharacter: true
	},
	{
		name: 'Hideo',
		surname: 'Kozima',
		age: 56,
		nationality: 'USA',
		skill: 'game developer',
		height: 173,
		specialTrait: 'genius',
		actualGames: ['Death Stranding', 'Metal Gear'],
		isAlive: true,
	},
	{
		name: 'Kim',
		surname: 'Kardashian',
		age: 39,
		nationality: 'USA',
		skill: 'model',
		height: 159,
		zodiacSign: 'scorpio'
	},
	{
		name: 'Mia',
		surname: 'Khalifa',
		age: 27,
		nationality: 'Lebanon',
		skill: 'actress',
		height: 157,
		zodiacSign: 'saggitarius',
		specialTrait: 'very exspressionable',
		isAlive: true,
		isFictionalCharacter: false
	},
	{
		name: 'Herman',
		surname: 'Hesse',
		age: 85,
		nationality: 'Germany',
		skill: 'writer',
		zodiacSign: undefined,
		isAlive: false,
		isFictionalCharacter: false,
		bibliography: ['Der Steppen Wolf', 'Das Glasperlenspiel',]
	},
	{
		name: 'Fedor',
		surname: 'Dostoevsky',
		age: 60,
		nationality: 'Russia',
		skill: 'writer',
		isAlive: false,
		isFictionalCharacter: false,
		bibliography: ['The demons', 'The Crime and Punishment', 'The Idiot']
	},
	{
		name: 'Doomguy',
		surname: undefined,
		age: undefined,
		nationality: undefined,
		skill: 'demon slayer',
		zodiacSign: undefined,
		isFictionalCharacter: true,
		specialTrait: 'Angry a bit',
	},
	{
		name: 'Sonic',
		surname: 'The Hedgehog',
		age: 13,
		nationality: undefined,
		zodiacSign: undefined,
		isFictionalCharacter: true,
		specialTrait: 'Fast as f#@k',
	},
	{
		name: 'Bruce',
		surname: 'Wayne',
		age: 12,
		isFictionalCharacter: true
	},
	{
		name: 'Ella',
		surname: 'Fitzgerald',
		age: 79,
		isFrictionalCharacter: false,
		isAlive: false,
		specialTrait: 'Amazing voice',
		signatureSongs: ['Cry Me a river', 'Hello Dolly', 'Summertime', 'In a sentimental mood']
	}
];


// let container = document.createElement('div');
// container.className = 'container';

// arrayOfPersons.forEach(item => {	
// 	let userCard = document.createElement('div');
// 	userCard.className = 'userCard';
// 	let userName = document.createElement('div');
// 	let userSurName = document.createElement('div');
// 	let userAge = document.createElement('div');
// 	let userNationality = document.createElement('div');
// 	document.body.append(container);
// 	container.append(userCard);
// 	userCard.append(userName, userSurName, userAge, userNationality);
// 	userName.innerText = `Name: ${item.name}`;
// 	userSurName.innerText = `Surname: ${item.surname}`;
// 	userAge.innerText = `Age: ${item.age}`;
// 	userNationality.innerText = `Nationality: ${item.nationality}`;	
// });




//=========================================================================
//#3


let wrapper = document.createElement('form');
document.body.append(wrapper);
let userNameLabel = document.createElement('label');
let userNameInput = document.createElement('input');
let emailLabel = document.createElement('label');
let emailInput = document.createElement('input');
let passwordLabel = document.createElement('label');
let passwordInput = document.createElement('input');
let checkboxLabel = document.createElement('label');
let checkboxInput = document.createElement('input');
let textAreaLabel = document.createElement('label');
let textArea = document.createElement('textarea');
let radioBtnPaidLabel = document.createElement('label');
let radioBtnPaid = document.createElement('input');
let radioBtnFreeLabel = document.createElement('label');
let radioBtnFree = document.createElement('input');
let btn = document.createElement('button');



//=========================================================================