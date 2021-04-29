const mainContainer = document.querySelector('main');
const srcToBookmark = '../img/crown_outlined.svg';
const srcBookmarked = '../img/crown_filled.svg';

export const quizCards = [
  {
    question: 'Whose voice actors got married in real life?',
    imgSrc: srcToBookmark,
    answer: 'Mickey & Minnie Mouse.',
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
    answer: 'Alyssa Milano.',
    options: ['Jodie Foster', 'Alyssa Milano', 'Carrie Fisher', 'Meg Ryan'],
  },
  {
    question: "Where is Europe's biggest Disney Store located?",
    imgSrc: srcBookmarked,
    answer: 'Dublin.',
    options: ['Dublin', 'Munich', 'London', 'Barcelona'],
  },
  {
    question: "Which was Walt Disney's first animated movie?",
    imgSrc: srcToBookmark,
    answer: 'Snow White.',
    options: ['Dumbo', 'Pinocchio', 'Bambi', 'Snow White'],
  },
];

function createTag(tagName) {
  return document.createElement(tagName);
}

export default function createCard(cards) {
  cards.forEach((card) => {
    const sectionTag = createTag('section');
    sectionTag.classList.add('quizcard');
    mainContainer.appendChild(sectionTag);

    const bookmarkImg = createTag('img');
    bookmarkImg.classList.add('quizcard__bookmark');
    bookmarkImg.src = card.imgSrc;
    bookmarkImg.alt = 'bookmark';
    sectionTag.appendChild(bookmarkImg);

    const h3 = createTag('h3');
    h3.classList.add('quizcard__headline', 'oregano');
    h3.innerHTML = 'Question:';
    sectionTag.appendChild(h3);

    const question = createTag('p');
    question.classList.add('quizcard__question');
    question.innerHTML = card.question;
    sectionTag.appendChild(question);

    const tagContainer = createTag('ul');
    tagContainer.classList.add('quizcard__tags');
    sectionTag.appendChild(tagContainer);

    card.options.forEach((option) => {
      const tag = createTag('li');
      tag.innerHTML = option;
      tagContainer.appendChild(tag);
    });

    const answerButton = createTag('button');
    answerButton.classList.add('quizcard__button', 'oregano');
    answerButton.innerHTML = 'Show Answer';
    sectionTag.appendChild(answerButton);

    const answer = createTag('p');
    answer.classList.add('quizcard__answer', 'hidden');
    answer.innerHTML = card.answer;
    sectionTag.appendChild(answer);
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
