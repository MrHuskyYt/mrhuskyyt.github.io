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
