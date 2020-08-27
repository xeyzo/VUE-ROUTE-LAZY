<template>
  <div class="content inline-block w-full">
    <home-photo/>
    <SideBarPhoto />
  </div>
</template>

<script>
import HomePhoto from '@/components/Photos/HomePhoto.vue'
import SideBarPhoto from '../components/SideBar/sidebarperpage/SideBarPhoto'
export default {
  name: 'Posts',
  components: {
    HomePhoto,
    SideBarPhoto
  }
}
</script>