<template>
  <div>
    <HomeAlbum />
    <SideBarAlbum />
  </div>
</template>

<script>
import HomeAlbum from '@/components/Albums/HomeAlbum.vue'
import SideBarAlbum from '../components/SideBar/sidebarperpage/SideBarAlbum'
export default {
  name: 'Posts',
  components: {
    HomeAlbum,
    SideBarAlbum
  }
}
</script>