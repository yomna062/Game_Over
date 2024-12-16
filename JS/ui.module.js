export class Ui {
  constructor() {
    this.gamesContainer = document.querySelector(".games");
    this.gameDetails = document.querySelector(".gameDetails"); 
  }

  displayGames(games) { // Pass games data here
    this.gamesContainer.innerHTML = '';
    let newGame = '';

    if (games.length === 0) { // Check for empty array
      newGame = `
        <div class="iner mx-3 text-white rounded-3 p-2">
          <p class="alert">Those Games Do Not Exist.</p>
        </div>
      `;
    } else {
      for (let i = 0; i < games.length; i++) {
        newGame += `
          <div class="game col-lg-3 bg-transparent p-0  text-center  mb-4 h-100  ">
            <div class="iner mx-3 text-white rounded-3 " data-game-id="${games[i].id}">
              <figure class="m-3 ">
                <img class="card-img-top object-fit-cover h-100 rounded-3" src="${games[i].thumbnail}" alt="${games[i].title}">
              </figure>
              <figcaption>
                <div class="title d-flex justify-content-between mx-3">
                  <h4>${games[i].title}</h4>
                  <button class="btn btn-primary" type="button">Free</button>
                </div>
                <p class="card-text small text-center opacity-50 my-2 overflow-hidden">${games[i].short_description}</p>
              </figcaption>
              <div class="end-div d-flex justify-content-between mx-3 mt-3">
                <h5>${games[i].genre}</h5>
                <h5>${games[i].platform}</h5>
              </div>
            </div>
          </div>
        `;
      }
    }

    this.gamesContainer.innerHTML = newGame;
  }

  displayGameDetails(game) { // Pass a single game object
    let detailsHTML = `
      <div class="d-flex justify-content-between mx-3 text-white mt-2">
        <h2 class="fs-1">Details Game</h2>
        <i class="fs-1 close-details">X</i>
      </div>
      <div class="row datels ">
        <figure class="col-12 col-lg-4 my-3 my-lg-0">
          <img src="${game.thumbnail}" class="w-100" alt="game image">
        </figure>
        <figcaption class="col-12 col-lg-8 text-white">
          <h2 class="GameTitle fs-1 mb-5 fw-bolder">Title: ${game.title}</h2>
          <h3 class="fs-6">Category: <span class="h6 text-black fw-fw-bolder">${game.genre}</span></h3> 
          <h3 class="fs-6">Platform: <span class="fs-6 fw-fw-bolder">${game.platform}</span></h3>
          <h3 class="mb-5 fs-6">Status: <span class="fs-6">${game.status}</span></h3>
          <p class="mb-5">${game.description}</p>
          <a href="${game.game_url}" class="showGame btn btn-outline-warning fs-2 mb-3 text-center pb-5" target="_blank">Show Game</a>
        </figcaption>
      </div>
    `;

    this.gameDetails.innerHTML = detailsHTML;
  }
}
