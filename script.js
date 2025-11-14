/* main controls the program. 
 * create a global array: "story" (to store the words of the story as an array of strings),
 * then create an empty global for storyWithSpaces, which will hold the final madlibbed story as a single string with spaces, reconstructed from the modified story array. Run the program. 
 * @param none
 * @return none
 */

 /* getStory()
  * user input is stored as a new variable, that variable is returned.
  * @param none
  * @return storyString
  */

 /* encodeStory(storyString)
 * create a copy of storyString as a new variable, story array is equal to storyString being split by spaces
 * story = spaceMarks(story)
 * return string
 * @param storyString
 * @return story, string
 */

 /* spaceMarks(story)
 * Splits words in the story array that contain punctuation marks, ensuring punctuation is separated from words.
 * Iterates through each word, checks for punctuation, and splits accordingly.
 * @param story
 * @return story
 */

 /* numberedList = subSpeech(story)
 * declare numberedStory as an empty string
 * for index being set to 0 and being less than story.length count up
 * for each word, append story[i] followed by "[" + i + "]" and a space to numberedStory
 * after the loop, trim any trailing space and return numberedStory, which is a string where each word is followed by its index in square brackets and separated by spaces
 * @param story
 * @return numberedStory
 */

/* showSpeechList(numberedList)
* Expects numberedList as a string where each word from the story is followed by its index in square brackets
* set replacements as an empty array, word change as an empty variable
* prompt numberedList and ask how many words the user wants to change
* store their input as changeCount
* declare originalWord and speechPart
* for index being set to 0 going to changeCount, counting up:
* prompt what word to change, save input as wordChange
* originalWord = story[wordChange]
* prompt what part of speech the originalWord was, this is what speechPart will be defined as
* replacements.push(wordChange), story[wordChange] = speechPart
* when for loop ends alert the number of words that are to be replaced in the next step.
* @param numberedList
* @return replacements
*/

/* let the "Word Wizard" know that its the player's turn. */

/* rebuildStory(replacements)
* alert user for words that correspond with the parts of speech, declare newWord
* prompt the user for a new word to replace story[replacements[i]], assign the input to story[replacements[i]]
* terminate and return replacements when for loop finishes counting.
* @param replacements
* @return replacements
*/

/* storyWithSpaces: join the madlibbed story array into a single string with spaces */

/* showStory(string)
* Displays the original and modified story to the user
* @param string
* @return none
*/

/* thank user and process finished. */