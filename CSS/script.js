function showPage(pageNumber) {
    const contentBoxes = document.querySelectorAll('.content-box');
    contentBoxes.forEach(box => {
      box.style.display = 'none';
    });
    
    const selectedBox = document.querySelector(`.content-box:nth-child(${pageNumber})`);
    if (selectedBox) {
      selectedBox.style.display = 'block';
    }
  }