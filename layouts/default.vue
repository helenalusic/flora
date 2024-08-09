@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

<template>
<div class="bg-[url('/img/main_bg.jpg')] h-64">
    <header>
        
        <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		<div class="text-green-500 md:order-1">
			
		</div>
		<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-semibold justify-between">
				<li class="md:px-4 md:py-2 text-green-500"><a href="#">Početna</a></li>
				<li class="md:px-4 md:py-2 hover:text-green-400"><a href="#">O nama</a></li>
				<li class="md:px-4 md:py-2 hover:text-green-400"><a href="#">Galerija</a></li>
				<li class="md:px-4 md:py-2 hover:text-green-400"><a href="#">Kontakt</a></li>
				
			</ul>
		</div>
		<div class="order-2 md:order-3">
			<button class="px-4 py-2 bg-green-500 hover:bg-green-600 text-gray-50 rounded-xl flex items-center gap-2">
            
                <span>Prijava</span>
            </button>
		</div>
	</div>
</nav>
    </header>
     
    <div>
        <slot></slot>
    </div>   
    
</div>
<footer class="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p></p>
  </aside>
</footer>
</template>

<style scoped>
.router-link-exact.active{
    color:aquamarine;
}

</style>