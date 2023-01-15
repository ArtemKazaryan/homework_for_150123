/* tasks.js */
export default class Tasks {
    constructor() {
      this.tasks = [];
    }
  
    /** @param {string} csvString */
    importCsv(csvString) {
          // my code
      this.tasks = csvString.split(",");
      console.log(this.tasks)
      return this.tasks;
    }

    getCount() {
      return this.tasks.length;
    }
    
    getFirst() {
      return this.tasks[0];
    }

    getLast() {
      return this.tasks[this.tasks.length-1];
    }

    getUnformattedTasks() {
      return this.tasks.join(", ").toLowerCase()
    }
  }

//   ## project. **Импорт задач из CSV**

// Дополните класс `Tasks` следующими методами экземпляра:

// - `importCsv` получает строку CSV, преобразует ее в массив задач и сохраняет в переменной экземпляра `this.tasks`
// - `getCount` возвращает количество задач
// - `getFirst` возвращает первую задачу
// - `getLast` возвращает последнюю задачу
// - `getUnformattedTasks` возвращает строку всех задач в нижнем регистре и разделенных запятой и символом пробела
