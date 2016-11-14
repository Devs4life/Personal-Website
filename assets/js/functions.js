$(function(){
  mentoringBubbleClick();
});

function mentoringBubbleClick(){
  $('.face').on('click', function(){   
    var $this = $(this),
        faceTop = $this.position().top,
        vertMath = -1 * (faceTop - 230);

        $this.parent().css('top', vertMath + 'px');

    $this.addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
  });

  
  // When I click a face
  // get the distance of the face from its parent
  // move the whole container up 115px + the count
  // add the is-open class to the face, pop the balloon
}

function startMentoring(){
  var wScroll = $(window).scrollTop();
  if ($('section.mentoring').offset().top - 500 < wScroll){
      $('.faces').addClass('launched');
      setTimeout(function(){
      $('.face:nth-child(3)').addClass('has-bubble-open');
      }, 300);    
  }
}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
});


function youtubeVidScroll(){
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position','center -' + wScroll +'px');
}