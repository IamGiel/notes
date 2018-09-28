import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log("this is Gel, hello Firebase!");
  response.send("Hello from Gel, its my first function in Firebase!!!");
});
