// Declare variables
let imgURL
let myImage
let slok
let translation
let chapter;
let verse; 

// Declare variables
function preload() {
  gif = loadImage("assets/74SX.gif");
}

function setup(){
  createCanvas(450,450)
}


// Pause the GIF
// Make an API request
// Display the slok 
// Display the translation
function draw(){
  background(100)
  image(gif, 0, 0);
  gif.pause()
  apiRequest()
  text(slok , 120, 180, 100, 100)
  text(translation , 240, 180, 100, 100)
}

async function apiRequest(){
  if (chapter == undefined || verse == undefined) {
    chapter = int(random(1,18))
    verse = int(random(1, 15))
  }
  let request = await fetch ("https://bhagavadgitaapi.in/slok/" + chapter + "/" + verse + "/")

  let data = await request.json()
  // Assign the slok from the API response
  slok = data.slok
  // Assign the translation from the API response
  translation = data.purohit.et
}

// MousePressed 
function mousePressed() {
  // Play the GIF when the mouse is pressed
  gif.play()
  setTimeout(function() {
 // Pause the GIF after 2 second
    gif.pause() 
  }, 2000)
  // Generate a random chapter
  chapter = int(random(1, 18))
  // Generate a random verse
  verse = int(random(1, 15))
}