export const errorAlert = {
  errorAlert: document.querySelector(".error-alert"),

  open() {
    errorAlert.errorAlert.classList.add("open");
  },
  close() {
    errorAlert.errorAlert.classList.remove("open");
  },
};