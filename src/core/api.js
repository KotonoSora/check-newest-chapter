'use strict';

async function fetchInfo(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const { data } = await response.json();
    const result = {
      newest_chapter_number: data.attributes.newest_chapter_number,
      name: data.attributes.name,
    }
    return result;
  } catch (err) {
    console.error(err);
  }
}

module.exports = fetchInfo;
