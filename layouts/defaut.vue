<template>
<div>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Početna</NuxtLink> </li>
                <li><NuxtLink to="/about">O nama</NuxtLink></li>
                <li><NuxtLink to="/products">Proizvodi</NuxtLink></li>
               
            </ul>
        </nav>
    </header>
     
    
    <div>
        <slot></slot>
    </div>
</div>
</template>

<style scoped>
.router-link-exact.active{
    color:aquamarine;
}

</style>