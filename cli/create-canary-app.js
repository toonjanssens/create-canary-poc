const repoName = process.argv[2]

const gitCheckoutCommand = `git clone --depth 1 https://github.com/toonjanssens/create-canary-poc.git ${repoName}`