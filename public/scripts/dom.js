const questionOne = document.querySelector('#quiz-1');
const questionTwo = document.querySelector('#quiz-2');
const questionThree = document.querySelector('#quiz-3');

document.querySelector('.time-yes').addEventListener('click', () => {
    questionOne.classList.toggle('no-display');
    questionTwo.classList.toggle('no-display');
});

document.querySelector('.time-no').addEventListener('click', () => {
    questionOne.classList.toggle('no-display');
    questionTwo.classList.toggle('no-display');
});

const postRequest = (method, url, data, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const result = JSON.parse(xhr.responseText);
            cb(result);
         }
    }
    xhr.open(method, url, true);
    xhr.send(data);
}
