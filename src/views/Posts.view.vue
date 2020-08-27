<template>
  <div class="content inline-block w-full">
    <home-posts/>
    <SideBarPost/>
  </div>
</template>

<script>
import HomePosts from '@/components/Posts/HomePosts.vue'
import SideBarPost from '../components/SideBar/sidebarperpage/SideBarPost'
export default {
  name: 'Posts',
  components: {
    HomePosts,
    SideBarPost
  }
}
</script>