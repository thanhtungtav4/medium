import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-fast.ml/wp-json/wp/v2'
});