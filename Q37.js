/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
message, and a shirt of any size with a different message. */
function make_shirt(size = "medium", message = "I lovd karahi") {
    console.log(`Making a ${size} size T-shirt with a message ${message}print on it.`);
}
make_shirt();
make_shirt(' medium');
export {};
