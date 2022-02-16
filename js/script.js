document.addEventListener('DOMContentLoaded',() =>{
    ymaps.ready(init);
    function init() {
    let map = new ymaps.Map('map', {
        center: [55.70511754708349,37.29111635066329],
        zoom: 9.5,
    })
    const placemark = new ymaps.Placemark([55.57789975968573,37.67326991757221], {
        balloonContent: 'Офис'
    })
    map.geoObjects.add(placemark);
    map.controls.remove('geolocationControl'); 
    map.controls.remove('searchControl'); 
    map.controls.remove('trafficControl'); 
    map.controls.remove('typeSelector'); 
    map.controls.remove('fullscreenControl'); 
    map.controls.remove('zoomControl'); 
    map.controls.remove('rulerControl'); 
    map.behaviors.disable(['scrollZoom']); 
}
    const btns = document.querySelectorAll('button'),
          popup = document.querySelector('.popup'),
          popupClose = document.querySelector('.popup__close'),
          popupName = document.querySelector('.name_popup'),
          popupPhone = document.querySelector('.phone_popup'),
          popupBtn = document.querySelector('.popup_btn'),
          inputName = document.querySelector('.name_input'),
          inputPhone = document.querySelector('.phone_input'),
          callbackBtn = document.querySelector('.btn'),
          callbackAccept = document.querySelector('.accept')
    let a,
        b,
        c,
        d
    function checkPopup() {
        a = popupName.value
        b = popupPhone.value
        if (!a && !b) {

        } else {
            alertCallback();
            popupName.value = ''
            popupPhone.value = ''
        }
    }
    function checkCalback() {
        c = inputName.value
        d = inputPhone.value
        if (!c && !d) {

        } else {
            alertCallback();
            inputName.value = ''
            inputPhone.value = ''
        }
    }
    function TogglePopup () {
        popup.classList.toggle('active')
        document.body.classList.toggle('hide')
        document.addEventListener('keydown', (e) =>{
            if (e.code === 'Escape') {
                TogglePopup();
            }
        })
    }
    
   function alertCallback() {
       setTimeout((function() {
           callbackAccept.classList.add('calb')
       }), 100)
       setTimeout((function() {
        callbackAccept.classList.remove('calb')
    }), 2000)
   }

    btns.forEach(btn =>{
        btn.addEventListener('click', TogglePopup)
    })
    popupClose.addEventListener('click', TogglePopup)
    popup.addEventListener('click', (e) =>{
        if (e.target === popup) {
            TogglePopup();
        }
    })
    callbackBtn.addEventListener('click', checkCalback)
    popupBtn.addEventListener('click', checkPopup)
    
})