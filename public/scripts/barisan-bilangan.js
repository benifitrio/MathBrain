function barisanBilangan() {
    homeContent.innerHTML = `
<div  style="margin-bottom:6rem;" class="mt-4 surah font-sans p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-2xl">
<b>A.  Barisan Bilangan Real</b>
<p style="text-indent: 20px;">
    Di sekolah menengah barisan diperkenalkan sebagai kumpulan bilangan yang disusun menurut "pola" tertentu, misalnya barisan aritmatika dan barisan geometri. Biasanya barisan dan deret merupakan satu kesatuan pokok bahasan. Sekarang barisan dipahami dari
    sudut pandang analisis sebagai bentuk khusus dari fungsi. Sedangkan deret akan dibahas secara khusus pada bab yang lain.
</p>
<b>B. Pengertian Bilangan dan Limitnya</b>
<p style="padding-left: 10px;">
    <b>1. Definisi 1</b>
    <p style="text-indent: 20px; padding-left: 10px;">
        Barisan bilangan real adalah suatu fungsi bernilai real dengan domain himpunan bilangan asli N. Jadi barisan adalah fungsi <math>
         <mi>X</mi>
       </math> : N → R, dimana setiap n ∈ N nilai fungsi <math>
        <mi>X(n)</mi>
      </math> biasa ditulis sebagai
        <span class="d-block text-center"> 
         <math>
          <mi>X(n)</mi>
        </math> = xn
      </span> Dan disebut suku ke-n barisan X. Notasi barisan yang akan digunakan adalah
        <span class="d-block text-center">
         X, (xn), (xn : n ∈ N)
      </span> Contoh 1. <br> Beberapa barisan dan cara penulisannya:
        <ol style="padding-left:23px ;">
            <li type="a">
                X = (2, 4, 6, 8, · · ·) merupakan barisan bilangangenap. <br> Dapat juga ditulis sebagai X := (2n : n ∈ N).
            </li>
            <li type="a">
                Y = ( <sup>1</sup>&frasl;<sub>1</sub>, <sup>1</sup>&frasl;<sub>2</sub>,<sup>1</sup>&frasl;<sub>3</sub>,. . . ). Dapat juga ditulis Y = ( <sup>1</sup>&frasl;<sub>n</sub>: n ∈ N).
            </li>
            <li type="a">
                Dalam beberapa keperluan praktis, barisan didenisikan secara rekusif atau induktif sebagai berikut <br> x1, x2, · · · , x n−1 diberikan, xn: = f (x<sub>1</sub>, x<sub>2</sub>, · · · , x<sub>n−1</sub>).
            </li>
        </ol>
        <p style="text-indent: 20px; padding-left: 10px;"> Barisan Fibonacci adalah barisan yang berbentuk F: = (1,1,2,3,5,8,...). Barisan ini dapat ditulis secara rekursif sebagai berikut: <br>
            <span class="d-block text-center">
          x<sub>1</sub>=1,x<sub>2</sub>=1,x<sub>n-1</sub> + x<sub>n-2</sub>, untuk n &#8805 3.
         </span>
        </p>
        <p style="text-indent: 20px; padding-left: 10px;">
            Penulisan barisan menggunakan kurung biasa "( )" dimaksudkan untuk membedakannya dengan himpunan biasa yang ditulis menggunakan kurung kurawal ”{ }”. Pada himpunan, anggota yang sama cukup ditulis satu kali. Sedangkan pada barisan, suku-suku yang berbeda
            ada kemungkinan bernilai yang sama, dan semuanya harus ditulis. Sebagai contoh ambil barisan (x<sub>n</sub>) yang didenisikan x<sub>n</sub>= (−1)<sup>n</sup>. Jadi barisannya adalah
            <span class="d-block text-center">
             X = (−1, 1, −1, 1, · · ·).</span>
            <br> Tetapi bila suku-suku ini dipandang sebagai anggota himpunan maka ditulis <span class="d-block text-center">
             X = {−1, 1}.
            </span>
        </p>
    </p>
</p>
<p style="padding-left: 10px;">
    <b>2. Definisi 2</b>
    <p style="text-indent: 20px; padding-left: 10px;">
        Misalkan X = (x<sub>n</sub>) barisan bilangan real. Bilangan real x dikatakan limit dari (x<sub>n</sub>) jika untuk setiap ε > 0 terdapat bilangan asli N (umumnya bergantung pada ε) sehingga berlaku
        <span class="d-block text-center">|(x<sub>n</sub>)−x|&lt; ε untuk setiap n ≥ N.</span>
    </p>
    <p style="text-indent: 20px; padding-left: 10px;">
        Jika x limit dari barisan X maka X dikatakan konvergen ke x dan ditulis <span class="d-block text-center">
      lim X = x, atau lim(x<sub>n</sub>) = x.
     </span> <br> Jika suatu barisan mempunyai limit kita katakan barisan itu konvergen. Sebaliknya, jika tidak mempunyai limit kita katakan ia divergen.
        <br> Diperhatikan pada definisi ini pernyataan |x<sub>n</sub>−x| &lt; ε dapat ditulis sebagai x−ε &lt; x<sub>n</sub> &lt; x+ε. Ini berarti pada suatu saat, semua suku-suku barisan berada dalam "kerangkeng" (x − ε, x + ε). </p>
</p>
<p style=" padding-left: 10px;">
    Kadangkala digunakan notasi x<sub>n</sub> → x untuk menyatakan secara intuitif bahwa x<sub>n</sub> "mendekati" x bila n → ∞. Pada definisi ini kriteria x<sub>n</sub> "mendekati" x diukur oleh ε > 0, sedangkan kriteria n → ∞ dicirikan
    oleh adanya bilangan asli N. Tidak adanya notasi n → ∞ pada penulisan lim(x<sub>n</sub>) dapat dipahami karena barisan yang dibahas adalah barisan takberujung, yaitu banyak sukunya tak terhingga. Muncul pertanyaan apakah mungkin suatu
    barisan konvergen ke dua limit yang berbeda? Jawaban diberikan secara formal dalam teorema berikut.
</p>
<p class="text-center">
    <img src="../images/2022-12-07_082604.png" class="w-100" alt="">
</p>
<p style=" padding-left: 10px;">
    Teorema 1 <br> Suatu barisan bilangan real hanya dapat mempunyai satu limit. Dengan kata lain, jika suatu barisan konvergen maka limitnya tunggal. Bukti. Andaikan barisan X = (x<sub>n</sub>) mempunyai dua limit yang berbeda, katakan
    x
    <sub>a</sub> dan x<sub>b</sub> dengan x<sub>a</sub> = 6 = x<sub>b</sub>. Diberikan ε = <sup>1</sup>&frasl;<sub>3</sub>|x<sub>b</sub> − x<sub>a</sub>|. Karena lim(x<sub>n</sub>) = x<sub>a</sub> maka muntuk ε ini terdapat N<sub>a</sub>                    sehingga
    <span class="d-block text-center">
         |x<sub>n</sub> − x<sub>a</sub>|
        &lt; ε untuk setiap n ≥ Na.
        </span> Juga, karena lim(x<sub>n</sub>) = x<sub>b</sub> maka terdapat N<sub>b</sub> sehingga <span class="d-block text-center">
         |x<sub>n</sub> − x<sub>b</sub>|
         &lt; ε untuk setiap n ≥ N<sub>b</sub>.
        </span>
</p>
<p style=" padding-left: 10px;">
    Sekarang untuk x ≥ maks {N<sub>a</sub>, N<sub>b</sub>} maka berlaku
    <span class="d-block text-center">
         |x
        <sub>a</sub> − x<sub>b</sub>| = |x
        <sub>a</sub> − x<sub>n</sub> + x
        <sub>n</sub> − x<sub>b</sub>| <br>
         ≤ |x<sub>n</sub> - x
         <sub>a</sub>| + |x
         <sub>n</sub> - x
         <sub>b</sub>| <br>
         &lt; ε + ε <br>
         = <sup>2</sup>&frasl;<sub>3</sub> |x
         <sub>a</sub> - x
         <sub>b</sub>|.
    </span>
</p>
<p style=" padding-left: 10px;">
    Akhirnya diperoleh |x<sub>a</sub> - x
    <sub>b</sub>| = |x &lt; <sup>2</sup>&frasl;<sub>3</sub>, |x
    <sub>a</sub> - x
    <sub>b</sub>| suatu pernyataan yang kontradiksi. Pengandaian x<sub>a</sub> 6 = x<sub>b</sub> salah dan haruslah x<sub>a</sub> = x<sub>b</sub>, yaitu limitnya mesti tunggal.
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Pembahasan barisan di sini ditekankan pada pemahaman teoritis bukan pada aspek teknis seperti menghitung nilai limit barisan. Pekerjaan dominan adalah membuktikan suatu barisan dengan limit telah diketahui, bukan menghitung berapa nilai limit suatu barisan.
    Contoh-contoh berikut memberikan gambaran bagaimana definisi digunakan untuk membuktikan kebenaran limit suatu barisan.
</p>
<p style=" padding-left: 10px;">
    Contoh 2 <br> Buktikan bahwa lim(<sup>1</sup>&frasl;<sub>n</sub> ) = 0. <br>
</p>
<p style=" padding-left: 10px;">
    Bukti <br> Secara intuitif fakta ini adalah benar karena kita membagi bilangan 1 dengan bilangan yang semakin membesar menuju takhingga sehingga hasilnya mesti nol. Tapi bukti ini tidak formal karena tidak didasarkan pada teori yang
    ada, misalnya definisi. Berikut bukti formalnya. Disini kita mempunyai x<sub>n</sub> = <sup>1</sup>&frasl;<sub>n</sub>, dan x = 0. Diberikan ε > 0 sebarang. Harus ditemukan bilangan asli N sehingga
    <span class="d-block text-center">
         |x<sub>n</sub> − x| = |<sup>1</sup>&frasl;<sub>n</sub> − 0| = <sup>1</sup>&frasl;<sub>n</sub> &lt; ε untuk setiap n ≥ N.
        </span>
</p>
<p style=" padding-left: 10px;">
    Mudah saja, pada bentuk terakhir ketidaksamaan ini berlaku <sup>1</sup>&frasl;<sub>n</sub> &lt; ε. Diselesaikan, diperoleh n> <sup>1</sup>&frasl;<sub>s</sub>. Jadi cukup diambil sebagai bilangan asli terkecil yang lebih besar dari
    <sup>1</sup>&frasl;<sub>s</sub> atau ceiling dari x yaitu
    <span class="d-block text-center">
      N = (<sup>1</sup>&frasl;<sub>s</sub>).
     </span>
</p>
<p style=" padding-left: 10px;">
    Sebagai contoh, misalkan diberikan ε = 0,013 maka <sup>1</sup>&frasl;<sub>s</sub> = 76,9231. Jadi cukup diambil N = 77. Untuk meyakinkan dapat diperiksa bahwa x<sub>77</sub> = 0,0130, x<sub>78</sub> = 0,0128, x<sub>79</sub> = 0,0127,
    x
    <sub>80</sub> = 0,0125, x<sub>81</sub> = 0,0123, x<sub>82</sub> = 0,0122, kesemuanya kurang dari 0,013. Lebih telitinya x<sub>77</sub> = 0,012987. Terbukti bahwa lim(<sup>1</sup>&frasl;<sub>n</sub>) = 0.
</p>
<p style=" padding-left: 10px;">
    Contoh 3 <br> Buktikan bahwa lim(<sup>n+1</sup>&frasl;<sub>3n+2</sub> ) = <sup>1</sup>&frasl;<sub>3</sub>. <br> Penyelesaian. <br> Disini kita mempunyai x<sub>n</sub> = <sup>(n+1)</sup>&frasl;<sub>(3n+2)</sub> dan x = <sup>1</sup>&frasl;<sub>3</sub>                    <br> |x<sub>n</sub> - x| = (<sup>n+1</sup>&frasl;<sub>3n+2</sub> - <sup>1</sup>&frasl;<sub>3</sub>) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = (3n + 3 - 3n - <sup>2</sup>&frasl;<sub>3</sub>(3n +
    2)) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = <sup>1</sup>&frasl;<sub>3</sub>(3n + 2) <br> Bentuk terakhir ini akan kurang dari ε bila <br> (9n + 6)ε > 1, yaitu n > <sup>6-s</sup>&frasl;<sub>9s</sub>
</p>
<p style=" padding-left: 10px;">
    Jadi N cukup diambil sebagai bilangan asli terkecil yang lebih besar dari <sup>6-s</sup>&frasl;<sub>9s</sub>, yaitu N = <sup>6-s</sup>&frasl;<sub>9s</sub>.
</p>
<p style=" padding-left: 10px;">
    Sebagai contoh, misalkan diberikan ε = 0,013 maka <sup>6-s</sup>&frasl;<sub>9s</sub> = 7.8803. Jadi cukup diambil N = 8. Agar lebih meyakinkan diambil beberapa nilai x<sub>n</sub> - <sup>1</sup>&frasl;<sub>3</sub>, untuk n = 8, 9,
    10, 11, 12, hasilnya 0,0128, 0,0115, 0,0104, 0,0095, 0,0088, yang kesemuanya kurang dari ε = 0,013. Terbukti bahwa lim[<sup>(n+1)</sup>&frasl;<sub>(3n+2)</sub>] = <sup>1</sup>&frasl;<sub>3</sub>.
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Semakin kecil ε > 0 yang diberikan maka semakin besar indeks N yang dapat diambil. Kenyataan ini sesuai dengan definisi bahwa semakin kecil ε > 0 maka semakin kecil lebar "kerangkeng" dan semakin lama pula suku-suku barisan mulai mengumpul di dalam "kerangkeng"
    ini. Kekonvergenan barisan (xn) ditentukan oleh pola suku-suku yang sudah jauh berada di ujung, bukan oleh suku-suku awal. Walaupun pada awalnya suku-suku barisan beruktuasi cukup besar namun bila pada akhirnya suku-suku ini mengumpul
    di sekitar titik tertentu maka barisan ini tetap konvergen. Fakta ini diformal dalam istilah ekor barisan.
</p>
<p style=" padding-left: 10px;">
    <b>3. Definisi 3</b> <br>
    <p style="text-indent: 20px; padding-left: 10px;">
        Misalkan barisan X = (x1, x2, x3, · · · , xn, · · ·) dipotong pada suku ke m dan dibentuk barisan baru
        <span class="d-block text-center">
             X<sub>m</sub> := (x<sub>m</sub>+1, x<sub>m</sub>+2, ...).
            </span>
    </p>
    <p style=" padding-left: 10px;">
        Maka barisan Xm disebut ekor ke m barisan X. Jadi ekor barisan merupakan barisan yang dibentuk dengan memotong m buah suku pertama pada barisan semula. Ternyata sifat kekonvergenan ekor barisan dan barisan semula adalah identik, seperti diungkapkan pada
        teorema berikut.
    </p>
    <p style=" padding-left: 10px;">
        Teorema 2. <br> Barisan X konvergen bila hanya bila ekor barisan X<sub>m</sub> juga konvergen, dan berlaku
        <span class="d-block text-center">
            lim X = lim (X<sub>m</sub>).
        </span>
    </p>
    <p style=" padding-left: 10px;">
        Bukti:
    </p>
    <p style=" padding-left: 10px;">
        Diberikan ε > 0. Karena X = (x<sub>n</sub> : n = 1, 2, · · ·) konvergen, katakan lim(x<sub>n</sub>) = x maka terdapat bilangan asli N sehingga
        <span class="d-block text-center">
            |x<sub>n</sub> - x| &lt; ε untuk setiap n = N, N + 1, N + 2, ...
        </span>
    </p>
    <p style=" padding-left: 10px;">
        Misalkan ekor barisan lim X<sub>m</sub> = {x<sub>m+n</sub> : n = 1, 2, 3, ... }. Karena jika n ≥ N berakibat m + n ≥ N maka untuk N ini berlaku
        <span class="d-block text-center">
             |x<sub>m+n</sub> - x| &lt; ε untuk setiap n = N, N + 1, N + 2, ...
        </span>
    </p>
    <p style=" padding-left: 10px;">
        Ini menunjukkan bahwa lim X<sub>m</sub> = x. (←) Diketahui X<sub>m</sub> konvergen, yaitu lim X<sub>m</sub> = x maka untuk ε > 0 sebarang terdapat bilangan asli N sehingga
        <span class="d-block text-center">
          |x<sub>m+n</sub> - x| &lt; ε untuk setiap m
          + n = N, N + 1, N + 2, ...
           </span>
    </p>
    <p style=" padding-left: 10px;">
        Dengan mengambil N1 = N − m maka berlaku
        <span class="d-block text-center">
       |x<sub>n</sub> - x| &lt; ε untuk setiap n = N<sub>1</sub>, N<sub>1</sub>+ 1, N + 2, ...
        </span>
    </p>
    <p style=" padding-left: 10px;">
        Karena itu berdasarkan denisi disimpulkan lim X = x.
    </p>
    <p style="text-indent: 20px; padding-left: 10px;">
        Pembuktikan limit barisan langsung dari definisi akan menjadi sulit bilamana bentuk barisan yang dihadapi cukup rumit. Melalui definisi dikembangkan "alat-alat" sederhana yang dapat digunakan untuk membuktikan limit barisan, khususnya barisan yang mempunyai
        bentuk tertentu. Berikut sebuah teorema sederhana yang dapat mendeteksi dengan mudah kekonvergenan suatu barisan.
    </p>
    <p style=" padding-left: 10px;">
        Teorema 3
    </p>
    <p style=" padding-left: 10px;">
        Misalkan ada dua barisan bilangan real (a<sub>n</sub>) dan (x<sub>n</sub>). Jika ada C > 0 dan m ∈ N sehingga berlaku
        <span class="d-block text-center">
             |x<sub>n</sub> - x| ≤ C|a<sub>n</sub>| untuk semua n ≥ m dan lim(a<sub>n</sub>) = 0 maka lim(x<sub>n</sub>) = x.
              </span>
    </p>
    <p style=" padding-left: 10px;">
        Bukti: <br> Diberikan ε > 0. Karena lim(a<sub>n</sub>) = 0 maka ada N<sub>a</sub> ∈ N sehingga
        <span class="d-block text-center">
             |a<sub>n</sub>| &lt; <sup>s</sup>&frasl;<sub>C</sub> untuk setiap n ≥ N <sub>a</sub>.
              </span>
    </p>
    <p style=" padding-left: 10px;">
        Jadi untuk setiap n ≥ N := maks {N<sub>a</sub>, m} berlaku
        <span class="d-block text-center">
          |x<sub>n</sub> - x| ≤ C|a<sub>n</sub>| &lt; C(<sup>s</sup>&frasl;<sub>C</sub>) = ε. 
           </span>
    </p>
    <p style=" padding-left: 10px;">
        Terbukti bahwa lim(x<sub>a</sub>) = x. <br> Dikatakan teorema terdominasi karena suku-suku |x<sub>n</sub> − x| pada akhirnya selalu terdominasi dari atas oleh barisan (a<sub>n</sub>) yang konvergen ke nol. Dalam penggunaan teorema
        ini diperlukan menemukan barisan (a<sub>n</sub>) dan konstanta C > 0 seperti dalam teorema.
    </p>
    <p style=" padding-left: 10px;">
        Contoh 4 <br> Bila a > 0, buktikan barisan lim(<sup>1</sup>&frasl;<sub>1</sub> + n<sub>a</sub> ) = 0.
    </p>
    <p style=" padding-left: 10px;">
        Bukti: <br> Karena a > 0 berlaku 0 &lt; na &lt; na + 1, dan akibatnya kita mempunyai
        <span class="d-block text-center">
            <sup>1</sup>&frasl;<sub>na</sub> + 1
            &lt; <sup>1</sup>&frasl;<sub>na</sub>
        </span>
    </p>
    <p style=" padding-left: 10px;">
        Selanjutnya, <br>
        <span class="d-block text-center">
             |<sup>1</sup>&frasl;<sub>1</sub> + na - 0| = <sup>1</sup>&frasl;<sub>1</sub> + na &lt; (<sup>1</sup>&frasl;<sub>a</sub>)(<sup>1</sup>&frasl;<sub>n</sub>).
            </span>
    </p>
    <p style=" padding-left: 10px;">
        Dengan mengambil C = <sup>1</sup>&frasl;<sub>a</sub> dan a<sub>n</sub> = <sup>1</sup>&frasl;<sub>n</sub> dan dikarenakan lim a<sub>n</sub> = 0 maka dengan teorema disimpulkan bahwa lim(<sup>1</sup>&frasl;<sub>1</sub> + na) = 0.
    </p>
    <p style=" padding-left: 10px;">
        Contoh 5. <br>Misalkan 0 &lt; b &lt; 1, buktikan lim(b<sup>n</sup>) = 0.
    </p>
    <p style=" padding-left: 10px;">
        Bukti: <br> Ambil a = (<sup>1 - b </sup>&frasl;<sub>b</sub>) = (<sup>b</sup>&frasl;<sub>1 - b </sub>) > 0. Dapat ditulis b = <sup>1</sup>&frasl;<sub>(1+a)</sub>. Dengan ketidaksamaan Bernoulli berlaku (1 + a)<sup>n</sup> ≥ 1 +
        na dan diperoleh <br> 0 &lt; <sup>1</sup>&frasl;<sub>(1+a)<sup>n</sup></sub> ≤ <sup>1</sup>&frasl;<sub>1</sub> + na &lt; <sup>1</sup>&frasl;<sub>na</sub> = (<sup>1</sup>&frasl;<sub>a</sub>)(<sup>1</sup>&frasl;<sub>n</sub>).
    </p>
    <p style=" padding-left: 10px;">
        Diambil a<sub>n</sub> = <sup>1</sup>&frasl;<sub>n</sub> dan C = <sup>1</sup>&frasl;<sub>a</sub> maka berdasarkan teorema terbukti lim(b<sup>n</sup>) = 0.
    </p>
</p>
<b>C. Kesimpulan</b>
<p style="text-indent: 20px;">
    Barisan adalah suatu fungsi dari himpunan bilangan asli ke himpunan bilangan real (f : N → R). pada bilangan real kita dapat menunjukkan suatu barisan itu konvergen dan terbatas berdasarkan teorema – teorema yang ada, lain halnya dengan Ruang metric,
    ruang metric adalah pasangan ,dimana adalah himpunan dan adalah metrik pada atau fungsi Jarak sebagai fungsi yang bernilai real . Barisan konvergen dan terbatas saling terkait dimana suatu barisan konvergen dalam ruang metric adalah
    terbatas, tapi belum tentu barisan yang terbatas itu adalah barisan yang konvergen. Suatu barisan konvergen dalam ruang metric adalah barisan Cauchy dan barisan Cauchy dalam ruang metric adalah terbatas. Teorema ini bersifat implikasi
    yang artinya hanya dapat diartikan satu arah saja karena belum tentu barisan Cauchy dalam ruang metric itu adalah konvergen dan begitu juga dengan barisan terbatas dalam ruang metric itu adalah barisan Cauchy.
</p>
<b>Beberapa contoh soal:</b>
<p>
    1). Gunakan definisi limit untuk membuktikan
    <mjx-container class="MathJax" jax="CHTML" display="true">
        <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
            <mjx-mo class="mjx-n">
                <mjx-c class="mjx-c6C"></mjx-c>
                <mjx-c class="mjx-c69"></mjx-c>
                <mjx-c class="mjx-c6D"></mjx-c>
            </mjx-mo>
            <mjx-mrow>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                </mjx-mo>
                <mjx-mfrac>
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mi class="mjx-i">
                                <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                            </mjx-mi>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mi class="mjx-i">
                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                        </mjx-mi>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                </mjx-mo>
            </mjx-mrow>
            <mjx-mo class="mjx-n" space="4">
                <mjx-c class="mjx-c3D"></mjx-c>
            </mjx-mo>
            <mjx-mn class="mjx-n" space="4">
                <mjx-c class="mjx-c30"></mjx-c>
            </mjx-mn>
        </mjx-math>
    </mjx-container>
    <span class="solution-btn" id="34">Pembahasan</span>
    <p>Diambil sebarang
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container> dan
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2208"></mjx-c>
                </mjx-mo>
                <mjx-texatom space="4" texclass="ORD">
                    <mjx-mi class="mjx-ds mjx-b">
                        <mjx-c class="mjx-c211D TEX-A"></mjx-c>
                    </mjx-mi>
                </mjx-texatom>
            </mjx-math>
        </mjx-container>, sehingga
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mo class="mjx-n">
                    <mjx-c class="mjx-c7C"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c7C"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>. Berdasarkan Sifat Archimedes, terdapat
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2208"></mjx-c>
                </mjx-mo>
                <mjx-texatom space="4" texclass="ORD">
                    <mjx-mi class="mjx-ds mjx-b">
                        <mjx-c class="mjx-c2115 TEX-A"></mjx-c>
                    </mjx-mi>
                </mjx-texatom>
            </mjx-math>
        </mjx-container> sedemikian sehingga
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-texatom space="4" texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c7C"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c7C"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>. Dengan kata lain,
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mo class="mjx-n">
                    <mjx-c class="mjx-c7C"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c7C"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3C"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>.
    </p>
    <p>Jika
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2265"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>, maka
        <mjx-container class="MathJax" jax="CHTML" display="true">
            <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                <mjx-mrow>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.24em; vertical-align: -0.87em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                    <mjx-mfrac>
                        <mjx-frac type="d">
                            <mjx-num>
                                <mjx-nstrut type="d"></mjx-nstrut>
                                <mjx-mi class="mjx-i">
                                    <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                                </mjx-mi>
                            </mjx-num>
                            <mjx-dbox>
                                <mjx-dtable>
                                    <mjx-line type="d"></mjx-line>
                                    <mjx-row>
                                        <mjx-den>
                                            <mjx-dstrut type="d"></mjx-dstrut>
                                            <mjx-mi class="mjx-i">
                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                            </mjx-mi>
                                        </mjx-den>
                                    </mjx-row>
                                </mjx-dtable>
                            </mjx-dbox>
                        </mjx-frac>
                    </mjx-mfrac>
                    <mjx-mo class="mjx-n" space="3">
                        <mjx-c class="mjx-c2212"></mjx-c>
                    </mjx-mo>
                    <mjx-mn class="mjx-n" space="3">
                        <mjx-c class="mjx-c30"></mjx-c>
                    </mjx-mn>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.24em; vertical-align: -0.87em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                </mjx-mrow>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mrow space="4">
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.24em; vertical-align: -0.87em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                    <mjx-mfrac>
                        <mjx-frac type="d">
                            <mjx-num>
                                <mjx-nstrut type="d"></mjx-nstrut>
                                <mjx-mi class="mjx-i">
                                    <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                                </mjx-mi>
                            </mjx-num>
                            <mjx-dbox>
                                <mjx-dtable>
                                    <mjx-line type="d"></mjx-line>
                                    <mjx-row>
                                        <mjx-den>
                                            <mjx-dstrut type="d"></mjx-dstrut>
                                            <mjx-mi class="mjx-i">
                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                            </mjx-mi>
                                        </mjx-den>
                                    </mjx-row>
                                </mjx-dtable>
                            </mjx-dbox>
                        </mjx-frac>
                    </mjx-mfrac>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.24em; vertical-align: -0.87em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                </mjx-mrow>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mfrac space="4">
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mrow>
                                <mjx-mo class="mjx-n">
                                    <mjx-c class="mjx-c7C"></mjx-c>
                                </mjx-mo>
                                <mjx-mi class="mjx-i">
                                    <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                                </mjx-mi>
                                <mjx-mo class="mjx-n">
                                    <mjx-c class="mjx-c7C"></mjx-c>
                                </mjx-mo>
                            </mjx-mrow>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mi class="mjx-i">
                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                        </mjx-mi>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2264"></mjx-c>
                </mjx-mo>
                <mjx-mfrac space="4">
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mrow>
                                <mjx-mo class="mjx-n">
                                    <mjx-c class="mjx-c7C"></mjx-c>
                                </mjx-mo>
                                <mjx-mi class="mjx-i">
                                    <mjx-c class="mjx-c1D44F TEX-I"></mjx-c>
                                </mjx-mi>
                                <mjx-mo class="mjx-n">
                                    <mjx-c class="mjx-c7C"></mjx-c>
                                </mjx-mo>
                            </mjx-mrow>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mi class="mjx-i">
                                            <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                                        </mjx-mi>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3C"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>
    </p>
    <p>Dengan demikian, limit dari barisan tersebut adalah
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c32"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>.</p>
</p>
<p>
    2). Gunakan definisi limit untuk membuktikan
    <mjx-container class="MathJax" jax="CHTML" display="true">
        <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
            <mjx-mo class="mjx-n">
                <mjx-c class="mjx-c6C"></mjx-c>
                <mjx-c class="mjx-c69"></mjx-c>
                <mjx-c class="mjx-c6D"></mjx-c>
            </mjx-mo>
            <mjx-mrow>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                </mjx-mo>
                <mjx-mfrac>
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mi class="mjx-i">
                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                            </mjx-mi>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mrow>
                                            <mjx-msup>
                                                <mjx-mi class="mjx-i">
                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                </mjx-mi>
                                                <mjx-script style="vertical-align: 0.289em;">
                                                    <mjx-mn class="mjx-n" size="s">
                                                        <mjx-c class="mjx-c32"></mjx-c>
                                                    </mjx-mn>
                                                </mjx-script>
                                            </mjx-msup>
                                            <mjx-mo class="mjx-n" space="3">
                                                <mjx-c class="mjx-c2B"></mjx-c>
                                            </mjx-mo>
                                            <mjx-mn class="mjx-n" space="3">
                                                <mjx-c class="mjx-c31"></mjx-c>
                                            </mjx-mn>
                                        </mjx-mrow>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                </mjx-mo>
            </mjx-mrow>
            <mjx-mo class="mjx-n" space="4">
                <mjx-c class="mjx-c3D"></mjx-c>
            </mjx-mo>
            <mjx-mn class="mjx-n" space="4">
                <mjx-c class="mjx-c30"></mjx-c>
            </mjx-mn>
        </mjx-math>
    </mjx-container>
    <span class="solution-btn" id="35">Pembahasan</span>
    <p>Diambil sebarang
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>, sehingga
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>. Berdasarkan Sifat Archimedes, terdapat
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2208"></mjx-c>
                </mjx-mo>
                <mjx-texatom space="4" texclass="ORD">
                    <mjx-mi class="mjx-ds mjx-b">
                        <mjx-c class="mjx-c2115 TEX-A"></mjx-c>
                    </mjx-mi>
                </mjx-texatom>
            </mjx-math>
        </mjx-container> sedemikian sehingga
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>. Dengan kata lain,
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3C"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>.</p>
    <p>Jika
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2265"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>, maka
        <mjx-container class="MathJax" jax="CHTML" display="true">
            <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                <mjx-mrow>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.104em; vertical-align: -0.802em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                    <mjx-mfrac>
                        <mjx-frac type="d">
                            <mjx-num>
                                <mjx-nstrut type="d"></mjx-nstrut>
                                <mjx-mi class="mjx-i">
                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                </mjx-mi>
                            </mjx-num>
                            <mjx-dbox>
                                <mjx-dtable>
                                    <mjx-line type="d"></mjx-line>
                                    <mjx-row>
                                        <mjx-den>
                                            <mjx-dstrut type="d"></mjx-dstrut>
                                            <mjx-mrow>
                                                <mjx-msup>
                                                    <mjx-mi class="mjx-i">
                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                    </mjx-mi>
                                                    <mjx-script style="vertical-align: 0.289em;">
                                                        <mjx-mn class="mjx-n" size="s">
                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-script>
                                                </mjx-msup>
                                                <mjx-mo class="mjx-n" space="3">
                                                    <mjx-c class="mjx-c2B"></mjx-c>
                                                </mjx-mo>
                                                <mjx-mn class="mjx-n" space="3">
                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                </mjx-mn>
                                            </mjx-mrow>
                                        </mjx-den>
                                    </mjx-row>
                                </mjx-dtable>
                            </mjx-dbox>
                        </mjx-frac>
                    </mjx-mfrac>
                    <mjx-mo class="mjx-n" space="3">
                        <mjx-c class="mjx-c2212"></mjx-c>
                    </mjx-mo>
                    <mjx-mn class="mjx-n" space="3">
                        <mjx-c class="mjx-c30"></mjx-c>
                    </mjx-mn>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.104em; vertical-align: -0.802em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                </mjx-mrow>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mrow space="4">
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.104em; vertical-align: -0.802em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                    <mjx-mfrac>
                        <mjx-frac type="d">
                            <mjx-num>
                                <mjx-nstrut type="d"></mjx-nstrut>
                                <mjx-mi class="mjx-i">
                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                </mjx-mi>
                            </mjx-num>
                            <mjx-dbox>
                                <mjx-dtable>
                                    <mjx-line type="d"></mjx-line>
                                    <mjx-row>
                                        <mjx-den>
                                            <mjx-dstrut type="d"></mjx-dstrut>
                                            <mjx-mrow>
                                                <mjx-msup>
                                                    <mjx-mi class="mjx-i">
                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                    </mjx-mi>
                                                    <mjx-script style="vertical-align: 0.289em;">
                                                        <mjx-mn class="mjx-n" size="s">
                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-script>
                                                </mjx-msup>
                                                <mjx-mo class="mjx-n" space="3">
                                                    <mjx-c class="mjx-c2B"></mjx-c>
                                                </mjx-mo>
                                                <mjx-mn class="mjx-n" space="3">
                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                </mjx-mn>
                                            </mjx-mrow>
                                        </mjx-den>
                                    </mjx-row>
                                </mjx-dtable>
                            </mjx-dbox>
                        </mjx-frac>
                    </mjx-mfrac>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.104em; vertical-align: -0.802em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                </mjx-mrow>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mfrac space="4">
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mi class="mjx-i">
                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                            </mjx-mi>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mrow>
                                            <mjx-msup>
                                                <mjx-mi class="mjx-i">
                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                </mjx-mi>
                                                <mjx-script style="vertical-align: 0.289em;">
                                                    <mjx-mn class="mjx-n" size="s">
                                                        <mjx-c class="mjx-c32"></mjx-c>
                                                    </mjx-mn>
                                                </mjx-script>
                                            </mjx-msup>
                                            <mjx-mo class="mjx-n" space="3">
                                                <mjx-c class="mjx-c2B"></mjx-c>
                                            </mjx-mo>
                                            <mjx-mn class="mjx-n" space="3">
                                                <mjx-c class="mjx-c31"></mjx-c>
                                            </mjx-mn>
                                        </mjx-mrow>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3C"></mjx-c>
                </mjx-mo>
                <mjx-mfrac space="4">
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mi class="mjx-i">
                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                            </mjx-mi>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-msup>
                                            <mjx-mi class="mjx-i">
                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                            </mjx-mi>
                                            <mjx-script style="vertical-align: 0.289em;">
                                                <mjx-mn class="mjx-n" size="s">
                                                    <mjx-c class="mjx-c32"></mjx-c>
                                                </mjx-mn>
                                            </mjx-script>
                                        </mjx-msup>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mfrac space="4">
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mn class="mjx-n">
                                <mjx-c class="mjx-c31"></mjx-c>
                            </mjx-mn>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mi class="mjx-i">
                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                        </mjx-mi>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2264"></mjx-c>
                </mjx-mo>
                <mjx-mfrac space="4">
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mn class="mjx-n">
                                <mjx-c class="mjx-c31"></mjx-c>
                            </mjx-mn>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mi class="mjx-i">
                                            <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                                        </mjx-mi>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3C"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>
    </p>
    <p>Dengan demikian, limit dari barisan tersebut adalah
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>.</p>
</p>
<p>
    3). Gunakan definisi limit untuk membuktikan
    <mjx-container class="MathJax" jax="CHTML" display="true">
        <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
            <mjx-mo class="mjx-n">
                <mjx-c class="mjx-c6C"></mjx-c>
                <mjx-c class="mjx-c69"></mjx-c>
                <mjx-c class="mjx-c6D"></mjx-c>
            </mjx-mo>
            <mjx-mrow>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                </mjx-mo>
                <mjx-mfrac>
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mrow>
                                <mjx-mn class="mjx-n">
                                    <mjx-c class="mjx-c33"></mjx-c>
                                </mjx-mn>
                                <mjx-mi class="mjx-i">
                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                </mjx-mi>
                                <mjx-mo class="mjx-n" space="3">
                                    <mjx-c class="mjx-c2B"></mjx-c>
                                </mjx-mo>
                                <mjx-mn class="mjx-n" space="3">
                                    <mjx-c class="mjx-c31"></mjx-c>
                                </mjx-mn>
                            </mjx-mrow>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mrow>
                                            <mjx-mn class="mjx-n">
                                                <mjx-c class="mjx-c32"></mjx-c>
                                            </mjx-mn>
                                            <mjx-mi class="mjx-i">
                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                            </mjx-mi>
                                            <mjx-mo class="mjx-n" space="3">
                                                <mjx-c class="mjx-c2B"></mjx-c>
                                            </mjx-mo>
                                            <mjx-mn class="mjx-n" space="3">
                                                <mjx-c class="mjx-c35"></mjx-c>
                                            </mjx-mn>
                                        </mjx-mrow>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                </mjx-mo>
            </mjx-mrow>
            <mjx-mo class="mjx-n" space="4">
                <mjx-c class="mjx-c3D"></mjx-c>
            </mjx-mo>
            <mjx-mfrac space="4">
                <mjx-frac type="d">
                    <mjx-num>
                        <mjx-nstrut type="d"></mjx-nstrut>
                        <mjx-mn class="mjx-n">
                            <mjx-c class="mjx-c33"></mjx-c>
                        </mjx-mn>
                    </mjx-num>
                    <mjx-dbox>
                        <mjx-dtable>
                            <mjx-line type="d"></mjx-line>
                            <mjx-row>
                                <mjx-den>
                                    <mjx-dstrut type="d"></mjx-dstrut>
                                    <mjx-mn class="mjx-n">
                                        <mjx-c class="mjx-c32"></mjx-c>
                                    </mjx-mn>
                                </mjx-den>
                            </mjx-row>
                        </mjx-dtable>
                    </mjx-dbox>
                </mjx-frac>
            </mjx-mfrac>
        </mjx-math>
    </mjx-container>
    <span class="solution-btn" id="37">Pembahasan</span>
    <p>Diambil sebarang
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>, sehingga
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c31"></mjx-c>
                    <mjx-c class="mjx-c33"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c34"></mjx-c>
                </mjx-mn>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>. Berdasarkan Sifat Archimedes, terdapat
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2208"></mjx-c>
                </mjx-mo>
                <mjx-texatom space="4" texclass="ORD">
                    <mjx-mi class="mjx-ds mjx-b">
                        <mjx-c class="mjx-c2115 TEX-A"></mjx-c>
                    </mjx-mi>
                </mjx-texatom>
            </mjx-math>
        </mjx-container> sedemikian sehingga
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c31"></mjx-c>
                    <mjx-c class="mjx-c33"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c34"></mjx-c>
                </mjx-mn>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>. Dengan kata lain,
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c31"></mjx-c>
                    <mjx-c class="mjx-c33"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c34"></mjx-c>
                </mjx-mn>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3C"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>.</p>
    <p>Jika
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2265"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>, maka
        <mjx-container class="MathJax" jax="CHTML" display="true">
            <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                <mjx-mtable style="min-width: 15.898em;">
                    <mjx-table>
                        <mjx-itable>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-bottom: 0.15em;">
                                    <mjx-mrow>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.184em; vertical-align: -0.842em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                        <mjx-mfrac>
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mrow>
                                                        <mjx-mn class="mjx-n">
                                                            <mjx-c class="mjx-c33"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-mi class="mjx-i">
                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                        </mjx-mi>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2B"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c31"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-mrow>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mrow>
                                                                    <mjx-mn class="mjx-n">
                                                                        <mjx-c class="mjx-c32"></mjx-c>
                                                                    </mjx-mn>
                                                                    <mjx-mi class="mjx-i">
                                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                    </mjx-mi>
                                                                    <mjx-mo class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                                    </mjx-mo>
                                                                    <mjx-mn class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c35"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-mrow>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n" space="3">
                                            <mjx-c class="mjx-c2212"></mjx-c>
                                        </mjx-mo>
                                        <mjx-mfrac space="3">
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mn class="mjx-n">
                                                        <mjx-c class="mjx-c33"></mjx-c>
                                                    </mjx-mn>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mn class="mjx-n">
                                                                    <mjx-c class="mjx-c32"></mjx-c>
                                                                </mjx-mn>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.184em; vertical-align: -0.842em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                    </mjx-mrow>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mrow space="4">
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.184em; vertical-align: -0.842em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                        <mjx-mfrac>
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mrow>
                                                        <mjx-mn class="mjx-n">
                                                            <mjx-c class="mjx-c36"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-mi class="mjx-i">
                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                        </mjx-mi>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2B"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c36"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-mi class="mjx-i">
                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                        </mjx-mi>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c31"></mjx-c>
                                                            <mjx-c class="mjx-c35"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-mrow>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mrow>
                                                                    <mjx-mn class="mjx-n">
                                                                        <mjx-c class="mjx-c34"></mjx-c>
                                                                    </mjx-mn>
                                                                    <mjx-mi class="mjx-i">
                                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                    </mjx-mi>
                                                                    <mjx-mo class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                                    </mjx-mo>
                                                                    <mjx-mn class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c31"></mjx-c>
                                                                        <mjx-c class="mjx-c30"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-mrow>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.184em; vertical-align: -0.842em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                    </mjx-mrow>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mrow space="4">
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.184em; vertical-align: -0.842em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                        <mjx-mfrac>
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mrow>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n">
                                                            <mjx-c class="mjx-c31"></mjx-c>
                                                            <mjx-c class="mjx-c33"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-mrow>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mrow>
                                                                    <mjx-mn class="mjx-n">
                                                                        <mjx-c class="mjx-c34"></mjx-c>
                                                                    </mjx-mn>
                                                                    <mjx-mi class="mjx-i">
                                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                    </mjx-mi>
                                                                    <mjx-mo class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                                    </mjx-mo>
                                                                    <mjx-mn class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c31"></mjx-c>
                                                                        <mjx-c class="mjx-c30"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-mrow>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.184em; vertical-align: -0.842em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                    </mjx-mrow>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mn class="mjx-n">
                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                    <mjx-c class="mjx-c33"></mjx-c>
                                                </mjx-mn>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-mrow>
                                                                <mjx-mn class="mjx-n">
                                                                    <mjx-c class="mjx-c34"></mjx-c>
                                                                </mjx-mn>
                                                                <mjx-mi class="mjx-i">
                                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                </mjx-mi>
                                                                <mjx-mo class="mjx-n" space="3">
                                                                    <mjx-c class="mjx-c2B"></mjx-c>
                                                                </mjx-mo>
                                                                <mjx-mn class="mjx-n" space="3">
                                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                                    <mjx-c class="mjx-c30"></mjx-c>
                                                                </mjx-mn>
                                                            </mjx-mrow>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3C"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mn class="mjx-n">
                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                    <mjx-c class="mjx-c33"></mjx-c>
                                                </mjx-mn>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-mrow>
                                                                <mjx-mn class="mjx-n">
                                                                    <mjx-c class="mjx-c34"></mjx-c>
                                                                </mjx-mn>
                                                                <mjx-mi class="mjx-i">
                                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                </mjx-mi>
                                                            </mjx-mrow>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c2264"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mn class="mjx-n">
                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                    <mjx-c class="mjx-c33"></mjx-c>
                                                </mjx-mn>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-mrow>
                                                                <mjx-mn class="mjx-n">
                                                                    <mjx-c class="mjx-c34"></mjx-c>
                                                                </mjx-mn>
                                                                <mjx-mi class="mjx-i">
                                                                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                                                                </mjx-mi>
                                                            </mjx-mrow>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3C"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mi class="mjx-i" space="4">
                                        <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                                    </mjx-mi>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                        </mjx-itable>
                    </mjx-table>
                </mjx-mtable>
            </mjx-math>
        </mjx-container>
    </p>
    <p>Dengan demikian, limit dari barisan tersebut adalah
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c33"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c32"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>.
    </p>
</p>
<p>
    4). Buktikann bahwa
    <mjx-container class="MathJax" jax="CHTML" display="true">
        <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
            <mjx-mo class="mjx-n">
                <mjx-c class="mjx-c6C"></mjx-c>
                <mjx-c class="mjx-c69"></mjx-c>
                <mjx-c class="mjx-c6D"></mjx-c>
            </mjx-mo>
            <mjx-mrow>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                </mjx-mo>
                <mjx-mfrac>
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mn class="mjx-n">
                                <mjx-c class="mjx-c31"></mjx-c>
                            </mjx-mn>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-msqrt>
                                            <mjx-sqrt>
                                                <mjx-surd>
                                                    <mjx-mo class="mjx-n">
                                                        <mjx-c class="mjx-c221A"></mjx-c>
                                                    </mjx-mo>
                                                </mjx-surd>
                                                <mjx-box style="padding-top: 0.129em;">
                                                    <mjx-mi class="mjx-i">
                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                    </mjx-mi>
                                                    <mjx-mo class="mjx-n" space="3">
                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                    </mjx-mo>
                                                    <mjx-mn class="mjx-n" space="3">
                                                        <mjx-c class="mjx-c37"></mjx-c>
                                                    </mjx-mn>
                                                </mjx-box>
                                            </mjx-sqrt>
                                        </mjx-msqrt>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                </mjx-mo>
            </mjx-mrow>
            <mjx-mo class="mjx-n" space="4">
                <mjx-c class="mjx-c3D"></mjx-c>
            </mjx-mo>
            <mjx-mn class="mjx-n" space="4">
                <mjx-c class="mjx-c30"></mjx-c>
            </mjx-mn>
        </mjx-math>
    </mjx-container>
    <span class="solution-btn" id="40">Pembahasan</span>
    <p>Untuk setiap
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2208"></mjx-c>
                </mjx-mo>
                <mjx-texatom space="4" texclass="ORD">
                    <mjx-mi class="mjx-ds mjx-b">
                        <mjx-c class="mjx-c2115 TEX-A"></mjx-c>
                    </mjx-mi>
                </mjx-texatom>
            </mjx-math>
        </mjx-container>, berlaku
        <mjx-container class="MathJax" jax="CHTML" display="true">
            <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                <mjx-mrow>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.54em; vertical-align: -1.02em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                    <mjx-mfrac>
                        <mjx-frac type="d">
                            <mjx-num>
                                <mjx-nstrut type="d"></mjx-nstrut>
                                <mjx-mn class="mjx-n">
                                    <mjx-c class="mjx-c31"></mjx-c>
                                </mjx-mn>
                            </mjx-num>
                            <mjx-dbox>
                                <mjx-dtable>
                                    <mjx-line type="d"></mjx-line>
                                    <mjx-row>
                                        <mjx-den>
                                            <mjx-dstrut type="d"></mjx-dstrut>
                                            <mjx-msqrt>
                                                <mjx-sqrt>
                                                    <mjx-surd>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c221A"></mjx-c>
                                                        </mjx-mo>
                                                    </mjx-surd>
                                                    <mjx-box style="padding-top: 0.129em;">
                                                        <mjx-mi class="mjx-i">
                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                        </mjx-mi>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2B"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c37"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-box>
                                                </mjx-sqrt>
                                            </mjx-msqrt>
                                        </mjx-den>
                                    </mjx-row>
                                </mjx-dtable>
                            </mjx-dbox>
                        </mjx-frac>
                    </mjx-mfrac>
                    <mjx-mo class="mjx-n" space="3">
                        <mjx-c class="mjx-c2212"></mjx-c>
                    </mjx-mo>
                    <mjx-mn class="mjx-n" space="3">
                        <mjx-c class="mjx-c30"></mjx-c>
                    </mjx-mn>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.54em; vertical-align: -1.02em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                </mjx-mrow>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mrow space="4">
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.54em; vertical-align: -1.02em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                    <mjx-mfrac>
                        <mjx-frac type="d">
                            <mjx-num>
                                <mjx-nstrut type="d"></mjx-nstrut>
                                <mjx-mn class="mjx-n">
                                    <mjx-c class="mjx-c31"></mjx-c>
                                </mjx-mn>
                            </mjx-num>
                            <mjx-dbox>
                                <mjx-dtable>
                                    <mjx-line type="d"></mjx-line>
                                    <mjx-row>
                                        <mjx-den>
                                            <mjx-dstrut type="d"></mjx-dstrut>
                                            <mjx-msqrt>
                                                <mjx-sqrt>
                                                    <mjx-surd>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c221A"></mjx-c>
                                                        </mjx-mo>
                                                    </mjx-surd>
                                                    <mjx-box style="padding-top: 0.129em;">
                                                        <mjx-mi class="mjx-i">
                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                        </mjx-mi>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2B"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c37"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-box>
                                                </mjx-sqrt>
                                            </mjx-msqrt>
                                        </mjx-den>
                                    </mjx-row>
                                </mjx-dtable>
                            </mjx-dbox>
                        </mjx-frac>
                    </mjx-mfrac>
                    <mjx-mo class="mjx-n">
                        <mjx-stretchy-v style="height: 2.54em; vertical-align: -1.02em;" class="mjx-c7C">
                            <mjx-ext>
                                <mjx-c></mjx-c>
                            </mjx-ext>
                            <mjx-mark></mjx-mark>
                        </mjx-stretchy-v>
                    </mjx-mo>
                </mjx-mrow>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mfrac space="4">
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mn class="mjx-n">
                                <mjx-c class="mjx-c31"></mjx-c>
                            </mjx-mn>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-msqrt>
                                            <mjx-sqrt>
                                                <mjx-surd>
                                                    <mjx-mo class="mjx-n">
                                                        <mjx-c class="mjx-c221A"></mjx-c>
                                                    </mjx-mo>
                                                </mjx-surd>
                                                <mjx-box style="padding-top: 0.129em;">
                                                    <mjx-mi class="mjx-i">
                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                    </mjx-mi>
                                                    <mjx-mo class="mjx-n" space="3">
                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                    </mjx-mo>
                                                    <mjx-mn class="mjx-n" space="3">
                                                        <mjx-c class="mjx-c37"></mjx-c>
                                                    </mjx-mn>
                                                </mjx-box>
                                            </mjx-sqrt>
                                        </mjx-msqrt>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3C"></mjx-c>
                </mjx-mo>
                <mjx-mfrac space="4">
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mn class="mjx-n">
                                <mjx-c class="mjx-c31"></mjx-c>
                            </mjx-mn>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-msqrt>
                                            <mjx-sqrt>
                                                <mjx-surd>
                                                    <mjx-mo class="mjx-n">
                                                        <mjx-c class="mjx-c221A"></mjx-c>
                                                    </mjx-mo>
                                                </mjx-surd>
                                                <mjx-box style="padding-top: 0.281em;">
                                                    <mjx-mi class="mjx-i">
                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                    </mjx-mi>
                                                </mjx-box>
                                            </mjx-sqrt>
                                        </mjx-msqrt>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
            </mjx-math>
        </mjx-container>
    </p>
    <p>Perhatikan bahwa
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mo class="mjx-n">
                    <mjx-c class="mjx-c28"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-msqrt>
                    <mjx-sqrt>
                        <mjx-surd>
                            <mjx-mo class="mjx-n">
                                <mjx-c class="mjx-c221A"></mjx-c>
                            </mjx-mo>
                        </mjx-surd>
                        <mjx-box style="padding-top: 0.281em;">
                            <mjx-mi class="mjx-i">
                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                            </mjx-mi>
                        </mjx-box>
                    </mjx-sqrt>
                </mjx-msqrt>
                <mjx-mo class="mjx-n">
                    <mjx-c class="mjx-c29"></mjx-c>
                </mjx-mo>
            </mjx-math>
        </mjx-container> adalah barisan bilangan real positif yang konvergen ke
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>.
    </p>
    <p>Berdasarkan Teorema 1 (untuk
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D436 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container> dan
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45A TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>), dapat disimpulkan bahwa
        <mjx-container class="MathJax" jax="CHTML" display="true">
            <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                <mjx-mo class="mjx-n">
                    <mjx-c class="mjx-c6C"></mjx-c>
                    <mjx-c class="mjx-c69"></mjx-c>
                    <mjx-c class="mjx-c6D"></mjx-c>
                </mjx-mo>
                <mjx-mrow>
                    <mjx-mo class="mjx-s3">
                        <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                    </mjx-mo>
                    <mjx-mfrac>
                        <mjx-frac type="d">
                            <mjx-num>
                                <mjx-nstrut type="d"></mjx-nstrut>
                                <mjx-mn class="mjx-n">
                                    <mjx-c class="mjx-c31"></mjx-c>
                                </mjx-mn>
                            </mjx-num>
                            <mjx-dbox>
                                <mjx-dtable>
                                    <mjx-line type="d"></mjx-line>
                                    <mjx-row>
                                        <mjx-den>
                                            <mjx-dstrut type="d"></mjx-dstrut>
                                            <mjx-msqrt>
                                                <mjx-sqrt>
                                                    <mjx-surd>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c221A"></mjx-c>
                                                        </mjx-mo>
                                                    </mjx-surd>
                                                    <mjx-box style="padding-top: 0.129em;">
                                                        <mjx-mi class="mjx-i">
                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                        </mjx-mi>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2B"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c37"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-box>
                                                </mjx-sqrt>
                                            </mjx-msqrt>
                                        </mjx-den>
                                    </mjx-row>
                                </mjx-dtable>
                            </mjx-dbox>
                        </mjx-frac>
                    </mjx-mfrac>
                    <mjx-mo class="mjx-s3">
                        <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                    </mjx-mo>
                </mjx-mrow>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>
        Terbukti.
    </p>
</p>
<p>
    5). Buktikan!
    <mjx-container class="MathJax" jax="CHTML" display="true">
        <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
            <mjx-mo class="mjx-n">
                <mjx-c class="mjx-c6C"></mjx-c>
                <mjx-c class="mjx-c69"></mjx-c>
                <mjx-c class="mjx-c6D"></mjx-c>
            </mjx-mo>
            <mjx-mrow>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                </mjx-mo>
                <mjx-mfrac>
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mrow>
                                <mjx-msup>
                                    <mjx-mi class="mjx-i">
                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                    </mjx-mi>
                                    <mjx-script style="vertical-align: 0.363em;">
                                        <mjx-mn class="mjx-n" size="s">
                                            <mjx-c class="mjx-c32"></mjx-c>
                                        </mjx-mn>
                                    </mjx-script>
                                </mjx-msup>
                                <mjx-mo class="mjx-n" space="3">
                                    <mjx-c class="mjx-c2212"></mjx-c>
                                </mjx-mo>
                                <mjx-mn class="mjx-n" space="3">
                                    <mjx-c class="mjx-c31"></mjx-c>
                                </mjx-mn>
                            </mjx-mrow>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mrow>
                                            <mjx-mn class="mjx-n">
                                                <mjx-c class="mjx-c32"></mjx-c>
                                            </mjx-mn>
                                            <mjx-msup>
                                                <mjx-mi class="mjx-i">
                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                </mjx-mi>
                                                <mjx-script style="vertical-align: 0.289em;">
                                                    <mjx-mn class="mjx-n" size="s">
                                                        <mjx-c class="mjx-c32"></mjx-c>
                                                    </mjx-mn>
                                                </mjx-script>
                                            </mjx-msup>
                                            <mjx-mo class="mjx-n" space="3">
                                                <mjx-c class="mjx-c2B"></mjx-c>
                                            </mjx-mo>
                                            <mjx-mn class="mjx-n" space="3">
                                                <mjx-c class="mjx-c33"></mjx-c>
                                            </mjx-mn>
                                        </mjx-mrow>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                </mjx-mo>
            </mjx-mrow>
            <mjx-mo class="mjx-n" space="4">
                <mjx-c class="mjx-c3D"></mjx-c>
            </mjx-mo>
            <mjx-mfrac space="4">
                <mjx-frac type="d">
                    <mjx-num>
                        <mjx-nstrut type="d"></mjx-nstrut>
                        <mjx-mn class="mjx-n">
                            <mjx-c class="mjx-c31"></mjx-c>
                        </mjx-mn>
                    </mjx-num>
                    <mjx-dbox>
                        <mjx-dtable>
                            <mjx-line type="d"></mjx-line>
                            <mjx-row>
                                <mjx-den>
                                    <mjx-dstrut type="d"></mjx-dstrut>
                                    <mjx-mn class="mjx-n">
                                        <mjx-c class="mjx-c32"></mjx-c>
                                    </mjx-mn>
                                </mjx-den>
                            </mjx-row>
                        </mjx-dtable>
                    </mjx-dbox>
                </mjx-frac>
            </mjx-mfrac>
        </mjx-math>
    </mjx-container><span class="solution-btn" id="38">Pembahasan</span>
    <p>Diambil sebarang
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>, sehingga
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c35"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>. Berdasarkan Sifat Archimedes, terdapat
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2208"></mjx-c>
                </mjx-mo>
                <mjx-texatom space="4" texclass="ORD">
                    <mjx-mi class="mjx-ds mjx-b">
                        <mjx-c class="mjx-c2115 TEX-A"></mjx-c>
                    </mjx-mi>
                </mjx-texatom>
            </mjx-math>
        </mjx-container> sedemikian sehingga
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3E"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c35"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>. Dengan kata lain,
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c35"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3C"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>.</p>
    <p>Jika
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2265"></mjx-c>
                </mjx-mo>
                <mjx-mi class="mjx-i" space="4">
                    <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                </mjx-mi>
            </mjx-math>
        </mjx-container>, maka
        <mjx-container class="MathJax" jax="CHTML" display="true">
            <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                <mjx-mtable style="min-width: 16.608em;">
                    <mjx-table>
                        <mjx-itable>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-bottom: 0.15em;">
                                    <mjx-mrow>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.52em; vertical-align: -1.01em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                        <mjx-mfrac>
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mrow>
                                                        <mjx-msup>
                                                            <mjx-mi class="mjx-i">
                                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                            </mjx-mi>
                                                            <mjx-script style="vertical-align: 0.363em;">
                                                                <mjx-mn class="mjx-n" size="s">
                                                                    <mjx-c class="mjx-c32"></mjx-c>
                                                                </mjx-mn>
                                                            </mjx-script>
                                                        </mjx-msup>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c31"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-mrow>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mrow>
                                                                    <mjx-mn class="mjx-n">
                                                                        <mjx-c class="mjx-c32"></mjx-c>
                                                                    </mjx-mn>
                                                                    <mjx-msup>
                                                                        <mjx-mi class="mjx-i">
                                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                        </mjx-mi>
                                                                        <mjx-script style="vertical-align: 0.289em;">
                                                                            <mjx-mn class="mjx-n" size="s">
                                                                                <mjx-c class="mjx-c32"></mjx-c>
                                                                            </mjx-mn>
                                                                        </mjx-script>
                                                                    </mjx-msup>
                                                                    <mjx-mo class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                                    </mjx-mo>
                                                                    <mjx-mn class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c33"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-mrow>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n" space="3">
                                            <mjx-c class="mjx-c2212"></mjx-c>
                                        </mjx-mo>
                                        <mjx-mfrac space="3">
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mn class="mjx-n">
                                                        <mjx-c class="mjx-c31"></mjx-c>
                                                    </mjx-mn>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mn class="mjx-n">
                                                                    <mjx-c class="mjx-c32"></mjx-c>
                                                                </mjx-mn>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.52em; vertical-align: -1.01em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                    </mjx-mrow>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mrow space="4">
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.52em; vertical-align: -1.01em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                        <mjx-mfrac>
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mrow>
                                                        <mjx-mn class="mjx-n">
                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-msup>
                                                            <mjx-mi class="mjx-i">
                                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                            </mjx-mi>
                                                            <mjx-script style="vertical-align: 0.363em;">
                                                                <mjx-mn class="mjx-n" size="s">
                                                                    <mjx-c class="mjx-c32"></mjx-c>
                                                                </mjx-mn>
                                                            </mjx-script>
                                                        </mjx-msup>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-msup>
                                                            <mjx-mi class="mjx-i">
                                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                            </mjx-mi>
                                                            <mjx-script style="vertical-align: 0.363em;">
                                                                <mjx-mn class="mjx-n" size="s">
                                                                    <mjx-c class="mjx-c32"></mjx-c>
                                                                </mjx-mn>
                                                            </mjx-script>
                                                        </mjx-msup>
                                                        <mjx-mo class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n" space="3">
                                                            <mjx-c class="mjx-c33"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-mrow>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mrow>
                                                                    <mjx-mn class="mjx-n">
                                                                        <mjx-c class="mjx-c34"></mjx-c>
                                                                    </mjx-mn>
                                                                    <mjx-msup>
                                                                        <mjx-mi class="mjx-i">
                                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                        </mjx-mi>
                                                                        <mjx-script style="vertical-align: 0.289em;">
                                                                            <mjx-mn class="mjx-n" size="s">
                                                                                <mjx-c class="mjx-c32"></mjx-c>
                                                                            </mjx-mn>
                                                                        </mjx-script>
                                                                    </mjx-msup>
                                                                    <mjx-mo class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                                    </mjx-mo>
                                                                    <mjx-mn class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c36"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-mrow>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.52em; vertical-align: -1.01em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                    </mjx-mrow>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mrow space="4">
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.184em; vertical-align: -0.842em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                        <mjx-mfrac>
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mrow>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n">
                                                            <mjx-c class="mjx-c35"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-mrow>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mrow>
                                                                    <mjx-mn class="mjx-n">
                                                                        <mjx-c class="mjx-c34"></mjx-c>
                                                                    </mjx-mn>
                                                                    <mjx-msup>
                                                                        <mjx-mi class="mjx-i">
                                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                        </mjx-mi>
                                                                        <mjx-script style="vertical-align: 0.289em;">
                                                                            <mjx-mn class="mjx-n" size="s">
                                                                                <mjx-c class="mjx-c32"></mjx-c>
                                                                            </mjx-mn>
                                                                        </mjx-script>
                                                                    </mjx-msup>
                                                                    <mjx-mo class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                                    </mjx-mo>
                                                                    <mjx-mn class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c36"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-mrow>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.184em; vertical-align: -0.842em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                    </mjx-mrow>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mn class="mjx-n">
                                                    <mjx-c class="mjx-c35"></mjx-c>
                                                </mjx-mn>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-mrow>
                                                                <mjx-mn class="mjx-n">
                                                                    <mjx-c class="mjx-c34"></mjx-c>
                                                                </mjx-mn>
                                                                <mjx-msup>
                                                                    <mjx-mi class="mjx-i">
                                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                    </mjx-mi>
                                                                    <mjx-script style="vertical-align: 0.289em;">
                                                                        <mjx-mn class="mjx-n" size="s">
                                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                                        </mjx-mn>
                                                                    </mjx-script>
                                                                </mjx-msup>
                                                                <mjx-mo class="mjx-n" space="3">
                                                                    <mjx-c class="mjx-c2B"></mjx-c>
                                                                </mjx-mo>
                                                                <mjx-mn class="mjx-n" space="3">
                                                                    <mjx-c class="mjx-c36"></mjx-c>
                                                                </mjx-mn>
                                                            </mjx-mrow>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3C"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mn class="mjx-n">
                                                    <mjx-c class="mjx-c35"></mjx-c>
                                                </mjx-mn>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-mi class="mjx-i">
                                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                            </mjx-mi>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c2264"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mn class="mjx-n">
                                                    <mjx-c class="mjx-c35"></mjx-c>
                                                </mjx-mn>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-mi class="mjx-i">
                                                                <mjx-c class="mjx-c1D43E TEX-I"></mjx-c>
                                                            </mjx-mi>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3C"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mi class="mjx-i" space="4">
                                        <mjx-c class="mjx-c1D700 TEX-I"></mjx-c>
                                    </mjx-mi>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                        </mjx-itable>
                    </mjx-table>
                </mjx-mtable>
            </mjx-math>
        </mjx-container>
    </p>
    <p>Dengan demikian, limit dari barisan tersebut adalah
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c32"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>.</p>
</p>
<p>
    6). Buktikan bahwa
    <mjx-container class="MathJax" jax="CHTML" display="true">
        <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
            <mjx-mo class="mjx-n">
                <mjx-c class="mjx-c6C"></mjx-c>
                <mjx-c class="mjx-c69"></mjx-c>
                <mjx-c class="mjx-c6D"></mjx-c>
            </mjx-mo>
            <mjx-mrow>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                </mjx-mo>
                <mjx-mfrac>
                    <mjx-frac type="d">
                        <mjx-num>
                            <mjx-nstrut type="d"></mjx-nstrut>
                            <mjx-mrow>
                                <mjx-mo class="mjx-n">
                                    <mjx-c class="mjx-c28"></mjx-c>
                                </mjx-mo>
                                <mjx-mo class="mjx-n">
                                    <mjx-c class="mjx-c2212"></mjx-c>
                                </mjx-mo>
                                <mjx-mn class="mjx-n">
                                    <mjx-c class="mjx-c31"></mjx-c>
                                </mjx-mn>
                                <mjx-msup>
                                    <mjx-mo class="mjx-n">
                                        <mjx-c class="mjx-c29"></mjx-c>
                                    </mjx-mo>
                                    <mjx-script style="vertical-align: 0.363em;">
                                        <mjx-mi class="mjx-i" size="s">
                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                        </mjx-mi>
                                    </mjx-script>
                                </mjx-msup>
                                <mjx-mi class="mjx-i">
                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                </mjx-mi>
                            </mjx-mrow>
                        </mjx-num>
                        <mjx-dbox>
                            <mjx-dtable>
                                <mjx-line type="d"></mjx-line>
                                <mjx-row>
                                    <mjx-den>
                                        <mjx-dstrut type="d"></mjx-dstrut>
                                        <mjx-mrow>
                                            <mjx-msup>
                                                <mjx-mi class="mjx-i">
                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                </mjx-mi>
                                                <mjx-script style="vertical-align: 0.289em;">
                                                    <mjx-mn class="mjx-n" size="s">
                                                        <mjx-c class="mjx-c32"></mjx-c>
                                                    </mjx-mn>
                                                </mjx-script>
                                            </mjx-msup>
                                            <mjx-mo class="mjx-n" space="3">
                                                <mjx-c class="mjx-c2B"></mjx-c>
                                            </mjx-mo>
                                            <mjx-mn class="mjx-n" space="3">
                                                <mjx-c class="mjx-c31"></mjx-c>
                                            </mjx-mn>
                                        </mjx-mrow>
                                    </mjx-den>
                                </mjx-row>
                            </mjx-dtable>
                        </mjx-dbox>
                    </mjx-frac>
                </mjx-mfrac>
                <mjx-mo class="mjx-s3">
                    <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                </mjx-mo>
            </mjx-mrow>
            <mjx-mo class="mjx-n" space="4">
                <mjx-c class="mjx-c3D"></mjx-c>
            </mjx-mo>
            <mjx-mn class="mjx-n" space="4">
                <mjx-c class="mjx-c30"></mjx-c>
            </mjx-mn>
        </mjx-math>
    </mjx-container><span class="solution-btn" id="43">Pembahasan</span>
    <p>Untuk setiap
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c2208"></mjx-c>
                </mjx-mo>
                <mjx-texatom space="4" texclass="ORD">
                    <mjx-mi class="mjx-ds mjx-b">
                        <mjx-c class="mjx-c2115 TEX-A"></mjx-c>
                    </mjx-mi>
                </mjx-texatom>
            </mjx-math>
        </mjx-container>, berlaku
        <mjx-container class="MathJax" jax="CHTML" display="true">
            <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                <mjx-mtable style="min-width: 11.529em;">
                    <mjx-table>
                        <mjx-itable>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-bottom: 0.15em;">
                                    <mjx-mrow>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.42em; vertical-align: -0.96em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                        <mjx-mfrac>
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mrow>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c28"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n">
                                                            <mjx-c class="mjx-c31"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-msup>
                                                            <mjx-mo class="mjx-n">
                                                                <mjx-c class="mjx-c29"></mjx-c>
                                                            </mjx-mo>
                                                            <mjx-script style="vertical-align: 0.363em;">
                                                                <mjx-mi class="mjx-i" size="s">
                                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                </mjx-mi>
                                                            </mjx-script>
                                                        </mjx-msup>
                                                        <mjx-mi class="mjx-i">
                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                        </mjx-mi>
                                                    </mjx-mrow>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mrow>
                                                                    <mjx-msup>
                                                                        <mjx-mi class="mjx-i">
                                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                        </mjx-mi>
                                                                        <mjx-script style="vertical-align: 0.289em;">
                                                                            <mjx-mn class="mjx-n" size="s">
                                                                                <mjx-c class="mjx-c32"></mjx-c>
                                                                            </mjx-mn>
                                                                        </mjx-script>
                                                                    </mjx-msup>
                                                                    <mjx-mo class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                                    </mjx-mo>
                                                                    <mjx-mn class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c31"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-mrow>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n" space="3">
                                            <mjx-c class="mjx-c2212"></mjx-c>
                                        </mjx-mo>
                                        <mjx-mn class="mjx-n" space="3">
                                            <mjx-c class="mjx-c30"></mjx-c>
                                        </mjx-mn>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.42em; vertical-align: -0.96em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                    </mjx-mrow>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mrow space="4">
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.42em; vertical-align: -0.96em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                        <mjx-mfrac>
                                            <mjx-frac type="d">
                                                <mjx-num>
                                                    <mjx-nstrut type="d"></mjx-nstrut>
                                                    <mjx-mrow>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c28"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mo class="mjx-n">
                                                            <mjx-c class="mjx-c2212"></mjx-c>
                                                        </mjx-mo>
                                                        <mjx-mn class="mjx-n">
                                                            <mjx-c class="mjx-c31"></mjx-c>
                                                        </mjx-mn>
                                                        <mjx-msup>
                                                            <mjx-mo class="mjx-n">
                                                                <mjx-c class="mjx-c29"></mjx-c>
                                                            </mjx-mo>
                                                            <mjx-script style="vertical-align: 0.363em;">
                                                                <mjx-mi class="mjx-i" size="s">
                                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                </mjx-mi>
                                                            </mjx-script>
                                                        </mjx-msup>
                                                        <mjx-mi class="mjx-i">
                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                        </mjx-mi>
                                                    </mjx-mrow>
                                                </mjx-num>
                                                <mjx-dbox>
                                                    <mjx-dtable>
                                                        <mjx-line type="d"></mjx-line>
                                                        <mjx-row>
                                                            <mjx-den>
                                                                <mjx-dstrut type="d"></mjx-dstrut>
                                                                <mjx-mrow>
                                                                    <mjx-msup>
                                                                        <mjx-mi class="mjx-i">
                                                                            <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                        </mjx-mi>
                                                                        <mjx-script style="vertical-align: 0.289em;">
                                                                            <mjx-mn class="mjx-n" size="s">
                                                                                <mjx-c class="mjx-c32"></mjx-c>
                                                                            </mjx-mn>
                                                                        </mjx-script>
                                                                    </mjx-msup>
                                                                    <mjx-mo class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c2B"></mjx-c>
                                                                    </mjx-mo>
                                                                    <mjx-mn class="mjx-n" space="3">
                                                                        <mjx-c class="mjx-c31"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-mrow>
                                                            </mjx-den>
                                                        </mjx-row>
                                                    </mjx-dtable>
                                                </mjx-dbox>
                                            </mjx-frac>
                                        </mjx-mfrac>
                                        <mjx-mo class="mjx-n">
                                            <mjx-stretchy-v style="height: 2.42em; vertical-align: -0.96em;" class="mjx-c7C">
                                                <mjx-ext>
                                                    <mjx-c></mjx-c>
                                                </mjx-ext>
                                                <mjx-mark></mjx-mark>
                                            </mjx-stretchy-v>
                                        </mjx-mo>
                                    </mjx-mrow>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mi class="mjx-i">
                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                </mjx-mi>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-mrow>
                                                                <mjx-msup>
                                                                    <mjx-mi class="mjx-i">
                                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                    </mjx-mi>
                                                                    <mjx-script style="vertical-align: 0.289em;">
                                                                        <mjx-mn class="mjx-n" size="s">
                                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                                        </mjx-mn>
                                                                    </mjx-script>
                                                                </mjx-msup>
                                                                <mjx-mo class="mjx-n" space="3">
                                                                    <mjx-c class="mjx-c2B"></mjx-c>
                                                                </mjx-mo>
                                                                <mjx-mn class="mjx-n" space="3">
                                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                                </mjx-mn>
                                                            </mjx-mrow>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em; padding-bottom: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3C"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mi class="mjx-i">
                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                </mjx-mi>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-msup>
                                                                <mjx-mi class="mjx-i">
                                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                                </mjx-mi>
                                                                <mjx-script style="vertical-align: 0.289em;">
                                                                    <mjx-mn class="mjx-n" size="s">
                                                                        <mjx-c class="mjx-c32"></mjx-c>
                                                                    </mjx-mn>
                                                                </mjx-script>
                                                            </mjx-msup>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                            <mjx-mtr>
                                <mjx-mtd style="text-align: right; padding-right: 0px; padding-top: 0.15em;">
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                                <mjx-mtd style="text-align: left; padding-left: 0px; padding-top: 0.15em;">
                                    <mjx-mi class="mjx-n"></mjx-mi>
                                    <mjx-mo class="mjx-n" space="4">
                                        <mjx-c class="mjx-c3D"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mfrac space="4">
                                        <mjx-frac type="d">
                                            <mjx-num>
                                                <mjx-nstrut type="d"></mjx-nstrut>
                                                <mjx-mn class="mjx-n">
                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                </mjx-mn>
                                            </mjx-num>
                                            <mjx-dbox>
                                                <mjx-dtable>
                                                    <mjx-line type="d"></mjx-line>
                                                    <mjx-row>
                                                        <mjx-den>
                                                            <mjx-dstrut type="d"></mjx-dstrut>
                                                            <mjx-mi class="mjx-i">
                                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                            </mjx-mi>
                                                        </mjx-den>
                                                    </mjx-row>
                                                </mjx-dtable>
                                            </mjx-dbox>
                                        </mjx-frac>
                                    </mjx-mfrac>
                                    <mjx-tstrut></mjx-tstrut>
                                </mjx-mtd>
                            </mjx-mtr>
                        </mjx-itable>
                    </mjx-table>
                </mjx-mtable>
            </mjx-math>
        </mjx-container>
    </p>
    <p>Perhatikan bahwa
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mo class="mjx-n">
                    <mjx-c class="mjx-c28"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
                <mjx-texatom texclass="ORD">
                    <mjx-mo class="mjx-n">
                        <mjx-c class="mjx-c2F"></mjx-c>
                    </mjx-mo>
                </mjx-texatom>
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n">
                    <mjx-c class="mjx-c29"></mjx-c>
                </mjx-mo>
            </mjx-math>
        </mjx-container> adalah barisan bilangan real positif yang konvergen ke
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mn class="mjx-n">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>.</p>
    <p>Berdasarkan Teorema 1 (untuk
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D436 TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container> dan
        <mjx-container class="MathJax" jax="CHTML">
            <mjx-math class="MJX-TEX">
                <mjx-mi class="mjx-i">
                    <mjx-c class="mjx-c1D45A TEX-I"></mjx-c>
                </mjx-mi>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c31"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>), diperoleh
        <mjx-container class="MathJax" jax="CHTML" display="true">
            <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                <mjx-mo class="mjx-n">
                    <mjx-c class="mjx-c6C"></mjx-c>
                    <mjx-c class="mjx-c69"></mjx-c>
                    <mjx-c class="mjx-c6D"></mjx-c>
                </mjx-mo>
                <mjx-mrow>
                    <mjx-mo class="mjx-s3">
                        <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                    </mjx-mo>
                    <mjx-mfrac>
                        <mjx-frac type="d">
                            <mjx-num>
                                <mjx-nstrut type="d"></mjx-nstrut>
                                <mjx-mrow>
                                    <mjx-mo class="mjx-n">
                                        <mjx-c class="mjx-c28"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mo class="mjx-n">
                                        <mjx-c class="mjx-c2212"></mjx-c>
                                    </mjx-mo>
                                    <mjx-mn class="mjx-n">
                                        <mjx-c class="mjx-c31"></mjx-c>
                                    </mjx-mn>
                                    <mjx-msup>
                                        <mjx-mo class="mjx-n">
                                            <mjx-c class="mjx-c29"></mjx-c>
                                        </mjx-mo>
                                        <mjx-script style="vertical-align: 0.363em;">
                                            <mjx-mi class="mjx-i" size="s">
                                                <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                            </mjx-mi>
                                        </mjx-script>
                                    </mjx-msup>
                                    <mjx-mi class="mjx-i">
                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                    </mjx-mi>
                                </mjx-mrow>
                            </mjx-num>
                            <mjx-dbox>
                                <mjx-dtable>
                                    <mjx-line type="d"></mjx-line>
                                    <mjx-row>
                                        <mjx-den>
                                            <mjx-dstrut type="d"></mjx-dstrut>
                                            <mjx-mrow>
                                                <mjx-msup>
                                                    <mjx-mi class="mjx-i">
                                                        <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                    </mjx-mi>
                                                    <mjx-script style="vertical-align: 0.289em;">
                                                        <mjx-mn class="mjx-n" size="s">
                                                            <mjx-c class="mjx-c32"></mjx-c>
                                                        </mjx-mn>
                                                    </mjx-script>
                                                </mjx-msup>
                                                <mjx-mo class="mjx-n" space="3">
                                                    <mjx-c class="mjx-c2B"></mjx-c>
                                                </mjx-mo>
                                                <mjx-mn class="mjx-n" space="3">
                                                    <mjx-c class="mjx-c31"></mjx-c>
                                                </mjx-mn>
                                            </mjx-mrow>
                                        </mjx-den>
                                    </mjx-row>
                                </mjx-dtable>
                            </mjx-dbox>
                        </mjx-frac>
                    </mjx-mfrac>
                    <mjx-mo class="mjx-s3">
                        <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                    </mjx-mo>
                </mjx-mrow>
                <mjx-mo class="mjx-n" space="4">
                    <mjx-c class="mjx-c3D"></mjx-c>
                </mjx-mo>
                <mjx-mn class="mjx-n" space="4">
                    <mjx-c class="mjx-c30"></mjx-c>
                </mjx-mn>
            </mjx-math>
        </mjx-container>
        Terbukti.</p>
</p></div>`
}