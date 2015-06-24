document.body.onload = init;

function init(){
    var doc = document,
        inputText = doc.getElementById('list-input').querySelector('input[type=text]'),
        submitButton = doc.getElementById('list-input').querySelector('button[type=submit]'),
        ul = doc.getElementById('todo-list');

    // Function for creating list element
    function creatItemList (value) {
        var list = doc.createElement('li'),
            label = doc.createElement('label'),
            labelText = doc.createTextNode(value);

        label.appendChild(labelText);
        list.appendChild(label);
        ul.appendChild(list);
    }

    // Click listener on submit form
    function clickListener() {
        var textValue = inputText.value;

        if (textValue == null || textValue == '') {
            return false;
        }

        creatItemList(textValue);
        inputText.value = '';
    }
    submitButton.addEventListener('click', clickListener, false);


    // Function press enter listener
    function enterPressListener(e) {
        var keycheck = (e.keyCode ? e.keyCode : e.which);
        if (keycheck == 13) {
            submitButton.click();
        }
    }
    inputText.addEventListener('keypress', enterPressListener, false);

}

