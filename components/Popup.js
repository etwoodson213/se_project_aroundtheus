export default class Popup {
    constructor({ popupSelector }) {
        this._popupElement = document.querySelector(popupSelector);
    }

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Handlers                                    ||
// ! ||--------------------------------------------------------------------------------||


//  handlePreview(cardData) {
//     const modalPopup = this._popupSelector

//     modalPopup.src = cardData.link;
//     modalPopupCaption.textContent = cardData.name;
//     modalPicture.alt = `Photo of ${cardData.name}`;
//     openPopup(modalPicture);
//   }

// ! ||--------------------------------------------------------------------------------||
// ! ||                                Methods - Public                                ||
// ! ||--------------------------------------------------------------------------------||

//open popup
open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", closeModalsByEsc);
  }


// function openPopup(modal) {
//     modal.classList.add("modal_opened");
//     document.addEventListener("keydown", closeModalsByEsc);
//   }

//close popup
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", closeModalsByEsc);
  }
  
//   function closePopup() {
//     document.querySelector(".modal_opened").classList.remove("modal_opened");
//     document.removeEventListener("keydown", closeModalsByEsc);
//   }

// ! ||--------------------------------------------------------------------------------||
// ! ||                                Methods - Private                               ||
// ! ||--------------------------------------------------------------------------------||

//close modals on esc
 _handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopup(openedModal);
  }

// ! ||--------------------------------------------------------------------------------||
// ! ||                               Set Event Listeners                              ||
// ! ||--------------------------------------------------------------------------------||

seteEventListeners(); {
    //modal close icon
    modalPictureClose.addEventListener("click", () => closePopup(modalPicture));

    //modal overlay close
    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            closePopup(modal);
          }
        });
    });
}
}
}