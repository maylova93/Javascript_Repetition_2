document.addEventListener("DOMContentLoaded", function() {
    // Получаем контейнер для продуктов и форму поиска
    const productContainer = document.getElementById('productContainer');
    const searchForm = document.getElementById('search-form');
    let currentProducts = [];

    // Добавляем обработчик события для формы поиска
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const brand = document.getElementById('brand').value;
        const productType = document.getElementById('product-type').value;

        // Выполняем поиск продуктов по введенному бренду и типу продукта
        fetchProducts(brand, productType);
    });

    // Функция для получения продуктов с API
    function fetchProducts(brand, productType) {
        // Формируем URL для запроса к API
        let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
        if (productType) {
            url += `&product_type=${productType}`;
        }

        // Выполняем fetch запрос к API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Сохраняем полученные данные и отображаем продукты
                currentProducts = data;
                displayProducts(data);
            })
            .catch(error => {
                console.error('Error occurred while fetching data:', error);
            });
    }

    // Функция для отображения продуктов на странице
    function displayProducts(products) {
        // Очищаем контейнер перед добавлением новых продуктов
        productContainer.innerHTML = '';

        // Проходимся по каждому продукту и создаем его элемент
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            // Вставляем HTML-код для продукта
            productDiv.innerHTML = `
                <img src="${product.image_link}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Brand: ${product.brand}</p>
                <p>Type: ${product.product_type}</p>
                <p>Price: $${product.price}</p>
                <button class="button" onclick="addToCart(${index})">ADD TO CART</button>
            `;

            // Добавляем продукт в контейнер
            productContainer.appendChild(productDiv);
        });
    }

    // Функция для добавления продукта в корзину
    window.addToCart = function(index) {
        alert(`You have added ${currentProducts[index].name} to your wishlist`);
    };

    // Выполняем первоначальный запрос для отображения продуктов бренда Maybelline
    fetchProducts('maybelline', '');
});

document.addEventListener("DOMContentLoaded", function() {
    // Находим форму подписки на новостную рассылку
    const form = document.querySelector('.newsletter-signup form');
    // Находим поле ввода email
    const emailInput = form.querySelector('input[type="email"]');
    // Создаем элемент для отображения сообщения об ошибке
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message'); // Добавляем класс для стилизации сообщения об ошибке
    errorMessage.style.display = 'none'; // Изначально скрываем сообщение об ошибке
    form.appendChild(errorMessage); // Добавляем сообщение об ошибке под форму

    // Добавляем обработчик события на отправку формы
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем стандартную отправку формы
        const emailValue = emailInput.value; // Получаем значение из поля email
        // Проверяем, является ли введенный email корректным
        if (validateEmail(emailValue)) {
            errorMessage.style.display = 'none'; // Если email корректен, скрываем сообщение об ошибке
            alert('Thank you for signing up!'); // Показываем сообщение об успешной подписке
            // Здесь вы можете добавить код для отправки данных формы
            form.reset(); // Сбрасываем форму после успешной подписки
        } else {
            errorMessage.textContent = 'Please enter a valid email address.'; // Если email некорректен, показываем сообщение об ошибке
            errorMessage.style.display = 'block'; // Отображаем сообщение об ошибке
        }
    });

    // Функция для проверки корректности email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки email
        return re.test(String(email).toLowerCase()); // Проверяем email и возвращаем true, если он корректен
    }
});

//Burgermenu mobile
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');

    burgerMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
