import refs from './refs';
import ApiServise from './api-service';
import markupNews from './markup-service';

const newsApiServise = new ApiServise();

console.log(newsApiServise);

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  newsApiServise.query = e.currentTarget.elements.query.value;
  searchNews(newsApiServise.query);
}

async function searchNews(query) {
  console.log(query);
  const news = await newsApiServise.fetchNews(query);
  markupNews(news);
}
