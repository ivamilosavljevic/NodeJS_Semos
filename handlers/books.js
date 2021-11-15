const books = [
    {
        name:'MurderMystery',
        author:'Grigor Prlicev'
    },
    {
        name:'The shining',
        author:'Stephen King'
    },
    {
        name:'Harry Potter',
        author:'IvanCo Prlicev'
    },
]

const getAllBooks = (req, resp, next) =>{
return resp.status(200).json(books);
}

module.exports = {
    getAllBooks
}