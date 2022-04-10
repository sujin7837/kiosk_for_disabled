var j = 0; // start point
var images2 = [];
var time2 = 3000;

// Image List
images2[0] = 'img/now1.png';
images2[1] = 'img/now2.png';
images2[2] = 'img/now3.png';
images2[3] = 'img/now4.png';
images2[4] = 'img/now5.png';


function changeMovieAd(){
  document.slide2.src = images2[j];

  if( j < images2.length - 1){
    j++;
  } else {
    j = 0;
  }

  setTimeout("changeMovieAd()", time2);
}

window.onload = changeMovieAd;
