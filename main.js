const inputs = document.querySelectorAll('input'); // Step 1 Поиск всех элементов по селектору input

function handleUpdate() { // Step 2 Создание самовызывающейся функции 
    const suffix = (this.dataset.sizing || '');
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // добавление отслеживания события по изменению инпута
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // добавление отслеживания события по изменению инпута скролом

