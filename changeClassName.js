// DOMLibrary module
var DOMLibrary = (function() {
  // Private function to change class name of a DOM element
  function changeClassName(element, className) {
    element.className = className;
  }

  return {
    // Public method to change class name of elements
    changeClass: function(selector, className) {
      var elements = document.querySelectorAll(selector);
      elements.forEach(function(element) {
        changeClassName(element, className);
      });
    }
  };
})();

DOMLibrary.changeClass('.my-element', 'new-class');
