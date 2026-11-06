/*
Name : MAHI PAL
Roll No : BCS2025377
Assignment No : 6
Task No : 3
*/

let text = "{name: Rohan}";

try {
    JSON.parse(text);
} catch (error) {
    console.log("Invalid JSON");
}