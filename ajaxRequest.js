// DOMLibrary module
var DOMLibrary = (function() {
    // Private function to handle AJAX request
    function ajaxRequest(url, method, data, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
  
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
          successCallback(xhr.responseText);
        } else {
          errorCallback(xhr.responseText);
        }
      };
  
      xhr.onerror = function() {
        errorCallback(xhr.responseText);
      };
  
      xhr.send(data);
    }
  
    // Public API
    return {
      // Public method to make an AJAX request
      ajax: function(url, method, data, successCallback, errorCallback) {
        ajaxRequest(url, method, data, successCallback, errorCallback);
      },
  
      // Public method to make a GET request
      get: function(url, successCallback, errorCallback) {
        ajaxRequest(url, 'GET', null, successCallback, errorCallback);
      }
    };
  })();
  
  // Usage example - AJAX request
  DOMLibrary.ajax(
    'https://api.example.com/data',
    'POST',
    JSON.stringify({ name: 'John', age: 25 }),
    function(response) {
      console.log('Success:', response);
    },
    function(error) {
      console.error('Error:', error);
    }
  );
  
  // Usage example - GET request
  DOMLibrary.get(
    'https://api.example.com/data',
    function(response) {
      console.log('Success:', response);
    },
    function(error) {
      console.error('Error:', error);
    }
  );
  