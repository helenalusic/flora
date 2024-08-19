@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
import emailjs from 'emailjs-com' 

<template>
  
<section class=" bg-blueGray-200 -mt-24">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div class="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap items-center mt-16">
      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
       
       
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Kontaktirajte nas</p>
            <p>Molimo Vas ispunite sva polja.</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Ime</label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email adresa</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
              </div>

             
      
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">Pošalji</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>
        
      </div>
      
    </div>
  </div>
</section>

</template>
<script type="text/javascript">

</script>

<style scoped>

h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
footer{
    font-size: 15px;
}
</style>