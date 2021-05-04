import axios from 'axios';

export default axios.create({
  baseURL: process.env.WORDPRESS_API_URL
});