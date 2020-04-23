
(function () {
  const { Jewel } = window;

  const frag = Jewel.createFragment();
  const collection = ['Led Zeppelin', 'Tame Impala', 'The Strokes', 'Pink Floyd', 'Hendrix'];

  for (let i = 0; collection.length > i; i += 1) {
    frag.appendChild(
      Jewel.createElement('li', collection[i]),
    );
  }

  const list = Jewel.createElement('ul', frag);

  Jewel.render(document.getElementById('app'), list);
}());
