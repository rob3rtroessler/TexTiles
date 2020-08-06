
// helper function
exports.computeHits = (tokenizedText, keyword) => {

    let arrayWithHits = [];
    tokenizedText.forEach( (word, index) => {
        if (word === keyword){
            console.log('match');
            arrayWithHits.push(index)
        }
    });
    return arrayWithHits;
};

// helper function that creates concordances based on three inputs (the tokenized text itself, the precomputed hits and the range)
exports.makeConcordancesAndTopwords = (author, title, tokenizedText, hits, range) => {

    console.log(hits);

    let concordances = [];
    let topWords = {};

    //take the x before and the x after
    hits.forEach(function(position){

        console.log(position);

        // concordance array
        let tmpConcordanceWordsArray = [];

        // loop
        for (let i = position - range; i <= position + range; i++){
            if (tokenizedText[i]){
                tmpConcordanceWordsArray.push(tokenizedText[i]);

                // compute top words
                if (!topWords[tokenizedText[i]]){
                    topWords[tokenizedText[i]] = 1;
                }
                else {
                    topWords[tokenizedText[i]] += 1;
                }
            }
            else {
                console.log('minor bug')
            }
        }



        // insert result
        concordances.push( {author: author, title: title, words: tmpConcordanceWordsArray});
    });

    // before returning, sort
    let topWordsSorted = prepareTopWords(topWords)

    // return
    return [concordances, topWordsSorted];
};

// sort and slice topWords
function prepareTopWords(topWords){

    // create array and sort
    let items = Object.keys(topWords).map(function(key) {
        return [key, topWords[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    // Create a new array with only the first 50 items
    let tmpTwo = items.slice(0, 50);
    let finalTopWords = [];
    tmpTwo.forEach(element => {
        let key = element[0];
        let value = element[1];
        finalTopWords.push({word: key, value:value})
    });

    return finalTopWords

}
