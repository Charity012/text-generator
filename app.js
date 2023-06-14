let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others"`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things"`,
    person: `Albert Eisten`
}, {
    quote: `"At his best,man is the noblest of all animals; separated from law and justice he is the  worst"`,
    person: `Aristole`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life"`,
    person: `Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn"`,
    person: `Benjamin Franklin`
}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});


