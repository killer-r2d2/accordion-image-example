document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  const defaultImage = document.querySelector('.default-image');

  // Function to check if any accordion is open
  function anyAccordionOpen() {
    return Array.from(accordionButtons).some(button =>
      button.nextElementSibling.classList.contains('visible')
    );
  }

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const currentContent = this.nextElementSibling;
      const currentImg = this.parentElement.previousElementSibling;
      
      // Toggle visibility for the current accordion
      currentContent.classList.toggle('visible');
      currentImg.classList.toggle('visible');
      currentContent.classList.toggle('hidden');
      currentImg.classList.toggle('hidden');

      // Close all other accordions and hide their content and images
      accordionButtons.forEach(otherButton => {
        if (otherButton !== this) {
          otherButton.nextElementSibling.classList.remove('visible');
          otherButton.nextElementSibling.classList.add('hidden');
          otherButton.parentElement.previousElementSibling.classList.remove('visible');
          otherButton.parentElement.previousElementSibling.classList.add('hidden');
        }
      });

      // After toggling, check if any accordion is open
      if (!anyAccordionOpen()) {
        // If all accordions are closed, make the default image visible
        defaultImage.classList.remove('hidden');
        defaultImage.classList.add('visible');
      } else {
        // If any accordion is open, ensure the default image is hidden
        defaultImage.classList.add('hidden');
        defaultImage.classList.remove('visible');
      }
    });
  });
});
