import showAnswer from './lib/answer-button';
import createCard, { quizCards } from './lib/quizcards';
import { bookmarkedCards } from './lib/bookmarks';

const pageTitle = document.querySelector('h1');

switch (pageTitle.innerText) {
  case 'Quizney':
    createCard(quizCards);
    showAnswer();
    break;
  case 'Bookmarks':
    createCard(bookmarkedCards);
    showAnswer();
    break;
}
