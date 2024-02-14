function log(message) {
  console.log('> ' + message);
}

// app
const cards = document.querySelectorAll('.card');
const dropzone = document.querySelectorAll('.dropzone');

cards.forEach((card) => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
  
});

function dragstart() {
  // log('Card : Start dragging ');
  dropzone.forEach(dropzone => dropzone.classList.add('highlight'))
  
  this.classList.add('is-dragging')
}

function drag() {
  // log('Card : Is dragging ');
}

function dragend() {
  // log('Card : Stop dragging ');
  dropzone.forEach(dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
  

}


/* local onde solta os cartoes */
dropzone.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('dragdrop', dragdrop)
  
})

function dragenter() {
  // log('DROPZoNE: Enter in zone ');
}

function dragover() {
  // log('DROPZPNE: over ');
  this.classList.add('over')
  const cardBeingDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeingDragged)
}

function dragleave() {
  // log('DROPZPNE: leave ');
  this.classList.remove('over')

}

function dragdrop() {
  // log('DROPZPNE: droppes');
  this.classList.remove('over')
}
