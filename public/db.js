const indexedDB =
  window.indexedDB ||
  window.mozeIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

let db;
const request =  indexedDB.open("budget", 1);

//schema
request.onupgradeneeded = ({ target }) => {
  let db = target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

// if online check DB
request.onsuccess = ({ target }) => {

};
// deal with error
request.onerror = function(event) {

};
// save record to db (called if offline - request fail)
function saveRecord(record) {

};
// back online, send to mongo and clear pending (indexedDB)
function checkDatabase() {

};
// listen for app coming back online 
window.addEventListener("online", checkDatabase);