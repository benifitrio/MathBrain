const homeContent = document.getElementById('content')

function Home() {
    homeContent.innerHTML =
        `<div class="w-full h-72 rounded-2xl overflow-hidden mt-4 shadow-2xl font-sans ">
   <div id="image" class="w-full  rounded-2xl h-full relative">
     <div class="absolute z-10 w-full text-center p-4 h-full top-16">
       <p class="text-white text-xl mb-1 font-bold writer"></p>
       <p class="text-sm italic text-white mb-3">"Mimpi boleh melangit tapi kaki harus membumi.  (Kang Emil)"</p>
     <a href="#materi-real" class="bg-yellow-300 font-bold  py-1 px-4 rounded-xl shadow-md ">Baca sekarang <i class="text-xs fas fa-arrow-right"></i></a>
   </div>
 </div>
</div>
<div class="mt-4 bold w-full font-sans">
 <h2 class="mb-2 text-xl font-bold dark:text-white ">Dashboard</h2>
 <div class="flex w-full">
   <a href="#materi-real" class="block w-1/2 bg-white dark:bg-selfmode dark:text-white rounded shadow-xl mr-2 p-4 menu border">
   <div class="flex justify-center w-full">
   <img src="../images/materi.png" width="50" class="rounded-full">
   </div>
     <p class="mt-2 text-xl font-bold text-center">Materi</p>
     <p class="text-xs text-center">Lengkap beserta pembahasan soal</p>
   </a>
   <a href="#profil" class="block w-1/2 bg-white dark:bg-selfmode dark:text-white rounded shadow-xl mr-2 p-4 menu border">
     <div class="flex justify-center w-full">
       <img src="../images/profile.png" width="50" class="rounded-full">
     </div>
     <p class="mt-2 text-xl font-bold text-center">Profil</p>
     <p class="text-xs text-center">Profil Penulis Media Aplikasi Web</p>
   </a>
 </div>
 <div class="flex w-full mt-2">
   <a href="#daftar-pustaka" class="block w-1/2 bg-white dark:bg-selfmode dark:text-white rounded shadow-xl mr-2 p-4 menu border">
   <div class="flex justify-center w-full">
   <img src="../images/PUSTAKA.png" width="50" class="rounded-full">
 </div>
 <p class="mt-2 text-xl font-bold text-center">Daftar Pustaka</p>
 <p class="text-xs text-center">Referensi yang digunakan</p>
   </a>
   <a href="#petunjuk" class="block w-1/2 bg-white rounded dark:bg-selfmode dark:text-white shadow-xl mr-2 p-4 menu border">
   <div class="flex justify-center w-full">
     <img src="../images/petunjuk1.png" width="55" class="rounded-full">
   </div>
     <p class="mt-2 text-xl font-bold text-center">Petunjuk</p>
     <p class="text-xs text-center">Petunjuk Penggunaan Aplikasi Web</p>
   </a>
 </div>
</div>
`
    const writer = document.querySelector('.writer')
    let txt = "Udah baca materi apa hari ini?"

    const typewriter = new Typewriter(writer, {
        loop: true,
        delay: 75,
    })
    typewriter
        .typeString(txt)
        .pauseFor(300)
        .deleteChars(10)
        .pauseFor(1000)
        .start();
}

function profilPage() {
    homeContent.innerHTML =
        `<div style="margin-bottom:5rem;" class="mt-4 surah font-sans d-block bg-bglightmode text-textlightmode shadow-2xl rounded-2xl dark:bg-selfmode dark:text-white">
    <img src="../images/diana.png" alt="CV DIANA" class=" shadow-2xl rounded-2xl" />
  </div>`
}

function petunjuk() {
    homeContent.innerHTML =
        `<div style="margin-bottom:5rem;" class="mt-4 surah font-sans d-block bg-bglightmode text-textlightmode shadow-2xl rounded-2xl dark:bg-selfmode dark:text-white">
  <img src="../images/petunjuk.png" alt="petunjuk" class=" shadow-2xl rounded-2xl" />
</div>`
}