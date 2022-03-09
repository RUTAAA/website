/* CA VA CHERCHER :root ET LE DEFINI COMME UNE VARIABLE NOMMEE r */
var r = document.querySelector(':root');

/* J'EN AI CHIE MAIS CA FONCTIONNE !!! */
function setVoletWidth() {
  var rs = getComputedStyle(r);
  if (rs.getPropertyValue('--width_volet') == 0) {
    r.style.setProperty('--width_volet', "360px");
    r.style.setProperty('--open_top', "-100px");
    r.style.setProperty('--close_top', "0");
  } else {
    r.style.setProperty('--width_volet', 0);
    r.style.setProperty('--open_top', "0");
    r.style.setProperty('--close_top', "-100px");
  }
}

function setTheme() {
  var rs = getComputedStyle(r);
  if (rs.getPropertyValue('--fond') == "#24323F") {
    light();
  } else {
    dark();
  }
}

function light() {
    r.style.setProperty('--fond', "#F2D492");
    r.style.setProperty('--bandeau', "#F29559");
    r.style.setProperty('--boutons', "#18212B");
    r.style.setProperty('--dark_top', "-100px");
    r.style.setProperty('--light_top', "0");
}

function dark() {
    r.style.setProperty('--fond', "#24323F");
    r.style.setProperty('--bandeau', "#18212B");
    r.style.setProperty('--boutons', "#F29559");
    r.style.setProperty('--dark_top', "0");
    r.style.setProperty('--light_top', "-100px");
}
