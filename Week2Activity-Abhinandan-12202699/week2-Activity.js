//1) create a file with name lpu.txt
//2) you have to use fs module to do the following
//3) convert that in json
//4) read a json
//5) write a json file, open, close, rename, copy
//6) compress the same file using
//7) brotli compression
//8) also decompress it



const fs = require('fs');
const zlib = require('zlib');

fs.writeFile('lpu.txt', 'Hello, this is a sample text.', (err) => {
  if (err) throw err;

  console.log('File created successfully.');

  fs.readFile('lpu.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const jsonData = { text: data };

    const jsonString = JSON.stringify(jsonData);

    const parsedData = JSON.parse(jsonString);
    console.log('Read JSON:', parsedData);

    fs.writeFile('lpu.json', jsonString, (err) => {
      if (err) throw err;

      console.log('JSON file created successfully.');

      const readStream = fs.createReadStream('lpu.json');
      const writeStream = fs.createWriteStream('lpu-copy.json');

      readStream.pipe(writeStream);

      writeStream.on('finish', () => {
        console.log('File copied successfully.');

        fs.rename('lpu-copy.json', 'lpu-renamed.json', (err) => {
          if (err) throw err;

          console.log('File renamed successfully.');

          const brotliStream = zlib.createBrotliCompress();
          const input = fs.createReadStream('lpu-renamed.json');
          const output = fs.createWriteStream('lpu-compressed.br');

          input.pipe(brotliStream).pipe(output);

          output.on('finish', () => {
            console.log('File compressed successfully.');

            const decompressStream = zlib.createBrotliDecompress();
            const compressedInput = fs.createReadStream('lpu-compressed.br');
            const decompressedOutput = fs.createWriteStream('lpu-decompressed.json');

            compressedInput.pipe(decompressStream).pipe(decompressedOutput);

            decompressedOutput.on('finish', () => {
              console.log('File decompressed successfully.');
            });
          });
        });
      });
    });
  });
});