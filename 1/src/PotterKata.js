(function(exports) {

    var BOOK_PRICE = 8;

    var PotterCalculator = function() {};


    PotterCalculator.prototype.getPrice = function(books) {
        books = books.sort();
        return this._computePrice(books);
    };

    PotterCalculator.prototype._computePrice = function(books) {
        if (books.length == 0) {
            return 0;
        }

        return this._numberOfDifferent(books) * BOOK_PRICE * PotterCalculator.discountFor(this._numberOfDifferent(books)) +
            this._computePrice(this._removeOneFromEveryTitle(books));
    };

    PotterCalculator.prototype._numberOfDifferent = function(books) {
        return books.length - this._removeOneFromEveryTitle(books).length;
    };

    PotterCalculator.prototype._removeOneFromEveryTitle = function(books) {
        var remainingBooks = [];

        for (var i = 1; i < books.length; i++) {
            if(books[i - 1] == books[i]){
                remainingBooks.push(books[i]);
            }
        }

        return remainingBooks;
    };

    PotterCalculator.discountFor = function(numberOfBooks) {
        return [0, 1, 0.95, 0.90, 0.80, 0.75][numberOfBooks];
    };

    exports.PotterCalculator = PotterCalculator;
}(window));