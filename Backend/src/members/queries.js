const getReader = 'SELECT * FROM members';
// const searchReader = 'SELECT * FROM members where member_id = $1'
const addReader = 'INSERT INTO members(name,email,address,phone_number) values($1 , $2 , $3 , $4)';
// const deleteReader = 'DELETE from members where member_id = $1 ';

module.exports = {
    getReader,
    // searchReader,
    addReader,    
    // deleteReader
};