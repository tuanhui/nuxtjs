<template>
    <div>
        <h2>About Index page</h2>
        <ul>
            <li><nuxt-link :to="{name:'index'}">回到Home</nuxt-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    transitions:'test',
}
</script>