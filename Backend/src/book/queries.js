//$1 is to be updated with each value in search bar
const getBooks = "SELECT b.book_id,b.title,a.author_name AS author,b.available as available,b.total - b.available AS borrowed,CASE WHEN ( b.available) > 0 THEN 'Yes' ELSE 'No' END AS availability FROM book b JOIN authors a ON b.author_id = a.author_id GROUP BY b.book_id, b.title, a.author_name, b.total order by b.book_id";
//either nested loop for each copy or upadte query to available + $2
const addCopies = 'UPDATE book set total=total+$2,available=available+$2 where book_id =$1';
const addBooks = 'INSERT INTO book(title,author_id,available,total) values($1 , (SELECT author_id from authors where author_name = $2) , $3 , $3)';
//pass each value from loop
const deleteBook = 'DELETE from book where book_id = $1 ';
const deleteCopies = 'UPDATE book set available=available-1 where book_id=$1';
const borrowBooks = 'UPDATE book set borrowed=borrowed+1 where book_id=$1';
const returnBooks='UPDATE book set borrowed=borrowed-1 where book_id=$1';

module.exports = {
    getBooks,
    addCopies,
    addBooks,
    deleteBook,
    deleteCopies,
    borrowBooks,
    returnBooks
};