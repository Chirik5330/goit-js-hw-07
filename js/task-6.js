const inputValidation = document.querySelector('#validation-input');
console.log(inputValidation);


function onInputValidation() { 
  if (inputValidation.value.length == inputValidation.dataset.length) {
    inputValidation.classList.remove('invalid');
    inputValidation.classList.add('valid');
    
  } else { 
    inputValidation.classList.remove('valid');
    inputValidation.classList.add('invalid');
    
   
  }
};

inputValidation.addEventListener('blur', onInputValidation);
