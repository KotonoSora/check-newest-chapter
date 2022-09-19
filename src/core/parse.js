'use strict';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function parse(url, info) {
  try {
    const { document } = (await JSDOM.fromURL(url)).window;
    let name = document.querySelector(info.title).textContent;
    let chapters = document.querySelector(info.chapters).querySelectorAll(info.chapter); 
    let newest_chapter_name = chapters[0].querySelector(info.label).textContent;
    let result = {
      count: chapters.length,
      newest_chapter_name,
      name,
    }
    return result;
  } catch (err) {
    console.error(err);
  }
}

module.exports = parse;
