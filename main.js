let getRes = document.querySelector('button')

let clicked = event => {
  console.log('button clicked')
  axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        axios.get('http://swapi.dec/api/planets/?search=Residents')
          .then((res) => {
            let element = document.creeateElement(h2)
            element = res
          });
      }
    });
}

getRes.addEventListener('click', clicked)