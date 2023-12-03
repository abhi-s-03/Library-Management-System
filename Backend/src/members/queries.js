//$1 is to be updated with each value in search bar
const getBooks = 'SELECT * FROM book where title like $1%';
//either nested loop for each copy or upadte query to available + $2
const addCopies = 'UPDATE book set available=available+1 where  isbn =$1';
const addBooks = 'INSERT INTO book values($1 , $2 , $3 , $4 , $5)';
//pass each value from loop
const deleteBook = 'DELETE from book where isbn = $1 ';
const deleteCopies = 'UPDATE book set available=available-1 where isbn=$1';
const borrowBooks = 'UPDATE book set borrowed=borrowed+1 where isbn=$1';
const returnBooks='UPDATE book set borrowed=borrowed-1 where isbn=$1';

module.exports = {
    getBooks,
    addCopies,
    addBooks,
    deleteBook,
    deleteCopies,
    borrowBooks,
    returnBooks
};