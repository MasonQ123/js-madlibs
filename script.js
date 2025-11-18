/* main controls the program. 
 * create a global array: "story" (to store the words of the story as an array of strings),
 * then create an empty global for storyWithSpaces, which will hold the final madlibbed story as a single string with spaces, reconstructed from the modified story array. Run the program. 
 * @param none
 * @return none
 */

var story = [];
var storyWithSpaces = "";
var storyString = "";
var numberedStory = "";

function main() {
    getStory();
    encodeStory(storyString);
    numberedStory = subSpeech(story);
    let replacements = showSpeechList(numberedStory);
    alert("Now, let's rebuild your story with the new words!");
    // rebuildStory(replacements);
    // storyWithSpaces = story.join(" ");
    // showStory(string);
    // alert("Thank you for playing Mad Libs! The process is now complete.");
}

 /* getStory()
  * user input is stored as a new variable, that variable is returned.
  * @param none
  * @return storyString
  */

 function getStory() {
    storyString = prompt("Please enter a story:");
    return storyString;
 }

 /* encodeStory(storyString)
 * create a copy of storyString as a new variable, story array is equal to storyString being split by spaces
 * story = spaceMarks(story)
 * return string
 * @param storyString
 * @return story, string
 */
function encodeStory(storyString) {
    let string = storyString;
    story = spaceMarks(story)
    return story;

} 

/* spaceMarks(story)
 * Splits words in the story array that contain punctuation marks, ensuring punctuation is separated from words.
 * Iterates through each word, checks for punctuation, and splits accordingly.
 * @param story
 * @return story
 */

function spaceMarks(story) {
    const marks = ['.','?','!',':',';',',','...'];
    let text = "";
    let mark = "";
       for (let i = 0; i < story.length; i++) {
        text = story[i];
        mark = text.charAt(text.length - 1);
        if (marks.includes(mark)) {
            story[i] = story[i].slice(0, -1);
        }
}
alert (story)
    // story = ["once", "upon", "a", "time", ",", "there", "was", "a", "brave", "knight", "."];
    return story;
}

 /* numberedStory = subSpeech(story)
 * declare numberedStory as an empty string
 * for index being set to 0 and being less than story.length count up
 * for each word, append story[i] followed by "[" + i + "]" and a space to numberedStory
 * after the loop, trim any trailing space and return numberedStory, which is a string where each word is followed by its index in square brackets and separated by spaces
 * @param story
 * @return numberedStory
 */


function subSpeech(story) {
numberedStory = "";
for (let i = 0; i < story.length; i++) {
    numberedStory += story[i] + "[" + i + "] ";
}
return numberedStory;
}


/* showSpeechList(numberedStory)
* Expects numberedStory as a string where each word from the story is followed by its index in square brackets
* set replacements as an empty array, word change as an empty variable
* prompt numberedStory and ask how many words the user wants to change
* store their input as changeCount
* declare originalWord and speechPart
* for index being set to 0 going to changeCount, counting up:
* prompt what word to change, save input as wordChange
* originalWord = story[wordChange]
* prompt what part of speech the originalWord was, this is what speechPart will be defined as
* replacements.push(wordChange), story[wordChange] = speechPart
* when for loop ends alert the number of words that are to be replaced in the next step.
* @param numberedStory
* @return replacements
*/

/* let the "Word Wizard" know that its the player's turn. */
function showSpeechList(numberedStory) {
    // let replacements = [];
    // let wordChange = "";
    let changeCount = prompt(numberedStory + "\nHow many words would you like to change?");
    // let originalWord = "";
    // let speechPart = "";
    // for (let i = 0; i < changeCount; i++) {
    //     wordChange = prompt("What word would you like to change?" + numberedStory);
    //     originalWord = story[wordChange];
    //     speechPart = prompt("What part of speech is the word '" + originalWord + "'?");
    //     replacements.push(wordChange);
    //     story[wordChange] = speechPart;
    // }
    alert(changeCount + " words will be replaced in the next step.");
    // return replacements;

}

/* rebuildStory(replacements)
* alert user for words that correspond with the parts of speech, declare newWord
* prompt the user for a new word to replace story[replacements[i]], assign the input to story[replacements[i]]
* terminate and return replacements when for loop finishes counting.
* @param replacements
* @return replacements
*/
function rebuildStory(replacements) {
    let newWord = prompt("Give me some words that correspond with the parts of speech.");
    for (let i = 0; i < replacements.length; i++) {
        story[replacements[i]] = newWord;
    }
    return replacements;
}
/* storyWithSpaces: join the madlibbed story array into a single string with spaces */


/* showStory(string)
* Displays the original and modified story to the user
* @param string
* @return none
*/
function showStory(string) {
    alert("This was your original story:\n\n" + string + "\n\nAnd here is your madlibbed story:\n\n" + storyWithSpaces);
}
/* thank user and process finished. */

