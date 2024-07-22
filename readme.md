Choice of game :games:
User stories which document what the user can do with your game
Wireframe (pencil and paper drawings are fine) for each “page” in your game
Game state -> what variables are you keeping track of
Pseudocode -> if you have complex interactions
Github :github:  repo to track your code changes and update the Project Tracker :excel:

Game name is Wordle basic.

User stories:
1. Users can input a 5 character string. 
2. the game must validate the string to be a valid 5 letter word
- the game must be able to retrieve the daily word and parse it into a var.
3. apply yellow highlight for letters that appear in the word but wrong position
4. apply green highlight if the character is present and also in the right position
5. on each turn, the word which the user keys in will appear on each row.


Wireframe:
- Start/refresh button beside 'Guess'
- Title
- Grid
- text box with guess
- keyboard at the bottom (not priority);


START => turn 1, if right => win
else => turn 2, if right => win
else => turn 3, if right => win
...
else => turn 6, if right => win
else lose;

win =>reset => START

MAKE 1 GUESS GUESS SHOUL;D LIGHT UP WITH RIGHT COPLOYURS

user can only guess words with unique characters for now. 

how to render stuff in app.jss on index.html?

