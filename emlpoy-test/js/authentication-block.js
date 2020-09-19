"use strict";
import { indexOfElem } from "./indexOfElement.js";

//////// TABs SWITCH
let toTabButtonsArray = document.querySelectorAll(
  ".authentication-block__to-tab-btn"
);
let toTabButtonsContainer = document.querySelector(
  ".authentication-block__top-row"
);
let tabsArray = document.querySelectorAll(".authentication-tab");

toTabButtonsContainer.addEventListener("click", function (e) {
  if (e.target.hasAttribute("type")) {
    // sift buttons, separate background clicks
    
    toTabButtonsArray.forEach((toTabBtn) => {
      toTabBtn.classList.remove("authentication-block__to-tab-btn_active");
    });

    tabsArray.forEach((tab) => {
      tab.classList.remove("authentication-tab_active");
    });

    e.target.classList.add("authentication-block__to-tab-btn_active");

    //indexOfElem(e.target) - button & tab number
    tabsArray[indexOfElem(e.target)].classList.add("authentication-tab_active");
  }
});

//////// FORMS
let personSettingsForm = document.querySelector(".person-settings-block__form");
let submitPersonSettings = personSettingsForm.submitSettings;
let persSettingsFields = document.querySelectorAll(
  ".person-settings-block__field"
);
let persSettingsFieldWrappers = document.querySelectorAll(
  ".person-settings-block__field-wrapper"
);

let notifSettingsForm = document.querySelector(".notif-settings-block__form");
let submitNotifSettings = notifSettingsForm.submitNotifications;
let notifCheckboxesArr = document.querySelectorAll(
  ".notif-settings-block__checkbox"
);

function showNotice(className, innerHTML) {
  let notice = document.createElement("div");
  notice.className = `steer-notice ${className}`;
  notice.innerHTML = innerHTML;
  document.body.append(notice);

  setTimeout(() => notice.remove(), 5000);
}

//showNotice("error-notice", "Error. Try again")

function showInputHint(inputNumber, innerHTML) {
  let hint = document.createElement("span");
  hint.className = "fill-required";
  hint.innerHTML = innerHTML;
  persSettingsFieldWrappers[inputNumber].append(hint);

  setTimeout(() => hint.remove(), 7000);
}

///// Person settings form
function areRequiredFieldsFill() {
  if (
    persSettingsFields[0].value == "" ||
    persSettingsFields[1].value == "" ||
    persSettingsFields[2].value == "" ||
    !persSettingsFields[2].value.includes("@") ||
    !persSettingsFields[2].value.includes(".")
  )
    return false;
  else return true;
}

personSettingsForm.addEventListener("input", () => {
  areRequiredFieldsFill()
    ? submitPersonSettings.classList.add("tab-profile__submit-button_active")
    : submitPersonSettings.classList.remove(
        "tab-profile__submit-button_active"
      );

  // submitPersonSettings.removeAttribute("disabled")
  // submitPersonSettings.setAttribute("disabled", "true")
});

function isHintAlreadyDisplayed(fieldNumber) {
  return persSettingsFieldWrappers[
    fieldNumber
  ].lastElementChild.classList.contains("fill-required");
}

//active-class avaliability (from prev logic block) uses as check for submit-btn activation
personSettingsForm.addEventListener("submit", (e) => {
  e.preventDefault(); //stops form submit
  if (
    submitPersonSettings.classList.contains("tab-profile__submit-button_active")
  ) {
    persSettingsFields.forEach((input) => (input.value = ""));
    submitPersonSettings.classList.remove("tab-profile__submit-button_active");
    //prev 2 lines is nonsence/ just for imitaiton

    showNotice("submit-notice", "Saved");
  } else {
    if (persSettingsFields[0].value == "" && !isHintAlreadyDisplayed(0)) {
      showInputHint(0, "Please specify the first name");
    }
    if (persSettingsFields[1].value == "" && !isHintAlreadyDisplayed(1)) {
      showInputHint(1, "Please specify the last name");
    }
    if (persSettingsFields[2].value == "" && !isHintAlreadyDisplayed(2)) {
      showInputHint(2, "Please specify the email");
    } else if (
      !isHintAlreadyDisplayed(2) &&
      (!persSettingsFields[2].value.includes("@") ||
        !persSettingsFields[2].value.includes("."))
    ) {
      showInputHint(2, "...@example.com");
    } else {
      //delete previous hint and show new one
      persSettingsFieldWrappers[2].lastElementChild.remove();
      showInputHint(2, "...@example.com");
    }
  }
});

////Form fiedls focus and hover actions
//let formFields = document.querySelectorAll(".prim-fields");

///// Phone number mask
let numberField = document.querySelector('input[name="number"]');
numberField.addEventListener("input", mask);
numberField.addEventListener("focus", mask);
numberField.addEventListener("blur", mask);

function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    let range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}
function mask(event) {
  let matrix = "+_ (___) ___ ____",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");

  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ""
      : a;
  });
  if (event.type == "blur") {
    if (this.value.length == 2) this.value = "";
  } else setCursorPosition(this.value.length, this);
}

///// Notifications settings form
function currentCheckboxesPositions(checksArr) {
  //Array with binary cells of every checkbox values

  let checksPositions = [];
  checksArr.forEach((checkbox) => {
    checksPositions.push(checkbox.checked);
  });
  return checksPositions;
} // Вообще это с бэка приходит, но без такого костыля не будет нормально выглядеть

function areArraysTheSame(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}

let checksPositionsOnLoad = currentCheckboxesPositions(notifCheckboxesArr);

let isSteer1Set = false;
let isSteer3Set = false;
let isSteer5Set = false;

notifSettingsForm.addEventListener("click", (event) => {
  //checkboxes hints
  if (event.target.checked) {
    let steer = document.createElement("div");
    steer.className = "steer-for-checkbox";

    if (event.target == notifCheckboxesArr[1] && !isSteer1Set) {
      steer.innerHTML = "For your mobile or tablet device";
      event.target.parentNode.after(steer);
      isSteer1Set = true;
    }
    if (event.target == notifCheckboxesArr[3] && !isSteer3Set) {
      steer.innerHTML = "Customer calls only";
      event.target.parentNode.after(steer);
      isSteer3Set = true;
    }
    if (event.target == notifCheckboxesArr[5] && !isSteer5Set) {
      steer.innerHTML = "For your mobile or tablet device";
      event.target.parentNode.after(steer);
      isSteer5Set = true;
    }
  }

  //comparing checkboxes positions to activate submit btn
  let checksPositionsNow = currentCheckboxesPositions(notifCheckboxesArr);

  if (areArraysTheSame(checksPositionsNow, checksPositionsOnLoad)) {
    submitNotifSettings.setAttribute("disabled", "true");
    submitNotifSettings.classList.remove("tab-profile__submit-button_active");
  } else {
    submitNotifSettings.removeAttribute("disabled");
    submitNotifSettings.classList.add("tab-profile__submit-button_active");
  }
});

//NONSENCE / just for imitaiton
notifSettingsForm.addEventListener("submit", (e) => {
  e.preventDefault(); //stops form submit
  if (!submitNotifSettings.hasAttribute("disabled")) {
    showNotice("submit-notice", "Saved");
  }
  submitNotifSettings.setAttribute("disabled", "true");
  submitNotifSettings.classList.remove("tab-profile__submit-button_active");
  checksPositionsOnLoad = currentCheckboxesPositions(notifCheckboxesArr);
});
