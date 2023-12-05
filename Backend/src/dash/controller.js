const pool = require('../../db');
const queries = require('./queries');
const totalAuthors= async (req, res) => {
    pool.query(queries.totalAuthors, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const totalBooks = async (req, res) => {
    pool.query(queries.totalBooks, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const totalReaders = async (req, res) => {
    pool.query(queries.totalReaders, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
const availableCount = async (req, res) => {
    pool.query(queries.availableCount, (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results.rows[0]["available"])
        res.status(200).json(results.rows[0]);
    });
};
const borrowedCount = async (req, res) => {
    pool.query(queries.borrowedCount, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};




module.exports = {
    totalBooks,
    totalAuthors,
    totalReaders,
    availableCount,
    borrowedCount 
};