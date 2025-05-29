import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';

    let cart: Cart;
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const movie = new Movie(
        263531,
        "Мстители",
        "The Avengers",
        "IMAX",
        2012,
        "США",
        "«Avengers Assemble!»",
        "фантастика, боевик, фэнтези, приключения",
        "137 мин. / 02:17",
        2000)

    beforeEach(() => {
        cart = new Cart();
        cart.add(book);
        cart.add(movie);
    });

    test('calculate total price', () => {
        expect(cart.getTotalPrice()).toBe(4000);
    });

    test('calculate discounted price', () => {
        expect(cart.getDiscountedPrice(10)).toBe(3600);
    });

    test('remove item', () => {
        cart.removeById(1001);
        expect(cart.items).toHaveLength(1);
        expect(cart.items[0].id).toBe(263531); 
    });