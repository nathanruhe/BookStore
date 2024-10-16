import BookItem from "../BookItem/BookItem";

function BooksList () {
    // logica
  
    const books = [
        {
            id_book: 1,
            id_user: 4,
            title: 'El Perfume',
            type: 'Novela',
            author: 'Patrick Süskind',
            price: 12.99,
            photo: '../../public/img/el-perfume.jpg',
        },
        {
            id_book: 2,
            id_user: 5,
            title: 'The Great Gatsby',
            type: 'Novela',
            author: 'F. Scott Fitzgerald',
            price: 11.95,
            photo: '../../public/img/The-great-gatsby.png',
        },
        {
            id_book: 3,
            id_user: 6,
            title: 'Dejame Salir',
            type: 'Terror',
            author: 'Jordan Peele',
            price: 18.50,
            photo: '../../public/img/Dejame-salir.jpg',
        },
        {
            id_book: 4,
            id_user: 5,
            title: 'El Último Jurado',
            type: 'Acción',
            author: 'John Grisham',
            price: 16.90,
            photo: '../../public/img/el-último-jurado.jpg',
        },
        {
            id_book: 5,
            id_user: 5,
            title: 'Los puentes de Madison',
            type: 'Drama',
            author: 'Robert James Waller',
            price: 10.35,
            photo: '../../public/img/los-puentes-de-Madison.jpeg',
        },
        {
            id_book: 6,
            id_user: 7,
            title: 'El diario de Greg',
            type: 'Comedia',
            author: 'Jeff Kinney',
            price: 12.75,
            photo: '../../public/img/el-diario-de-Greg.jpeg',
        },
      ];
      
  
  
    // renderizado
    return (
      <>
        <div className="flex flex-wrap gap-8 justify-center p-10">{books.map((book) => (<BookItem key={book.id_book} book={book} />
      ))}
    </div>
      </>
    );
  }
  
  export default BooksList;