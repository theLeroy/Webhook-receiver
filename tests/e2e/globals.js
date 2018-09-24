const chromedriver = require('chromedriver')
const shell = require('shelljs')

const jenkinsChromedriverPath = '/srv/chromedriver'
const isRunningInCI = (process.env.E2EINCI === 'TRUE' || process.env.E2EINCI === 'true')

function startChromeDriver () {
  if (isRunningInCI) {
    console.log('Starting chromedriver from binary:', jenkinsChromedriverPath)
    require('child_process').execFile(jenkinsChromedriverPath, [])
    return
  }

  console.log('Starting chromedriver from npm package')
  chromedriver.start()
}

function stopChromeDriver () {
  if (isRunningInCI) {
    shell.exec('killall chromedriver_original')
    shell.exec('killall chrome')
    console.log('Chromedriver from binary stopped')
    return
  }

  chromedriver.stop()
  console.log('Chromedriver from npm stopped')
}

module.exports = {
  before: function (done) {
    console.log('Testing against:', this.test_settings.launch_url)
    startChromeDriver()

    if (isRunningInCI) {
      setTimeout(() => {
        done()
      }, 5000)
    } else {
      done()
    }
  },

  after: function (done) {
    stopChromeDriver()

    done()
  }
}
