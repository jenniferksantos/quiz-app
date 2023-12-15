import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <>
        <Header />
        <main>
        <section className="home-section">
            <h2><b>So you think you know ReactJS?</b> Take the 10 quizzes below to test your knowledge.</h2>
            <div className="two-cols">
            <div>
            <p><b>1</b> - &nbsp;Functional Components and Props: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>2</b> - &nbsp;JavaScript Basics and Data Types: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>3</b> - &nbsp;JavaScript Basics and Fundamental Concepts: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>4</b> - &nbsp;JavaScript Basics and Data Manipulation: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>5</b> - &nbsp;JavaScript Basics and DOM Manipulation: <Link to="/quiz-questions/1">Start</Link> </p>
            </div>
            <div>
            <p><b>6</b> - &nbsp;JavaScript Basics and Common Methods: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>7</b> - &nbsp;JavaScript Basics and Duplicate Questions Handling: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>8</b> - &nbsp;JavaScript Basics and Practices: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>9</b> - &nbsp;JavaScript Basics and Comprehensive Review: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>10</b> - &nbsp;JavaScript Essentials Mastery: <Link to="/quiz-questions/2">Start</Link> </p>
            </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default App;