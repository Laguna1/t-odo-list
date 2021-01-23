

function addTask() {
    const task = document.querySelector('form input');
    const list = document.querySelector('ul');
    if (task.value === "") {
      alert("Please add some task!");
      return;
    }
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)">
                    <span>${task.value}</span>
                    <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
    task.value = "";
  }

  function taskComplete(event) {
    event.nextElementSibling.classList.toggle("complete");
  }

  function removeTask(event) {
    event.parentElement.remove();
  }