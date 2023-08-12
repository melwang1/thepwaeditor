import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { 
  console.error('putDb not implemented');

const jateDb = await openDB ('jate', 1);
const tx = jateDb.transaction ('jate', 'readwrite');
const store = tx.objectStore ('jate');
const request = store.put ({id:1, value: content});

const result = await request;
console.log ('Database was updated!')
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

const textDb = await openDB ('jate', 1);
const tx = textDb.transaction ('jate', 'readonly');
const store = tx.objectStore ('jate');
const request = store.getAll();

const result = await request;
console.log('result.value', result);
return result?.value;  

};  
initdb();
