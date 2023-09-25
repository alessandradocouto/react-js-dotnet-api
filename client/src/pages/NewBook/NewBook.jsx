import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './NewBook.css';
import logoImage from '../../assets/logo.svg';


export default function NewBook(){
    const [id, setId] = useState(null);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');

    return(
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Ellus"/>
                    <h1>Book</h1>
                    <p>Enter the book information and click on !</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5"/>
                        Back to Books
                    </Link>
                </section>

                <form>
                    <input 
                        placeholder="Title"
                    />
                    <input 
                        placeholder="Author"
                    />
                    <input 
                        type="date"
                    />
                    <input 
                        placeholder="Price"
                    />

                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}