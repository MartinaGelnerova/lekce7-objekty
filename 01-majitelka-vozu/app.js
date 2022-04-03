// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
  znacka: 'Ford',
  barva: 'modrá',
  rokVyroby: 2015,
  spz: '1B2 3456'
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel = {};
auto.majitel.jmeno = 'Jana';
auto.majitel.prijmeni = 'Czechita';

// Přepiš značku na Škoda
auto.znacka = 'Škoda';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
let majitelka = `${auto.majitel.jmeno} ${auto.majitel.prijmeni}`;
let znacka = auto.znacka;
let spz = auto.spz;

document.getElementById('majitelka').innerHTML = majitelka;
document.getElementById('znacka').innerHTML = znacka;
document.getElementById('spz').innerHTML = spz;