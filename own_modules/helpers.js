
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
exports.makeConcordances = (tokenizedText, hits, range) => {

    console.log(hits);

    let concordances = [];

    //take the x before and the x after
    hits.forEach(function(position){

        console.log(position);

        // concordance array
        let tmpConcordanceArray = [];

        // loop
        for (let i = position - range; i <= position + range; i++){
            if (tokenizedText[i]){
                tmpConcordanceArray.push(tokenizedText[i]);
            }
            else {
                console.log('minor bug')
            }
        }

        // insert result
        concordances.push(tmpConcordanceArray);
    });

    // return
    return concordances;
};