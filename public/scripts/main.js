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


const renderPage = () => {
    let articlesHTML = "";
    homeContent.innerHTML = `
  <div class="mt-4 p-4 relative">
    <input id="search-surah" type="search" name="search"
      class="w-full p-3 focus:outline-none bg-white text-base rounded-lg mx-auto pl-12">
      <i class="fas fa-search absolute top-8 left-8 text-2xl"></i>
  </div>
  <div class="all-surah  p-4 mx-auto"></div>`;
    const allsurah = document.querySelector(".all-surah")

    const Writerinput = document.getElementById('search-surah')

    const customNodeCreator = function(character) {
        // Add character to input placeholder
        Writerinput.placeholder = Writerinput.placeholder + character;

        // Return null to skip internal adding of dom node
        return null;
    }
    const typewriter = new Typewriter(null, {
        loop: false,
        delay: 75,
        onCreateTextNode: customNodeCreator,
    });

    typewriter
        .typeString('mau baca materi apa?')
        .pauseFor(300)
        .start();

    articlesHTML =
        `<div class="w-full mt-4 surah bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl">
      <div class="w-full p-3 rounded-xl card surahId d-block">
        <div class="flex prevent justify-start items-center mb-2">
          <div class=" prevent surah-header rounded-full mr-2">
           9
          </div>
          <div class=" prevent surah-latin text-base font-medium">
          BARISAN BILANGAN REAL
          </div>
        </div>
        <div class="surah-body w-full text-left text-sm mb-2">
        <p>Di sekolah menengah barisan diperkenalkan sebagai kumpulan bilangan yang
        disusun menurut "pola" tertentu, misalnya barisan aritmatika dan barisan geometri.
        Biasanya barisan dan deret merupakan satu kesatuan pokok bahasan. Sekarang
          ...</p> 
      </div>
      <a href="#barisan" class="bg-yellow-500 hover:bg-yellow-400 text-white p-2 inline-block mt-2 rounded">Read more</a>
        </div>
    </div>
    <div class="w-full mt-4 surah bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl">
    <div class="w-full p-3 rounded-xl card surahId d-block">
      <div class="flex prevent justify-start items-center mb-2">
        <div class=" prevent surah-header rounded-full mr-2">
         10
        </div>
        <div class=" prevent surah-latin text-base font-medium">
        TEOREMA KE-KONVERGEN
        </div>
      </div>
      <div class="surah-body w-full text-left text-sm mb-2">
      <p>
      Suatu barisan dikatakan konvergen jika limit barisannya ada. Konsep limit
barisan merupakan konsep dasar (basic) dalam matematika analisis.
Kekonvergenan pada barisan bilangan real, selanjutnya bisa digeneralisasi
pada ruang metrik atau ruang ...
      </p> 
    </div>
    <a href="#konvergen" class="bg-yellow-500 hover:bg-yellow-400 text-white p-2 inline-block mt-2 rounded">Read more</a>
      </div>
  </div>
  <div class="w-full mt-4 surah bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl">
      <div class="w-full p-3 rounded-xl card surahId d-block">
        <div class="flex prevent justify-start items-center mb-2">
          <div class=" prevent surah-header rounded-full mr-2">
           11
          </div>
          <div class=" prevent surah-latin text-base font-medium">
          BARISAN DIVERGEN & TEOREMA CAUCHY
          </div>
        </div>
        <div class="surah-body w-full text-left text-sm mb-2">
        <p>
        Misal (x<sub>2</sub>) adalah bilangan real. Barisan (x<sub>n</sub>) dikatakan barisan Cauchy jika dan hanya jika (x<sub>n</sub>) memenuhi: untuk ϵ>0,   terdapat   bilangan
        asli N sedemikian sehingga untuk tiap bilangan asli n,m dengan ...
        </p> 
      </div>
      <a href="#divergen" class="bg-yellow-500 hover:bg-yellow-400 text-white p-2 inline-block mt-2 rounded">Read more</a>
        </div>
    </div>
    <div class="w-full mt-4 surah bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl">
      <div class="w-full p-3 rounded-xl card surahId d-block">
        <div class="flex prevent justify-start items-center mb-2">
          <div class=" prevent surah-header rounded-full mr-2">
           12
          </div>
          <div class=" prevent surah-latin text-base font-medium">
          LIMIT FUNGSI
          </div>
        </div>
        <div class="surah-body w-full text-left text-sm mb-2">
        <p>Pada bagian ini kita akan mempelajari konsep limit fungsi. Sebelum melangkah lebih jauh, untuk menyegarkan ingatan, perhatikan
        kembali fungsi ...
        </p> 
      </div>
      <a href="#limit-fungsi" class="bg-yellow-500 hover:bg-yellow-400 text-white p-2 inline-block mt-2 rounded">Read more</a>
        </div>
    </div>
    <div class="w-full mt-4 surah bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl">
      <div class="w-full p-3 rounded-xl card surahId d-block">
        <div class="flex prevent justify-start items-center mb-2">
          <div class=" prevent surah-header rounded-full mr-2">
           13
          </div>
          <div class=" prevent surah-latin text-base font-medium">
          TEOREMA LIMIT FUNGSI
          </div>
        </div>
        <div class="surah-body w-full text-left text-sm mb-2">
        <p>Ada beberapa konsep untuk menguji limit suatu fungsi, diantaranya dua teorema di
        bawah ini.
        ...</p> 
      </div>
      <a href="#limit" class="bg-yellow-500 hover:bg-yellow-400 text-white p-2 inline-block mt-2 rounded">Read more</a>
        </div>
    </div>
    <div class="w-full mt-4 mb-6 surah bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl">
      <div class="w-full p-3 rounded-xl card surahId d-block">
        <div class="flex prevent justify-start items-center mb-2">
          <div class=" prevent surah-header rounded-full mr-2">
           14
          </div>
          <div class=" prevent surah-latin text-base font-medium">
          LIMIT TAK HINGGA
          </div>
        </div>
        <div class="surah-body w-full text-left text-sm mb-2">
        <p> Limit ketika x &#8594 &#8734, misalkan f terdefinisi pada [a, &#8734] untuk beberapa bilangan &#8734. Dikatakan ...</p> 
      </div>
      <a href="../limit-tak-hingga.html" class="bg-yellow-500 hover:bg-yellow-400 text-white p-2 inline-block mt-2 rounded">Read more</a>
        </div>
    </div>`;

    allsurah.innerHTML = articlesHTML;
    document.title = 'Materi Analisis Real'

    const searchSurah = document.getElementById('search-surah')
    searchSurah.addEventListener('keyup', filterSurah)

    function filterSurah(e) {
        const filterValue = e.target.value.toUpperCase()

        let surah = document.querySelectorAll('.surah')
        surah.forEach((el, i) => {
            let surahLatin = surah[i].querySelector('.surah-latin')
            if (surahLatin.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                surah[i].style.display = ''
            } else {
                surah[i].style.display = 'none'
            }
        })
    }
}

function profilPage() {
    homeContent.innerHTML =
        `<div style="margin-bottom:5rem;" class="mt-4 surah font-sans d-block bg-bglightmode text-textlightmode shadow-2xl rounded-2xl dark:bg-selfmode dark:text-white">
    <img src="../images/diana.png" alt="CV DIANA" class=" shadow-2xl rounded-2xl" />
  </div>`
}

function daftarpustaka() {
    homeContent.innerHTML = `
<div class="mt-4 dapus font-sans p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-2xl">
<h2 class="text-xl text-center font-bold mb-3">DAFTAR PUSTAKA</h2>
<ul class="divide-y-2 w-100 ">
<!-- ref 9 -->
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">R. G. Bartle dan D. R. Sherbert. 2011. <i>Introduction to Real Analysis Edisi ke-4.</i> John Wiley & Sons, Inc.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">M. Stoll. 2001.<i>Introduction to Real Analysis.</i> Addison Wesley Longman, Inc.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">Davidson, K.R dan Donsig, A. P, 2010. <i>Real Analysis andApplications, Theory and 
    Practice, </i> Springer Science + Business Media, LLC 2010, Chapter 9.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">Royden, H.L.,1987.<i>Real Analysis, </i> Third Edition, Prentice Hall, Englewood Cliffs, Chapter 7.
</li>
<!-- ref 10 -->
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">Andayani.,S. 2020.<i>ahan Ajar Analisis Real 1.</i> Universitas Muhammadiyah Metro
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200">Bartle, R. G dan Donald R. Sherbert. 2000. <i> Introduction to Real Analysis. 3 th.</i> USA: John Wiley and Sons.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">Hernadi. J. 2019. <i> Pengantar Analisis Real 1 </i>
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">Sari K.,D., dkk.<i> Menara Ilmu Analisis Real. </i> Universitas Gajah Mada
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200">Subhan, M., 2017. <i> Analisis Real 1.</i> Universitas Negeri Padang
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 " style="overflow-wrap: break-word;">https://analisisreal.mipa.ugm.ac.id/barisanderet/barisan-konvergen/
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">https://mathpro.id/pembahasan-soal/limit-barisan.html
</li>
<!-- ref 11 -->
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">
    Bartle, R.G and Sherbert, D.R. 2000. <i>Interoduction to Real Analysis.</i> Third Edition. John Wiley and Sons. Ine. USA.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">
    Riyanto, M. Zaki. 2008. <i>Pengantar Analisis Real I.</i> Yogyakarta.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">
    Wen, Themes. 2021. <i>Analisis Real Lanjut 
        : Barisan Cauchy.</i> https://proofficial.id/analisis-real-lanjut-barisan-cauchy/. Diakses pada 15 November 2021 pukul 19.00 WIB.
</li>
<!-- ref 12 -->
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">
    Sudrajat, Asep. 2000. <i>Prestasi Matemtika 2. </i> Ganeca Axact. Bandung.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">
    Suryanto.2014. <i>Pengantar Analisis Real.</i> Universitas Terbuka, Jakarta.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 " style="overflow-wrap: break-word;">
    Syamsul, Maarif. https://www.academia.edu/10223619/227642780_MAKAL AH_LIMIT_FUNGS.doch
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">
    https://www.zenius.net/blog/pembahasan-limit-fungsi-beserta-limit- menujutak-hingga
</li>
<!-- ref 13 -->
<li class="p-3 hover:bg-blue-600 hover:text-blue-200">
    Ghozali Unique. 2013. <i>Analisi Riil II.</i> https://id.scribd.com/doc/148789827/Anlisis-RealII- pdf. 01 Desember 2021
</li>
<!-- ref 14 -->
<li class="p-3 hover:bg-blue-600 hover:text-blue-200" style="overflow-wrap: break-word;">
    Admin. 2021.<i>Contoh Soal Limit.</i> http://teamhannamy.blogspot.com/2021/02/28- contoh-soal-limit-beserta-pembahasan.html?m=1. Diakses 13 Desember 2021 pukul 09:34 WIB.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200">
    Long. 2020. <i>Limit Tak Hingga, Contoh Soal dan Pembahasan.
    </i> https://jagostat.com/matematika-dasar/limit-bentuk-tak-hingga Diakses pada 14 Desember 2021 pukul 22:34 WIB.

</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200">
    Mursita, D. 2013. <i>Limit Tak Hingga dan Limit di Tak Hingga.
    </i> https://studylibid.com/doc/1196 443/limit-tak-hingga-dan-limit-di-tak- hingga. Diakses pada 12 Desember 2021 pukul 11:30 WIB.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 " style="overflow-wrap: break-word;">
    People.usd.id. 2018.
    <i>LIMIT 
        TAK 
        HINGGA.</i> http://people.usd.ac.id/~ydkristanto/wp- content/uploads/2018/02/08Limit -di-Tak-Hingga-Limit-Tak. Diakses pada 12 Desember 2021 pukul 11:00 WIB.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">
    Statmat. 2021.<i>Teorema Limit Tak Hingga Contoh Soal dan Pembahasan.
    </i> https://www.statmat.net/limit-tak-hingga/ Disakses pada 13 Desember 2021 pukul 10:11 WIB.
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 " style="overflow-wrap: break-word;">
    Syaefulamin. 2018. <i>Bentuk Limit 
        Tak Hingga. </i> https://syaefulamin156.wordpress.com/2019/07/16/kalkulus-bentuk-tak- tentu-limit-fungsi/amp/. Diakses pada 14 Desember 2021 pukul 22:37 WIB.
</li>
</ul>
</div>`
}

function petunjuk() {
    homeContent.innerHTML =
        `<div style="margin-bottom:5rem;" class="mt-4 surah font-sans d-block bg-bglightmode text-textlightmode shadow-2xl rounded-2xl dark:bg-selfmode dark:text-white">
  <img src="../images/petunjuk.png" alt="petunjuk" class=" shadow-2xl rounded-2xl" />
</div>`
}