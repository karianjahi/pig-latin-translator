const translatePigLatin = (aString) => {
    const consonantRegex = /^[^aeiou]+/i // start of string match one or more character that is not a vowel
    if (consonantRegex.test(aString)) {
        const consonants = aString.match(consonantRegex);
        return `${aString.replace(consonantRegex, "")}${consonants}ay`;
    }

    const vowelRegex = /^[aeiou]/; // any vowel at the beginning of string
    if (vowelRegex.test(aString)) {
        return `${aString}way`;
    }



    
    
};

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("schwartz"));