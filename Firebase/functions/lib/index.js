"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log("this is Gel, hello Firebase!");
    response.send("Hello from Gel, its my first function in Firebase!!!");
});
//# sourceMappingURL=index.js.map