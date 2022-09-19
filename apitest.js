const axios = require('axios');

axios.get('https://api.jikan.moe/v4/anime')
.then(response => {
  console.log(response.data.data.titles);
})