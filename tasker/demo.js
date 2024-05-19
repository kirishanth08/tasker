var addMoreButton = document.getElementById('addmoretask');
var popup = document.getElementById('popup');

addMoreButton.addEventListener('click', function() {
    popup.style.display = 'block';
});

function hidePopup() {
    popup.style.display = 'none';
}

function toggleCategoryOptions() {
    var categoryOptions = document.getElementById('categoryOptions');
    if (categoryOptions.style.display === 'block') {
        categoryOptions.style.display = 'none';
    } else {
        categoryOptions.style.display = 'block';
    }
}

function selectCategory(category) {
    document.getElementById('inputu').value = category; // Update input field with selected category
}

function addTask() {
    var taskName = document.getElementById('inputu').value.trim();
    var category = document.getElementById('category').innerText.trim();

    if (taskName && category) {
        var newTask = document.createElement('div');
        newTask.classList.add('blocker');
        newTask.innerHTML = `
            <div class="block1">
                <input type="checkbox" class="radio" onchange="toggleTask(this)">
            </div>
            <div class="kodu">
                <h4>${taskName}</h4>
                <div class="mpt"></div>
                <p>${category}</p>
            </div>
            <div class="block2">
                <img src="assets/pencil.png" alt="" class="pencil">
                <img src="assets/delete.png" alt="" class="del">
            </div>
        `;

        var existingTasks = document.querySelectorAll('.blocker');
        var lastExistingTask = existingTasks[existingTasks.length - 1];
        lastExistingTask.parentNode.insertBefore(newTask, lastExistingTask.nextSibling);
        hidePopup();
    } else {
        alert('Please fill in all fields.');
    }
}
