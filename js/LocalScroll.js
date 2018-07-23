$(document).ready(function(){
    //this line has a special selector
    //a[href]^="#" means select an archor tag that start with '#'
    //^= means starts with
    $('a[href^="#"').on('click',function (e) {
        e.preventDefault();//prevents default behavior of the flashing of the link

        var target = this.hash;//targets the link that was in what was clicked on
        var $target = $(target);//objectifies the object and allows us to do jquery functions on it
        //>:(
        //scroll and show hash
        $('html, body, .main-container').animate({
            'scrollTop': $target.offset().top
                }, 750, 'swing', function(){
                    window.location.hash = target;
            });
    });
  });