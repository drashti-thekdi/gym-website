$(".toggle").click(function(){
      $('ul').slideToggle('fast',function(){
            if($(this).is(':visible'))
            
            $(this).css('display','flex');
      });
});


$(window).on('scroll',function(){
      if($(window).scrollTop()){
             $('.navbar').addClass('white');
             
      }
      else{
             $('.navbar').removeClass('white');
            
      }
})
