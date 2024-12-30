let nameEl = document.querySelector('.name');
let emailEl = document.querySelector('.email');
let allBtnEl = document.querySelectorAll('button');
let msgEl = document.querySelectorAll('.message');
let errMsgEl = document.querySelectorAll('.message__error');
let iptLblEl = document.querySelectorAll('.ipt-lbl-container');
let step1El = document.querySelector('.step-1');
let step2El = document.querySelector('.step-2');
let step3El = document.querySelector('.step-3');
let currStepEl = document.querySelector('.step__current');
let allStepCirEl = document.querySelectorAll('.step__circle');
let allTopicIptEl = document.querySelectorAll('input[type="checkbox"]');
let allTopicLblEl = document.querySelectorAll('.topic-label');
let topicsEl = document.querySelector('.topics-container');
let summNameEl = document.querySelector('.summary__name');
let summEmailEl = document.querySelector('.summary__email');
let summTopicsEl = document.querySelector('.summary__topics');
let stepDetailEl = document.querySelector('.step-detail');
let formEl = document.querySelector('.register-form');
let formSectionEl = document.querySelector('.form-section');
let progressEl = document.querySelector('progress');

let name, email;
let selectedTopic = [];

if (step1El) {
    currStepEl.innerHTML = "1 ";
}

step2El.remove();
step3El.remove();

function validateEmail(email) {
    if (!email) return;
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}


msgEl.forEach(el => el.remove());

allBtnEl[0].addEventListener('click', () => {
    if (!nameEl.value) {
        iptLblEl[0].append(msgEl[0]);
    }

    if (!validateEmail(emailEl.value)) {
        errMsgEl[1].innerHTML = "Invalid email address.";
        iptLblEl[1].append(msgEl[1]);
    }

    if (!emailEl.value) {
        errMsgEl[1].innerHTML = "Please fill out this field.";
        iptLblEl[1].append(msgEl[1]);
    }
    name = nameEl.value;
    email = emailEl.value;

    if (name && validateEmail(email) && email) {
        step1El.remove();
        if (allStepCirEl[0].classList.contains('step__active')) {
            allStepCirEl[0].classList.remove('step__active');
            allStepCirEl[0].classList.add('step__completed');
            allStepCirEl[1].classList.add('step__active');
            formEl.insertBefore(step2El, stepDetailEl);
            currStepEl.innerHTML = "2 ";
        }
    }
})

allBtnEl[1].addEventListener('click', () => {

    allTopicIptEl.forEach(el => {
        if (el.checked) selectedTopic.push(el.value)
    });

    if (selectedTopic.length === 0) {
        topicsEl.append(msgEl[2])
    }

    if (selectedTopic.length > 0) {
        step2El.remove();
        if (allStepCirEl[1].classList.contains('step__active')) {
            allStepCirEl[1].classList.remove('step__active');
            allStepCirEl[1].classList.add('step__completed');
            allStepCirEl[2].classList.add('step__active');
            formEl.insertBefore(step3El, stepDetailEl);
            currStepEl.innerHTML = "3 ";
        }
    }

    summNameEl.innerHTML = name;
    summEmailEl.innerHTML = email;
    selectedTopic.forEach(topic => {
        let topicList = document.createElement('li');
        topicList.innerHTML = topic;
        summTopicsEl.append(topicList);
    })


})

console.log(allBtnEl)

formEl.addEventListener('submit', (evt) => {
    evt.preventDefault();

    formEl.remove();
    formSectionEl.append(msgEl[3]);

    let time = 3000;
    setInterval(() => {
        if (time === 0) {
            // window.location.reload(true);
            location.replace(location.href);
            return
        }
        console.log(time)
        time = time - 100;
        progressEl.value = time;
    }, 100);

    setTimeout(() => {
        msgEl[3].remove();
    }, 3000);


})

nameEl.addEventListener('focus', () => {
    msgEl[0].remove();
})

emailEl.addEventListener('focus', () => {
    msgEl[1].remove();
})

allTopicLblEl.forEach((topic) => topic.addEventListener('click', () => {
    msgEl[2].remove();
}))

