# Note-Taker-Express


# Description
A note taking app created using express. This web-application allows users to write, save and delete notes that can be accessed when the page is reloaded. 

Here it is deplyed on heroku:
http://secure-tundra-12112.herokuapp.com/

# Table of Contents
• Usage
• View Routes
• API Routes
• Steps to follow
• Contribution


# Usage
- Click "Get Started" on the index page to begin.
- Write text in the note header and note body.
- Click the save button when you have finished your note.
- Click notes on the right-hand bar to view them.
- Click the trash can on the right to delete notes.
- Click the plus sign to start a new note.

# View Routes 
- "/" -> render the landing page 
- "/notes" -> render the notes page 

# API Routes 

- GET /api/notes -> get all notes from file 
- DELETE /api/notes/:id -> delete note by id from file 
- POST /api/notes -> create a new note and add to file 

# Steps to follow:

1. Set up a basic server
2. Setup routes (view routes for now)
3. Setup controllers (view controllers)
4. Run 'npm start' and navigate to home page and notes page


# Contribution
If you have any questions about this project, please contact me at:
aishahajisirad@gmail.com
Github: Aishaabdi1