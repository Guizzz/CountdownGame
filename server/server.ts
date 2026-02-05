"use server"
import { promises as fs } from 'fs';

interface WordDetails {
  MEANINGS: { [key: string]: [string, string, string[], string[]] };
  ANTONYMS: string[];
  SYNONYMS: string[];
}

interface WordReport {
  [key: string]: number
}

interface WordsDict {
  [key: number]: { [word: string]: WordDetails };
}

export async function getLetters(lettersNumber: number) {
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
    const vowels = 'AEIOU';

    var letter_list = []

    for (var i = 0; i < lettersNumber; i++)
    {
      if (i%3==0)
        letter_list.push(vowels.charAt(Math.floor(Math.random() * vowels.length)));
      else
        letter_list.push(consonants.charAt(Math.floor(Math.random() * consonants.length)));
    }

    return letter_list;
}

export async function checkWords(letter_list: Array<String>){

  const file = await fs.readFile(process.cwd() + '/assets/words_dict_2.json', 'utf8');

  const wordsDict: WordsDict = JSON.parse(file);

  const outputDict: Array<{ len: number; words: Array<{ [word: string]: any }> }> = [];
  
  for (var i = letter_list.length; i>=3; i--)
  {
    const w_res_list: Array<{ [word: string]: any }> = [];
    // console.log("checking obj: " + JSON.stringify(Object.keys(wordsDict[i])));
    for ( const w of Object.keys(wordsDict[i]))
    {
      const word:String= w;
      var words_letter = structuredClone(letter_list);
      for(const l of word.toUpperCase())
      {
        const index = words_letter.indexOf(l);
        if (index == -1) {
          break;
        }
        words_letter.splice(index, 1);
      }
      if ( letter_list.length == words_letter.length + word.length && w_res_list.length < 10)
      {
        const wordDetails = wordsDict[i][word.toString()];
        console.log("found word:", word, wordDetails); // Aggiungi anche il nome della parola al log

        // Se vuoi un formato più semplice e leggibile, evita Map e usa oggetti
        w_res_list.push({ [word.toString()]: wordDetails });
      }
    }

    var obj = {"key":i, "len":i, "words": w_res_list}
    if (obj.words.length>0)
      outputDict.push(obj)
  }

  console.log(outputDict);
  return outputDict;
  
}

export async function reportWord(word: String) {
  var filePath = '/assets/reported_words.json';
  const file_report = await fs.readFile(process.cwd() + filePath, 'utf8');

  const wordsDict: WordReport = JSON.parse(file_report);
  if (wordsDict[word.toString()]) {
    wordsDict[word.toString()]++;
  } else {
    wordsDict[word.toString()] = 1;
  }

  // Riscrivi il file
  await fs.writeFile(
    process.cwd() + filePath,
    JSON.stringify(wordsDict, null, 2),
    'utf8'
  );
}