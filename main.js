const keyList = document.querySelectorAll('.tecla');

function playSound(audioSelector) {
  const element = document.querySelector(audioSelector);

  if (element && element.localName === 'audio') {
    element.play();
  }
  else {
    console.error("Element not found or invalid selector.");
  }
  
}

for ( let i = 0 ; i < keyList.length ; i++ ) {
  const key = keyList[i];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function() {
    playSound(idAudio);
  };

  key.onkeydown = function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      key.classList.add('ativa');
    }
  }

  key.onkeyup = function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      key.classList.remove('ativa');
    }
  }
}
