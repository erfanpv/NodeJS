const fs = require('fs');

fs.mkdir('fs/newDir', (err) => {
  if (err) throw err;
  console.log('Directory created successfully.');
});
