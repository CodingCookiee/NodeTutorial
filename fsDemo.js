// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//readFileSync() - Synchronous version
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);

//readFile() - Promise Version sync await
// fs.readFile('./text.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

//writeFile() - async/await
const writeFile = async () => {
  try {
    await fs.writeFile('./text.txt', 'Hello I am writing to this file', 'utf8');
    console.log('File written successfully');
  } catch (error) {
    console.error(error);
  }
};
writeFile();
//appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('./text.txt', '\n This is appended text', 'utf8');
    console.log('File appended successfully');
  } catch (error) {
    console.error(error);
  }
};

appendFile();

//readFile - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./text.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

readFile();
