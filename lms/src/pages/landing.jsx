import React from 'react';
import "./styles/landing.css"

export const Landing = () => {
    return (
        <div>
            <table>
        <thead>
            <tr>
                <th>Book ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Available</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>The Great Gatsby</td>
                <td>F. Scott Fitzgerald</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>2</td>
                <td>To Kill a Mockingbird</td>
                <td>Harper Lee</td>
                <td>No</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1984</td>
                <td>George Orwell</td>
                <td>Yes</td>
            </tr>
        </tbody>
    </table>
        </div>
    );
};