const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const xlsx = require('node-xlsx')//引入模块
const fs = 'fs'
let win

function createWindow () {
    win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, './build/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))
    win.loadURL('http://localhost:3000/')

    win.webContents.on('dom-ready', function (e) {
        win.webContents.executeJavaScript(`
            const xlsx = require('node-xlsx')
            window.xxzListener.on('ipcRenderer',function (data) {
                console.log('收到的路径', data)
                const xlsxPath = xlsx.parse(data);
                console.log('解析的数据', xlsxPath)
                xxzListener.emit('ipcMain', xlsxPath)
            })
        `);
    });

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})


