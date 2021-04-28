const answerButtons = document.querySelectorAll('.quizcard__button');
const answers = document.querySelectorAll('.quizcard__answer');

answerButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    answers[index].classList.toggle('hidden');
    answerButtons[index].innerHTML =
      answerButtons[index].innerHTML === 'Show Answer'
        ? 'Hide Answer'
        : 'Show Answer';
  });
});

const options = document.querySelectorAll('.quizcard__tags li');

options.forEach((option) => {
  option.addEventListener('click', () => {
    const quizCard = option.parentNode.parentNode;
    const answer = quizCard.querySelector('.quizcard__answer--test');
    answer.innerHTML = option.classList.contains('quizcard__tags--correct')
      ? 'Congratulations, that is correct!'
      : 'Sorry, that is wrong. Please try again.';
  });
});
