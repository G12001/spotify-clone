const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a62eb34970msh648c95772d1a4b9p1c2c7cjsnfd517979631a',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));