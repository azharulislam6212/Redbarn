$(function() {
function ProductCheckout(){
    $('.product-checkout__list').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      });
}

ProductCheckout();

function customerReviewSlider(){

// customer-review__slider

$('.customer-review__slider').not('.slick-initialized').slick({
  centerMode: true,
  arrows: true,
  centerPadding: '0px',
  dots: true,
  speed: 300,
  autoplaySpeed: 5000,
  autoplay: false,
  variableWidth: true,
  prevArrow:'<button class="slick-prev-btn"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.02L10 0.0200195L12 2.02002L4 10.02L12 18.02L10 20.02L0 10.02Z" fill="currentColor"/></svg></button>',
  nextArrow:'<button class="slick-next-btn"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.02L2 0.0200195L0 2.02002L8 10.02L0 18.02L2 20.02L12 10.02Z" fill="currentColor"/></svg></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        variableWidth: false
      }
    }
  ]
});

}
customerReviewSlider();

function ingredientsSlider(){

  $('.ingredients-list__slider').not('.slick-initialized').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    centerPadding: '0px',
    dots: false,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: false,
    variableWidth: false,
    prevArrow:'<button class="slick-prev-btn"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.02L10 0.0200195L12 2.02002L4 10.02L12 18.02L10 20.02L0 10.02Z" fill="currentColor"/></svg></button>',
    nextArrow:'<button class="slick-next-btn"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.02L2 0.0200195L0 2.02002L8 10.02L0 18.02L2 20.02L12 10.02Z" fill="currentColor"/></svg></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
}
ingredientsSlider();


function featuredCollectionSlider(){
  // featured-collection__slider

  $('.featured-collection__slider').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: false,
    prevArrow:'<button class="slick-prev-btn"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.02L10 0.0200195L12 2.02002L4 10.02L12 18.02L10 20.02L0 10.02Z" fill="currentColor"/></svg></button>',
    nextArrow:'<button class="slick-next-btn"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.02L2 0.0200195L0 2.02002L8 10.02L0 18.02L2 20.02L12 10.02Z" fill="currentColor"/></svg></button>',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: 'unslick'
      }
    ]
  });
}
featuredCollectionSlider();

$( window ).on( "resize", function() {
  featuredCollectionSlider();
} );



function relatedProductSlider(){
  // related-product__slider

  $('.related-product__slider').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: false,
  	infinite: false,
    prevArrow:'<button class="slick-prev-btn"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.02L10 0.0200195L12 2.02002L4 10.02L12 18.02L10 20.02L0 10.02Z" fill="currentColor"/></svg></button>',
    nextArrow:'<button class="slick-next-btn"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.02L2 0.0200195L0 2.02002L8 10.02L0 18.02L2 20.02L12 10.02Z" fill="currentColor"/></svg></button>',
    responsive: [
      {
        breakpoint:991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // $('.related-product__slider').on("afterChange", function(event, slick, currentSlide, nextSlide) {
  //   console.log(currentSlide);
  //   if (currentSlide === 5) {
  //     jumpBack();
  //     console.log('jum back')
  //   }
  // });


}

relatedProductSlider();

// function jumpBack() {
//   setTimeout(function() {
//     $('.related-product__slider').slick("slickGoTo", 0);
//   },3000);
// }

document.addEventListener('shopify:block:select', () => ProductCheckout(), customerReviewSlider(), ingredientsSlider(), featuredCollectionSlider(), relatedProductSlider());
document.addEventListener('shopify:block:deselect', () => ProductCheckout(), customerReviewSlider(), ingredientsSlider(), featuredCollectionSlider(), relatedProductSlider());
document.addEventListener('shopify:section:select', () => ProductCheckout(), customerReviewSlider(), ingredientsSlider(), featuredCollectionSlider() , relatedProductSlider());
document.addEventListener('shopify:section:deselect', () => ProductCheckout(), customerReviewSlider(), ingredientsSlider(), featuredCollectionSlider(), relatedProductSlider());





if ( $('.product__slider-main').length ) {
  var $slider = $('.product__slider-main')
      .on('init', function(slick) {
          $('.product__slider-main').fadeIn(1000);
      }).not('.slick-initialized').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
          autoplay: false,
          lazyLoad: 'ondemand',
          autoplaySpeed: 3000,
          asNavFor: '.product__slider-thumb',
          prevArrow:'<button class="slick-prev-btn"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none"><path d="M7.5 3.5L4.5 6.5L7.5 9.5" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
          nextArrow:'<button class="slick-next-btn"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3.5L7.5 6.5L4.5 9.5" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'      
      });

var $slider2 = $('.product__slider-thumb')
      .on('init', function(slick) {
          $('.product__slider-thumb').fadeIn(1000);
      }).not('.slick-initialized').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          asNavFor: '.product__slider-main',
          dots: false,
          infinite: false,
          centerMode: false,
          focusOnSelect: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4
              }
            }
          ]
      });



}

//collection product selector

var cardVarientSlector = $('.select-btn');

cardVarientSlector.each(function (index) {
  $(this).on('change', function() {

    const form = $(this).closest('form');

    var product_encodedObject = form.find('script[data-product-json]').text();
    var product_dataObject = JSON.parse(product_encodedObject);
    var variants = product_dataObject.variants;

    let userSelectValues = [...variants];

    userSelectValues = [];
    userSelectValues.push(this.value);

    let matchedVariants = variants.find(variant => {
      let match = true;
          
      for (let i = 0; i < userSelectValues.length; i++) {
          if (userSelectValues.indexOf(variant.options[i]) == -1) {
              match = false;
              break;
          }
      }
      
      return match;
  });

  var price_html = '<span class="regular-price">'+ `${shopCurrencySign}${(matchedVariants.price / 100).toFixed(2)}`+'</span>';

  if(matchedVariants.compare_at_price > matchedVariants.price ){
    price_html = '<span class="sale-price">'+`${shopCurrencySign}${(matchedVariants.compare_at_price / 100).toFixed(2)}`+'</span><span class="regular-price">'+ `${shopCurrencySign}${(matchedVariants.price / 100).toFixed(2)}`+'</span>';
  }

 
  form.siblings('.product-card__price').html(price_html);
  form.find('input[name="id"]').val(matchedVariants.id);

  var image =  $(this).parents('.prduct-card').find('.prduct-card__img-wrap img');

  if(image != null && matchedVariants.featured_image != null){
    image.attr("src",matchedVariants.featured_image.src);
  }



    var product_card_add_button = form.find('.product-card__add-btn');
    var btn__text_span = form.find('.btn--text');
    var btn__text = "Add to cart";
  
    if( matchedVariants.available == false ){
      btn__text = "Sold Out";
      btn__text_span.text(btn__text);
      product_card_add_button.prop('disabled', true);
    }else{
      btn__text_span.text(btn__text);
      product_card_add_button.removeProp('disabled');
    }



  });

});   



//main product selector

var prouductSelector = $('.main-prouduct__select');

prouductSelector.each(function (index) {
  $(this).on('change', function() {

    const form = $(this).closest('form');

    var product_encodedObject = form.find('script[data-product-json]').text();
    var product_dataObject = JSON.parse(product_encodedObject);
    var variants = product_dataObject.variants;

    let userSelectValues = [...variants];

    userSelectValues = [];
    userSelectValues.push(this.value);

    let matchedVariants = variants.find(variant => {
      let match = true;
          
      for (let i = 0; i < userSelectValues.length; i++) {
          if (userSelectValues.indexOf(variant.options[i]) == -1) {
              match = false;
              break;
          }
      }
      
      return match;
  });

  
  // console.log(matchedVariants);


  var price_html = '<span class="regular-price">'+ `${shopCurrencySign}${(matchedVariants.price / 100).toFixed(2)}`+'</span>';

  if(matchedVariants.compare_at_price > matchedVariants.price ){
    price_html = '<span class="sale-price">'+`${shopCurrencySign}${(matchedVariants.compare_at_price / 100).toFixed(2)}`+'</span><span class="regular-price">'+ `${shopCurrencySign}${(matchedVariants.price / 100).toFixed(2)}`+'</span>';
  }


   form.find('input[name="id"]').val(matchedVariants.id);

   var media_list = $('.main-prouduct__image-list').find('.prouduct__image-item');
   media_list.each(function (index) {
    var media_id = $(this).data('media-id');
    if(media_id === matchedVariants.featured_media.id){
      // console.log($(this).data('media-id'));
      // console.log("featured_media",matchedVariants.featured_media.id);
      $(".prouduct__thumbnail-item[data-media-id="+matchedVariants.featured_media.id+"]").trigger('click');
    }
  });


  var product_add_button = $('.main-prouduct__add-to-cart');
  var btn__text = "<span>Add to cart</span>";

  if( matchedVariants.available == false ){
    btn__text = "<span>Sold Out</span>";
    product_add_button.html(btn__text);
    product_add_button.prop('disabled', true);
  }else{
    product_add_button.html(btn__text);
    product_add_button.removeProp('disabled');
  }

  // inputs
  var inputs = form.find("input[name='purchase_option']");
  var selling_percentage = form.find(".custom-selling_plan_wrap").data('selling-percentage');

  inputs.each(function (index) {
     var target  = $(this).val();

  if($(this).is(':checked') && target === "autodeliver" &&  selling_percentage != null){
    var price = matchedVariants.price / 100;
    var percentage_value = price*parseInt(selling_percentage)/100;
      var final_price = price - percentage_value; 
    
      price_html = '<span class="regular-price ">'+ `${shopCurrencySign}${(final_price).toFixed(2)}`+'</span>';
      if(matchedVariants.compare_at_price > matchedVariants.price ){
        var compare_at_price = matchedVariants.compare_at_price / 100;
        var percentage_compre_value = compare_at_price*parseInt(selling_percentage)/100;
        var final_compare_price = compare_at_price - percentage_compre_value; 

        price_html = '<span class="sale-price">'+`${shopCurrencySign}${(final_compare_price).toFixed(2)}`+'</span><span class="regular-price">'+ `${shopCurrencySign}${(final_price).toFixed(2)}`+'</span>';
      }
      form.find('.main-prouduct__price').html(price_html);

  }else if($(this).is(':checked') && target === "onetime"){
    form.find('.main-prouduct__price').html(price_html);
  }else{
     form.find('.main-prouduct__price').html(price_html);
  }





  });
  // inputs



  });


});   





$('.subscription-tabs li').on('click', function(){
  var tab_id = $(this).attr('data-tab');
  $('.subscription-tabs li').removeClass('current');
  $('.subscription-tab-content').removeClass('current');
  $(this).addClass('current');
  $('#'+tab_id).addClass('current');

  if(tab_id == 'tab-onetime'){
    $('input#onetime').trigger('click');
  }
  if(tab_id == 'tab-subscription'){
    $('input#autodeliver').trigger('click');
  }

});



function VariationSelectChange(purchase_option){
 var selectedValue =  $( ".main-prouduct__select  option:selected" ).val();

 if($('.main-product-form').length > 0){

 var product_encodedObject = $('.main-product-form').find('script[data-product-json]').text();
 var product_dataObject = JSON.parse(product_encodedObject);

 var variants = product_dataObject.variants;
 let userSelectValues = [...variants];
 userSelectValues = [];
 userSelectValues.push(selectedValue);
 let matchedVariants = variants.find(variant => {
   let match = true;
   for (let i = 0; i < userSelectValues.length; i++) {
       if (userSelectValues.indexOf(variant.options[i]) == -1) {
           match = false;
           break;
       }
   }
   return match;
});


var product_price, product_compare_price;

if(matchedVariants != null){
    product_price = matchedVariants.price
    product_compare_price = matchedVariants.compare_at_price
}else{
  product_price = product_dataObject.price
  product_compare_price = product_dataObject.compare_at_price
}


// console.log(product_dataObject.price);


var selling_percentage =  $('.main-product-form').find(".custom-selling_plan_wrap").data('selling-percentage');

var price_html = '<span class="regular-price">'+ `${shopCurrencySign}${(product_price / 100).toFixed(2)}`+'</span>';

if(product_compare_price > product_price ){
  price_html = '<span class="sale-price">'+`${shopCurrencySign}${(product_compare_price / 100).toFixed(2)}`+'</span><span class="regular-price">'+ `${shopCurrencySign}${(product_price / 100).toFixed(2)}`+'</span>';
}


if(purchase_option === "autodeliver" && selling_percentage != null ){
    var price = product_price / 100;
    var percentage_value = price*parseInt(selling_percentage)/100;
    var final_price = price - percentage_value; 
    price_html = '<span class="regular-price ">'+ `${shopCurrencySign}${(final_price).toFixed(2)}`+'</span>';
    if(product_compare_price > product_price ){
      var compare_at_price = product_compare_price / 100;
      var percentage_compre_value = compare_at_price*parseInt(selling_percentage)/100;
      var final_compare_price = compare_at_price - percentage_compre_value; 

      price_html = '<span class="sale-price">'+`${shopCurrencySign}${(final_compare_price).toFixed(2)}`+'</span><span class="regular-price">'+ `${shopCurrencySign}${(final_price).toFixed(2)}`+'</span>';
    }
    $('.main-product-form').find('.main-prouduct__price').html(price_html);

}else if(purchase_option === "onetime"){

  // console.log("onetime Price");
  $('.main-product-form').find('.main-prouduct__price').html(price_html);
}else{
  // console.log("onetime Price");

  $('.main-product-form').find('.main-prouduct__price').html(price_html);
}

}

}


var sellingSelectedValue =  $('.main-product-form').find('input[name="purchase_option"]:checked').val();

VariationSelectChange(sellingSelectedValue);


$(document).on("change","input[name='purchase_option']",function(event) {
  const selling_plan = $('.custom-selling_plan input[name="selling_plan"]');

    if(this.value === "onetime"){
      selling_plan.val('');
      VariationSelectChange(this.value);
    }
  
  if(this.value === "autodeliver"){
    var value = $(".selling-plans option").filter(":selected").val();
    selling_plan.val(value);
    VariationSelectChange(this.value);
  }
 }); 


$(document).on("click",".selling-plans",function(event) {
  var target = $('.custom-selling_plan input[name="selling_plan"]');
  target.val( this.value);
}); 



$(document).on("click",".search-toggle",function(event) {
  if($(this).hasClass('active')) {
    $('.header-search__bar').slideUp();
    $(this).removeClass('active');
    }
    else {
    $('.header-search__bar').slideDown();
    $(this).addClass('active');

    }
  
}); 




$('.accordion__head').on('click', function() {
    if($(this).hasClass('active')) {
    $(this).siblings('.accordion__content').slideUp();
    $(this).removeClass('active');
    }
    else {
    $('.accordion__content').slideUp();
    $('.accordion__head').removeClass('active');
    $(this).siblings('.accordion__content').slideToggle();
    $(this).toggleClass('active');
    }
}); 




$('.nav-bar').on("click", function(event) {
  event.preventDefault();
  $(this).toggleClass("active");
  $('body').toggleClass("open_menu");
});


$('.overlary-body, .close-btn').on("click", function(event) {
  event.preventDefault();
  $('.nav-bar').removeClass("active");
  $('body').removeClass("open_menu");
});


$(document).on("click",".arrow-btn",function(event) {
  event.preventDefault();
  if($(this).hasClass('active')) {
    $(this).closest('.mobile-menu__item').find('.mobile-menu__sub-menu').slideUp();
    $(this).removeClass('active');
    }
    else {
      $(this).closest('.mobile-menu__item').find('.mobile-menu__sub-menu').slideDown();
      $(this).addClass('active');

    }
  
}); 



$(document).on("click",".main-prouduct__add-to-cart",function(e) {
  e.preventDefault();
  $.ajax({
        type: 'POST', 
        url: '/cart/add.js',
        dataType: 'json', 
        data: $('.main-product-form').serialize(),
        success: function(data) {
          get_cart_details();
         $('#rebuy-cart').css("{'visibility': 'visible'}");
         $('#rebuy-cart').addClass('.is-visible');

        },
        error: 'addToCartFail'
    });
    
});



function get_cart_details(){

    fetch("?section_id=header-new")
    .then((response) => response.text())
    .then((cartData) => {
      var cart_html = $(cartData);
      var cart_count = $(".cartCount", cart_html);
      $(".cartCount").replaceWith(cart_count);

    });
    
};


$(document).on("click",".rebuy-cart__flyout-item-quantity-widget-button, .rebuy-cart__flyout-item-remove",function(e) {
  setTimeout(() => {
    get_cart_details();
  }, 2000);
});

var  product__card__add = $(".product-card__add-btn");

// product-card__add-btn


product__card__add.each(function (index) {
  $(this).on('click', function(e) {
    e.preventDefault();
    const form = $(this).closest('form');

    $.ajax({
          type: 'POST', 
          url: '/cart/add.js',
          dataType: 'json', 
          data: form.serialize(),
          success: function(data) {
            get_cart_details();
           $('#rebuy-cart').css("{'visibility': 'visible'}");
           $('#rebuy-cart').addClass('.is-visible');
  
          },
          error: 'addToCartFail'
      });

  });

});




$(window).scroll(function(){
  if ($(this).scrollTop() > 10) {
      $('.rb-header').addClass('rb-header-fixed');
  } else {
      $('.rb-header').removeClass('rb-header-fixed');
  }
});



});





function increaseCount(e, el) {
  var $input = el.previousElementSibling;
  var value = parseInt($input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  $input.value = ('0' + value).slice(-2);            
}

function decreaseCount(e, el) {
  var $input = el.nextElementSibling;
  var value = parseInt($input.value, 10);
  if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      $input.value = ('0' + value).slice(-2);         
  }
}