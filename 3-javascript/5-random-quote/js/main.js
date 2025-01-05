let authorEl = document.querySelector('.author-name');
let tagEl = document.querySelector('.tag-list');
let tagItemEl = document.querySelectorAll('.tag-item');
let quoteEl = document.querySelector('.quote');
let randomBtnEl = document.querySelector('.random-btn');
let copyBtnEl = document.querySelector('.copy-btn');
let errorEl = document.querySelector('.error');
let containerEl = document.querySelector('.container');

const URL = "https://go-quote.azurewebsites.net/random-quote?format=json";

async function fetchRandomQuote() {
    const response = await fetch(URL).catch(() => {
        containerEl.prepend(errorEl);
        setTimeout(() => {
            errorEl.remove();
        }, 3000);
    });

    return await response.json();
}

errorEl.remove();

randomBtnEl.addEventListener('click', async () => {
    await fetchRandomQuote().then(data => {
        tagItemEl.forEach(el => el.remove());
        authorEl.innerHTML = data.author;
        for (let i = 0; i < data.tags.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = data.tags[i];
            li.classList.add('tag-item');
            tagItemEl = [...tagItemEl, li]
            tagEl.append(li)
        }
        quoteEl.innerHTML = `&ldquo;${data.text}&rdquo;`;
    });
})

copyBtnEl.addEventListener('click', async () => {
    await navigator.clipboard.writeText(quoteEl.innerHTML);
})




