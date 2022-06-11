import React, { useRef } from "react";
import { useState } from "react";

export default function Books() {
    const searchTerm = useRef();
    const [books, setBooks] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            const response = await fetch(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    searchTerm.current.value +
                    "&printType=books&maxResults=20"
            );
            const resData = await response.json();
            if (resData.items) {
                console.log("Search", searchTerm);
                // console.log("useEffect on search", resData.items);
                setBooks(resData.items);
            } else {
                setBooks("Not found");
            }
        };
        fetchData();
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Search using Ref"
                    ref={searchTerm}
                />

                <button type="button" onClick={handleSearch}>
                    Search
                </button>

                {books.map((book) => {
                    return (
                        <>
                            <p> {book.volumeInfo.title}</p>
                            <p> {book.volumeInfo.authors} </p>
                            <p> {book.volumeInfo.description} </p>
                            <p>
                                {book.volumeInfo.imageLinks && (
                                    <img
                                        alt="book"
                                        src={
                                            book.volumeInfo.imageLinks.thumbnail
                                        }
                                    />
                                )}
                            </p>
                        </>
                    );
                })}
            </form>
        </>
    );
}
