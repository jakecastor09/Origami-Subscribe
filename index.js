'use strict';

const stepButtons = document.querySelectorAll('.step-button');
const progress = document.querySelector('#progress');

Array.from(stepButtons).forEach((button, index) => {
  button.addEventListener('click', () => {
    progress.setAttribute('value', (index * 100) / (stepButtons.length - 1.2));
    stepButtons.forEach((item, secindex) => {
      if (index > secindex) {
        item.classList.add('done');
      }
      if (index < secindex) {
        item.classList.remove('done');
      }
    });
  });
});

// Validation

// Sequence Number Form 1
function validateCheckbox() {
  const btnNext1 = document.querySelector('.btn-sequence-number');
  const checkbox = document.querySelector('.form-check-input');
  btnNext1.disabled = !checkbox.checked;
}

// Sequence Number Form 2
function validateInputs() {
  const inputFieldSchoolName2 = document.querySelector('.school-name-2');
  const inputFieldSchoolAcronymn2 =
    document.querySelector('.school-acronymn-2');
  const inputFieldSchoolID2 = document.querySelector('.school-id-2');
  const inputFieldSchoolAddress2 = document.querySelector('.school-address-2');
  const inputFieldMobileNumber2 = document
    .querySelector('.mobile-number-2')
    .value.trim();
  const inputFieldEmail2 = document.querySelector('.email-2').value.trim();

  const btnNext2 = document.querySelector('.btn-school-information');

  const isValidNumber = /^\d{11}$/.test(inputFieldMobileNumber2);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputFieldEmail2);
  if (
    inputFieldSchoolName2.value.trim('') !== '' &&
    inputFieldSchoolAcronymn2.value.trim('') !== '' &&
    inputFieldSchoolID2.value.trim('') !== '' &&
    inputFieldSchoolAddress2.value.trim('') !== '' &&
    isValidNumber &&
    isValidEmail
  ) {
    btnNext2.disabled = false;
  } else {
    btnNext2.disabled = true;
  }
}
