//variables
//hamburger menu and x
//div for bikes
//svg header?


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }}
 const john = new Person('John', 27);
 console.log(john.name); // 'John'
 let image1 = document.querySelector(".profile_portrait").onclick = function ()
 {
  console.log("hello");
  //validation code to see State field is mandatory.  
 }
console.log(image1)


const productsDOM = document.querySelector('body');

class Projects {
  async getProjects() {
    try {
      let result = await fetch("js/projects.json");
      let data = await result.json();
      let projects = data.projects;
      projects = projects.map((item) => {
        const Title = item.Title;
        const Description = item.Description;
        const id = item.id;
        return { Title, Description, id };
      });
    } catch (error) {
      console.log(error);
    }
  }
}

//display project
class UI {
  showProjects(projects) {
    let result = ``;
    projects.forEach((project) => {
      result += ` <!--singleproduct-->
            <article class="product">
                <div class="img-container">
    <button class="bag-btn" data-id=${project.id}><i class="fa fa-shopping-cart"></i>add to cart</button>
    <h3>${project.Title}</h3>     
    <h4>£${project.Description}</h4>      
    </div>
            </article>`;
    });
    productsDOM.innerHTML = result;
  }
}

document.addEventListener(onload, () => {
  const ui = new UI();
  const projects = new Projects();

  //get all products
  projects.getProjects().then((projects) => {
    ui.showProjects(projects);
    console.log(projects)
  });
});

let x = document.getElementById("bike-pattern");
let bikeToRepeat = document.createElement("img");
bikeToRepeat.src = "./img/bikeIcon_rotating-wheels.svg";
let g = "./img/bikeIcon_rotating-wheels.svg,";

let bike1 = document.getElementsByClassName("bike-1");

let gRepeat = g.repeat(4);
let g3 = gRepeat.split(",");
console.log(g3);
x.append(g3);
