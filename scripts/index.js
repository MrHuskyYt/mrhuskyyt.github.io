function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function displayBlock(block){
  block.style.opacity = 1;
}

function hideBlock(block){
  block.style.opacity = 1;
}

async function displayCircledList(){
  displayBlock(document.getElementById("tl"));
  await sleep(300);
  displayBlock(document.getElementById("tr"));
  await sleep(300);
  displayBlock(document.getElementById("br"));
  await sleep(300);
  displayBlock(document.getElementById("bl"));
}

async function hideCircledList(){
  hideBlock(document.getElementById("bl"));
  await sleep(300);
  hideBlock(document.getElementById("br"));
  await sleep(300);
  hideBlock(document.getElementById("tr"));
  await sleep(300);
  hideBlock(document.getElementById("tl"));
}

async function displayGithub(){
  
}

async function displayYoutube(){

}

async function displayDiscord(){

}

async function displayTopProject(){

}