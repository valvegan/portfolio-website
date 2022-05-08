//fetch json data about projects
getDataTrial = () => {
  fetch("js/projects.json")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((item) => {
        //convert pokemon names to uppercase
        let title = item.Title;
        let description = item.Description;
        console.log(title);
      })
    )
    .catch((e) => {
      console.log(e);
    });
};
getDataTrial();

let portfolioProjects = (function () {
  let projects = [];

  function loadList() {
    return fetch("projects.json")
      .then((response) => response.json())
      .then(
        (data) => console.log(data),
        data.forEach((item) => {
          console.log(item);
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

  function displayWork(project) {
    let container = document.querySelector("#work");
    let listWork = document.createElement("li");
    let button = document.createElement("button");
    let title = document.createElement("h4");
    listWork.classList.add("list-item");
    button.classList.add("grid__item");
    button.style.backgroundImage = "url(" + project.img + ")";
    title.innerText = project.name;
    listWork.appendChild(title);
    listWork.appendChild(button);
    container.appendChild(listWork);
    button.addEventListener("click", () => {
      displayDetails(project);
      toggleModal();
    });
  }

  function getAll() {
    return projects;
  }

  return {
    loadList: loadList,
    displayWork: displayWork,
    getAll: getAll,
  };
})();

portfolioProjects
  .getAll()

  .forEach((project) => {
    portfolioProjects.loadList(project);
    console.log(project);
  });
