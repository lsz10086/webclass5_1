<template>
  <el-container>
    <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)">
      Quiz后台管理
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <!-- 注意这里加了 router 属性和 default-active -->
        <el-menu :default-openeds="['1']" :default-active="$route.path" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>管理选项
            </template>
            <el-menu-item-group>
              <template slot="title">用户与题目</template>
              <el-menu-item index="/user">用户管理</el-menu-item>
              <el-menu-item index="/question">题目管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="题目">
            <el-input v-model="formInline.question" placeholder="请输入题目关键词"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="onAddNewQuestion">添加题目</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" width="80">
            <template slot-scope="scope"><span>{{ scope.row.id }}</span></template>
          </el-table-column>
          <el-table-column label="题目" width="250">
            <template slot-scope="scope"><span>{{ scope.row.question }}</span></template>
          </el-table-column>
          <el-table-column label="选项">
            <template slot-scope="scope"><span>{{ scope.row.options }}</span></template>
          </el-table-column>
          <el-table-column label="答案" width="100">
            <template slot-scope="scope"><span>{{ scope.row.answer }}</span></template>
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <br />
        <el-pagination background layout="prev, pager, next" :total="1000" :page-size="4" style="margin-top: 20px;">
        </el-pagination>

        <el-dialog title="添加新题目" :visible.sync="dialogFormVisible" width="500px">
          <el-form :model="form">
            <el-form-item label="题目" :label-width="formLabelWidth">
              <el-input v-model="form.questionTitle" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选项a" :label-width="formLabelWidth">
              <el-input v-model="form.optionA" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选项b" :label-width="formLabelWidth">
              <el-input v-model="form.optionB" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选项c" :label-width="formLabelWidth">
              <el-input v-model="form.optionC" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选项d" :label-width="formLabelWidth">
              <el-input v-model="form.optionD" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="答案" :label-width="formLabelWidth">
              <el-input v-model="form.answer" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "QuestionView",
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "80px",
      form: {
        questionTitle: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
      },
      formInline: { question: "" },
      tableData: [
        { id: "1", question: "法国的首都是哪个城市？", options: "巴黎, 巴黎, 巴黎, 巴黎", answer: "巴黎" },
        { id: "2", question: "法国的首都是哪个城市？", options: "巴黎, 巴黎, 巴黎, 巴黎", answer: "巴黎" },
        { id: "3", question: "法国的首都是哪个城市？", options: "巴黎, 巴黎, 巴黎, 巴黎", answer: "巴黎" },
        { id: "4", question: "法国的首都是哪个城市？", options: "巴黎, 巴黎, 巴黎, 巴黎", answer: "巴黎" }
      ],
    };
  },
  methods: {
    onAddNewQuestion() {
      this.form = { questionTitle: "", optionA: "", optionB: "", optionC: "", optionD: "", answer: "" };
      this.dialogFormVisible = true;
    },
    onSubmit() { console.log("submit!"); },
    handleEdit(index, row) { console.log(index, row); },
    handleDelete(index, row) { console.log(index, row); }
  },
};
</script>

<style scoped>
.demo-form-inline {
  padding: 16px 16px 0;
  background-color: #fff;
  margin-bottom: 20px;
}
.dialog-footer {
  text-align: right;
}
</style>