#!/usr/bin/env node

const download = require("download-git-repo");

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(e);
    return false;
  }

  return true;
};

const repoName = process.argv[2];

console.log(`Downloading the template into ${repoName}`);

download(
  "toonjanssens/create-canary-poc",
  `${repoName}/.download`,
  function (err) {
    if (err) {
      console.log(err);
      process.exit(-1);
    }

    const extractTemplate = runCommand(
      `mv ${repoName}/.download/template/* ${repoName} && rm -r ${repoName}/.download`
    );
    if (!extractTemplate) process.exit(-1);

    console.log(`Installing dependencies`);

    const installDeps = runCommand(`cd ${repoName} && yarn install`);
    if (!installDeps) process.exit(-1);

    console.log(
      `Install your needed plugins and start with the following command`
    );
    console.log(`cd ${repoName} && yarn start`);
  }
);
