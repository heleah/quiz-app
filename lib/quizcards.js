const mainContainer = document.querySelector('main');
const srcToBookmark = '../img/crown_outlined.svg';
const srcBookmarked = '../img/crown_filled.svg';

export const quizCards = [
  {
    question: 'Whose voice actors got married in real life?',
    imgSrc: srcToBookmark,
    answer: 'Mickey & Minnie Mouse',
    options: [
      'Donald & Daisy Duck',
      'Belle & Gaston',
      'Mickey & Minnie Mouse',
      'Cinderella & Prince Charming',
    ],
  },
  {
    question: "Who was Ariel's face based on?",
    imgSrc: srcBookmarked,
    answer: 'Alyssa Milano',
    options: ['Jodie Foster', 'Alyssa Milano', 'Carrie Fisher', 'Meg Ryan'],
  },
  {
    question: "Where is Europe's biggest Disney Store located?",
    imgSrc: srcBookmarked,
    answer: 'Dublin',
    options: ['Dublin', 'Munich', 'London', 'Barcelona'],
  },
  {
    question: "Which was Walt Disney's first animated movie?",
    imgSrc: srcToBookmark,
    answer: 'Snow White',
    options: ['Dumbo', 'Pinocchio', 'Bambi', 'Snow White'],
  },
];

export function createElement(tagName, classNames, parentNode, text = '') {
  const newEl = document.createElement(tagName);
  classNames.forEach((className) => {
    newEl.classList.add(className);
  });
  newEl.innerText = text;
  parentNode.appendChild(newEl);
  return newEl;
}

export default function createCard(cards) {
  cards.forEach((card) => {
    const quizcardContainer = createElement(
      'section',
      ['quizcard'],
      mainContainer
    );

    const bookmarkImg = createElement(
      'img',
      ['quizcard__bookmark'],
      quizcardContainer
    );
    bookmarkImg.src = card.imgSrc;
    bookmarkImg.alt = 'bookmark';

    const questionHeadline = createElement(
      'h3',
      ['quizcard__headline', 'oregano'],
      quizcardContainer,
      'Question:'
    );

    const question = createElement(
      'p',
      ['quizcard__question'],
      quizcardContainer,
      card.question
    );

    const cardAnswer = createElement(
      'p',
      ['quizcard__answer', 'oregano'],
      quizcardContainer,
      'Choose one of the options below:'
    );

    const tagContainer = createElement(
      'ul',
      ['quizcard__tags'],
      quizcardContainer
    );

    card.options.forEach((option) => {
      const optionTag = createElement(
        'li',
        ['quizcard__tag'],
        tagContainer,
        option
      );
      if (option === card.answer) {
        optionTag.classList.add('quizcard__tag--correct');
      }
    });
  });
}

/*<section class="quizcard">
    <img
        class="quizcard__bookmark"
        src="/img/crown_outlined.svg"
        alt="bookmark"
    />
    <h3 class="quizcard__headline oregano">Question:</h3>
    <p class="quizcard__question">
        Whose voice actors got married in real life?
    </p>
    <ul class="quizcard__tags">
        <li>Donald & Daisy Duck</li>
        <li>Belle & Gaston</li>
        <li>Mickey & Minnie Mouse</li>
        <li>Cinderella & Prince Charming</li>
    </ul>
    <button class="quizcard__button oregano">Show Answer</button>
    <p class="quizcard__answer hidden">Mickey & Minnie Mouse</p>
</section> */
