document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('createRoomButton');
    button.addEventListener('click', function() {
        fetch('/examen.html', {
            method: 'POST'
          })
          .then(response => response.text())
          .then(result => {
            // Display the result received from the server
            console.log(result);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    });
  });