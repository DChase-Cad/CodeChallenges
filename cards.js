//encodes or decodes a deck of cards from given input
//5kyu codewars link: https://www.codewars.com/kata/52ebe4608567ade7d700044a
function encode(input) {
    let suits = []
    let cards = []
    input.forEach((card, i) => {
        suits.push(input[i].slice(input[i].length - 1))
        if (isNaN(input[i].charAt(0))) {
            switch (input[i].charAt(0)) {
                case 'J': cards.push(10); break;
                case 'Q': cards.push(11); break;
                case 'K': cards.push(12); break;
                case 'T': cards.push(9); break
                case 'A': cards.push(0)
            }
        }
        else {
            cards.push(+input[i].charAt(0) - 1)
        }

    })
    suits.forEach((card, i) => {
        switch (card) {
            case 'd': cards[i] += 13; break;
            case 'h': cards[i] += 26; break;
            case 's': cards[i] += 39; break;
            default: break;
        }
    })
    cards.sort(function (a, b) {
        return a - b;
    });

    return cards
}


function decode(input) {
    cards = []
    input = input.sort(function (a, b) {
        return a - b;
    });
    input.forEach(card => {
        if (card > 12) {
            cards.push([card - (Math.floor(card / 13) * 13), Math.floor(card / 13)])
        }
        else {
            cards.push([card, 0])
        }
    })
    cards.forEach((card, i) => {
        if (card[0] > 8 || card[0] == 0) {

            switch (card[0]) {
                case 0: card[0] = 'A'; break;
                case 9: card[0] = 'T'; break;
                case 10: card[0] = 'J'; break;
                case 11: card[0] = 'Q'; break;
                default: card[0] = 'K';
            }
        }
        else {
            card[0] += 1
        }
        switch (card[1]) {
            case 0: card[1] = 'c'; break;
            case 1: card[1] = 'd'; break;
            case 2: card[1] = 'h'; break;
            default: card[1] = 's';
        }
        cards[i] = card[0] + card[1]
    })


    return cards;
}

// encode(["5h", "7c", "Qh", "Qs", "Ad"])
decode([50, 6, 13, 30, 37])