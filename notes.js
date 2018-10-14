// console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNote = (title, body) => {
    // console.log('Adding note', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };



var duplicateNotes = notes.filter((note) => note.title === title);

if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);

    return note;

}
};
var getAll = () => {
    //console.log('Getting all notes');
    return fetchNotes();
};

var getNote = (title) => {
    //console.log('Getting note', title);
    var notes = fetchNotes();

    var readNote = notes.filter((note) => note.title === title);
    if(readNote){
        return readNote[0];
    }

};
var removeNote = (title) => {
    //console.log('Removing note', title);
    var notes = fetchNotes();

var removeNotes = notes.filter((note) => note.title !== title);

    saveNotes(removeNotes);

    return notes.length !== removeNotes.length;


};

var logNote = (note) => {
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
    
};
