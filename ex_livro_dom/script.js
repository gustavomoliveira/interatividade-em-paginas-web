/* 
Create some dynamic HTML in a new Pen, including at least a heading
and paragraph of text, using just JavaScript. There should be nothing
at all in the HTML section on CodePen.
*/

const heading = document.createElement('h1');
heading.innerHTML = 'DOM Challenge!';

const p = document.createElement('p');
p.innerHTML = 'Learning how to create dynamic HTML.';

document.body.appendChild(heading);
document.body.appendChild(p);

/* 
Add a function called destroy to the to-do list that we just wrote.
It should remove a task from the list that’s provided as an argument.
So, for example, destroy(list.lastChild) should remove the last item in the list.
*/

const list = document.createElement('ul');
document.body.appendChild(list);

function add(item) {
  const li = document.createElement('li');
  li.innerHTML = item;
  list.appendChild(li);
}

add('Bake cake');
add('Sing song');
add('Read book');

function toggle(item) {
  item.classList.toggle('complete');
}

toggle(list.firstChild);
toggle(list.lastChild);

function destroy(item) {
    item.remove();
}

remove(list.firstChild);