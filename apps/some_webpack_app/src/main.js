React = require('react')

SomeComponent = require('some_component')
AnotherComponent = require('another_component')

React.render(React.createElement(SomeComponent, null),
  document.getElementById('some-component'));

React.render(React.createElement(AnotherComponent, null),
  document.getElementById('another-component'));

