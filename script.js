const books = [
    // --- CLASSIC FICTION ---
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://covers.openlibrary.org/b/id/12648316-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/1984.pdf"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        image: "https://covers.openlibrary.org/b/id/12497424-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/moby-dick.pdf"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        image: "https://covers.openlibrary.org/b/id/14578120-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/pride-and-prejudice.pdf"
    },
    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        image: "https://covers.openlibrary.org/b/title/Alice's_Adventures_in_Wonderland-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/alices-adventures-in-wonderland.pdf"
    },
    {
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        image: "https://covers.openlibrary.org/b/title/The_Adventures_of_Huckleberry_Finn-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-adventures-of-huckleberry-finn.pdf"
    },
    {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        image: "https://covers.openlibrary.org/b/title/The_Adventures_of_Tom_Sawyer-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-adventures-of-tom-sawyer.pdf"
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        image: "https://covers.openlibrary.org/b/title/Wuthering_Heights-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/wuthering-heights.pdf"
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        image: "https://covers.openlibrary.org/b/title/Jane_Eyre-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/jane-eyre.pdf"
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        image: "https://covers.openlibrary.org/b/title/Great_Expectations-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/great-expectations.pdf"
    },
    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        image: "https://covers.openlibrary.org/b/title/A_Tale_of_Two_Cities-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/a-tale-of-two-cities.pdf"
    },
    {
        title: "David Copperfield",
        author: "Charles Dickens",
        image: "https://covers.openlibrary.org/b/title/David_Copperfield-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/david-copperfield.pdf"
    },
    {
        title: "Oliver Twist",
        author: "Charles Dickens",
        image: "https://covers.openlibrary.org/b/title/Oliver_Twist-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/oliver-twist.pdf"
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        image: "https://covers.openlibrary.org/b/title/Frankenstein-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/frankenstein.pdf"
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        image: "https://covers.openlibrary.org/b/title/Dracula-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/dracula.pdf"
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        image: "https://covers.openlibrary.org/b/title/The_Picture_of_Dorian_Gray-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-picture-of-dorian-gray.pdf"
    },
    {
        title: "The Importance of Being Earnest",
        author: "Oscar Wilde",
        image: "https://covers.openlibrary.org/b/title/The_Importance_of_Being_Earnest-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-importance-of-being-earnest.pdf"
    },
    {
        title: "Metamorphosis",
        author: "Franz Kafka",
        image: "https://covers.openlibrary.org/b/title/Metamorphosis-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-metamorphosis.pdf"
    },
    {
        title: "The Trial",
        author: "Franz Kafka",
        image: "https://covers.openlibrary.org/b/title/The_Trial-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-trial.pdf"
    },
    {
        title: "Heart of Darkness",
        author: "Joseph Conrad",
        image: "https://covers.openlibrary.org/b/title/Heart_of_Darkness-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/heart-of-darkness.pdf"
    },
    {
        title: "Lord Jim",
        author: "Joseph Conrad",
        image: "https://covers.openlibrary.org/b/title/Lord_Jim-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/lord-jim.pdf"
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        image: "https://covers.openlibrary.org/b/title/Ulysses-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/ulysses.pdf"
    },
    {
        title: "Dubliners",
        author: "James Joyce",
        image: "https://covers.openlibrary.org/b/title/Dubliners-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/dubliners.pdf"
    },
    {
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        image: "https://covers.openlibrary.org/b/title/Madame_Bovary-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/madame-bovary.pdf"
    },
    {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        image: "https://covers.openlibrary.org/b/title/The_Brothers_Karamazov-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-brothers-karamazov.pdf"
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        image: "https://covers.openlibrary.org/b/title/Crime_and_Punishment-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/crime-and-punishment.pdf"
    },
    {
        title: "The Idiot",
        author: "Fyodor Dostoevsky",
        image: "https://covers.openlibrary.org/b/title/The_Idiot-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-idiot.pdf"
    },
    {
        title: "Notes from the Underground",
        author: "Fyodor Dostoevsky",
        image: "https://covers.openlibrary.org/b/title/Notes_from_the_Underground-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/notes-from-the-underground.pdf"
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        image: "https://covers.openlibrary.org/b/title/Anna_Karenina-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/anna-karenina.pdf"
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        image: "https://covers.openlibrary.org/b/title/War_and_Peace-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/war-and-peace.pdf"
    },

    // --- ADVENTURE & SCI-FI ---
    {
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        image: "https://covers.openlibrary.org/b/title/Treasure_Island-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/treasure-island.pdf"
    },
    {
        title: "Dr. Jekyll and Mr. Hyde",
        author: "Robert Louis Stevenson",
        image: "https://covers.openlibrary.org/b/title/Strange_Case_of_Dr_Jekyll_and_Mr_Hyde-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-strange-case-of-dr-jekyll-and-mr-hyde.pdf"
    },
    {
        title: "The Time Machine",
        author: "H.G. Wells",
        image: "https://covers.openlibrary.org/b/title/The_Time_Machine-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-time-machine.pdf"
    },
    {
        title: "The War of the Worlds",
        author: "H.G. Wells",
        image: "https://covers.openlibrary.org/b/title/The_War_of_the_Worlds-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-war-of-the-worlds.pdf"
    },
    {
        title: "The Invisible Man",
        author: "H.G. Wells",
        image: "https://covers.openlibrary.org/b/title/The_Invisible_Man-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-invisible-man.pdf"
    },
    {
        title: "Twenty Thousand Leagues Under the Sea",
        author: "Jules Verne",
        image: "https://covers.openlibrary.org/b/title/Twenty_Thousand_Leagues_Under_the_Sea-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/twenty-thousand-leagues-under-the-sea.pdf"
    },
    {
        title: "Around the World in 80 Days",
        author: "Jules Verne",
        image: "https://covers.openlibrary.org/b/title/Around_the_World_in_Eighty_Days-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/around-the-world-in-80-days.pdf"
    },
    {
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        image: "https://covers.openlibrary.org/b/title/Robinson_Crusoe-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/robinson-crusoe.pdf"
    },
    {
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
        image: "https://covers.openlibrary.org/b/title/Gullivers_Travels-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/gullivers-travels.pdf"
    },
    {
        title: "The Call of the Wild",
        author: "Jack London",
        image: "https://covers.openlibrary.org/b/title/The_Call_of_the_Wild-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-call-of-the-wild.pdf"
    },
    {
        title: "White Fang",
        author: "Jack London",
        image: "https://covers.openlibrary.org/b/title/White_Fang-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/white-fang.pdf"
    },

    // --- PHILOSOPHY & ESSAYS ---
    {
        title: "The Prince",
        author: "Niccolò Machiavelli",
        image: "https://covers.openlibrary.org/b/title/The_Prince-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-prince.pdf"
    },
    {
        title: "The Republic",
        author: "Plato",
        image: "https://covers.openlibrary.org/b/title/The_Republic-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-republic.pdf"
    },
    {
        title: "Walden",
        author: "Henry David Thoreau",
        image: "https://covers.openlibrary.org/b/title/Walden-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/walden.pdf"
    },
    {
        title: "Essays of Michel de Montaigne",
        author: "Michel de Montaigne",
        image: "https://covers.openlibrary.org/b/title/Essays-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-essays-of-michel-de-montaigne.pdf"
    },
    {
        title: "Thus Spoke Zarathustra",
        author: "Friedrich Nietzsche",
        image: "https://covers.openlibrary.org/b/title/Thus_Spoke_Zarathustra-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/thus-spake-zarathustra.pdf"
    },
    {
        title: "Beyond Good and Evil",
        author: "Friedrich Nietzsche",
        image: "https://covers.openlibrary.org/b/title/Beyond_Good_and_Evil-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/beyond-good-and-evil.pdf"
    },

    // --- OTHER CLASSICS ---
    {
        title: "Les Misérables",
        author: "Victor Hugo",
        image: "https://covers.openlibrary.org/b/title/Les_Miserables-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/les-miserables.pdf"
    },
    {
        title: "The Hunchback of Notre Dame",
        author: "Victor Hugo",
        image: "https://covers.openlibrary.org/b/title/The_Hunchback_of_Notre_Dame-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/the-hunchback-of-notre-dame.pdf"
    },
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        image: "https://covers.openlibrary.org/b/title/Don_Quixote-L.jpg",
        pdf: "https://www.planetebook.com/free-ebooks/don-quixote.pdf"
    }
];

function displayBooks(bookList) {
    const grid = document.getElementById('bookGrid');
    grid.innerHTML = '';
    
    if (bookList.length === 0) {
        grid.innerHTML = '<p style="text-align:center; width:100%; col-span:3;">No books found matching your search.</p>';
        return;
    }

    bookList.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/200x300?text=No+Cover'">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <a href="${book.pdf}" target="_blank" class="read-btn">Read Now</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = books.filter(book => 
        book.title.toLowerCase().includes(term) || 
        book.author.toLowerCase().includes(term)
    );
    displayBooks(filtered);
});

// Initial display
displayBooks(books);
