function pilihanKomputer() {
  let comp = Math.random();
  if (comp < 0.3) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';
  return 'semut';
}

function result(comp, user) {
  if (comp == user) return 'TIE';
  if (user == 'gajah') return comp == 'orang' ? 'WIN' : 'LOSE';
  if (user == 'orang') return comp == 'gajah' ? 'LOSE' : 'WIN';
  if (user == 'semut') return comp == 'orang' ? 'LOSE' : 'WIN';
}
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanComp = pilihanKomputer();
    const pilihanUser = pil.className;
    const hasil = result(pilihanComp, pilihanUser);
    const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src', 'assets/images/' + pilihanComp + '.png');
    let info = document.querySelector('.info');
    info.innerHTML = hasil;
  });
});
