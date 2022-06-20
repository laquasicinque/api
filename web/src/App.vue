<template>
<nav class="container flex justify-around py-3 mx-auto border-solid border-b-[1px] border-b-[#555555] bg-[#191919]">
  <div class="flex items-center">
    <h3 class="text-2xl font-medium text-blue-500">sethh.xyz</h3>
  </div>
  <!-- left header section -->
  <div class="items-center hidden space-x-8 lg:flex">
    <a class="text-white hover:text-gray-300" href="">Home</a>
    <a class="text-white hover:text-gray-300" href="">List Workers</a>
    <a class="text-white hover:text-gray-300" href="">Add Workers</a>
    <a class="text-white hover:text-gray-300" href="">List Companies</a>
    <a class="text-white hover:text-gray-300" href="">Add Companies</a>
  </div>
  <!-- right header section -->
  <div class="flex items-center space-x-2">
  </div>
</nav>

</template>

<router-view> </router-view>