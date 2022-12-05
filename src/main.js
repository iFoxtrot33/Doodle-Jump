
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const doodler = document.createElement('div');
  let doodlerStyleLeft = 50;
  let doodlerStyleBottom = 150;

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add('doodler');
    doodler.style.left = doodlerStyleLeft + 'px';
    doodler.style.bottom = doodlerStyleBottom + 'px';
  };
  createDoodler();

  function start() {
    createDoodler();
  }
});