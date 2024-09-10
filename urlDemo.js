import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world ';

//URL object
const urlObject = new URL(urlString);
console.log(urlObject);

// format()
// The format() method returns a formatted string using the given format string and the specified values.
// The format() method returns a new string and does not modify the original string.
console.log(url.format(urlObject));

// import.meta.url
// The import.meta.url property returns the URL of the current module file.
// This property is available in ES modules (ESM) only.
console.log(import.meta.url);

//fileURLToPath()
// The fileURLToPath() function converts a file URL to a path.
// This function returns a string representing the path of the file.
console.log(url.fileURLToPath(import.meta.url));

//
const params = new URLSearchParams(urlObject.search);
params.append('limit', '5');
params.delete('limit');
console.log(params);
