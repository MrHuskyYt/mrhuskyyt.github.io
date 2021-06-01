const gh = document.getElementById('tl');
const yt = document.getElementById('tr');
const ds = document.getElementById('bl');
const tp = document.getElementById('br');
const root = document.getElementById('root')

var user_inf = null;

const xhr = new XMLHttpRequest();


async function displayGithub(){

  xhr.open('GET', 'https://api.github.com/users/acutewoof', true);

  xhr.onload = async function() {
    json = JSON.parse(this.response)

    sleepTime = 3000;

    root.innerHTML = ''
    await sleep(100);

    root.innerHTML =`<h1 id='name'>${json['name']}</h1>`;
    await sleep(2000);

    root.innerHTML = `<h4 id='repo'>Public Repos: ${String(json['public_repos'])}</h4>`;
    await sleep(sleepTime);

    root.innerHTML = `<h4 id='loc'>Location: ${String(json['location'])}</h4>`;
    await sleep(sleepTime);

    root.innerHTML = `<h4 id='followers'>Followers: ${String(json['followers'])}</h4>`
    await sleep(sleepTime);

    root.innerHTML = `<h4 id='following'>Following: ${String(json['following'])}</h4>`
    await sleep(sleepTime);

    root.innerHTML = `<img class='pfp' id='img' src="https://avatars.githubusercontent.com/acutewoof" onclick='window.open("https://github.com/acutewoof")' onmouseover='displayGithub()'>`
    document.getElementById('img').style.opacity = 0;
    await sleep(300);
    document.getElementById('img').style.opacity = 1;

  }

  xhr.send();

}


async function displayTopProject(){
  root.onmouseover = displayTopProject();
}