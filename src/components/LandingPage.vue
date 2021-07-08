<template>
    <div class="row">
        <NavBar />
        <Banner />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Banner from '@/components/Banner.vue';

export default {
    name: 'LandingPage',
    components:{
        NavBar,
        Banner
    }
}
</script>
