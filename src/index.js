'use strict';
const parse = require('./core/parse.js');
const fetchInfo = require('./core/api.js');
const blogtruyen = require('./sites/blogtruyen');
const cuutruyen = require('./sites/cuutruyen');

async function crawler_blogtruyen() {
  const { host, path, ids, info } = blogtruyen;
  for (let id of ids) {
    const url = `${host}${path}${id}/`;
    const result = await parse(url, info);
    console.log(result);
  }
}

async function crawler_cuutruyen() {
  const { host, path, ids} = cuutruyen;
  for (let id of ids) {
    const url = `${host}${path}${id}/`;
    const result = await fetchInfo(url);
    console.log(result);
  }
}

async function main() {
  await crawler_blogtruyen();
  await crawler_cuutruyen();
}

main();

module.exports = main;
