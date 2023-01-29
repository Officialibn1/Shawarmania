
import BookList from './BookList';
import Book from './Book';
import NewBook from './NewBook';
import { Routes, Route } from 'react-router-dom';
import BookLayout from './BookLayout';

const BookRoute = () => {
    return (
        <>
        <BookLayout />
        <Routes>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
        </Routes>
        </>
    );
}

export default BookRoute;
