var Body = {
  setColor:function(color) {
    // var target = document.querySelector('body');
    // target.style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color) {
    // var target = document.querySelector('body');
    // target.style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
};
var Links = {
  setColor:function(color) {
    // var alist = document.querySelectorAll('a');
    // for(var i=0; i<alist.length; i++) {
    //   alist[i].style.color = color;
    // }
    $('a').css('color', color);
  }
};
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Links.setColor('powderblue');
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
  }
  else {
    Links.setColor('darkblue');
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
  }
}
