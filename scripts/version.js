const path = require('path')
const fs = require('fs')
const shell = require('shelljs')

const packageJsonRelativePath = '../package.json'

// Exit script if any command fails
shell.config.fatal = true

// Get and check parameters
let level = process.argv[2]
let timestamp = process.argv[3]
let hash = process.argv[4]
if (level !== 'major' && level !== 'minor' && level !== 'patch') {
  console.log('ERROR: Undefined version change level (major|minor|patch)')
  process.exit(1)
}
if (!timestamp) {
  console.log('ERROR: Undefined timestamp')
  process.exit(1)
}
if (!hash) {
  console.log('ERROR: Undefined hash')
  process.exit(1)
}

// Set credentials
if (process.env.GIT_EMAIL && process.env.GIT_USER_NAME) {
  console.log('STEP: Setting credentials')
  shell.exec(`git config user.email ${process.env.GIT_EMAIL}`)
  shell.exec(`git config user.name ${process.env.GIT_USER_NAME}`)
  shell.exec('git checkout master')
}

// Start script
console.log('STEP: Generating new normal version')
const newVersion = shell.exec(`npm version ${level} --no-git-tag-version`).stdout.substr(1)

console.log('STEP: Generating new commit version')
var packageJson = require(packageJsonRelativePath)

const packageJsonAbsolutePath = path.dirname(require.main.filename) + '/' + packageJsonRelativePath
const newCommitVersion = timestamp + '.' + hash
packageJson.commitVersion = newCommitVersion
fs.writeFileSync(packageJsonAbsolutePath, JSON.stringify(packageJson, null, 2))

shell.exec('git add package*.json')
shell.exec(`git commit -m "Updated version to ${newVersion} and commit version to ${newCommitVersion}"`)

// STEP: Pushing
console.log('STEP: Pushing')
shell.exec('git push origin master')

// Summary
console.log()
console.log('Versioning Done.')
console.log('----------')
console.log('Update Level:', level)
console.log('New Commit Version:', newCommitVersion)
console.log('New Version:', newVersion)
