const contenido = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=32b0fa0903d7ecb4b3cf5527057f7c06&hash=ba3e583198e02535725a5339c0904bd6';
      const contenedor = document.querySelector('#row');
      let contenedorHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const comics of json.data.results) {
            let urlComics = comics.urls[0].url;
            contenedorHTML += `
              <div class="col-md-4">
                  <a href="${urlComics}" target="_blank">
                    <img src="${comics.thumbnail.path}.${comics.thumbnail.extension}" alt="${comics.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${comics.title}</h3>
              </div>`;
          }
          contenedor.innerHTML = contenedorHTML;
        })
    }
  };
  contenido.render();
