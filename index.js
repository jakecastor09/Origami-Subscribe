const stepButtons = document.querySelectorAll('.step-button');
const progress = document.querySelector('#progress');

Array.from(stepButtons).forEach((button, index) => {
  button.addEventListener('click', () => {
    progress.setAttribute('value', (index * 100) / (stepButtons.length - 1.2));
    stepButtons.forEach((item, secindex) => {
      if (index > secindex) {
        item.classList.add('done');
      }
      if (index < secindex) {
        item.classList.remove('done');
      }
    });
  });
});
