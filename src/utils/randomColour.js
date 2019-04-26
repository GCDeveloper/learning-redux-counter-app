
//a simple method to generate a random rgb colour value.

//random integer from 0 to 255 for colour channel
export function randomChannelValue(){
  return Math.floor(Math.random()*256);
}

//arguments (r,g,b) are optional, they override the generated random number for that parameter
export default function(r = randomChannelValue(), g = randomChannelValue(), b = randomChannelValue()){
  return `rgb(${r},${g},${b})`;
}