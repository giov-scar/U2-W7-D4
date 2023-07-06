
document.getElementById('load').addEventListener('click', function() {
    // Rimuovi le card esistenti
    let cardContainer = document.querySelector('.album .container .row');
    cardContainer.innerHTML = '';
  
    // Esegui la chiamata API per ottenere le immagini
    fetch('https://api.pexels.com/v1/search?query=space', {
      headers: {
        Authorization: 'RjvF8ncOYRnqP89ND2dVRUl8EOziYqVI3c01eKbZKPW0juaA6Hc3fVg4'
      }
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        // Crea una card per ogni immagine
        data.photos.forEach(function(photo) {
          // Crea gli elementi HTML per la card
          let col = document.createElement('div');
          col.classList.add('col-md-4');
  
          let card = document.createElement('div');
          card.classList.add('card', 'mb-4', 'shadow-sm');
  
          let image = document.createElement('img');
          image.src = photo.src.small;
          image.classList.add('card-img-top');
  
          let cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
  
          let title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = photo.photographer;
  
          let text = document.createElement('p');
          text.classList.add('card-text');
          text.textContent = 'Photo ID: ' + photo.id;
  
          // Aggiungi gli elementi alla card
          cardBody.appendChild(title);
          cardBody.appendChild(text);
          card.appendChild(image);
          card.appendChild(cardBody);
          col.appendChild(card);
          
  
          // Aggiungi la card al container
          cardContainer.appendChild(col);
        });
      })
      .catch(function(error) {
        console.error('Errore durante il caricamento delle immagini:', error);
      });
  });
  


// SECONDO BOTTONE

document.getElementById('change-load').addEventListener('click', function() {
    // Rimuovi le card esistenti
    let cardContainer = document.querySelector('.album .container .row');
    cardContainer.innerHTML = '';
  
    // Esegui la chiamata API per ottenere le immagini
    fetch('https://api.pexels.com/v1/search?query=landscape', {
      headers: {
        Authorization: 'RjvF8ncOYRnqP89ND2dVRUl8EOziYqVI3c01eKbZKPW0juaA6Hc3fVg4'
      }
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        // Crea una card per ogni immagine
        data.photos.forEach(function(photo) {
          // Crea gli elementi HTML per la card
          let col = document.createElement('div');
          col.classList.add('col-md-4');
  
          let card = document.createElement('div');
          card.classList.add('card', 'mb-4', 'shadow-sm');
  
          let image = document.createElement('img');
          image.src = photo.src.small;
          image.classList.add('card-img-top');
  
          let cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
  
          let title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = photo.photographer;
  
          let text = document.createElement('p');
          text.classList.add('card-text');
          text.textContent = 'Photo ID: ' + photo.id;
  
          // Aggiungi gli elementi alla card
          cardBody.appendChild(title);
          cardBody.appendChild(text);
          card.appendChild(image);
          card.appendChild(cardBody);
          col.appendChild(card);
  
          // Aggiungi la card al container
          cardContainer.appendChild(col);
        });
      })
      .catch(function(error) {
        console.error('Errore durante il caricamento delle immagini:', error);
      });
  });

  