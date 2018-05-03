require('keyboardevent-key-polyfill').polyfill();

var modifierKeys = {
  Control: true,
  Meta: true,
  Shift: true,
  Alt: true
};


/**
 * Returns the textual representation of a shortcut given a keyboard event. Examples of shortcuts:
 * Cmd+L
 * Cmd+Shift+M
 * Ctrl+O
 * Backspace
 * T
 * Right
 * Shift+Down
 * Shift+F1
 *
 */
exports.fromEvent = function(event) {
  var shortcutArray = [];
  var key = event.key;

  if (event.metaKey) shortcutArray.push('Cmd');
  if (event.ctrlKey) shortcutArray.push('Ctrl');
  if (event.altKey) shortcutArray.push('Alt');
  if (event.shiftKey) shortcutArray.push('Shift');

  if (!modifierKeys[key]) {
    // a and A, b and B, should be the same shortcut
    if (key.length === 1) key = key.toUpperCase();
    shortcutArray.push(key);
  }

  return shortcutArray.join('+');
}
