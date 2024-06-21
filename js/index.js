const selectTag = document.querySelectorAll("select");

selectTag.forEach((tag, id) => {
  for (const country_code in countries) {
    // selecting English by default as From Language and Burmese as To Language
    let selected;
    if (id == 0 && country_code == "en-GB") {
      selected = "selected";
    } else if (id == 1 && country_code == "my-MM") {
      selected = "selected";
    }
    let option = ` <option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
