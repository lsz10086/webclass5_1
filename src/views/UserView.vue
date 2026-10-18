<template>
  <el-container>
    <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)">
      Quiz后台管理
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" :default-active="$route.path" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>管理选项
            </template>
            <el-menu-item-group>
              <template slot="title">用户与题目</template>
              <!-- 使用 index 属性指定路由路径即可实现跳转 -->
              <el-menu-item index="/user">用户管理</el-menu-item>
              <el-menu-item index="/question">题目管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <!-- 这里是 UserView 原本的内容（用户管理表格等） -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="用户名">
            <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="tableData" style="width: 80%">
          <el-table-column label="日期" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名" width="180">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      formInline: { user: "" },
      tableData: [
        { date: "2016-05-02", name: "王小虎" },
        { date: "2016-05-04", name: "王小虎" }
      ]
    };
  },
  methods: {
    onSubmit() { console.log("submit!"); },
    handleEdit(index, row) { console.log(index, row); },
    handleDelete(index, row) { console.log(index, row); }
  }
};
</script>

<style scoped>
.demo-form-inline {
  padding: 16px 16px 0;
  background-color: #fff;
}
</style>