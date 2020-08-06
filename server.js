
// standard server packages
const fs = require('fs');
const path = require('path');

// webserver packages
const express = require('express');

// nlp packages
const sw = require('stopword');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const extract = require('extract-lemmatized-nonstop-words');
const stem = require('snowball-german');


// import own nlp helper functions
const nlpHelpers = require('./own_modules/helpers.js');


const bodyParser = require('body-parser');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// parse application/json
app.use(bodyParser.json());

// connecting to database - using pooling
const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "test",
    port:5432,
    database: "textiles"
});

let helperArrayOfStemmedTokens = [];

// preparation
fs.readFile('data/texts/Traumdeutung.txt', (err, data) => {
    if (err) throw err;

    // first, tokenizing
    console.log('tokenizing');
    const tokenizer = new natural.OrthographyTokenizer({language: "fi"});
    let tokens = tokenizer.tokenize(data.toString());
    console.log(tokens);

    // then, stemming
    console.log('stemming');
    tokens.forEach(token => {
        helperArrayOfStemmedTokens.push(stem(token))
    });
    console.log(helperArrayOfStemmedTokens);
});

// route that computes concordances
app.post('/api/getData', (req, res) => {

    let keyword = req.body.keyword;
    let selectedTextIDs = req.body.textIDs;

    let author = 'authorPlaceholder'
    let title = 'titlePlaceholder'
    // get info if stop words are included?

    // TODO
    // go to text that is already tokenized, stemmed/lemmatized and cleared of stop words
    // loop through text
    // compute hits
    // generate concordances

    console.log('keyword', keyword);
    console.log('start computing...');
    let hits = nlpHelpers.computeHits(helperArrayOfStemmedTokens, keyword);
    let computed = nlpHelpers.makeConcordancesAndTopwords(author, title, helperArrayOfStemmedTokens, hits, 7);
    let concordances = computed[0]
    let topWords = computed[1]
    //console.log(concordances);
    console.log('finished');
    console.log('hits:', hits.length)
    console.log('topWords:', topWords)
    // send computed concordances to the client
    res.json({'hits': hits.length, 'concordances': concordances, 'topWords': topWords});
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`server listening on port ${port}`);

