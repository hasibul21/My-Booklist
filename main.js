const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const booklist = document.querySelector('#booklist');

btn.addEventListener('click',function(){
    if(title.value ==  '' || author.value == '' || year.value == ''){
        alert('Empty fields are not allowed')
    }
    else{
        const newRow = document.createElement('tr');
        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        
        booklist.appendChild(newRow)
    }
})