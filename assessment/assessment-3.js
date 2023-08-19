// function transformBooks(library) {
//     const summaries = [];
//     library.forEach((genreBooks) => {
//         const genre = genreBooks[0].genre;
//         summaries.push(genre);
//         const avarage =
//             genreBooks.map((book) => book.rating)(books.rating + books.rating) /
//             genreBooks.length;
//         return summaries.push(avarage);
//         // const averageRating =
//         //     genreBooks.map((book) => book.rating)(
//         //         (sum, rating) => sum + rating
//         //     ) / genreBooks.length;
//         // summaries.push(averageRating);
//     });

//     return summaries;
// }

// const library = [
//     [
//         { title: "Book 1", author: "Author A", genre: "Fantasy", rating: 4.5 },
//         { title: "Book 2", author: "Author B", genre: "Fantasy", rating: 4.8 },
//         { title: "Book 3", author: "Author C", genre: "Fantasy", rating: 4.2 }
//     ],
//     [
//         {
//             title: "Book 4",
//             author: "Author D",
//             genre: "Science Fiction",
//             rating: 3.9
//         },
//         {
//             title: "Book 5",
//             author: "Author E",
//             genre: "Science Fiction",
//             rating: 4.1
//         }
//     ]
// ];

// const summaries = transformBooks(library);
// console.log(summaries);

// function filterBooks(books, genreFilter, ratingThreshold, yearRange) {
//     return books
//         .filter(
//             (book) =>
//                 book.genre === genreFilter &&
//                 book.rating >= ratingThreshold &&
//                 book.publishedYear >= yearRange[0]
//         )
//         .map((book) => ({ title: book.title, author: book.author }));
// }
// const books = [
//     {
//         title: "Harry Potter",
//         author: "J.K. Rowling",
//         genre: "Fantasy",
//         rating: 4.5,
//         publishedYear: 1997
//     },
//     {
//         title: "A Brief History of Time",
//         author: "Stephen Hawking",
//         genre: "Science",
//         rating: 4.7,
//         publishedYear: 1988
//     },
//     {
//         title: "The Catcher in the Rye",
//         author: "J.D. Salinger",
//         genre: "Fiction",
//         rating: 3.8,
//         publishedYear: 1951
//     },
//     {
//         title: "Brave New World",
//         author: "Aldous Huxley",
//         genre: "Fiction",
//         rating: 4.1,
//         publishedYear: 1932
//     },
//     {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//         genre: "Classics",
//         rating: 4.5,
//         publishedYear: 1813
//     }
// ];
// const filteredBooks = filterBooks(books, "Fiction", 4.0, [1900, 2000]);
// console.log(filteredBooks);
// Problem 3
// Create a function named createInventorySystem that encapsulates a private collection of items and provides public methods to manage this collection.
// Private Data: In the outer function, define a private array to hold the items. Each item is a string representing an individual product.
// Public Methods: Provide public methods to interact with this private collection:
// addItem(item): Adds an item to the collection.
// removeItem(item): Removes an item from the collection.
// getItems(): Retrieves all items from the collection.
// Return Value: The function should return an object containing the public methods that allow interaction with the private data.
// Example:
// const inventorySystem = createInventorySystem();

// inventorySystem.addItem("Apple");
// inventorySystem.addItem("Banana");
// const items = inventorySystem.getItems(); // Returns: ["Apple", "Banana"]

// inventorySystem.removeItem("Apple");
// const updatedItems = inventorySystem.getItems(); // Returns: ["Banana"]
// const inventorySystem = createInventorySystem();

// inventorySystem.addItem("Apple");
// inventorySystem.addItem("Banana");
// const items = inventorySystem.getItems(); // Returns: ["Apple", "Banana"]

// inventorySystem.removeItem("Apple");
// const updatedItems = inventorySystem.getItems(); // Returns: ["Banana"]
// function createInventorySystem() {
//     const items = [];
//     const addItem = function (item) {
//         items.push(item);
//     };
//     const removeItem = function (item) {
//         const idx = items.indexOf(item);
//         if (idx !== -1) {
//             items.splice(idx, 1);
//         }
//     };
//     const getItems = function () {
//         return items;
//     };

//     return {
//         addItem: addItem,
//         removeItem: removeItem,
//         getItems: getItems
//     };
// }

// const system = createInventorySystem();

// system.addItem("Apple");
// system.addItem("Banana");
// system.addItem("Orange");
// system.addItem("Mango");
// const items = system.getItems();
// console.log(items);

// system.removeItem("Apple");
// system.removeItem("Orange");
// const updatedItems = system.getItems();
// console.log(updatedItems);

// Problem 4
// Introduction:
// Tic-Tac-Toe is a classic two-player game played on a 3x3 grid.

// Problem Statement:
// Task: Write a function named checkWinner to determine if there's a winner in a given Tic-Tac-Toe game board.

// Input: An array of 9 elements representing the Tic-Tac-Toe board, where:
// The first 3 elements represent the first row.
// The next 3 elements represent the second row.
// The last 3 elements represent the third row.
// Each element is either "X", "O", or an empty string "", representing an unmarked square.
// Output: Returns the winner ("X" or "O") if there is one, or null if there's no winner.
// Winning Conditions: Check for a winner based on three symbols in a row horizontally, vertically, or diagonally.
// Example:
// const board = ["X", "O", "X", "X", "X", "O", "", "O", "X"];
// const winner = checkWinner(board); // Returns: "X"

// Bonus
// Task: Write a function named checkWinner that determines if there's a winner in a given Tic-Tac-Toe game board of arbitrary size.

// Input: An array representing the Tic-Tac-Toe board, and the size of the grid (e.g., 3 for a 3x3 grid).
// Each element is either "X", "O", or an empty string "", representing an unmarked square.
// The array length will be a perfect square (e.g., 9 for a 3x3 grid, 16 for a 4x4 grid).
// Output: Returns the winner ("X" or "O") if there is one, or null if there's no winner.
// Winning Conditions: Check for a winner based on size symbols in a row horizontally, vertically, or diagonally.
// Example:
// const board3x3 = ["X", "O", "X", "X", "X", "O", "", "O", "X"];
// const winner3x3 = checkWinner(board3x3, 3); // Returns: "X"

// const board4x4 = ["X", "O", "X", "X", "X", "X", "O", "", "O", "X", "O", "X", "X", "O", "O", "X"];
// const winner4x4 = checkWinner(board4x4, 4); // Returns: "X"
function checkWinner(board) {
    for (let i = 0; i < 3; i++) {
        if (
            board[i] === board[i + 3] &&
            board[i] === board[i + 6] &&
            board[i] !== ""
        ) {
            return board[i];
        }
    }

    for (let i = 0; i < 3; i++) {
        if (
            board[i * 3] === board[i * 3 + 1] &&
            board[i * 3] === board[i * 3 + 2] &&
            board[i * 3] !== ""
        ) {
            return board[i * 3];
        }
    }
}

const board = ["X", "O", "X", "X", "X", "O", "", "O", "X"];
const winner = checkWinner(board);
console.log(winner);

// Bonus
// Task: Write a function named checkWinner that determines if there's a winner in a given Tic-Tac-Toe game board of arbitrary size.

// Input: An array representing the Tic-Tac-Toe board, and the size of the grid (e.g., 3 for a 3x3 grid).
// Each element is either "X", "O", or an empty string "", representing an unmarked square.
// The array length will be a perfect square (e.g., 9 for a 3x3 grid, 16 for a 4x4 grid).
// Output: Returns the winner ("X" or "O") if there is one, or null if there's no winner.
// Winning Conditions: Check for a winner based on size symbols in a row horizontally, vertically, or diagonally.
// Example:
// const board3x3 = ["X", "O", "X", "X", "X", "O", "", "O", "X"];
// const winner3x3 = checkWinner(board3x3, 3); // Returns: "X"

// const board4x4 = ["X", "O", "X", "X", "X", "X", "O", "", "O", "X", "O", "X", "X", "O", "O", "X"];
// const winner4x4 = checkWinner(board4x4, 4); // Returns: "X"
// const board4x4 = ["X", "O", "X", "X", "X", "X", "O", "", "O", "X", "O", "X", "X", "O", "O", "X"];
// const winner4x4 = checkWinner(board4x4, 4); // Returns: "X"
function checkWinner(board, size) {
    for (let i = 0; i < size; i++) {
        let start;
    }
}
