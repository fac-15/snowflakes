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
//
// const quizPage = () => {
//
//     const questions = document.querySelectorAll('.quiz-ques');
//
//     questions.forEach((question, index) => {
//         console.log('question:', question);
//         console.log('index:', index);
//         //each quiz question section
//         const quiz1 = document.getElementById('quiz-1');
//         const quiz2 = document.getElementById('quiz-2');
//         const quiz3 = document.getElementById('quiz-3');
//         const quiz4 = document.getElementById('quiz-4');
//
//         //points counter
//         let counter = 0;
//
//         // identify left and right click (swipe)
//         const right = question.querySelector('.arrow-right');
//         const left = question.querySelector('.arrow-left');
//
//         //event listener for clicks(swipes)
//         left.addEventListener('click', function(e){
//
//             question.classList.toggle('no-display');
//             counter = 0;
//             console.log('NO', counter);
//             console.log('new index', index);
//         });
//
//         right.addEventListener('click', function(e){
//             question.classList.toggle('no-display');
//             counter = 1;
//             console.log('YES', counter);
//             console.log('new index', index);
//         });
//
//         //get index(question number) & check if counter is equal to 0 or 1
//         //if counter is equal to 1, user swiped right (agreed)
//         //if counter is equal to 0, user swiped left (disagreed)
//
//     });
//
// };
// quizPage();
