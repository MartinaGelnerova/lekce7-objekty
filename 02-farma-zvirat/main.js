let zvirata = [
  {zvire: 'husa', jmeno: 'Husička'},
  {zvire: 'kocka', jmeno: 'Kočička'}, 
  {zvire: 'krava', jmeno: 'Kravička'},
  {zvire: 'kun', jmeno: 'Koníček'},
  {zvire: 'ovce', jmeno: 'Ovečka'},
  {zvire: 'pes', jmeno: 'Pejsek'}
];

// přiřadíme zvířatům fotky
zvirata.forEach(pridejObrazek)
function pridejObrazek(zvire) {
	zvire.foto = `obrazky/${zvire.zvire}.jpg`;
	return zvire.foto;
}

// zobrazíme info do webu
zvirata.forEach(naWeb)
function naWeb(zvire) {
  let zvireWeb = document.createElement('div');
  zvireWeb.className = 'zvire';
  let fotoZvirete = document.createElement('img');
  fotoZvirete.className = 'foto';
  fotoZvirete.src = zvire.foto;
  let jmenoZvirete = document.createElement('span');
  jmenoZvirete.className = 'jmeno';
  jmenoZvirete.innerHTML = zvire.jmeno;
  zvireWeb.appendChild(fotoZvirete);
  zvireWeb.appendChild(jmenoZvirete);    
  let farma = document.querySelector('.farma');
  farma.appendChild(zvireWeb);
}



// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?