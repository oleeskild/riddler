function updateColor(selector, section){
    var swatch = $(selector);
    var layer = $(section);
    if(!swatch) return;
    swatch.addEventListener('change', function(event){
        event.preventDefault();
        layer.style.fill = swatch.value;
    }, false);
}

updateColor("#headColor", "#Head")
updateColor("#shirtColor", "#Body")
updateColor("#shortColor", "#Shorts")
updateColor("#sockColor", "#Socks")
updateColor("#sockColor", "#Feet")
updateColor("#ballColor", "#Ball")