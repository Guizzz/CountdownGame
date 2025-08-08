"use server"
import { promises as fs } from 'fs';

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

  const file = await fs.readFile(process.cwd() + '/assets/words_dict.json', 'utf8');

  const wordsDict = JSON.parse(file);;

  var outputDict:Array<{len:number, words:Array<String>}> = [];
  
  for (var i = letter_list.length; i>=3; i--)
  {
    const w_res_list : String[] = [];

    for ( const w of wordsDict[i])
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
        w_res_list.push(word)
    }

    var obj = {"key":i, "len":i, "words": w_res_list}
    if (obj.words.length>0)
      outputDict.push(obj)
  }

  return outputDict;
  
}