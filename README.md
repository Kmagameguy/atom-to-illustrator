# RIP Atom Editor :(  This project is now deprecated due to [Github's sunsetting of Atom](https://github.blog/2022-06-08-sunsetting-atom/)

---

# Atom-to-Illustrator

### Description
---------
Atom to Illustrator is an extension for [Atom](https://atom.io/) that allows you to execute a JSX file in Illustrator. Sourced from [atom-to-photoshop](https://github.com/JavierAroche/atom-to-photoshop).  
  
Notes below are borrowed from the original atom-to-photoshop readme.

### Usage
---------
This extension works on Atom's current document.

If your file is saved, the extension will execute the script using its local path, otherwise it will execute it through a temporary file.

Click on the **atom-to-illustrator > Run** menu item, or hit the shortcut **ctrl-alt-shift-p** to execute your script.

Shortcuts:
* Run - **ctrl-alt-shift-p**
* Toggle Console - **ctrl-alt-shift-o**
* Clear Console - **ctrl-alt-shift-c**

### Include external files
---------
If your script file is saved, the extension will load your script path and execute it. This makes it easier to use ExtendScript's #include to load relative external files.

```
#include "~/Development/personal/descriptor-info/jsx/descriptor-info.jsx"
```

If your file is not saved, the extension will execute your script through a temporary file, making it impossible to load external relative files using #include. Absolute paths will always work.

### Log to the console
---------
This extension has an internal module that recreates JavaScript's console module, including a way to log a JSON.stringify response.

You can use functions in your code such as:
```
console.log( 'Hello' );
// Returns: [log: 16:16:2.649] Hello

console.info( 'Hello' );
// Returns: [info: 16:16:23.823] Hello

console.error( 'Hello' );
// Returns: [error: 16:16:37.985] Hello

console.stringify( { foo : 'bar' } );
// Returns: [stringify: 16:16:50.185] {
    "foo": "bar"
}
```

This extension also allows the use of ExtendScript's native $.write and $.writeln functions to log to the console using JSON.stringify.
```
$.writeln( "Hello" );
// Returns: [log: 16:20:34.337] "Hello"

$.write( "Hello" );
// Returns: [log: 16:20:37.171] "Hello"
```
---------
A console will show up at the bottom of your editor displaying any messages returned from the executed script. Errors will display in red.

### Known Limitations
---------
* This extension relies on AppleScript, so it will only work for MacOS users at the moment.

### License
---------
MIT © Javier Aroche
