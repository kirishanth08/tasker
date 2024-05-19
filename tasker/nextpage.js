var butt = document.getElementById("log")
 function logout(){
    window.location.href = "login.html"
 }

 function toggleTask(checkbox) {
  var taskName = checkbox.closest('.blocker').querySelector('h4');
  
  if (checkbox.checked) {
      taskName.style.textDecoration = 'line-through';
  } else {
      taskName.style.textDecoration = 'none';
  }
}





var deleteButtons = document.querySelectorAll('.del');

deleteButtons.forEach(function(deleteButton) {
    deleteButton.addEventListener('click', function() {
        var taskBlock = this.closest('.blocker');
        taskBlock.remove();
    });
});


document.addEventListener("DOMContentLoaded", function() {
  var categoryToggle = document.querySelector('.categories');
  var categoryOptions = document.querySelector('.option');

  categoryToggle.addEventListener('click', function(event) {
    event.preventDefault();
      categoryOptions.style.display= "block"
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener('click', function(event) {
      if (!categoryToggle.contains(event.target) && !categoryOptions.contains(event.target)) {
        categoryOptions.style.display= "none"
      }
  });
});


// Get the delete button element
var deleteButton = document.getElementById('deletetask');

// Add click event listener to the delete button
deleteButton.addEventListener('click', function() {
    var taskContainer = document.querySelector('.popup'); // Assuming you want to delete the first task found with this class
    if (taskContainer) {
        taskContainer.remove();
    }
});

function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function hidePopup() {
  var popup = document.getElementById('popup');
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

function selectCategory(category, color) {
  var drop3 = document.querySelector('.drop3');
  drop3.innerHTML = `<div class="selectedCategory" style="background-color: ${color};"></div>${category}`;
}

function addTask() {
  var taskName = document.getElementById('inputu').value.trim();
  var selectedCategoryElement = document.querySelector('.selectedCategory');
  var category = selectedCategoryElement ? selectedCategoryElement.nextSibling.textContent.trim() : '';

  if (taskName && category && category !== 'Select Category') {
      var newTask = document.createElement('div');
      newTask.classList.add('blocker');
      newTask.innerHTML = `
          <div class="block1">
              <input type="checkbox" class="radio" onchange="toggleTask(this)">
          </div>
          <div class="kodu">
              <h4>${taskName}</h4>
              <div class="mpt" style="background-color: ${selectedCategoryElement.style.backgroundColor};"></div>
              <p>${category}</p>
          </div>
          <div class="block2">
              <img src="assets/pencil.png" alt="" class="pencil">
              <img src="assets/delete.png" alt="" class="del" >
          </div>
      `;

      var exampleTask = document.querySelector('.right .blocker');
      exampleTask.parentNode.insertBefore(newTask, exampleTask.nextSibling);
      hidePopup();
  } else {
      alert('Please fill in all fields and select a category.');
  }
}







