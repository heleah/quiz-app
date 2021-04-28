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
