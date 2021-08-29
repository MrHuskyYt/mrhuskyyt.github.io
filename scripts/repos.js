const reposUL = document.getElementById("repos");
const projectsUL = document.getElementById("projects");

function getAllRepos(mainUL) {
  const xhr = new XMLHttpRequest();
  const url = `https://api.github.com/users/acutewoof/repos`;
  xhr.open("GET", url, true);

  xhr.onload = function () {
    const data = JSON.parse(this.response);
    for (let i in data) {
      const name = data[i].name;
      const url = data[i].url;
      mainUL.innerHTML =
        mainUL.innerHTML + `<li><a href="${url}">${name}</a></li>`;
    }
  };
  xhr.send();
}

function getAllProjects(mainUL) {
  const xhr = new XMLHttpRequest();
  const url = `https://raw.githubusercontent.com/ACuteWoof/ACuteWoof/main/projects.json`;
  xhr.open("GET", url, true);

  xhr.onload = function () {
    let data = JSON.parse(this.response);
    data = data.all;
    for (let i in data) {
      const name = data[i].name;
      const url = data[i].url;
      mainUL.innerHTML =
        mainUL.innerHTML + `<li><a href="${url}">${name}</a></li>`;
    }
  };
  xhr.send();
}

getAllProjects(projectsUL);
getAllRepos(reposUL);
