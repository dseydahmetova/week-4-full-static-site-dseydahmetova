//Display loop of people's amount //
let options="";
let option;

let myOption=document.querySelector('#person');
for(let i=1; i<=20; i++) {
    if(i===1) {
option=`<option value="${i}">${i} person</option>`;
    }
    else {
        option= `<option value="${i}">${i} people</option>`;
    }
    options += option;
}
myOption.innerHTML=options;

//Displays features for video
$('video').mediaelementplayer({
  features: ['playpause', 'current','progress', 'skipback', 'duration', 'volume', 'fullscreen'],
  startLanguage: 'en',
  skipBackInterval: 15
});


//Display Only Date till today //
$(document).ready(function() {
  var minDate = new Date();
  $("#date").datepicker ({
    showAnim: 'drop',
    numberOfMonth: 1,
    minDate: minDate,
    dateFormat: 'dd/mm/yy',
    onClose: function (selectedDate) {
      $('#test2').datepicker("option", "minDate", selectedDate);
    }
  });
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

  