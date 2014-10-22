var requireDir = require('require-dir');

// require everything in /tasks
requireDir('./tasks', { recurse: true });
