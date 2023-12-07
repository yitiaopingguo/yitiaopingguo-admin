<template>
  <div>
    <!-- 编辑界面 -->
    <el-dialog :title="title" :visible.sync="editFormVisible" width="80%" @click="editFormVisible = false">
      <el-form label-width="120px" :model="editForm" :rules="rules" ref="editForm">
        <el-form-item label="文章名称" prop="deptName">
          <el-input size="small" v-model="editForm.deptName" auto-complete="off" placeholder="请输入文章名称"></el-input>
        </el-form-item>
        <el-form-item label="文章名称" prop="deptName">
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="editFormVisible = false">取消</el-button>
        <el-button size="small" type="primary" :loading="loading" class="title" @click="submitForm('editForm')">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      loading: false, //是显示加载
      editFormVisible: false, //控制编辑页面显示与隐藏
      title: '添加',
      editForm: {
        deptId: '',
        deptName: '',
        token: localStorage.getItem('logintoken')
      },
      rules: {
        deptName: [
          { required: true, message: '请输入文章名称', trigger: 'blur' }
        ],
      },
    }
  },
  created() {

  },
  methods: {
    //显示编辑界面
    handleEdit(index, row) {
      this.editFormVisible = true
      if (row != undefined && row != 'undefined') {
        this.title = '修改'
        this.editForm.deptId = row.deptId
        this.editForm.deptName = row.deptName
      } else {
        this.title = '添加'
        this.editForm.deptId = ''
        this.editForm.deptName = ''
      }
    },
    submitForm(){
      console.log(33333333);
    },
    // 关闭编辑、增加弹出框
    handleDialog(flag,text) {
      this.editFormVisible = flag
      this.title = text
    },
  }
}
</script>

<style scoped>
.user-search {
  margin-top: 20px;
}
.userRole {
  width: 100%;
}
</style>


