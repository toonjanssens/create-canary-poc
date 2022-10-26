#!/usr/bin/env node

const downloader = require('github-download-directory');

const { execSync } = require('child_process')

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit'});
    } catch (e) {
        console.error(e);
        return false
    }

    return true
};


const repoName = process.argv[2]

// console.log(`Cloning the repository with name ${repoName}`)

// const checkout = runCommand(`git clone --depth 1 https://github.com/toonjanssens/create-canary-poc.git ${repoName}`);
// if (!checkout) process.exit(-1);

console.log(`Downloading the template into ${repoName}`)


downloader.download('toonjanssens', 'create-canary-poc', 'template').then(console.log, (e) => {
    console.error(e)
    process.exit(-1)
});

// console.log(`Installing dependencies`)

// const installDeps = runCommand(`cd ${repoName} && yarn install`);
// if (!installDeps) process.exit(-1);

// console.log(`Install your needed plugins and start with the following command`);
// console.log(`cd ${repoName} && yarn start`)