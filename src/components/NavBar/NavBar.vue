<template>
<ul class="flex">
  <li class="mr-3">
    <a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"><router-link to="/">Post</router-link></a>
  </li>
  <li class="mr-3">
    <a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"><router-link to="/photos">Photo</router-link></a>
  </li>
  <li class="mr-3">
    <a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"><router-link to="/albums">Album</router-link></a>
  </li>
</ul>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  }
}
</script>

