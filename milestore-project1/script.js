let menuBtn = document.getElementById('responsiveNavIcon');
let closeMenu = document.getElementById('closeIcon');
menuBtn.addEventListener('click', ()=>{
    document.getElementById('menuItems').style.display = 'block';
})
closeMenu.addEventListener('click', ()=>{
    document.getElementById('menuItems').style.display = 'none';
})

const allBooks = async() =>{
    const url = 'JSON/book.json';
    const res = await fetch(url);
    const data = await res.json();
    displayBooks(data);
}
const displayBooks = (books)=>{
    const booksContainer = document.getElementById('topBooksContainer');
    books.forEach(book=>{
        const bookCard = document.createElement('div');
        bookCard.innerHTML = 
        `
            <img src="${book.images.cover}" height="350px" width="100%" alt="">
            <h1 style="font-size:22px; margin-top: 10px">${book.name}</h1>
            <h4 style="font-size:18px; margin:5px 0">${book.writer}</h4>
            <div style="display: flex; justify-content: space-between; align-items:center;">
                <p style="font-size:16px; margin:0">Price: $${book.price}</p>
                <button style="background-color: #803636; color:white; font-size: 16px; border: none;  padding:10px; border-radius:10px"> add to cart</button>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    })
}
allBooks();

const blogs = async() =>{
    const url = 'JSON/blogs.json';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayBlogs(data);
}
const displayBlogs = (blogs)=>{
    const blogsContainer = document.getElementById('box-content');
    blogs.slice(0,2).forEach(blog=>{
        const blogCard = document.createElement('div');
        blogCard.classList.add('blogs');
        blogCard.innerHTML = 
        `
            <img src="${blog.images[0]}" alt="">
            <h1 style="font-size:22px; margin-top: 10px">${blog.name}</h1>
            <p>${blog.description}</p>
        `;
        blogsContainer.appendChild(blogCard);
    })
}
blogs();

function showPage(pageNumber) {
    const contentBoxes = document.querySelectorAll('.content-box');
    contentBoxes.forEach(box => {
      box.style.display = 'none';
    });
    
    const selectedBox = document.querySelector(`.content-box:nth-child(${pageNumber})`);
    if (selectedBox) {
      selectedBox.style.display = 'block';
    }
  }