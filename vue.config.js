module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                "appId": "cc.shixw.vue-electron-notes",
                "productName":"MD编辑器",//项目名，也是生成的安装文件名，即aDemo.exe
                "copyright":"Copyright © 2020",//版权信息
                "directories":{
                    "output":"./dist_electron"//输出文件路径
                },
                publish: [{
                    "provider": "github",
                    "owner": "shixw",
                    "repo": "vue-electron-notes"
                }],
                "dmg": {
                    "contents": [
                        {
                            "x": 410,
                            "y": 150,
                            "type": "link",
                            "path": "/Applications"
                        },
                        {
                            "x": 130,
                            "y": 150,
                            "type": "file"
                        }
                    ]
                },
                "mac": {
                    "icon": "build/icons/icon.icns",
                    "extendInfo": {
                        "LSUIElement": 1
                    }
                },
                "win": {
                    "icon": "build/icons/icon.ico"
                },
                "linux": {
                    "icon": "build/icons"
                }
            }
        }
    }
}
