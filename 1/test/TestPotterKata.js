describe("PotterKata", function() {

    describe("getPrice", function() {

        var calculator,

            BOOK_PRICE = 8;

        beforeEach(function() {
            calculator = new PotterCalculator();
        });

        var discountFor = PotterCalculator.discountFor;

        [
            ['should return 0 on buying 0 book', [], 0],
            ['should return 8 on buying 1 book', [0], BOOK_PRICE],
            ['should return 16 on buying 2 books of the same title', [0, 0], 16],
            ['should return 16 on buying 2 different books', [0, 1], (2 * BOOK_PRICE) * discountFor(2)],
            ['should return 16 on buying 3 different books', [0, 1, 2], (3 * BOOK_PRICE) * discountFor(3)],
            ['should return 16 on buying 2 different books and a third one', [0, 1, 1], (2 * BOOK_PRICE) * discountFor(2) + BOOK_PRICE],
            ['should return 16 on buying 2 different books and a third one but permuted', [1, 0, 1], (2 * BOOK_PRICE) * discountFor(2) + BOOK_PRICE],
            ['should return 16 on buying 2 different books and 2 another different', [0, 0, 1, 1], (2 * 2 * BOOK_PRICE) * discountFor(2)],

            ['complex1', [0, 0, 0, 0, 0,
                          1, 1, 1, 1, 1,
                          2, 2, 2, 2,
                          3, 3, 3, 3, 3,
                          4, 4, 4, 4, 4], 141.2]

        ].forEach(function(args){
            var title = args[0];
            var books = args[1];
            var price = args[2];

            it(title, function() {
                expect(calculator.getPrice(books)).toBe(price);
            });
        });
    });
});