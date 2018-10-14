// console.log("Starting app.js");
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions =
{
    describe: 'Body of note',
    demand: true,
    alias: 'b'

};
//const argv = yargs.argv;
const argv = yargs
            .command('add', 'Add a new note', {
                title: titleOptions,
                body: bodyOptions,
            })
            .command('list', 'List all notss')
            .command('read', 'Read a note',{
                title: titleOptions,
            })
            .command('remove', 'Remove a note',{
                title: titleOptions,
            })
            .help()
            .argv;
//var command = process.argv[2];
var command = argv._[0];
// console.log('command:', command);

// console.log('Process', process.argv);
// console.log('Yargs',argv);

if(command === 'add'){


    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created");
        notes.logNote(note);

    }else{
        console.log("Note exists");
    }

}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length}`);

    allNotes.forEach((note)=> notes.logNote(note));

}else if(command === 'read'){
   
    var readNote = notes.getNote(argv.title);
    if (readNote) {
        console.log("Reading Note");
        notes.logNote(readNote);

    }else{
        console.log("Note not found");
    }


}
else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title,);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}

else{
    console.log('Command not recognized');
}