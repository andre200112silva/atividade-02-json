// netflix.js // 0.5 pts
console.log('netflix.js');

let Netflix = { // deve sublinhar como erro, altere para const para consertar
    series: [
        {
            // it's up to you now
        }
    ]
};

// title of the first TV serie
console.log(Netflix['series'][0]['title']); // any title
// there is a first season with at least one episode, must print true
console.log(Netflix['series'][0]['seasons'][0]['episodes'].length > 0);
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'episodes'][0][
    'title'] !== undefined); // must be true

// Add more test cases which should cover
// the assessment specification:
