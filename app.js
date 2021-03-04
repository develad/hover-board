const container = document.querySelector('#container');
const SQURE_NUM = 1015;

const colors = [
  'rgb(147, 112, 219)',
  'rgb(0, 250, 154)',
  'rgb(119, 136, 153)',
  'rgb(219, 112, 147)',
  'rgb(64, 224, 208)',
];

for (let i = 0; i < SQURE_NUM; i++) {
  const squre = document.createElement('div');
  squre.classList.add('squre');
  squre.addEventListener('mouseover', () => {
    const randomColor = getRandomColor();
    squre.style.backgroundColor = randomColor;
  });
  squre.addEventListener('mouseleave', () => {
    squre.style.backgroundColor = 'rgb(60, 64, 65)';
  });
  container.appendChild(squre);
}

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
