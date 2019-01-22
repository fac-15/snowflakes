const carousel = function() {
    const boxes = document.querySelectorAll('.explore-carousel');
    boxes.forEach(box => {
        console.log(box);
        const next = box.querySelector('.next');
        const prev = box.querySelector('.prev');
        const items = box.querySelectorAll('.carousel-content li');
        let counter = 0;
        let amount = items.length;
        let current = items[0];
        box.classList.add('active');
        function navigate(direction) {
            current.classList.remove('current');
            counter = counter + direction;
            if (direction === -1 && counter < 0) {
                counter = amount - 1;
            }
            if (direction === 1 && !items[counter]) {
                counter = 0;
            }
            current = items[counter];
            current.classList.add('current');
        }
        next.addEventListener('click', function(ev) {
            navigate(1);
        });
        prev.addEventListener('click', function(ev) {
            navigate(-1);
        });
        navigate(0);
    });
};

carousel();

const quizPage = () => {

    //each quiz question section
    const quiz1 = document.getElementById('quiz-1');
    const quiz2 = document.getElementById('quiz-2');
    const quiz3 = document.getElementById('quiz-3');
    const quiz4 = document.getElementById('quiz-4');

    const questions = document.querySelectorAll('.quiz-ques');

    //points counter
    let points = 0;

    console.log('page 4', quiz1);

    // identify left and right click (swipe)
    const quizQues = document.querySelectorAll('.questions');
    const swipe = document.querySelectorAll('.arrow');
    const accept = document.querySelectorAll('.arrow-right');
    const reject = document.querySelectorAll('.arrow-left');
    console.log('does this work.. theres', questions.length);

    //event listener for clicks(swipes)
    swipe.addEventListener('click', function(e){

        questions.forEach(question => {
            question.classList.toggle('no-display');
            // quiz1.classList.add('no-display');
            // quiz2.classList.remove('no-display');
        });
    });
};
quizPage();
