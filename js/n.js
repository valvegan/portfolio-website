let portfolioProjects = (function () {
  let projects = [];

  function loadList() {
    return fetch("projects.json")
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        data.forEach((item) => {
          //convert pokemon names to uppercase
          let title = item.Title;
          let description = item.description;
          add(project);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  }

  function getAll() {
    return projects;
  }

  function add(project) {
    if (
      typeof project === "object" &&
      "Title" in project &&
      "Description" in project
    ) {
      projects.push(pokemon);
    } else {
      console.log("Error adding a new project");
    }
  }

  function addListItem(pokemon) {
    let pokemonItem = document.createElement("li");
    pokemonItem.classList.add("group-list-item");
    pokemonListDOM.appendChild(pokemonItem);
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-primary");
    button.dataset.toggle = "modal";
    button.dataset.target = "#modal-container";
    pokemonItem.appendChild(button);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
  };
})();

portfolioProjects
  .getAll()

  .forEach((project) => {
    portfolioProjects.addListItem(project);
  });
