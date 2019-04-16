const { spawn } = require('child_process');
const command = ['php', ['core/console', '--server', '--with-watch']];
const child = spawn(...command);

function watch(p) {
  p.stdout.on('data', (data) => {
    console.log(`patternlab: ${data}`);
    if (/malformed JSON/gi.test(data)) {
      console.log('Json syntax error found, prepare to restart patternlab service after 5s');
      p.kill('SIGKILL');
      setTimeout(() => {
        const newProcess = spawn(...command);
        watch(newProcess);
      }, 5000);
    }
  });
  p.on('close', (code) => {
    console.log(`patterlab exited with code ${code}, prepare to restart it after 3s`);
    setTimeout(() => {
      const newProcess = spawn(...command);
      watch(newProcess);
    }, 3000);
  });
  p.stderr.on('data',() => {
    console.log(`stderr: ${data}`);
  });
}

watch(child);