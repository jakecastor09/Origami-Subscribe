'use strict';

function isInputNotEmpty(inputField) {
  return inputField.value.trim() !== '';
}

// Validation

// Sequence Number Form 1
const checkButton = document.querySelector('.checkButton');
const checkbox = document.querySelector('.form-check-input');

checkButton.addEventListener('click', function () {
  checkbox.checked = true;
  validateCheckbox();
});

function validateCheckbox() {
  const btnNext1 = document.querySelector('.btn-sequence-number');
  btnNext1.disabled = !checkbox.checked;
}

// SCHOOL INFORMATION FORM 2
function validateInputs() {
  const schoolInfoName = document.querySelector('.school-name-2');
  const schoolInfoAcronymn = document.querySelector('.school-acronymn-2');
  const schoolInfoID = document.querySelector('.school-id-2');
  const schoolInfoAddress = document.querySelector('.school-address-2');
  const schoolInfoMobileNumber = document
    .querySelector('.mobile-number-2')
    .value.trim();
  const schoolInfoEmail = document.querySelector('.email-2').value.trim();

  const btnNext2 = document.querySelector('.btn-school-information');

  const isValidNumber = /^\d{11}$/.test(schoolInfoMobileNumber);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(schoolInfoEmail);
  if (
    isInputNotEmpty(schoolInfoName) &&
    isInputNotEmpty(schoolInfoAcronymn) &&
    isInputNotEmpty(schoolInfoID) &&
    isInputNotEmpty(schoolInfoAddress) &&
    isValidNumber &&
    isValidEmail
  ) {
    btnNext2.disabled = false;
  } else {
    btnNext2.disabled = true;
  }
}

// Owner Details Form3
function validateInputsOwnerDetails() {
  const btnNext3 = document.querySelector('.btn-owner-details');

  const ownersFName = document.querySelector('.ownersFName');
  const ownersMName = document.querySelector('.ownersMName');
  const ownersLName = document.querySelector('.ownersLName');
  const ownersMobileNumber = document
    .querySelector('.ownersMobileNumber')
    .value.trim();
  const ownersEmail = document.querySelector('.ownersEmail').value.trim();
  const ownersPosition = document.querySelector('.ownersPosition');
  const ownersYearOfEstablishment = document
    .querySelector('.ownersYearOfEstablishment')
    .value.trim();

  const ownersTotalStudents = document.querySelector('.ownersTotalStudents');
  const ownersTotalTeachers = document.querySelector('.ownersTotalTeachers');
  const ownersTotalNonTeachingStaff = document.querySelector(
    '.ownersTotalNonTeachingStaff'
  );

  const isValidYear = /^\d{4}$/.test(ownersYearOfEstablishment);
  const isValidNumber = /^\d{11}$/.test(ownersMobileNumber);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownersEmail);

  // Check if the selected option is not the first option
  const selectPositionIsValid =
    ownersPosition.options[ownersPosition.selectedIndex].index !== 0;

  if (
    isInputNotEmpty(ownersFName) &&
    isInputNotEmpty(ownersMName) &&
    isInputNotEmpty(ownersLName) &&
    isInputNotEmpty(ownersTotalStudents) &&
    isInputNotEmpty(ownersTotalTeachers) &&
    isInputNotEmpty(ownersTotalNonTeachingStaff) &&
    selectPositionIsValid &&
    isValidYear &&
    isValidNumber &&
    isValidEmail
  ) {
    btnNext3.disabled = false;
  } else {
    btnNext3.disabled = true;
  }
}

// Management Details Form 4
function validateInputsManagementDetails() {
  const btnNext4 = document.querySelector('.btn-management-details');

  const principalFName = document.querySelector('.principalFName');
  const principalMName = document.querySelector('.principalMName');
  const principalLName = document.querySelector('.principalLName');
  const principalEmail = document.querySelector('.principalEmail').value.trim();
  const principalPosition = document.querySelector('.principalPosition');

  const principalMobileNumber = document
    .querySelector('.principalMobileNumber')
    .value.trim();

  const isValidNumber = /^\d{11}$/.test(principalMobileNumber);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(principalEmail);

  // Check if the selected option is not the first option
  const selectPositionIsValid =
    principalPosition.options[principalPosition.selectedIndex].index !== 0;

  if (
    isInputNotEmpty(principalFName) &&
    isInputNotEmpty(principalMName) &&
    isInputNotEmpty(principalLName) &&
    selectPositionIsValid &&
    isValidEmail &&
    isValidNumber
  ) {
    btnNext4.disabled = false;
  } else {
    btnNext4.disabled = true;
  }
}
