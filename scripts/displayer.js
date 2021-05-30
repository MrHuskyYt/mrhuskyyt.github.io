const gh = document.getElementById('tl');
const yt = document.getElementById('tr');
const ds = document.getElementById('bl');
const tp = document.getElementById('br');
const root = document.getElementById('root')

var user_inf = null;

const xhr = new XMLHttpRequest();

async function displayGithub(){
  yt.style.opacity = 0;
  await sleep(300);
  yt.style.display = 'none';
  await  sleep(300);
  ds.style.opacity = 0;
  await sleep(300);
  ds.style.display = 'none';
  await sleep(300);
  tp.style.opacity = 0;
  await sleep(300);
  tp.style.display = 'none';

  root.onmouseover = '';

  xhr.open('GET', 'https://api.github.com/users/acutewoof', true);

  xhr.onload = async function() {
    json = JSON.parse(this.response)

    root.innerHTML =`<h1 id='name'>${json['name']}</h1>`;
    await sleep(4000);

    root.innerHTML = `<h4 id='repo'>Public Repos: ${String(json['public_repos']).trim()}</h4>`;
    await sleep(4000);

    root.innerHTML = `<h4 id='loc'>Location: ${String(json['location']).trim()}</h4>`;
    await sleep(4000);

    root.innerHTML = `<h4 id='followers'>Followers: ${String(json['followers']).trim()}</h4>`
    await sleep(4000);

    root.innerHTML = `<img class='pfp' id='img' src="https://avatars.githubusercontent.com/acutewoof" onclick='window.open("https://github.com/acutewoof")' onmouseover='displayCircledList()'>`
    document.getElementById('img').style.opacity = 0;
    await sleep(300);
    document.getElementById('img').style.opacity = 1;
    
    displayCircledList()

  }

  xhr.send();

}

async function displayYoutube(){
  gh.style.opacity = 0;
  await sleep(300);
  gh.style.display = 'none';
  await sleep(300);
  ds.style.opacity = 0;
  await sleep(300);
  ds.style.opacity = 'none';
  await sleep(300);
  tp.style.opacity = 0;
  await sleep(300);
  tp.style.display = 'none';

  root.onmouseover = '';

}

async function displayDiscord(){
  yt.style.opacity = 0;
  await sleep(300);
  yt.style.display = 'none';
  await  sleep(300);
  gh.style.opacity = 0;
  await sleep(300);
  gh.style.display = 'none';
  await sleep(300);
  tp.style.opacity = 0;
  await sleep(300);
  tp.style.display = 'none';

  root.onmouseover = '';
  
} 

async function displayTopProject(){
  yt.style.opacity = 0;
  await sleep(300);
  yt.style.display = 'none';
  await  sleep(300);
  gh.style.opacity = 0;
  await sleep(300);
  gh.style.display = 'none';
  await sleep(300);
  ds.style.opacity = 0;
  await sleep(300);
  ds.style.display = 'none';

  root.onmouseover = '';

}