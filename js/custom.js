const modal1 = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

const firstZoneIMG = "./images/zones.jpg"
const secondZoneIMG = "./images/zone2.jpg"
const thirdZoneIMG = "./images/zone3.jpg"

var details = document.querySelectorAll("details");
for (i = 0; i < details.length; i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  changeImage(event)

  var details = event.target.parentNode.children;
  for (i = 0; i < details.length; i++) {
    if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) {
      continue;
    }
    details[i].removeAttribute("open");
  }
}


function changeImage(event) {
  var item = event.target;
  var zone = item.querySelector('summary').textContent;
  zoneImage = document.getElementById("zones-image");
  console.log(zoneImage)

  switch (zone) {
    case 'Наружняя':
      zoneImage.src = firstZoneIMG
      break
    case 'Тамбурная':
      zoneImage.src = secondZoneIMG
      break
    case 'Внутренняя':
      zoneImage.src = thirdZoneIMG
      break
    default:
      zoneImage.src = firstZoneIMG
  }
}