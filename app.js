
(function () {
  const { Jewel } = window;

  const tree = {
    type: 'div',
    props: null,
    children: [
      {
        type: 'h2',
        props: {
          class: 'txt-white',
        },
        children: '_Overview',
      },
      {
        type: 'p',
        props: {
          class: 'txt-white',
        },
        children: 'Jewel is a JavaScript library that allows you to manage your UI layer in the browser. This project is an exercise in recreating the inner workings of popular frameworks like React & Vue.',
      },
      {
        type: 'p',
        props: {
          class: 'txt-white',
        },
        children: 'Open up your browser console and try it yourself! 🤘🏽',
      },
      {
        type: 'div',
        props: {
          class: 'code-block',
        },
        children: [
          {
            type: 'pre',
            props: null,
            children: [
              {
                type: 'code',
                props: null,
                children: '$ Jewel',
              },
            ],
          },
        ],
      },
      {
        type: 'h2',
        props: {
          class: 'txt-white',
        },
        children: '_Example',
      },
      {
        type: 'div',
        props: {
          class: 'code-block',
        },
        children: [
          {
            type: 'pre',
            props: null,
            children: [
              {
                type: 'code',
                props: null,
                children: 'const el = { type: "div", props: { class: "test" }, children: "Hello World" };\nJewel.render(document.getElementById("app"), el);',
              },
            ],
          },
        ],
      },
      {
        type: 'p',
        props: {
          class: 'txt-lightblue',
        },
        children: 'Rendered w/ Jewel. Yay! ᕕ( ಠ‿ಠ)ᕗ',
      },
    ],
  };

  Jewel.render(document.getElementById('app'), tree);
}());
