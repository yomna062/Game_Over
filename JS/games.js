import { Ui } from "./ui.module.js"; 

export class GamesFunction {
  constructor() {
    this.allGames = document.querySelector('.allGames');
    this.lis = document.querySelectorAll("nav ul li a");
    this.li1 = document.querySelector("nav ul li.active");
    this.category = "mmorpg";
    this.gameDetails = document.querySelector(".gameDetails");
    this.loadingScreen = document.querySelector('.loading-screen');
    this.newUi = new Ui(); 

    this.getGames() // Fetch initial games on load
      .then(() => this.newUi.displayGames(this.response)); // Display games after fetching

    this.clickLI(); 
  }

  clickLI() {
    this.lis.forEach(li => {
      li.addEventListener("click", () => {
        this.li1.classList.remove("active");
        this.li1.style.color = "white";
        this.category = li.innerHTML.toLocaleLowerCase();
        this.getGames()
          .then(() => this.newUi.displayGames(this.response)); 
      });
    });
  }

  clickOfTheGame() {
    this.newUi.gamesContainer.addEventListener("click", async (event) => {
      const target = event.target.closest(".iner"); // Find the clicked game container
      if (target) {
        const gameId = target.dataset.gameId;
        this.allGames.classList.add('d-none');
        await this.getGameDetails(gameId);
        this.newUi.displayGameDetails(this.response2); 
        this.gameDetails.classList.remove('d-none');
      }
    });
  }

  clickCloseBTN() {
    this.gameDetails.addEventListener("click", (event) => {
      if (event.target.classList.contains('close-details')) { 
        this.allGames.classList.remove('d-none');
        this.gameDetails.classList.add('d-none');
      }
    });
  }

  showLoading() {
    this.loadingScreen.style.display = 'flex';
  }

  hideLoading() {
    this.loadingScreen.style.display = 'none';
  }

  async getGames() {
    this.showLoading();
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4361cb09a2mshb5941b274ab0020p15838bjsn0827f0038673', 
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      const api = await fetch(url, options);
      this.response = await api.json();
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      this.hideLoading();
    }
  }

  async getGameDetails(id) {
    this.showLoading();
    const url2 = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options2 = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4361cb09a2mshb5941b274ab0020p15838bjsn0827f0038673', 
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      const api2 = await fetch(url2, options2);
      this.response2 = await api2.json();
    } catch (error) {
      console.error("Error fetching game details:", error);
    } finally {
      this.hideLoading();
    }
  }
}