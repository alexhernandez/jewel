/**
 * GOALS:
 * 1. DOM CRUD
 * 2. Data Observer that triggers re-renders
 * 3. Element Collection parser
 */

(function (global, factory) {
  // JEWEL - DOM
  //
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    // module.exports = factory(global);
    throw new Error('Jewel requires a window with a document');
  } else {
    global.Jewel = factory();
  }

}(this, function() { /* eslint-disable-line */

  const JewelVersion = '0.0.1';

  function createAttr(str) {
    return document.createAttribute(str);
  }

  function createText(str) {
    return document.createTextNode(str);
  }

  function createFragment() {
    return document.createDocumentFragment();
  }

  function createElement(type, children) {
    const node = document.createElement(type);

    if (typeof children === 'string') {
      node.appendChild(createText(children));
    } else if (typeof children === 'object') {
      node.appendChild(children);
    }

    return node;
  }

  function render(root, elements) {
    root.appendChild(elements);
  }

  const Jewel = {
    version: JewelVersion,
    createAttr,
    createText,
    createElement,
    createFragment,
    render,
  };

  return Jewel;
}));
