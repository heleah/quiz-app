export default function showAnswer() {
  const options = document.querySelectorAll('.quizcard__tag');
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const quizCard = option.parentNode.parentNode;
      const answer = quizCard.querySelector('.quizcard__answer');
      if (option.classList.contains('quizcard__tag--correct')) {
        answer.innerText = '🧚 Congratulations, that is correct! 🧚';
        option.classList.add('oregano');
        option.style.fontSize = '1.3rem';
      } else {
        answer.innerText = '☠️ Sorry, that is wrong. Please try again. ☠️';
      }
    });
  });
}
