<template>

    <!-- <div style="width: 25%;position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);">
                <div slot="header" class="clearfix" style="text-align: center">
                    <h2 style="font-size: 1rem">校园疫情防控管理系统</h2>
                </div>
                <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="input_pwd" show-password class="inp" ></el-input>
                <el-radio-group v-model="radio3" size="small" style="display: flex;justify-content: space-around;margin-top: 1.3rem;">
                    <el-radio label="1" border>管理员</el-radio>
                    <el-radio label="2" border>学生</el-radio>
                    <el-radio label="3" border>教师</el-radio>
                </el-radio-group>
                <el-button type="primary" class="button" size="small" @click="login">登录</el-button>
    </div> -->
    <div>
        <div class="card">
            <h1>校园疫情管理系统</h1>
            <el-input v-model="input_user" placeholder="请输入用户名"></el-input>
            <el-input placeholder="请输入密码" v-model="input_pwd" show-password></el-input>
            <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

    <el-button type="primary" @click="login">登录<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
    </div>
</template>


<script>  
import '../style/style.css'
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
export default {
    name:'Login',
    data() {
    return {
        input_user: '',
        input_pwd:'',
         options: [{
          value: '1',
          label: '管理员'
        }, {
          value: '2',
          label: '教师'
        }, {
          value: '3',
          label: '学生'
        },],
        radio3: "1",
    }
  },
  methods:{
      /**
       * 登录
       * 用户名：username:this.input_user,
       * 密码：password:this.input_pwd,
       */
      login(){
          if (!this.input_user || !this.input_pwd){
                this.open3("用户名,密码不能为空")
              this.input_user=""
              this.input_pwd=""
          }else{
            this.$Axios({
                url:'/users/login',
                method:'post',
                data:{
                    username:this.input_user,
                    password:this.input_pwd,
                    type:this.radio3
                },
                success:(result)=>{
                 if (result=="用户名或者账号输入错误"){
                     this.$message.error("用户名或者账号输入错误")
                     this.input_pwd=""
                     this.input_user=""
                 }else{
                     window.localStorage.setItem("token",result.jwt_token)
                     //方便后来群聊使用
                     const socketData={
                         "id":result.loginData[0].id,
                         "name":result.loginData[0].username,
                         "img":result.loginData[0].head,
                         }
                    window.localStorage.setItem("socketData",JSON.stringify(socketData))
                    //  window.localStorage.setItem("id",id);
                     if (this.radio3==1)  window.location.href=' http://localhost:8080/#/admin/home'
                     if (this.radio3==2)  window.location.href=' http://localhost:8080/#/student/home'
                     if (this.radio3==3)  window.location.href=' http://localhost:8080/#/teacher/home'
                 }
                }
            })
          }
    },

      open3(v) {
          this.$message({
              message:v,
              type: 'warning'
          });
      },
   }
}

</script>