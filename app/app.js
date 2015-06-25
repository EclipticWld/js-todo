var app = function() {
    var doc = document,
        inputText = doc.getElementById('list-input').querySelector('input[type=text]'),
        submitButton = doc.getElementById('list-input').querySelector('button[type=submit]'),
        ul = doc.getElementById('todo-list'),
        countId = 1;

    // Function for creating list element
    var creatItemList = function (value) {
        var list = doc.createElement('li'),
            label = doc.createElement('label'),
            checkbox = doc.createElement('input'),
            removeButton = doc.createElement('span'),
            labelText = doc.createTextNode(value);

        checkbox.type = 'checkbox';
        checkbox.id = 'task' + countId;
        checkbox.name = 'task';
        countId++;

        removeButton.innerHTML = 'x';
        removeButton.className = 'close-button';

        ul.appendChild(list);
        list.appendChild(checkbox);
        list.appendChild(label);
        label.appendChild(labelText);
        label.appendChild(removeButton);

        var removeListener = function() {
            ul.removeChild(list);
        };

        var taskDone = function(){
            if (checkbox.checked) {
                label.style.textDecoration = 'line-through';
            } else {
                label.style.textDecoration = 'none';
            }
        };

        removeButton.addEventListener('click', removeListener, false);
        checkbox.addEventListener('click', taskDone, false);

    };

    // Click listener on submit form
    var submitListener = function() {
        var textValue = inputText.value;

        if (textValue == null || textValue == '') {
            return false;
        }

        creatItemList(textValue);
        inputText.value = '';
    };
    submitButton.addEventListener('click', submitListener, false);


    // Function press enter listener
    var enterPressListener = function(e) {
        var keycheck = (e.keyCode ? e.keyCode : e.which);
        if (keycheck == 13) {
            submitButton.click();
        }
    };
    inputText.addEventListener('keypress', enterPressListener, false);

};

document.body.onload = app;


