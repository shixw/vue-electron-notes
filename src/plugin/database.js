
import Vue from 'vue'
import Datastore from 'nedb-promises'
import { remote } from 'electron'
import path from 'path'
const basePath = remote.app.getPath('userData')
console.log('程序数据存储路径:',basePath)

const db = new Datastore({
    autoload: true,
    timestampData: true,
    filename: path.join(basePath, `db1.db`)
})
Vue.prototype.$db = db
