const form=document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const expensement=event.target.expense.value;
    const desc=event.target.desc.value;
    const category=event.target.category.value;
    const obj={expensement,desc,category};

    localStorage.setItem(expensement,JSON.stringify(obj));
    showDetails(expensement, desc, category);
    form.reset(); 
});
function showDetails(expensement, desc, category){
    const parent=document.querySelector('ul');
    const li=document.createElement('li');

    li.innerHTML=`${expensement} - ${desc} - ${category} &nbsp;<button type='button' id='Delete' class='btn'>Delete</button>&nbsp; <button type='button' class='btn' id='edit'>Edit</button>`;
    parent.appendChild(li);

    const deletebutton=li.querySelector('#Delete');
    deletebutton.onclick = () => {
        parent.removeChild(li);
        localStorage.removeItem(expensement);
    }

    const editbutton=li.querySelector('#edit');
    editbutton.onclick = () => {
        document.getElementById('expensement').value=expensement;
        document.getElementById('desc').value=desc;
        document.getElementById('category').value=category;

        parent.removeChild(li);
        localStorage.removeItem(expensement);
    }
    
}