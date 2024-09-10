//helpful for creating CLIs

//argv
console.log(process.argv);

// process.env
console.log(process.env);

// pid
console.log(process.pid);

// cwd() : current working directory
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime(): command to script executing time
console.log(process.uptime());

//  on
process.on('exit', (code) => {
  console.log(`About to exit with code:${code} `);
});

//exit
process.exit(); // exit the process
process.exit(0); // exit the process with code 0
