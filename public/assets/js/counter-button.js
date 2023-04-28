// (function() {
//     var dis = 'disabled';
//     function numberPicker() {
//       var pickers = document.querySelectorAll('.plusminus');
//       pickers.forEach(function(picker) {
//         var p = picker.querySelector('button:last-child'),
//           m = picker.querySelector('button:first-child'),
//           input = picker.querySelector('input'),
//           min = parseInt(input.getAttribute('min'), 10),
//           max = parseInt(input.getAttribute('max'), 10),
//           inputFunc = function() {
//             var i = parseInt(input.value, 10);
//             if ((i <= min) || (!i)) {
//               input.value = min;
//               p.disabled = true;
//               m.disabled = false;
//             } else if (i >= max) {
//               input.value = max;
//               p.disabled = false;
//               m.disabled = true;
//             } else {
//               p.disabled = false;
//               m.disabled = false;
//             }
//           },
//           changeFunc = function(qty) {
//             var q = parseInt(qty, 10),
//               i = parseInt(input.value, 10);
//             if ((i < max && (q > 0)) || (i > min && !(q > 0))) {
//               input.value = i + q;
//               inputFunc();
//             }
//           };
//         m.addEventListener('click', function() { changeFunc(-1); });
//         p.addEventListener('click', function() { changeFunc(1); });
//         input.addEventListener('change', function() { inputFunc(); });
//         inputFunc(); // init
//       });
//     }
//     document.addEventListener('DOMContentLoaded', function() {
//       numberPicker();
//     });
//   })();


// Fonction pour mettre à jour le champ d'entrée de la quantité et les boutons Plus et Moins
function updateNumber(input, minValue, maxValue) {
    var currentVal = parseInt(input.value);
    
    // Vérifie si la valeur est un nombre valide et met à jour la quantité
    if (!isNaN(currentVal)) {
      if (currentVal < minValue) {
        input.value = minValue;
      }
      if (currentVal > maxValue) {
        input.value = maxValue;
      }
    } else {
      input.value = 0;
    }
    
    // Désactive le bouton Moins si la valeur est inférieure ou égale à la valeur minimale, sinon active-le
    var minusButton = input.previousElementSibling;
    if (parseInt(input.value) <= minValue) {
      minusButton.setAttribute('disabled', true);
    } else {
      minusButton.removeAttribute('disabled');
    }
    
    // Désactive le bouton Plus si la valeur est supérieure ou égale à la valeur maximale, sinon active-le
    var plusButton = input.nextElementSibling;
    if (parseInt(input.value) >= maxValue) {
      plusButton.setAttribute('disabled', true);
    } else {
      plusButton.removeAttribute('disabled');
    }
  }
  
  // Fonction pour gérer l'événement du clic sur les boutons Plus et Moins
  function handleButtonClick(event) {
    event.preventDefault();
    
    var fieldName = this.getAttribute('data-field');
    var type = this.getAttribute('data-type');
    var input = document.querySelector("input[name='"+fieldName+"']");
    var minValue = parseInt(input.getAttribute('min'));
    var maxValue = parseInt(input.getAttribute('max'));
    
    // Met à jour la valeur de la quantité en fonction du bouton sur lequel on a cliqué
    if (type === 'minus') {
      if (parseInt(input.value) > minValue) {
        input.value = parseInt(input.value) - 1;
      }
    } else if (type === 'plus') {
      if (parseInt(input.value) < maxValue) {
        input.value = parseInt(input.value) + 1;
      }
    }
    
    // Met à jour la quantité et les boutons Plus et Moins
    updateNumber(input, minValue, maxValue);
  }
  
  // Fonction pour gérer l'événement du changement de la quantité
  function handleInputChange() {
    var minValue = parseInt(this.getAttribute('min'));
    var maxValue = parseInt(this.getAttribute('max'));
    
    // Met à jour la quantité et les boutons Plus et Moins
    updateNumber(this, minValue, maxValue);
  }