/**
 * JEWEL
 *
 * Goals:
 * 1. DOM Node CRUD
 * 2. Data Observer that triggers re-renders
 * 3. VDOM to HTML/XML
 * 4. HTML/XML to VDOM
 */

(function (global, factory) {
  // JEWEL - INIT
  //
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    throw new Error('Jewel requires a window with a document');
  } else {
    global.Jewel = factory();
  }

}(this, function() { /* eslint-disable-line */

  const JewelVersion = '0.0.2';

  /**
   * ADD ATTRIBUTE
   * Sets an attribute property on a given node
   * @param {HTMLElement} node
   * @param {string} key Name of the property
   * @param {string} value Value of the property
   */
  function addAttribute(node, key, value) {
    node.setAttribute(key, value);
  }

  /**
   * DELETE ATTRIBUTE
   * Removes an attribute property on a given node
   * @param {HTMLElement} node
   * @param {string} key Name of the property
   */
  function deleteAttribute(node, key) {
    const attr = node.getAttributeNode(key);
    node.removeAttributeNode(attr);
  }

  /**
   * CREATE TEXT
   * Creates a new html text element
   * @param {string} value Value of the text
   * @returns HTMLText
   */
  function createText(value) {
    return document.createTextNode(value);
  }

  /**
   * CREATE ELEMENT
   * Creates a new html element
   * @param {string} type Type of HTMLElement to create
   * @returns HTMLElement
   */
  function createElement(type) {
    return document.createElement(type);
  }

  /**
   * CREATE FRAGMENT
   * Creates a new empty Document Fragment
   * @returns DocumentFragment
   */
  function createFragment() {
    return document.createDocumentFragment();
  }

  /**
   * PARSE ELEMENTS
   * Parses a Virtual DOM tree
   * @param {*} vnode The current virtual node
   * @param {*} node The node that will inherit all parent/child nodes
   * @returns HTMLElement
   * @example
   *
   * const frag = createFragment();
   * const vnode = { type: 'div', props: { class: 'test' }, children: 'Hello World' };
   * parseElements(vnode, frag);
   *
   * //=> <div class="test">Hello World</div>
   */
  function parseElements(vnode, node) {
    const frag = createFragment();
    const parentNode = createElement(vnode.type);
    const numChildren = vnode.children.length;
    const props = vnode.props ? Object.keys(vnode.props) : null;

    // Attach all element properties to parent vnode
    //
    if (props) {
      for (let index = 0; props.length > index; index += 1) {
        addAttribute(parentNode, props[index], vnode.props[props[index]]);
      }
    }

    // Add text node to parent vnode &
    // Append parent vnode to node and exit
    //
    if (typeof vnode.children === 'string') {
      parentNode.appendChild(createText(vnode.children));
      node.appendChild(parentNode);
      return node;
    }

    // Append parent to node and exit
    //
    if (numChildren === 0) {
      node.appendChild(parentNode);
      return node;
    }

    // Recursively continue process on children
    //
    for (let child = 0; numChildren > child; child += 1) {
      parentNode.appendChild(parseElements(vnode.children[child], frag));
    }

    return parentNode;
  }

  /**
   * RENDER ELEMENTS
   * Appends the element to the given element
   * @param {HTMLElement} node
   * @param {object} elements
   */
  function render(parentNode, elements) {
    const frag = createFragment();
    const nodes = parseElements(elements, frag);
    parentNode.innerHTML = ''; // TEMP: CLEAR NODES THEN APPEND NEW CHILDREN
    parentNode.appendChild(nodes);
  }

  const Jewel = {
    version: JewelVersion,
    createText,
    createElement,
    createFragment,
    addAttribute,
    deleteAttribute,
    render,
  };

  return Jewel;
}));
