import refs from './refs';

export default function markupNews(news) {
  console.log(news);
  const template = news.map(makeTemplate).join('');
  refs.news.innerHTML = template;
}

function makeTemplate({ title, description, urlToImage, url }) {
  return `<article class="news__item">
        <h2 class="news__title">${title}</h2>
        <p class="news__text">${description}</p>
        <img
          class="news__img"
          src=${urlToImage}
          alt="test"
        />
        <a
          class="news__link"
          target="_blank"
          href=${url}
          rel="noreferrer noopener"
          >Load more</a
        >
      </article>`;
}
