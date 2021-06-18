<template>
    <div>
        <h2>About Index page</h2>
        <ul>
            <li><nuxt-link :to="{name:'index'}">回到Home</nuxt-link></li>
             <li v-for="item in list" :key="item.id">{{item.company}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    transitions:'test',
    data(){
        return{

        }
    },
    // 目前常用ansyc ... await 解决异步, 不需要注册变量
    async asyncData(context){
        let {data} =await context.$axios.get('server/list');
        return {
        list:data.data
        }
    },
    // 使用传统asyncData方式，但是数据需要等待加载，且需要注册变量
    // asyncData(context){
    //   return context.$axios.get('/server/list').then(res =>{
    //     if(res.success){
    //       return {list:res.data}
    //     }
    //   })
    // },
}
</script>