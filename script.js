// === КОНСТАНТЫ И СОСТОЯНИЕ ===
const STORAGE_KEY = 'recipeBookData';
let recipes = [];

// Тестовые данные для первого запуска
const defaultRecipes = [
    {
        id: '10',
        title: 'Яичница с беконом',
        category: 'завтрак',
        ingredients: ['яйца', 'бекон', 'сливочное масло', 'соль', 'черный перец'],
        time: 10,
        image: './img/Eggs.jpg',
        description: '1. Обжарьте бекон на сливочном масле до хруста.\n2. Аккуратно разбейте яйца, не повредив желтки.\n3. Жарьте 2-3 минуты до схватывания белка.\n4. Посолите, поперчите и подавайте горячим.',
        dateAdded: new Date('2026-06-07T10:00:00').toISOString()
    },
    {
        id: '2',
        title: 'Цезарь с курицей',
        category: 'закуска',
        ingredients: ['куриное филе', 'салат айсберг', 'помидоры черри', 'пармезан', 'сухарики', 'соус цезарь'],
        time: 25,
        image: './img/Cesar.webp',
        description: '1. Обжарьте куриное филе до готовности и нарежьте.\n2. Порвите салат руками.\n3. Смешайте салат, курицу, черри и сухарики.\n4. Заправьте соусом и посыпьте пармезаном.',
        dateAdded: new Date('2026-05-20T14:30:00').toISOString()
    },
    {
        id: '3',
        title: 'Шоколадный брауни',
        category: 'десерт',
        ingredients: ['темный шоколад', 'сливочное масло', 'сахар', 'яйца', 'мука', 'какао'],
        time: 45,
        image: './img/Brayni.webp',
        description: '1. Растопите шоколад с маслом.\n2. Взбейте яйца с сахаром.\n3. Аккуратно смешайте все ингредиенты.\n4. Выпекайте при 180°C около 25-30 минут. Серединка должна оставаться слегка влажной.',
        dateAdded: new Date('2026-06-01T09:15:00').toISOString()
    },
    {
        id: '4',
        title: 'Классический борщ',
        category: 'обед',
        ingredients: ['говядина', 'свекла', 'капуста', 'картофель', 'морковь', 'лук', 'томатная паста'],
        time: 90,
        image: './img/Borsh.webp',
        description: '1. Сварите бульон из говядины.\n2. Обжарьте лук, морковь и свеклу с томатной пастой.\n3. Добавьте в бульон картофель и капусту.\n4. Переложите зажарку в суп и варите до готовности.',
        dateAdded: new Date('2026-06-02T12:00:00').toISOString()
    },
    {
        id: '5',
        title: 'Паста Карбонара',
        category: 'ужин',
        ingredients: ['спагетти', 'бекон', 'желтки', 'пармезан', 'сливки', 'чеснок'],
        time: 20,
        image: './img/Pasta.webp',
        description: '1. Отварите спагетти до состояния аль денте.\n2. Обжарьте бекон с чесноком.\n3. Смешайте желтки с тертым пармезаном и сливками.\n4. Соедините пасту, бекон и соус, быстро перемешайте на выключенной сковороде.',
        dateAdded: new Date('2026-06-03T18:30:00').toISOString()
    },
    {
        id: '6',
        title: 'Греческий салат',
        category: 'закуска',
        ingredients: ['помидоры', 'огурцы', 'болгарский перец', 'красный лук', 'маслины', 'сыр фета', 'оливковое масло'],
        time: 15,
        image: './img/Salat.webp',
        description: '1. Нарежьте помидоры, огурцы и перец крупными кубиками.\n2. Нарежьте лук полукольцами.\n3. Смешайте овощи в миске, добавьте маслины и кубики феты.\n4. Заправьте оливковым маслом, посыпьте орегано.',
        dateAdded: new Date('2026-06-04T11:00:00').toISOString()
    },
    {
        id: '7',
        title: 'Панкейки с ягодами',
        category: 'завтрак',
        ingredients: ['мука', 'молоко', 'яйца', 'сахар', 'разрыхлитель', 'сливочное масло', 'свежие ягоды'],
        time: 20,
        image: './img/Pancake.jpg',
        description: '1. Смешайте сухие ингредиенты: муку, сахар и разрыхлитель.\n2. Добавьте молоко и яйца, перемешайте до однородности.\n3. Жарьте на сухой сковороде по 2 минуты с каждой стороны.\n4. Подавайте со сливочным маслом и свежими ягодами.',
        dateAdded: new Date('2026-06-04T12:30:00').toISOString()
    },
    {
        id: '8',
        title: 'Куриный суп с лапшой',
        category: 'обед',
        ingredients: ['куриное филе', 'морковь', 'лук', 'вермишель', 'картофель', 'зелень', 'соль', 'перец'],
        time: 40,
        image: './img/Syp.png',
        description: '1. Сварите бульон из куриного филе.\n2. Добавьте нарезанный картофель и варите 10 минут.\n3. Сделайте зажарку из лука и моркови, добавьте в суп.\n4. Всыпьте вермишель, варите еще 5 минут. Посыпьте зеленью.',
        dateAdded: new Date('2026-06-05T13:00:00').toISOString()
    },
    {
        id: '9',
        title: 'Тирамису',
        category: 'десерт',
        ingredients: ['печенье савоярди', 'маскарпоне', 'яйца', 'сахар', 'кофе эспрессо', 'какао-порошок'],
        time: 30,
        image: './img/Tiramisu.jpg',
        description: '1. Взбейте желтки с сахаром, добавьте маскарпоне.\n2. Отдельно взбейте белки до пиков и аккуратно вмешайте в крем.\n3. Обмакните печенье в холодный кофе и выложите слоями с кремом.\n4. Уберите в холодильник на 4 часа, перед подачей посыпьте какао.',
        dateAdded: new Date('2026-06-05T18:00:00').toISOString()
    }
];

// === ИНИЦИАЛИЗАЦИЯ ===
document.addEventListener('DOMContentLoaded', () => {
    loadRecipes();
    renderRecipes();
    setupEventListeners();
});

function loadRecipes() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        recipes = JSON.parse(stored);
    } else {
        recipes = [...defaultRecipes];
        saveRecipes();
    }
}

function saveRecipes() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

// === РЕНДЕРИНГ ===
function renderRecipes(recipesToRender = null) {
    const grid = document.getElementById('recipesGrid');
    const noResults = document.getElementById('noResultsMessage');
    const data = recipesToRender || getFilteredAndSortedRecipes();

    grid.innerHTML = '';

    if (data.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    data.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';

        // Обрезаем описание для превью
        const shortDesc = recipe.description.length > 100
            ? recipe.description.substring(0, 100) + '...'
            : recipe.description;

        const ingredientsPreview = recipe.ingredients.slice(0, 3).join(', ') +
            (recipe.ingredients.length > 3 ? ' и др.' : '');

        card.innerHTML = `
            <img src="${recipe.image || 'https://via.placeholder.com/300x200?text=Нет+фото'}" 
                 alt="${recipe.title}" 
                 class="card-image"
                 onerror="this.src='https://via.placeholder.com/300x200?text=Ошибка+загрузки'">
            <div class="card-body">
                <h3 class="card-title">${escapeHtml(recipe.title)}</h3>
                <div class="card-meta">
                    <span class="badge category">${capitalize(recipe.category)}</span>
                    <span class="badge time">⏱ ${recipe.time} мин</span>
                </div>
                <p class="card-meta" style="font-size: 0.85rem; color: #868e96;">
                    🛒 ${escapeHtml(ingredientsPreview)}
                </p>
                <p class="card-description">${escapeHtml(shortDesc)}</p>
                <div class="card-actions">
                    <button class="btn btn-primary btn-sm" onclick="openViewModal('${recipe.id}')">Просмотр</button>
                    <button class="btn btn-secondary btn-sm" onclick="openEditModal('${recipe.id}')">Изменить</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRecipe('${recipe.id}')">Удалить</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// === ФИЛЬТРАЦИЯ И СОРТИРОВКА ===
function getFilteredAndSortedRecipes() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
    const category = document.getElementById('categoryFilter').value;
    const maxTime = document.getElementById('timeFilter').value;
    const ingredientQuery = document.getElementById('ingredientFilter').value.toLowerCase().trim();
    const sortValue = document.getElementById('sortSelect').value;

    let filtered = recipes.filter(recipe => {
        // Поиск по названию
        if (searchQuery && !recipe.title.toLowerCase().includes(searchQuery)) {
            return false;
        }
        // Фильтр по категории
        if (category !== 'all' && recipe.category !== category) {
            return false;
        }
        // Фильтр по времени
        if (maxTime !== 'all' && recipe.time > parseInt(maxTime)) {
            return false;
        }
        // Фильтр по ингредиентам (должны совпасть ВСЕ введенные ингредиенты)
        if (ingredientQuery) {
            const queryIngredients = ingredientQuery.split(',').map(i => i.trim()).filter(i => i);
            const hasAllIngredients = queryIngredients.every(qIng =>
                recipe.ingredients.some(rIng => rIng.toLowerCase().includes(qIng))
            );
            if (!hasAllIngredients) return false;
        }

        return true;
    });

    // Сортировка
    filtered.sort((a, b) => {
        switch (sortValue) {
            case 'nameAsc':
                return a.title.localeCompare(b.title);
            case 'nameDesc':
                return b.title.localeCompare(a.title);
            case 'timeAsc':
                return a.time - b.time;
            case 'timeDesc':
                return b.time - a.time;
            case 'dateAsc':
                return new Date(a.dateAdded) - new Date(b.dateAdded);
            case 'dateDesc':
            default:
                return new Date(b.dateAdded) - new Date(a.dateAdded);
        }
    });

    return filtered;
}

// === CRUD ОПЕРАЦИИ ===
function addRecipe(recipeData) {
    const newRecipe = {
        id: Date.now().toString(),
        dateAdded: new Date().toISOString(),
        ...recipeData
    };
    recipes.push(newRecipe);
    saveRecipes();
    renderRecipes();
}

function updateRecipe(id, updatedData) {
    const index = recipes.findIndex(r => r.id === id);
    if (index !== -1) {
        recipes[index] = { ...recipes[index], ...updatedData };
        saveRecipes();
        renderRecipes();
    }
}

function deleteRecipe(id) {
    if (confirm('Вы уверены, что хотите удалить этот рецепт?')) {
        recipes = recipes.filter(r => r.id !== id);
        saveRecipes();
        renderRecipes();
    }
}

// === УПРАВЛЕНИЕ МОДАЛЬНЫМИ ОКНАМИ ===
const recipeModal = document.getElementById('recipeModal');
const viewModal = document.getElementById('viewModal');
const recipeForm = document.getElementById('recipeForm');

function openModal(modal) {
    modal.classList.remove('hidden');
}

function closeModal(modal) {
    modal.classList.add('hidden');
}

function openAddModal() {
    document.getElementById('modalTitle').textContent = 'Добавить рецепт';
    document.getElementById('recipeId').value = '';
    recipeForm.reset();
    openModal(recipeModal);
}

function openEditModal(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById('modalTitle').textContent = 'Редактировать рецепт';
    document.getElementById('recipeId').value = recipe.id;
    document.getElementById('title').value = recipe.title;
    document.getElementById('category').value = recipe.category;
    document.getElementById('time').value = recipe.time;
    document.getElementById('image').value = recipe.image;
    document.getElementById('ingredients').value = recipe.ingredients.join(', ');
    document.getElementById('description').value = recipe.description;

    openModal(recipeModal);
}

function openViewModal(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById('viewImage').src = recipe.image || 'https://via.placeholder.com/600x300?text=Нет+изображения';
    document.getElementById('viewTitle').textContent = recipe.title;
    document.getElementById('viewCategory').textContent = capitalize(recipe.category);
    document.getElementById('viewTime').textContent = `⏱ ${recipe.time} мин`;

    const ingList = document.getElementById('viewIngredients');
    ingList.innerHTML = recipe.ingredients.map(ing => `<li>${escapeHtml(ing)}</li>`).join('');

    document.getElementById('viewDescription').textContent = recipe.description;

    openModal(viewModal);
}

// === ОБРАБОТЧИКИ СОБЫТИЙ ===
function setupEventListeners() {
    // Открытие/закрытие модалок
    document.getElementById('openAddModalBtn').addEventListener('click', openAddModal);

    document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            closeModal(e.target.closest('.modal'));
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Отправка формы (Добавление или Редактирование)
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = document.getElementById('recipeId').value;
        const ingredientsArray = document.getElementById('ingredients').value
            .split(',')
            .map(i => i.trim())
            .filter(i => i);

        const recipeData = {
            title: document.getElementById('title').value.trim(),
            category: document.getElementById('category').value,
            time: parseInt(document.getElementById('time').value),
            image: document.getElementById('image').value.trim(),
            ingredients: ingredientsArray,
            description: document.getElementById('description').value.trim()
        };

        if (id) {
            updateRecipe(id, recipeData);
        } else {
            addRecipe(recipeData);
        }

        closeModal(recipeModal);
    });

    // Фильтры и сортировка (живой поиск)
    const filterInputs = ['searchInput', 'categoryFilter', 'timeFilter', 'ingredientFilter', 'sortSelect'];
    filterInputs.forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
            renderRecipes();
        });
    });

    // Кнопка сброса
    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('categoryFilter').value = 'all';
        document.getElementById('timeFilter').value = 'all';
        document.getElementById('ingredientFilter').value = '';
        document.getElementById('sortSelect').value = 'dateDesc';
        renderRecipes();
    });
}

// === ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Делаем функции доступными глобально для onclick в HTML
window.openViewModal = openViewModal;
window.openEditModal = openEditModal;
window.deleteRecipe = deleteRecipe;