var specialKeys = {
  8: 'Backspace', 9: 'Tab', 13: 'Enter', 16: 'Shift', 17: 'Ctrl', 18: 'Alt', 19: 'Pause',
  20: 'CapsLock', 27: 'Esc', 32: 'Space', 33: 'PageUp', 34: 'PageDown', 35: 'End', 36: 'Home',
  37: 'Left', 38: 'Up', 39: 'Right', 40: 'Down', 45: 'Insert', 46: 'Del', 91: 'Meta',
  96: '0', 97: '1', 98: '2', 99: '3', 100: '4', 101: '5', 102: '6', 103: '7',
  104: '8', 105: '9', 106: '*', 107: '+', 109: '-', 110: '.', 111 : '/',
  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8',
  120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12', 144: 'NumLock', 145: 'Scroll', 189: '-', 187: '=', 191: '/',
  219: '[', 221: ']', 224: 'Meta'
};

var shiftChars = {
  '`': '~', '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^', '7': '&', '8': '*', '9': '(', '0': ')',
  '-': '_', '=': '+', '[': '{', ']': '}', '\\': '|', ';': ': ', '\'': '\"', ',': '<', '.': '>',  '/': '?'
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
 * Based off code from jQuery Hotkeys Plugin by John Resig
 * https://github.com/jeresig/jquery.hotkeys/
 */
exports.fromEvent = function(event) {
  var shortcutArray = [];

  if (event.metaKey) shortcutArray.push('Cmd');
  if (event.ctrlKey) shortcutArray.push('Ctrl');
  if (event.altKey) shortcutArray.push('Alt');
  if (event.shiftKey) shortcutArray.push('Shift');

  var character = specialKeys[event.which] || String.fromCharCode(event.which);

  if (event.shiftKey && shiftChars.hasOwnProperty(character)) {
    character = shiftChars[character];
  }

  shortcutArray.push(character);

  return shortcutArray.join('+');
}
