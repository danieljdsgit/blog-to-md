const mediumToMarkdown = require("medium-to-markdown");
const fs = require('fs').promises;
const path = require("path");

const url = process.argv.slice(2)[0];

const lastItem = path.basename(url);

const fileName = lastItem + ".md";

(async () => {
  try {
    const md = await mediumToMarkdown.convertFromUrl(url);

    await fs.writeFile(fileName, md);

    console.log(`${url} > ${fileName}`);
  } catch (error) {
    console.log(error);
  }
})();
