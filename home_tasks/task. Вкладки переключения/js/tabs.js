/* tabs.js */

export const deactivateAllTabs = () => {
    document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
    });
  }
  
  /**
   * @param {HTMLElement} tab
   */
  export const activateClickedTab = tab => {
      //my code
      tab.classList.add("active")
  }


  // Страница содержит три вкладки. У каждой вкладки есть класс `tab`. Активный элемент получает класс  `active`. При нажатии на любую из вкладок вызываются следующие функции по порядку:

// - `deactivateAllTabs()`. Функция не получает параметров и удаляет класс `active` с каждого элемента, который был активным.
// - `activateClickedTab(tab)`. Функция получает вкладку, на которую нажал пользователь. Она должна добавить ему класс `active`.