const projectsUL = document.getElementById("projects");

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
        mainUL.innerHTML +
        `<div class="blob-wrapper"><div class="blob blob${i}" onclick="redirect('${url}')"><h3>${name}</h3></div></div>`;

      generateBlob(`.blob${i}`);
    }
  };
  xhr.send();
}

function redirect(url) {
  window.location.href = url;
}

getAllProjects(projectsUL);
