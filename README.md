# shortcut-string

This module returns the textual representation of a shortcut given a keyboard event. Examples of shortcuts:
 * Cmd+L
 * Cmd+Shift+M
 * Ctrl+O
 * Backspace
 * T
 * Right
 * Shift+Down
 * Shift+F1
 * Ctrl++
 * Ctrl+Left

```js
var shortcutString = require('shortcut-string');

document.addEventListener('keydown', function(event) {
  console.log(shortcutString.fromEvent(event));
});
```
