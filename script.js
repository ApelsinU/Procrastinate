let phrases = [
{ text: 'Юрий Дудь', 										image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
{ text: 'посмотреть трейлер сериала и заодно первый сезон',	image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
{ text: 'проверить непрочитанное в Telegram',				image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
{ text: 'читать про зарплаты в Сан-Франциско',				image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
{ text: 'разобраться, о чём поют рэперы',					image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
{ text: 'посмотреть скидки на авиабилеты',					image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
{ text: 'расставить книги на полке по цвету',				image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
{ text: 'прочитать новости и ужаснуться в комментариях', 	image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
{ text: 'отправить другу гифку',								image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
{ text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' }
];


function getRandomElement(arr){
	let i = Math.floor(Math.random() * arr.length);
	return arr[i];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
let cursor = document.querySelector('.cursor');

button.addEventListener('click',function(){
	let RandomElement = getRandomElement(phrases);
	smoothly(phrase, 'textContent', RandomElement.text);
	smoothly(image, 'src', RandomElement.image);

	if (RandomElement.text.length > 40)
	{
		advice.style.fontSize = '35px';
		cursor.style.width = '12px';
		cursor.style.height = '27px';
	}
});

for(let j = 0; j < 3; j++ )
{
	let RandomElement = getRandomElement(phrases);
	smoothly(phrase, 'textContent', RandomElement.text);
	smoothly(image, 'src', RandomElement.image);
};