import styles from "./Main.module.css";
import { useState } from "react";

/**
 * Función principal que engloba todo el componente
 * @function Main
 * @returns {JSX.Element} Elemento JSX
 */

export default function Main() {
  /**
   * Lista de libros
   * @type {Array}
   */
  const [bookList, setBookList] = useState([]);
  /**
   * Libro
   * @type {Object}
   */
  let [book, setBook] = useState({});
  /**
   * Cantidad de libros
   * @type {number}
   */
  const [amountBooks, setAmountBooks] = useState(0);
  /**
   * Libros leídos
   * @type {number}
   */
  const [readBooks, setReadBooks] = useState(0);

  let title = "",
    author = "",
    genre = "";

  function handleSubmit(event) {
    event.preventDefault();

    const noFormatDate = Date.now();
    const currentDate = new Date(noFormatDate).toDateString();
    book = { title, author, genre, currentDate };
    setBook(book);
    setBookList([...bookList, book]);
    setAmountBooks(amountBooks + 1);
  }

  function handleDelete(event) {
    if (event.target.id !== "") {
      setBookList(bookList.filter((item) => item.title !== event.target.id));
      setReadBooks(readBooks + 1);
    }
  }

  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <h2>IMG</h2>
          <h1>The Reading List</h1>
        </header>

        <section className={styles.section}>
          <form action="" className={styles.form}>
            <h3>Book</h3>
            <fieldset className={styles.title}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                onChange={(e) => (title = e.target.value)}
              />
            </fieldset>

            <fieldset className={styles.authorGenre}>
              <div className={styles.authorGenre__author}>
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  onChange={(e) => (author = e.target.value)}
                />
              </div>

              <div className={styles.authorGenre__genre}>
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  id="genre"
                  onChange={(e) => (genre = e.target.value)}
                />
              </div>
            </fieldset>

            <input
              type="submit"
              value="Add book"
              id={styles.submit}
              onClick={handleSubmit}
            />
          </form>

          <hr />

          <article className={styles.article}>
            <h2>Reading List</h2>
            {bookList.length > 0 &&
              bookList.map((item, index) => (
                <div
                  id={item.title}
                  key={index}
                  className={styles.book}
                  onClick={handleDelete}
                >
                  <div className={styles.titleAuthor}>
                    <h3>{item.title}</h3>
                    <h4>{item.author}</h4>
                  </div>
                  <div className={styles.readDate}>
                    <p>{item.currentDate}</p>
                  </div>
                </div>
              ))}
          </article>

          <b>
            Read books: <i id="readBooks">{readBooks.toString()}</i> of{" "}
            <i id="allBooks">{amountBooks.toString()}</i>
          </b>
        </section>
      </main>
    </>
  );
}
