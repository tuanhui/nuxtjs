<template>
    <div>
        <h2>News Index page</h2>
        <p>NewsId:{{ $route.params.newsId}}</p>
        <ul>
            <li><nuxt-link :to="{name:'index'}">回到Home</nuxt-link></li>
            <li><a href="/news/123">news-1</a></li>
            <li><nuxt-link :to="'/news/'+345">News-2</nuxt-link></li>
            <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'技术胖'}}">News-3</nuxt-link></li>
        </ul>
    </div>
</template>
<script>


</script>
