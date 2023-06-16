// DOMLibrary module
var DOMLibrary = (function() {
  // Private function to retrieve datasets from a DOM element
  function getDatasets(element) {
    return element.dataset;
  }

  // Public API
  return {
    // Public method to get datasets from elements
    getDatasets: function(selector) {
      var elements = document.querySelectorAll(selector);
      var datasets = [];

      elements.forEach(function(element) {
        var dataset = getDatasets(element);
        datasets.push(dataset);
      });

      return datasets;
    }
  };
})();

// Usage example
var datasets = DOMLibrary.getDatasets('.my-element');
console.log(datasets);
