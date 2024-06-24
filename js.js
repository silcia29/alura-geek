document.addEventListener('DOMContentLoaded', function() {
    // Elementos de juegos predeterminados
    const defaultGames = [
      {
        name: 'Mario Kart',
        price: 49.99,
        imageUrl: 'https://i.pinimg.com/564x/60/3a/0b/603a0bca9051536db920b460c6a8109d.jpg'
      },
      {
        name: 'Sonic the Hedgehog',
        price: 39.99,
        imageUrl: 'https://i.pinimg.com/564x/2c/d2/f8/2cd2f8259d28dedc685291f9a514f1d9.jpg'
      },
      {
        name: 'Grand Theft Auto V',
        price: 59.99,
        imageUrl: 'https://i.pinimg.com/564x/7e/e4/3f/7ee43f04fb9cf0752460782a28ce518b.jpg'
      }
    ];
  
    // Función para renderizar los juegos predeterminados
    function renderDefaultGames() {
      const defaultGamesContainer = document.getElementById('defaultGames');
      defaultGames.forEach(game => {
        const gameCard = createGameCard(game);
        defaultGamesContainer.appendChild(gameCard);
      });
    }
  
    // Función para crear una tarjeta de juego
    function createGameCard(game) {
      const card = document.createElement('div');
      card.classList.add('product-card');
  
      const image = document.createElement('img');
      image.src = game.imageUrl;
      image.alt = game.name;
      card.appendChild(image);
  
      const title = document.createElement('h3');
      title.textContent = game.name;
      card.appendChild(title);
  
      const price = document.createElement('p');
      price.textContent = `$${game.price.toFixed(2)}`;
      card.appendChild(price);
  
      return card;
    }
  
    // Llamar a la función para renderizar los juegos predeterminados al cargar la página
    renderDefaultGames();
  
    // Función para limpiar el formulario (ejemplo, ajusta según tu implementación)
    function resetForm() {
      document.getElementById('productForm').reset();
    }
  });
  