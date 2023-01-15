// /* index.js */

// Завершите функцию, чтобы она приветствовала пользователя при входе в систему фразой: `"Hello, {name}!"`, где имя находится внутри тега `<strong>...</strong>`, родителем которого выступает тег `p` с идентификатором `welcome-message`. В задаче предполагается, что пользователь авторизован в приложении, что подтверждает безопасность его действий. 

// При входе в систему, пользователю необходимо пройти авторизацию, которая может занять несколько секунд. Для того, чтобы приветствие показывалось с небольшой задержкой добавьте `setTimeout()` на две секунды.

/**
 * @param {string} name
 */
const setWelcomeMessage = name => {
	// my code  
  setTimeout(function(){
    return document.querySelector("#welcome-message").innerHTML = `Hello, <strong>${name}</strong>!`; 
}, 2000);  
}

// Sample usage - do not modify
setWelcomeMessage("Sam");