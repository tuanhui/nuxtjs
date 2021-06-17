<template>
    <div>
        <h2>News-Content [{{$route.params.id}}]</h2>
        <ul>
            <li><a href="/">回到Home</a></li>
        </ul>
    </div>
</template>
<script>
export default{
    // 校验穿过来的id为 number
    validate ({params}){  
        return /^\d+$/.test(params.id);
    },
    data(){
        return{
            title:this.$route.params.title,
        }
    },
    // 独立设置head信息
    head(){
        return{
            title:this.title,
            meta:[
                {hid:'description',name:'news',content:'this is news page'}
            ]
        }
    }
}
</script>