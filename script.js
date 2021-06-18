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


let container = document.createElement('div');
container.className = 'container';

arrayOfPersons.forEach(item => {
	let objectValue = Object.values(item);
	let userCard = document.createElement('div');
	userCard.className = 'userCard';
	let userName = document.createElement('div');
	userName.style.padding = '10px'
	let userSurName = document.createElement('div');
	userSurName.style.padding = '10px'
	let userAge = document.createElement('div');
	userAge.style.padding = '10px'
	let userNationality = document.createElement('div');
	userNationality.style.padding = '10px'
	document.body.append(container);
	container.append(userCard);
	userCard.append(userName, userSurName, userAge, userNationality);
	userName.innerText = `Name: ${item.name}`;
	userSurName.innerText = `Surname: ${item.surname}`;
	userAge.innerText = `Age: ${item.age}`;
	userNationality.innerText = `Nationality: ${item.nationality}`;
	objectValue.forEach(elem => {
		if (Array.isArray(elem)) {
			elem.forEach(elem1 => {
				// let li = document.createElement('li');
				let ul = document.createElement('ul');
				// li.innerText = elem1;
				// ul.append(li);
				ul.innerHTML = `<li>${elem1}</li>`
				userCard.append(ul);

			})
		}
	})
});



//=========================================================================
//#3


// let formWrapper = document.createElement('form');
// document.body.append(formWrapper);
// formWrapper.classList.add('form');

// let wrapperUserName = document.createElement('div')
// wrapperUserName.classList.add('info-block');
// let wrapperEmail = document.createElement('div')
// wrapperEmail.classList.add('info-block');
// let wrapperPassword = document.createElement('div')
// wrapperPassword.classList.add('info-block');
// let wrapperCheckbox = document.createElement('div')
// wrapperCheckbox.classList.add('info-block');
// let wrapperTextarea = document.createElement('div')
// wrapperTextarea.classList.add('info-block');
// let wrapperAccount = document.createElement('div')
// wrapperAccount.classList.add('info-block');

// formWrapper.append(wrapperUserName, wrapperEmail, wrapperPassword, wrapperCheckbox, wrapperTextarea, wrapperAccount);

// let userNameLabel = document.createElement('label');
// userNameLabel.innerText = 'Имя пользователя';
// let userNameInput = document.createElement('input');
// userNameInput.type = 'text';
// wrapperUserName.append(userNameLabel, userNameInput)

// let emailLabel = document.createElement('label');
// emailLabel.innerText = 'Email';
// let emailInput = document.createElement('input');
// emailInput.type = 'email';
// wrapperEmail.append(emailLabel, emailInput);

// let passwordLabel = document.createElement('label');
// passwordLabel.innerText = 'Password';
// let passwordInput = document.createElement('input');
// passwordInput.type = 'password';
// wrapperPassword.append(passwordLabel, passwordInput)

// let checkboxLabel = document.createElement('label');
// checkboxLabel.innerText = '"Я прочитал пользовательское соглашение"';
// let checkboxInput = document.createElement('input');
// checkboxInput.type = 'checkbox';
// wrapperCheckbox.append(checkboxLabel, checkboxInput);

// let textAreaLabel = document.createElement('label');
// textAreaLabel.innerText = 'Пожелания разработчикам';
// let textArea = document.createElement('textarea');
// textArea.rows = '5';
// wrapperTextarea.append(textAreaLabel, textArea);

// let radioBtnPaidLabel = document.createElement('label');
// radioBtnPaidLabel.innerText = 'Платный аккаунт';
// let radioBtnPaid = document.createElement('input');
// radioBtnPaid.type = 'radio';
// radioBtnPaid.name = "account";
// radioBtnPaidLabel.append(radioBtnPaid);
// let radioBtnFreeLabel = document.createElement('label');
// radioBtnFreeLabel.innerText = 'Бесплатный аккаунт';
// let radioBtnFree = document.createElement('input');
// radioBtnFree.checked = true;
// radioBtnFree.type = 'radio';
// radioBtnFree.name = "account";
// radioBtnFreeLabel.append(radioBtnFree);

// wrapperAccount.append(radioBtnPaidLabel, radioBtnFreeLabel);

// let btn = document.createElement('button');
// btn.innerText = 'submit';
// formWrapper.append(btn);

// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('Кнопка работает');
// });



//=========================================================================