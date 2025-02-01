$('.btn-primary').on({
    'click' : function() {

        $('img').attr('src','./pr2.jpg');  // When you click on the blue button, the image will change to another image 
    }, 
    
    'dblclick' : function() {

        $('img').attr('src','./pr3.jpg');  // When you double click on the blue button, the image will change to another image 


    },
})

 $('.btn-dark').on('click', function() {

    $('.btn-dark').html('So Never Give Up ');   //  When you click the black button, the text will change. 

 })
