const pool = require('../../db');
const queries = require('./queries');
const getReader= async (req, res) => {
    pool.query(queries.getReader, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
// const searchReader = async (req, res) => {
//     pool.query(queries.searchReader, (error, results) => {
//         if (error) {
//             throw error;
//         }
//         res.status(200).json(results.rows);
//     });
// }
const addReader = async (req, res) => {
    const val = req.body;
    const val1 = val["newReader"];
    const name = val1["name"];
    const email = val1["email"];
    const phone = val1["phoneNumber"];
    const address = val1["address"];
    const password = "1234"
    console.log(val1)
    pool.query(queries.addReader,[name,email,address, phone],password, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
// const deleteReader = async (req, res) => {
//     pool.query(queries.deleteReader, (error, results) => {
//         if (error) {
//             throw error;
//         }
//         res.status(200).json(results.rows);
//     });
// };



module.exports = {
    getReader,
    // searchReader,
    addReader,
    // deleteReader
};