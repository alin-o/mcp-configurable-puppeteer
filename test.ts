import puppeteer from 'puppeteer'

const initialize = () => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"    
}

let browser = null

const launch = async () => {

    browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--no-first-run',
            '--no-zygote',
        ],
        executablePath: "/opt/google/chrome/chrome",
        headless: false,
        env: {
            DISPLAY: ':0',
        },
    })
}

(async () => {
    initialize()
    await launch()
})()