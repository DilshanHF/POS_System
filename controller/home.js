$('#home_section').css({display:'block'});
$('#customer_section').css({display:'none'});
$('#item_section').css({display:'none'});
$('#order_section').css({display:'none'});

//home view
$("#home_nav").on('click',()=>{
    $('#home_section').css({display:'block'});
    $('#customer_section').css({display:'none'});
    $('#item_section').css({display:'none'});
    $('#order_section').css({display:'none'});
});

