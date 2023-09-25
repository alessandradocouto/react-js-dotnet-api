import './Books.css'
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.svg'
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'

export default function Books(){
    return(
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Erudio"/>
                <span>Welcome, <strong>Aless</strong>!</span>
                <Link className="button" to="book/new/0">Add New Book</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Registered Books</h1>
            <ul>
                <li>
                    <strong>Title:</strong>
                    <p>Carmen Electra</p>
                    <strong>Author:</strong>
                    <p>Erick Snoolaew</p>
                    <strong>Price:</strong>
                    <p>R$403.99</p>
                    <strong>Release Date:</strong>
                    <p>2023-03-09</p>
                    
                    <button type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>
                    
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>
            </ul>
            <button className="button" type="button">Load More</button>
        </div>
    );
}