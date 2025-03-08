let currentPageUrl = 'https://swapi.dev/api/people/';

window.onload = async () => {
  try {
    await loadCharacters(currentPageUrl);
  } catch (error) {
    console.log(error);
    alert('Erro ao carregar informações');
  }
};

async function loadCharacters(url) {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''; //Limpar resultados anteriores

  try {

    const response = await fetch(url);
    const responseJson = await response.json();

    responseJson.results.forEach((character) => {
      const card = document.createElement("div");
      card.style.backgroundImage = `url('https://web.archive.org/web/20230325201650if_/https://starwars-visualguide.com/assets/img/characters/1.jpg')`;
      card.className = "cards";

      const characterNameBG = document.createElement("div");
      characterNameBG.className = "character-name-bg";

      const characterName = document.createElement("span");
      characterName.className = "character-name";
      characterName.innerText = `${character.name}`;

      characterNameBG.appendChild(characterName);
      card.appendChild(characterNameBG);

      mainContent.appendChild(card);
    });

    currentPageUrl = url

  } catch (error) {
    alert('Erro ao carregar personagens')
    console.log(error)
  }
}