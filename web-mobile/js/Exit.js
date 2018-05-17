var gameSDK

var config = {
  'autoControl': ['volume','exit'],
  'gameName': 'superswami',
  'gameVersion': 'V1.0.0'
}

// creating instance of games SDK to access the functions
gameSDK = new Jiogames(config)

// Key listener
window.addEventListener('keydown', function (e) {
  if (e.keyCode === 8) {

   //  window.topScore= window.curGameScore;
     if(window.topScore>window.curGameScore)
     {
      console.log("ON EXIT TOP SCORE IS BETTER THAN CUR SCORE SO NOT UPDATING");
     }else{
      console.log("ON EXIT CUR SCORE IS BETTER THAN TOP SCORE SO UPDATING");
      window.topScore=window.curGameScore;
     }
     e.preventDefault()
    // gameSDK.exit(0);
  }
})
