document.addEventListener('DOMContentLoaded', () => {
  // Select all accordion buttons
  const accordionButtons = document.querySelectorAll('.accordion > div > button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const clickedButton = event.target;
      const currentContent = clickedButton.nextElementSibling;
      const currentImg = clickedButton.parentElement.previousElementSibling;

      // Close all other accordions by removing 'visible' class and adding 'hidden'
      accordionButtons.forEach(otherButton => {
        if (otherButton !== clickedButton) {
          otherButton.nextElementSibling.classList.remove('visible');
          otherButton.nextElementSibling.classList.add('hidden');
          otherButton.parentElement.previousElementSibling.classList.remove('visible');
          otherButton.parentElement.previousElementSibling.classList.add('hidden');
        }
      });

      // Toggle the 'visible' class on the current accordion content and image
      currentContent.classList.toggle('visible');
      currentImg.classList.toggle('visible');

      // Ensure that toggling also respects the hidden state
      if(currentContent.classList.contains('visible')) {
        currentContent.classList.remove('hidden');
        currentImg.classList.remove('hidden');
      } else {
        currentContent.classList.add('hidden');
        currentImg.classList.add('hidden');
      }
    });
  });
});
