import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '65b7e1cdc460446cbb438b4053289b4f';

export default class ApiServise {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fetchNews() {
    const config = {
      params: {
        q: this.query,
        apiKey: API_KEY,
        from: '2022 - 12 - 20',
        to: '2022 - 12 - 27',
        pageSize: 20,
        page: this.page,
      },
    };

    console.log(config);

    try {
      const res = await axios.get(BASE_URL, config);
      return res.data.articles;
    } catch (error) {
      console.log(error);
    }
  }

  resetPage() {
    this.page = 1;
  }
}
