import { Input } from "../interfaces/input";

export default function spellChecker(input: Input) {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    setErrorFor(input, `${input.type} cannot be blank`);
  } else {
    setSuccessFor(input);
  }

  function setErrorFor(input: Input, message: string) {
    const formControl = input.parentElement;
    formControl!.classList.add("form_error");
    formControl!.classList.remove("form_success");
    formControl!.setAttribute("data-message", message);

    formControl!.classList.add("form_light");
    setTimeout(() => {
      formControl!.classList.remove("form_light");
    }, 1000);
  }

  function setSuccessFor(input: Input) {
    const formControl = input.parentElement;
    formControl!.classList.add("form_success");
    formControl!.classList.remove("form_error");
  }
}
