const targetNode = document.getElementById('targetNode');
const name = document.getElementById('name');
const add = document.getElementById('add');
const change = document.getElementById('change');

function addName() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(name.value));
    targetNode.appendChild(li);
}

function updateValue() {
    targetNode.childen[targetNode.children.length -1].value = 100;
}

const callbacks = function(mutationList, observer) {
    for (let mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.info('A child node has been added!');
        } else if (mutation.type === 'attributes') {
            console.info(`The ${mutation.attributeName} attribute has been changed!`);
        }    
    }
}

add.addEventListener('click', addName);
change.addEventListener('click', updateValue);

const observer = new MutationObserver(callbacks);
observer.observe(targetNode, {
    attributes: true,
    childList: true,
    subtree: true,
});