$("#order_details_nav").on('click',()=>{
    $('#home').css({display:'none'});
    $('#customer_section').css({display:'none'});
    $('#item_section').css({display:'none'});
    $('#order_section').css({display:'none'});
    $('#order_details_section').css({display:'block'});

    $('#home_nav').removeClass('active-page');
    $('#customer_nav').removeClass('active-page');
    $('#item_nav').removeClass('active-page');
    $('#orders_nav').removeClass('active-page');
    $('#order_details_nav').addClass('active-page');
});