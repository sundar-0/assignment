// DOMLibrary module
var DOMLibrary = (function() {
    // Private function to get value from DOM element
    function getValue(element) {
      var tagName = element.tagName.toLowerCase();
  
      if (tagName === 'input') {
        var type = element.type.toLowerCase();
        if (type === 'checkbox') {
          return element.checked;
        } else {
          return element.value;
        }
      } else if (tagName === 'select') {
        return element.value;
      }
  
      return null;
    }
  
    // Private function to set value for DOM element
    function setValue(element, value) {
      var tagName = element.tagName.toLowerCase();
  
      if (tagName === 'input') {
        var type = element.type.toLowerCase();
        if (type === 'checkbox') {
          element.checked = value;
        } else {
          element.value = value;
        }
      } else if (tagName === 'select') {
        element.value = value;
      }
    }
  
    // Public API
    return {
      // Public method to get value from DOM element
      getValue: function(selector) {
        var element = document.querySelector(selector);
        return getValue(element);
      },
  
      // Public method to set value for DOM element
      setValue: function(selector, value) {
        var element = document.querySelector(selector);
        setValue(element, value);
      }
    };
  })();
  
  // Usage example - Get value
  var inputValue = DOMLibrary.getValue('#inputBox');
  console.log('Input value:', inputValue);
  
  var checkboxValue = DOMLibrary.getValue('#checkbox');
  console.log('Checkbox value:', checkboxValue);
  
  var selectValue = DOMLibrary.getValue('#dropdown');
  console.log('Select value:', selectValue);
  
  // Usage example - Set value
  DOMLibrary.setValue('#inputBox', 'New Value');
  DOMLibrary.setValue('#checkbox', true);
  DOMLibrary.setValue('#dropdown', 'option2');
  