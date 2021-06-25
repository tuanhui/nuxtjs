<template>
    <div>
        <h2>News-Content [{{$route.params.id}}]</h2>
        <ul>
            <li><a href="/">回到Home</a></li>
        </ul>
        <el-button type="primary" @click='btn'>获取window</el-button>
        <div class="code-box">
            <div id="qrcode"></div>
        </div>
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
    },
    mounted(){
        // 如何加载静态资源, 生成二维码
        this.qrcode("uuid=" + 'f1cf47b7573946f9a3813db28439506a');
    },  
    methods:{
        btn(){
            let href = window.location.href;
            console.log(href,"href")
        },
        //调用生成二维码
        qrcode(text) {
            let qrcode = new QRCode("qrcode", {
                width: 240,
                height: 240, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
                text: text // 二维码内容
            });
            document.getElementById("qrcode").removeAttribute("title");
        },
    }
}
</script>