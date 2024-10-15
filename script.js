// main function
function ShowText() {
    var job = document.getElementsByClassName("container1ChangeableText")[0];
    var JobTitle1 = "Front End Developer";
    var JobTitle2 = "Full Stack Web Developer";
    var i = 0;

    // adding first job title
    function addLetters1() {
        job.textContent += JobTitle1[i];
        i++;
        if (i < JobTitle1.length) {
            setTimeout(addLetters1, 200);
        } else {
            setTimeout(removeLetters1, 1000);
        }
    }

    //rmeoving the first job title 
    function removeLetters1() {
        job.textContent = "I am a " + JobTitle1.slice(0, i);
        i--;
        if (i >= 0) {
            setTimeout(removeLetters1, 100);
        } else {
            i = 0;
            job.textContent = "I am a " ;
            setTimeout(addLetters2, 1000);
        }
    }

    // adding second job title
    function addLetters2() {
        job.textContent += JobTitle2[i]
        i++;
        if (i < JobTitle2.length) {
            setTimeout(addLetters2, 200);
        } else {
            setTimeout(removeLetters2, 1000);
        }
    }

    // removing the second job title
    function removeLetters2() {
        job.textContent = "I am a " + JobTitle2.slice(0, i);
        i--;
        if (i >= 0) {
            setTimeout(removeLetters2, 100);
        } else {
            i = 0;
            setTimeout(addLetters1, 1000);
        }
    }
    addLetters1();
}

var video = document.getElementById('background-video');

// Listen for scroll events
window.addEventListener('scroll', function() {
  // Calculate the scroll progress as a value between 0 and 1
  var scroll = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  var scrollProgress = scroll * 0.5 ;
  // Set the video playback position based on the scroll progress
  video.currentTime = scrollProgress * 10;
  
});

window.onload = function() {
    ShowText();
}
