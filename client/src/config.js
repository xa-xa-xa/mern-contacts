export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://pacific-earth-90114.herokuapp.com/login'
    : 'http://localhost:3000';
