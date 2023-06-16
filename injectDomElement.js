// DOMLibrary module
var DOMLibrary = (function() {
  // Private function to create and inject a new DOM element
  function injectElement(tagName, attributes, parentSelector) {
    var element = document.createElement(tagName);

    // Set attributes for the new element
    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        element.setAttribute(attr, attributes[attr]);
      }
    }

    // Append the new element to the parent element
    var parent = document.querySelector(parentSelector);
    parent.appendChild(element);
  }

  // Public API
  return {
    // Public method to inject a new DOM element
    injectElement: function(tagName, attributes, parentSelector) {
      injectElement(tagName, attributes, parentSelector);
    }
  };
})();

// Usage example
var attributes = {
  id: 'new-element',
  class: 'my-class',
  textContent: 'New Element'
};

DOMLibrary.injectElement('div', attributes, '#container');
