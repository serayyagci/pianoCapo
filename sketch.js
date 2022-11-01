if (window.matchMedia("(orientation: portrait)").matches) {
  alert("Please use Landscape mode!");
}


const WHITE_KEYS = ['1', '3', '5', '6', '8', '0', '-','q', 'e', 't', 'y', 'ı','p', 'ü', 'a', 'd', 'g', 'h', 'k','ş', ',', 'z', 'c', 'b', 'n', 'ö','.', 'S', 'D', 'G', 'J', 'K', 'Ş','C', 'B']
const BLACK_KEYS = ['2', '4', '7', '9', '*','w', 'r','u', 'o','ğ', 's','f', 'j','l', 'i','x', 'v','m', 'ç','A', 'F','H', 'L','İ', 'V']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
	
})



document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})


function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  key.classList.add('active')
  noteAudio.addEventListener("canplaythrough", function () {
    noteAudio.play();
    noteAudio.volume = 0.2;
    setTimeout(function(){
        noteAudio.pause();
        key.classList.remove('active');
    },
    1000);
    
  }, false);
   
}

