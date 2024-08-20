const { Transform } = require('stream');

// Custom transform stream
class UpperCaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

const upperCaseTransform = new UpperCaseTransform();

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
