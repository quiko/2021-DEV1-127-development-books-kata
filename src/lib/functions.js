// input : Array [{id, name, price}, {..}, ...]
// output: Array [bookId, bookId, ..]
function getDistinctBooks(books) {
    return [...new Set(books.map((book) => book.id))];
}

// input : Array [{id, name, price}, {..}, ...]
// output: Array [number of copies for serie 1, ....serie 2,....serie 3, ..., ...serie 5 ]
function getNumberOfCopies(books) {
    let numberOfCopiesPerSerie = [0, 0, 0, 0, 0];
    let distinctBooks = getDistinctBooks(books);
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < distinctBooks.length; j++) {
            if (books[i].id === distinctBooks[j]) {
                numberOfCopiesPerSerie[distinctBooks[j] - 1] += 1;
            }
        }
    }
    numberOfCopiesPerSerie = numberOfCopiesPerSerie.filter((book) => book !== 0);
    return numberOfCopiesPerSerie;
}

// Input : Array [1,1,1,2,2]
// Output: Object  {"discount": [5, 4, 3], "undiscounted": 2}
function getPacks(books) {
    let packs = {
        discounted: [],
        undiscounted: 0,
    };

    while (books.length !== 0) {
        packs.discounted.push(books.length);
        books = books
            .map((sameSeries) => (sameSeries -= 1))
            .filter((sameSeries) => sameSeries !== 0);
        if (books.length == 1) {
            packs.undiscounted = books[0];
            break;
        }
    }

    let discountedBooks = packs.discounted.reduce((sum, book) => sum + book, 0);

    if (discountedBooks > 4 && discountedBooks % 2 == 0) {
        packs.discounted = Array.from(
            {
                length: discountedBooks / 4,
            },
            (book) => (book = 4)
        );
    }

    return packs;
}

// input : Object  {"discount": [5, 4, 3], "undiscounted": 2} e.g.
// output : int
function calculateDiscountedTotalPrice(packs) {
    let discount = {
        1: 0,
        2: 0.05,
        3: 0.1,
        4: 0.2,
        5: 0.25,
    };
    let discountAmount = packs.discounted.reduce(
        (sum, books) => sum + 50 * books * discount[books],
        0
    );

    let discountedPrice =
        packs.discounted.reduce((prev, curr) => prev + curr) * 50 - discountAmount;
    let undiscountedPrice = packs.undiscounted * 50;
    let totalPrice = discountedPrice + undiscountedPrice;
    return totalPrice;
}

// Input:  Array [{id, name, price}, {..}, ...]
// Output: int
export default function checkout(books) {
    if (!books.length) return 0;
    if (books.length === 1) return books[0].price;
    let numberOfCopiesPerSerie = getNumberOfCopies(books);

    let packs = getPacks(numberOfCopiesPerSerie.slice(0));

    let price = calculateDiscountedTotalPrice(packs);
    return price;
}
