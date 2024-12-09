<template>
    <div class="login-box">
        <div class="logo-box">
            <div class="logo-wrapper">
                <div >
                    <img  class="w-auto h-16" src="@/icons/svg/icon-wn.svg" alt="">
                    <h1 class="lh-tight">
                    Build managerial websites, easier.
                </h1>
                </div>
     
                <div style="width: 100%;height: 200px;position: relative;">
                    <img src="@/icons/svg/icon-logo.svg" alt="" class="code-img">
                </div>
                <div>

                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-body">
                <div class="desc">👋</div>
            <div class="desc">Nice to see you!</div>
            <el-form ref="loginFormRef" :model="loginFormData" :rules="loginFormRules" @keyup.enter="handleLogin">
                <div class="label">账号</div>
                <el-form-item prop="username">
                    <el-input v-model.trim="loginFormData.username" placeholder="账号" type="text" tabindex="1"
                        :prefix-icon="User" size="large" />
                </el-form-item>
                <div class="label">密码</div>
                <el-form-item prop="password">
                    <el-input v-model.trim="loginFormData.password" placeholder="密码" type="password" tabindex="2"
                        :prefix-icon="Lock" size="large" show-password />
                </el-form-item>
                <el-button style="width: 100%;margin-top: 2rem;height: 50px;color: #fff;" color="#5b9af6" :loading="loading" type="primary" size="large" @click.prevent="handleLogin">登 录</el-button>
            </el-form>
            </div>

        </div>
    </div>
</template>
<script setup>
import { User, Lock } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"
import { encrypt } from "@/utils/rsa"
import { useUserStore } from "@/store/modules/user"
import { ref,reactive } from 'vue';

const router = useRouter()
const loading = ref(false)
const loginFormRef = ref(null)
const loginFormData = reactive({
    username: 'zeshaaipei',
    password: 'buwanla',
})
const loginFormRules = ref({
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" }
        // { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
    ],
    code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
})
const handleLogin = ()=>{
    loginFormRef.value?.validate((valid, fields) => {
    if (valid) {
      loading.value = true
      useUserStore()
        .login({
          ...loginFormData,
          password: encrypt(loginFormData.password)
        })
        .then(() => {
          router.push({ path: "/" })
        })
        .catch(() => {
          // createCode()
          loginFormData.password = ""
        })
        .finally(() => {
          loading.value = false
        })
    } else {
    //   console.log("表单校验不通过", fields)
    }
  })
}
</script>



<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
    .logo-box{
        display: none;
    }
}
.login-box {
    height: 100vh;
    display: flex;
    background-color: #ffffff;

    .logo-box {
        height: 100%;
        padding: 3rem;
        border-radius: 1.5rem;
        width: 40%;

        .logo-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            background-color: #f6f9fc;
            height: 100%;
            padding: 3rem;
        }

        .lh-tight {
            letter-spacing: -.05em !important;
            line-height: 1.2 !important;
            font-weight: bolder !important;
            font-size: calc(1.425rem + 2.1vw);
        }
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex:1;
        height: 100%;
        padding: 3rem;
        .content-body{
            width: 400px;
            .label{
                font-size: 1rem;
                margin-bottom: 1rem;
                margin-top: 2rem;
            }
        }
        .desc{
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 2rem;
        }
    }
}
</style>
