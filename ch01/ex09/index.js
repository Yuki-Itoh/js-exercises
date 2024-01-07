import fs from "fs"

class DefaultMap extends Map {
    constructor(defaultValue) {
        super();                          // Invoke superclass constructor
        this.defaultValue = defaultValue; // Remember the default value
    }

    get(key) {
        if (this.has(key)) {              // If the key is already in the map
            return super.get(key);        // return its value from superclass.
        }
        else {
            return this.defaultValue;     // Otherwise return the default value
        }
    }
}

// This class computes and displays word frequency histograms
class WordHistogram {
    constructor() {
        this.wordCounts = new DefaultMap(0);  // Map from words to counts
        this.totalWords = 0;                  // How many words in all
    }

    // This function updates the histogram with the words of text.
    add(text) {
        // Remove whitespace from the text, and convert to upper case
        const matches = text.toLowerCase().matchAll(/\w+|\$[\d.]+|\S+/g);
        const words = [...matches].map((r) => r[0]);

        // Now loop through the words of the text
        for (let word of words) {
            let count = this.wordCounts.get(word); // Get old count
            this.wordCounts.set(word, count + 1);    // Increment it
            this.totalWords++;
        }
    }

    // Convert the histogram to a string that displays an ASCII graphic
    toString() {
        // Convert the Map to an array of [key,value] arrays
        let entries = [...this.wordCounts];

        // 出現頻度 0.5% 以上を取得
        entries = entries.filter((entry) => entry[1] >= 0.5);

        // Sort the array by count, then alphabetically
        entries.sort((a, b) => {              // A function to define sort order.
            if (a[1] === b[1]) {             // If the counts are the same
                return a[0] < b[0] ? -1 : 1; // sort alphabetically.
            } else {                         // If the counts differ
                return b[1] - a[1];          // sort by largest count.
            }
        });

        // Convert the counts to percentages
        for (let entry of entries) {
            entry[1] = entry[1] / this.totalWords * 100;
        }

        // Drop any entries less than 1%
        entries = entries.filter(entry => entry[1] >= 1);

        // padStart で表示幅を揃える / # の数を n ではなく 10 * n に変更
        const lines = entries.map(
            ([l, n]) =>
                `${l.padStart(10)}: ${"#".repeat(Math.round(10 * n))} ${n.toFixed(2)}%`
        );

        // And return the concatenated lines, separated by newline characters.
        return lines.join("\n");
    }
}

async function histogramFromTextFile() {
    let histogram = new WordHistogram();
    fs.readFile('./ch01/ex09/hamlet.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        histogram.add(data);
        console.log(histogram.toString());
    });
    return histogram;
}

histogramFromTextFile();