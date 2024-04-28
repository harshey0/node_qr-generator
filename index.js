import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
    {"message":"url",name:"url"}
  ])
  .then((answers) => {
    console.log(answers);
    const url= answers.url;

var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
fs.writeFile('links.txt', url, (err) => {
 
    if (err) throw err;
})
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
 
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });