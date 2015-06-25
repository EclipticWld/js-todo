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
            removeButton = doc.createElement('i'),
            labelText = doc.createTextNode(value);

        checkbox.type = 'checkbox';
        checkbox.id = 'task' + countId;
        checkbox.name = 'task';
        label.setAttribute('for','task' + countId);
        countId++;

        removeButton.className = 'close-button fa fa-times-circle fa-lg';

        ul.appendChild(list);
        list.appendChild(checkbox);
        list.appendChild(label);
        label.appendChild(labelText);
        list.appendChild(removeButton);

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

        if ( ul.classList.contains('todo-list') == false ) {
            ul.classList.add('todo-list');
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


