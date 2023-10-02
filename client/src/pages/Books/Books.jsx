import './Books.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import { useEffect, useState } from 'react';

export default function Books(){

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    const userName = localStorage.getItem('userName');
    
    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    const authorization = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }

    useEffect(() => {
        
       fetchBooks();

    }, [accessToken]);


    async function fetchBooks() {
        const response = await api.get(`api/Book/v1/asc/5/${page}`, authorization);
        setBooks([...books, ...response.data.list]);
        setPage(page + 1);
    }

    async function editBook(id) {
        try{
            navigate(`/book/new/${id}`);
        }
        catch(error){
            alert('Edit book failed! Try again!');
        }
    }

    async function deleteBook(id) {
        try{
            await api.delete(`api/Book/v1/${id}`, authorization);

            setBooks(books.filter(book => book.id !== id)); 
        }
        catch(error){
            alert('Error while recording Book! Try again!');
        }
    }

    async function logout() {
        try{
            await api.get(`/api/Auth/v1/revoke`, authorization);

            localStorage.clear();
            navigate('/');
        }
        catch(error){
            alert('Logout failed! Try again!');
        }
    }

    return(
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Erudio"/>
                <span>Welcome, <strong>{userName.toLowerCase()}</strong>!</span>
                <Link className="button" to="/book/new/0">Add New Book</Link>
                <button onClick={logout} type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Registered Books</h1>
            <ul>
                {
                    books.map( book => (
                        <li key={book.id}>
                            <strong>Title:</strong>
                            <p>{book.title}</p>
                            <strong>Author:</strong>
                            <p>{book.author}</p>
                            <strong>Price:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(book.price)}</p>
                            <strong>Release Date:</strong>
                            <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>
                            
                            <button onClick={() => editBook(book.id)} type="button">
                                <FiEdit size={20} color="#251FC5"/>
                            </button>
                            
                            <button onClick={() => deleteBook(book.id)} type="button">
                                <FiTrash2 size={20} color="#251FC5"/>
                            </button>
                        </li>
                    ))
                }
                
            </ul>
            
            <button className="button" onClick={fetchBooks} type="button">Load More</button>
        </div>
    );
}