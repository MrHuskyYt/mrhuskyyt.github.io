function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayBlock(block){
  block.style.display = 'block';
  await sleep(500)
  block.style.opacity = 1;
}

async function hideBlock(block){
  block.style.opacity = 0;
  await sleep(500)
  block.style.display = 'none';
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
