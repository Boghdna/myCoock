document.addEventListener('DOMContentLoaded', () => {

    let bottomInfo = document.getElementById("bottomInfo");

    bottomInfo.innerHTML = `<button id="bt_1" class="but">Приховати контактну інформацію</button>
    <footer>
        <div class="bottomMenu">
            <div class="lik2">
                <div style="display: flex;">
                    <div style="flex-grow: 1;">
                        Звязок з розробниками
                    </div>
                    <div style="flex-grow: 3;">
                        email-адрес: haharin06@gmail.com
                    </div>
                    <div style="flex-grow: 1;">
                        тел. номер +380963344606
                    </div>
                </div>
        </div>
    </footer>`;

    // 1. Зміна кольору заголовка при кліку
    const header = document.querySelector('header');
    header.addEventListener('mouseenter', () => {
        header.style.color = header.style.color === 'red' ? 'blue' : 'red';
    });
    header.addEventListener('mouseleave', () => {
        header.style.color = header.style.color === 'red' ? 'blue' : 'red';
    });




           // Отримуємо посилання на кнопку та блок з контактною інформацією
    const toggleButton = document.getElementById('bt_1');
    const contactInfo = document.querySelector('.lik2');

             // Додаємо обробник події для кнопки
    toggleButton.addEventListener('click', () => {
        if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block'; // Показуємо блок
        toggleButton.textContent = 'Приховати контактну інформацію';
         } else {
        contactInfo.style.display = 'none'; // Приховуємо блок
        toggleButton.textContent = 'Показати контактну інформацію';
        }
});
});
