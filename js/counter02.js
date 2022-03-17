// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
    
    let counter;

    // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
     if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ) {
         

     
        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');

        // Находим div с числом счетчика
        counter =  counterWrapper.querySelector('[data-counter]');

     }

        // Проверяем является ли элемент по которому был соверешен клик кнопкой Плюс
        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
        }
     
        // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
        if (event.target.dataset.action === 'minus') {
         
        const counterWrapper = event.target.closest('.counter-wrapper');

        const counter =  counterWrapper.querySelector('[data-counter]');
        
        // Проверяем чтобы счетчик был больше 1
        if ( parseInt(counter.innerText) > 1 ) {
        // Изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
        // Условия для удаления товара
        } else if ( event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
            
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            toggleCartStatus();

            // Перерасчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery();

        }
    

        
        
     }

     // Проверяем клик на + или - внутри корзины
     if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
         // Перерасчет общей стоимости товаров в корзине
         calcCartPriceAndDelivery();
     }
});