<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <file-search v-model="searchText"></file-search>
      <el-button type="success" @click="createTest">增</el-button>
      <el-button type="info">删</el-button>
      <el-button type="warning">改</el-button>
      <el-button type="danger" @click="queryTest">查</el-button>
      <file-list :fileList="fileList"></file-list>
    </div>
    <div class="main-container">
      <file-edit
              v-model="fileItem.content"
              :title.sync="fileItem.title"
              :boxShadow="false"
              :subfield="false"
              :shortCut="false"
              @change="onSubmit"
      ></file-edit>
    </div>
  </div>
</template>

<script>
import FileSearch from '@/components/FileSearch'
import FileList from '@/components/FileList'
import FileEdit from '@/components/FileEdit'

export default {
  name: 'Home',
  components: {
    FileSearch,
    FileList,
    FileEdit
  },
  data() {
    return {
      searchText:'',
      fileList: [
        { id: 1, title: '文件名 1', time: '2020-06-21' },
        { id: 2, title: '文件名 2', time: '2020-06-21' },
        { id: 3, title: '文件名 3', time: '2020-06-21' },
        { id: 4, title: '文件名 4', time: '2020-06-21' },
        { id: 5, title: '文件名 5', time: '2020-06-21' },
        { id: 6, title: '文件名 6', time: '2020-06-21' },
        { id: 1, title: '文件名 1', time: '2020-06-21' },
        { id: 2, title: '文件名 2', time: '2020-06-21' },
        { id: 3, title: '文件名 3', time: '2020-06-21' },
        { id: 4, title: '文件名 4', time: '2020-06-21' },
        { id: 5, title: '文件名 5', time: '2020-06-21' },
        { id: 6, title: '文件名 6', time: '2020-06-21' }
      ],
      fileItem: {
        title: '手摸手Electron + Vue实战教程（三）',
        content: ''
      }
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
      console.log(this.fileItem)
    },
    // 增
    createTest() {
      const fileNew = { title: '无标题笔记', content: '' }
      this.$db.insert(fileNew)
    },
    async queryTest() {
      const list = await this.$db.find().sort({ updatedAt: -1 })
      console.log(list)
    },
  }
}
</script>

<style lang="less" scoped>
  .app-wrapper {
    display: flex;
    .sidebar-container {
      width: 300px;
      height: 100vh;
      border-right: 1px solid #eaeefb;
    }
    .main-container {
      flex: 1;
    }
  }
</style>
