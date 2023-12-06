const pool = require('../../db');
const queries = require('./queries');
const getBooks = async (req, res) => {
    pool.query(queries.getBooks, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const addCopies = async (req, res) => {
<<<<<<< HEAD
    const val1 = req.body;
    
    const book_id = val1["book_id"];
    const copy = val1["copy"];
    console.log(val1)
    console.log(book_id," ",copy)
    pool.query(queries.addCopies, [book_id,copy], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
=======
    pool.query(queries.addCopies, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
    });
};

const addBooks = async (req, res) => {
    const val = req.body;
    val1=val["newBook"];
    console.log(val1);
<<<<<<< HEAD
    const title = val1["title"];
    const author = val1["author"];
    const total = val1["total"];
    pool.query(queries.addAuthors, [author] ,(error, results) => {

        if (error) {
            

=======
    const isbn = val1["isbn"];
    const title = val1["title"];
    const author = val1["author"];
    const available = val1["available"];
    const total = val1["total"];
    pool.query(queries.addBooks, [isbn,title,author,available,total] ,(error, results) => {

        if (error) {
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
            console.log(error);
        }
        else{
            const {newBook} = req.body;
            console.log(newBook);
            

        }
<<<<<<< HEAD
        pool.query(queries.addBooks, [title,author,total], (error, results) => {
            if (error) {
                throw error;
            }
        });
=======
        res.status(200).json(results.rows);
    });
};
const deleteBook = async (req, res) => {
    pool.query(queries.deleteBook, (error, results) => {
        if (error) {
            throw error;
        }
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
        res.status(200).json(results.rows);
    });
};
const deleteCopies = async (req, res) => {
<<<<<<< HEAD
    const val1 = req.body;
    
    const book_id = val1["book_id"];
    const dele = val1["Delete"];
    const type = val1["type"];
    console.log("A copy",val1)
    console.log(book_id," ",dele)
    if(type=="available"){
    pool.query(queries.deleteCopies_avail, [book_id,dele], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
    }
    else{
        pool.query(queries.deleteCopies_borrow, [book_id,dele], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    }


};
const deleteBook = async (req, res) => {
    const val = req.body;
    console.log("Bosy",val);
    
    const book_id = val["book_id"];
    pool.query(queries.deleteBook,[book_id], (error, results) => {
=======
    pool.query(queries.deleteCopies, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const borrowBooks = async (req, res) => {
    pool.query(queries.borrowBooks, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const returnBooks = async (req, res) => {
    pool.query(queries.returnBooks, (error, results) => {
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
<<<<<<< HEAD

=======
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9



module.exports = {
    getBooks,
    addCopies,
    addBooks,
    deleteBook,
    deleteCopies,
<<<<<<< HEAD
=======
    borrowBooks,
    returnBooks
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
};