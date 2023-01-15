/* form.js */
export const getFullName = () => {
	// my code
    return `${document.querySelector("#first-name").value} ${document.querySelector("#last-name").value}`
};

// Пользователь вводит имя и фамилию в поле ввода. Получите эти данные, разделив их символом пробела.
