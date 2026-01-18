const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
    { title: "1984", author: "George Orwell", image: "https://covers.openlibrary.org/b/id/12648316-L.jpg" },
    { title: "Moby Dick", author: "Herman Melville", image: "https://covers.openlibrary.org/b/id/12497424-L.jpg" },
    { title: "Pride and Prejudice", author: "Jane Austen", image: "https://covers.openlibrary.org/b/id/14578120-L.jpg" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", image: "https://covers.openlibrary.org/b/id/14589257-L.jpg" },
    { title: "Brave New World", author: "Aldous Huxley", image: "https://covers.openlibrary.org/b/id/11145625-L.jpg" }
];

function displayBooks(bookList) {
    const grid = document.getElementById('bookGrid');
    grid.innerHTML = '';
    bookList.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <a href="#" class="read-btn">Read Now</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = books.filter(book => 
        book.title.toLowerCase().includes(term) || 
        book.author.toLowerCase().includes(term)
    );
    displayBooks(filtered);
});

displayBooks(books);