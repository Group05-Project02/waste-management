$(function(){
$(document).scroll(function(){
        if($(this).scrollTop() > 50) {
            $(".header").addClass("header-stuck");
            
        } else {
            $(".header").removeClass("header-stuck");
        }
    });
});


$(function() {
    var overlay = $('.overlay');
    var mainPopUp = $('.main-popup')
    var signIn = $('#sign-in');
    var register = $('#register');
    var formSignIn = $('form.sign-in');
    var formRegister = $('form.register');


    $('.login').on('click', function() {
        overlay.addClass('visible');
        mainPopUp.addClass('visible');
        signIn.addClass('active');
        register.removeClass('active');
        formRegister.removeClass('move-left');
        formSignIn.removeClass('move-left');
    });

    $('.signup').on('click', function() {
        overlay.addClass('visible');
        mainPopUp.addClass('visible');
        signIn.removeClass('active');
        register.addClass('active');
        formRegister.addClass('move-left');
        formSignIn.addClass('move-left');
    });

    overlay.on('click', function(){
        $(this).removeClass('visible');
        mainPopUp.removeClass('visible');
    });

    $('#popup-close-button a').on('click', function(e){
        e.preventDefault();
        overlay.removeClass('visible');
        mainPopUp.removeClass('visible');
    });
    
    signIn.on('click', function(){
        signIn.addClass('active');
        register.removeClass('active');
        formSignIn.removeClass('move-left');
        formRegister.removeClass('move-left');
    });
    
    register.on('click', function(){
        signIn.removeClass('active');
        register.addClass('active');
        formSignIn.addClass('move-left');
        formRegister.addClass('move-left');
        loginFormHandler();
    });
});

async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('#submit').addEventListener('click', loginFormHandler);