function konvergen() {
    homeContent.innerHTML = `
<div style="margin-bottom:6rem;" class="mt-4 surah font-sans p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-2xl">
<b>A. Pengertian Barisan Bilangan Real Konvergen </b>
                <p style="text-indent: 20px;">
                    Suatu barisan dikatakan konvergen jika limit barisannya ada. Konsep limit barisan merupakan konsep dasar <i>(basic)</i> dalam matematika analisis. Kekonvergenan pada barisan bilangan real, selanjutnya bisa digeneralisasi pada ruang
                    metrik atau ruang topologi.
                </p>
                <p style="text-indent: 20px;">
                    Misalkan X = (xn) barisan bilangan real. Bilangan real x dikatakan limit dari (xn) jika untuk setiap ε > 0 terdapat bilangan asli N (biasanya bergantung pada ε) sehingga |xn − x| &#60; ε untuk setiap n ≥ N. Jika x limit dari barisan X maka X dikatakan
                    konvergen ke x dan ditulis lim X=x , atau lim(xn)=x . Jika suatu barisan mempunyai limit kita katakan barisan itu konvergen. </p>
                <b>B. Teorema-Teorema Barisan Bilangan Real Konvergen </b>
                <p style="text-indent: 20px;">
                    Berikut diberikan beberapa teorema dari barisan bilangan real konvergen:
                </p>
                <p>
                    <b>Teorema 1.1</b>
                </p>
                <p>
                    Jika X = (X<sub>n</sub>) barisan bilangan real yang konvergen ke x dan X<sub>n</sub> ≥ 0 untuk semua n ∈ N, maka x ≥ 0.
                </p>
                <p>
                    <b>BUKTI</b>
                </p>
                <p>
                    Andaikan x &#60; 0, maka ε=-x> 0. . Karena x<sub>n</sub> konvergen ke x terdapat K ∈ N ∋ n ≥ K, berlaku:
                    <span class="d-block text-center">
                     |x<sub>n</sub>−x| &#60; ε atau x - ε &#60; x<sub>n</sub> &#60; x + ε = 0.
                    </span>
                </p>
                <p>
                    Ini bertentangan dengan yang diketahui bahwa x<sub>n</sub> ≥ 0 untuk semua n ∈ N. Jadi pengandaian x &#60; 0 salah sehingga yang benar haruslah x ≥ 0.
                </p>
                <p>
                    <b>Teorema Apit</b>
                </p>
                <p>
                    Berikut ini diberikan sebuah teorima yang menyatakan bahwa jika suatu barisan terletak antara dua barisan yang konvergen ke titik yang sama, maka Y juga konvergen ke titik yang sama.
                </p>
                <p>
                    <b>Teorema 1.2</b>
                </p>
                <p>
                    Jika X = x<sub>n</sub>, Y = y<sub>n</sub> dan Z = z<sub>n</sub> barisan bilangan real sehingga x<sub>n</sub> ≤ y<sub>n</sub> ≤ z<sub>n</sub>, untuk semua n ∈ N dan lim(x<sub>n</sub>) = lim(y<sub>n</sub>) lim(z
                    <sub>n</sub>) maka Y = y<sub>n</sub> konvergen dan lim<sub>n → ∞ </sub> x<sub>n</sub> = lim<sub>n → ∞ </sub> y<sub>n </sub> =lim<sub>n → ∞ </sub> z<sub>n </sub>.
                </p>
                <p>
                    <b>BUKTI</b>
                </p>
                <p>
                    Misalkan t = lim<sub>n → ∞ </sub> x<sub>n </sub> =lim<sub>n → ∞ </sub> z<sub>n </sub> diberikan sebarang ε > 0. Dapat dipilih K ∈ N ∋ n ≥ K, berlaku:
                    <span class="d-block text-center"> 
                     |x<sub>n</sub> − t|&#60; ε atau |z<sub>n</sub> - t| &#60; ε
                    </span>
                </p>
                <p>
                    Menurut hipotesis x<sub>n</sub> ≤ y<sub>n</sub> ≤ z<sub>n</sub> atau x<sub>n</sub> - t ≤ y<sub>n</sub> - t ≤ z<sub>n</sub> - t sehingga untuk n ≥ K, berlaku:
                    <span class="d-block text-center">
                     -ε &#60; y<sub>n</sub> - t &#60; ε
                    </span>
                </p>
                <p>
                    Karena sebarang ε, maka lim<sub>n → ∞ </sub> y<sub>n</sub> = t.
                </p>
                <p>
                    <b>Catatan:</b> Karena sebarang ekor dari barisan konvergen mempunyai limit yang sama, maka hipotesis dari Teorema 1 dan 2 dapat diterapkan untuk ekor barisan.
                </p>
                <p>
                    <b>Teorema 1.3</b>
                </p>
                <p>
                    <i>Jika barisan X =(x<sub>n</sub>) konvergen ke x, maka </i> (|x<sub>n</sub>|) <i>konvergen ke</i> (|x|).
                </p>
                <p>
                    <b>BUKTI:</b>
                </p>
                <p>
                    Diberikan sebarang ε > 0. Karena (x<sub>n</sub>) konvergen ke x, maka terdapat K ∈ N sehingga untuk n ≥ K berlaku:
                    <span class="d-block text-center">
                     |x<sub>n</sub> - x| &#60; ε
                    </span>
                </p>
                <p>
                    Oleh karena itu untuk n ≥ K, maka berlaku juga:
                    <span class="d-block text-center">
                     ||x<sub>n</sub>| - |x|| ≤ |x<sub>n</sub> - x| &#60; ε
                    </span>
                </p>
                <p>
                    Ini menyatakan bahwa |x<sub>n</sub>| konvergen ke |x|.
                </p>
                <p>
                    <b>Teorema 1.4</b>
                </p>
                <p>
                    Jika X = x<sub>n</sub> barisan bilangan real konvergen ke x dengan x<sub>n</sub> ≥ 0, untuk semua n ∈ N, maka barisan
                    <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                        <mjx-mrow>
                            <mjx-mo class="mjx-s3">
                                <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                            </mjx-mo>
                            <mjx-msqrt>
                                <mjx-sqrt>
                                    <mjx-surd>
                                        <mjx-mo class="mjx-n">
                                            <mjx-c class="mjx-c221A"></mjx-c>
                                        </mjx-mo>
                                    </mjx-surd>
                                    <mjx-box style="padding-top: 0.129em;">
                                        <mjx-msub>
                                            <mjx-mi class="mjx-i" noic="true">
                                                <mjx-c class="mjx-c1D465 TEX-I"></mjx-c>
                                            </mjx-mi>
                                            <mjx-script style="vertical-align: -0.15em;">
                                                <mjx-mi class="mjx-i" size="s">
                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                </mjx-mi>
                                            </mjx-script>
                                        </mjx-msub>
                                    </mjx-box>
                                </mjx-sqrt>
                            </mjx-msqrt>
                            <mjx-mo class="mjx-s3">
                                <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                            </mjx-mo>
                        </mjx-mrow>
                    </mjx-math> konvergen dan lim<sub>n → ∞ </sub>
                    <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                        <mjx-mrow>
                            <mjx-mo class="mjx-s3">
                                <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                            </mjx-mo>
                            <mjx-msqrt>
                                <mjx-sqrt>
                                    <mjx-surd>
                                        <mjx-mo class="mjx-n">
                                            <mjx-c class="mjx-c221A"></mjx-c>
                                        </mjx-mo>
                                    </mjx-surd>
                                    <mjx-box style="padding-top: 0.129em;">
                                        <mjx-msub>
                                            <mjx-mi class="mjx-i" noic="true">
                                                <mjx-c class="mjx-c1D465 TEX-I"></mjx-c>
                                            </mjx-mi>
                                            <mjx-script style="vertical-align: -0.15em;">
                                                <mjx-mi class="mjx-i" size="s">
                                                    <mjx-c class="mjx-c1D45B TEX-I"></mjx-c>
                                                </mjx-mi>
                                            </mjx-script>
                                        </mjx-msub>
                                    </mjx-box>
                                </mjx-sqrt>
                            </mjx-msqrt>
                            <mjx-mo class="mjx-s3">
                                <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                            </mjx-mo>
                        </mjx-mrow>
                    </mjx-math> =
                    <mjx-math display="true" style="margin-left: 0px; margin-right: 0px;" class="MJX-TEX">
                        <mjx-mrow>
                            <mjx-mo class="mjx-s3">
                                <mjx-c class="mjx-c28 TEX-S3"></mjx-c>
                            </mjx-mo>
                            <mjx-msqrt>
                                <mjx-sqrt>
                                    <mjx-surd>
                                        <mjx-mo class="mjx-n">
                                            <mjx-c class="mjx-c221A"></mjx-c>
                                        </mjx-mo>
                                    </mjx-surd>
                                    <mjx-box style="padding-top: 0.129em;">
                                        <mjx-msub>
                                            <mjx-mi class="mjx-i" noic="true">
                                                <mjx-c class="mjx-c1D465 TEX-I"></mjx-c>
                                            </mjx-mi>
                                        </mjx-msub>
                                    </mjx-box>
                                </mjx-sqrt>
                            </mjx-msqrt>
                            <mjx-mo class="mjx-s3">
                                <mjx-c class="mjx-c29 TEX-S3"></mjx-c>
                            </mjx-mo>
                        </mjx-mrow>
                    </mjx-math>.
                </p>
                <p>
                    <b>BUKTI:</b>
                </p>
                <p>
                    Menurut Teorema 1 : Jika X = x<sub>n</sub> barisan bilangan real yang konvergen ke x dan x<sub>n</sub> ≥ 0 untuk semua n &isin; N, maka x ≥ 0.
                </p>
                <p>
                    a). Jika x = 0, ambil sebarang ε > 0,K ∈ N untuk n ≥ K berlaku:
                    <span class="d-block text-center">
                     |x<sub>n</sub> − 0| = |x<sub>n</sub>| = x<sub>n</sub>&#60; ε<sup>2</sup>
                    </span>
                </p>
                <p>
                    Akibatnya untuk ≥ K, maka |√x<sub>n</sub> − √x | = |√x<sub>n</sub> | = √x<sub>n</sub> &#60; ε. </p>
                <p>
                    Jadi, lim<sub>n → ∞ </sub> √x<sub>n</sub> = 0.
                </p>
                <p>
                    b). Jika x > 0, diberikan sebarang ε > 0, ∃ K<sub>1</sub> ∈ N untuk n ≥ K<sub>1</sub> berlaku:
                    <span class="d-block text-center">
                     |x<sub>n</sub> − x| &#60; ε√x
                    </span>
                    <p style="padding-left: 10px;">
                        Oleh karena itu, apabila n ≥ K<sub>1</sub>, maka:
                        <span class="d-block text-center">
                         |√x<sub>n</sub> − √x| <img src="../images/rumus1.png" alt="" class="w-100">
                        </span>
                    </p>
                    <p style="padding-left: 10px;">
                        Ini menunjukkan bahwa lim<sub>n → ∞ </sub> √x<sub>n</sub> = √x.
                    </p>
                </p>
                <p>
                    <b>Teorema 1.5.</b>
                </p>
                <p>
                    Misalkan X := (x<sub>n</sub>) dan Y := (y<sub>n</sub>) barisan konvergen, berturut-turut ke x dan y, y<sub>n</sub> &ne; 0 untuk setiap n ∈ N dan y &ne; 0 maka barisan hasil bagi <sup>x</sup>&frasl;<sub>y</sub> :=
                    <sup>xn</sup>&frasl;<sub>yn</sub> konvergen ke <sup>x</sup>&frasl;<sub>y</sub>
                </p>
                <p>
                    <b>BUKTI:</b>
                </p>
                <p>
                    <span class="d-block text-center">
                     <img src="../images/rumus2.png" alt="" class="w-100">
                    </span>
                </p>
                <p>Selanjutnya, kita perlu memberikan batas untuk suku <sup>(|xn|)</sup>&frasl;<sub>(|yn||y|)</sub> karena (x<sub>n</sub>) konvergen maka ada M > 0 sehingga |x<sub>n</sub>| &ge; M untuk n &isin; N. Karena lim(y
                    <sub>n</sub>) = y maka diberikan ε = <sup>1</sup>&frasl;<sub>2</sub>|y| untuk setiap N<sub>1</sub> &isin; N sehingga <span class="d-block text-center">
                     |y<sub>n</sub> - y| &#60;  <sup>1</sup>&frasl;<sub>2</sub> |y| untuk setiap n &ge; N<sub>1</sub>
                    </span>
                </p>
                <p>
                    Karena ||y<sub>n</sub>| -|y|| &#60; |y<sub>n</sub> - y| dan |y<sub>n</sub> - y| &#60; <sup>1</sup>&frasl;<sub>2</sub> |y| maka ||y<sub>n</sub>| -|y|| &#60; <sup>1</sup>&frasl;<sub>2</sub> |y| &harr;
                    <sup>1</sup>&frasl;<sub>2</sub> |y| &#60; |y<sub>n</sub>| &#60; <sup>3</sup>&frasl;<sub>2</sub>|y| => |y<sub>n</sub>| > <sup>1</sup>&frasl;<sub>2</sub> |y| untuk setiap n &ge; N<sub>1</sub>.
                </p>
                <p>
                    Jadi berlaku
                    <span class="d-block text-center">
                     <sup>1</sup>&frasl;<sub>|y<sub>n</sub>|</sub>&#60; <sup>1</sup>&frasl;<sub>|y|</sub>  untuk setiap n &ge; N<sub>1</sub>
                    </span>
                </p>
                <p>
                    Dengan demikian kita mempunyai estimasi <br>
                    <img src="../images/rumus3.png" alt="" class="w-100">
                </p>
                <p>
                    Sekarang diberikan ε > 0 sebarang. Karena lim(y<sub>n</sub>) = y dan lim(x<sub>n</sub>) = x maka ada N<sub>2</sub>.N<sub>3</sub> sehingga <br> |x<sub>n</sub> - x| &#60; <sup>|y|</sup>&frasl;<sub>2</sub> ε untuk setiap n &ge; N
                    <sub>2</sub> dan |y<sub>n</sub> - y(<sup>|y|<sup>2</sup> </sup>&frasl;<sub>2</sub>) ε untuk setiap n &ge; N<sub>3.</sub>
                </p>
                <p>
                    Dengan mengambil N = max{N<sub>1</sub>, N<sub>2</sub>, N<sub>3</sub>} maka berdasarkan (*) diperoleh <img src="../images/rumus4.png" alt="" class="w-100">
                </p>
                <p>
                    <b>Teorema 1.6 (Uji Kekonvergenan)</b>
                </p>
                <p>
                    Misalkan (x<sub>n</sub>) lim <sup>x<sub>n</sub>+1</sup></sup>&frasl;<sub>x<sub>n</sub></sub> = L.
                </p>
                <p>
                    1. Jika L &#60; 1 maka konvergen dan lim x<sub>n</sub> = 0
                </p>
                <p>
                    <b>BUKTI:</b>
                </p>
                <p>
                    1. Karena L &#60; 1, maka terdapat r, L &#60; r &#60;1 sehingga r-L&#60;0
                    <p style="padding-left:10px ;">
                        Akibatnya untuk ε = r − L, terdapat bilangan asli K(ε) sehingga untuk setiap n ≥ K(ε) berlaku <sup>xn+1</sup>&frasl;<sub>xn</sub> &#60; L + ε=L+(r-L)=r
                        <p style="padding-left:10px ;">
                            Dengan demikian diperoleh
                            <img src="../images/rumus5.png" alt="" class="w-100">
                        </p>
                        <p>
                            Dengan mengambil N = n - K(ε) + 1 diperoleh r<sup>n-K(s)</sup>xK(ε). Dan dengan memisalkan C = r<sup>2</sup>xK(ε) maka diperoleh x<sub>n</sub>+1 &#60; Cr<sup>n+1</sup> untuk setiap n &ge; K(ε) atau setiap n &ge; K(ε). Karena
                            0 &#60;r&#60;1, maka lim r<sub>n</sub> = 0.
                        </p>
                    </p>
                </p>
                <p>
                    <b>C. Contoh Soal dan Pembahasan </b>
                    <p>
                        1. Gunakan definisi limit barisan untuk membuktikan lim(<sup>1</sup>&frasl;<sub>n</sub>) = 0
                        <p style="padding-left:10px ;">
                            Pembahasan;<br> Menentukan nilai K <br> Misalkan ε > 0. Berdasarkan definisi, kita perlu menemukan nilai K sehingga untuk setiap n &ge; K berlaku |<sup>1</sup>&frasl;<sub>n</sub> - 0| &#60; ε. Perhatikan bahwa
                            <span class="d-block text-center">
                             |<sup>1</sup>&frasl;<sub>n</sub> - 0| =  |<sup>1</sup>&frasl;<sub>n</sub>| = <sup>1</sup>&frasl;<sub>n</sub>
                            </span>
                            <p style="padding-left:10px ;">
                                Karena n ≥ K, maka <sup>1</sup>&frasl;<sub>n</sub> &le; <sup>1</sup>&frasl;<sub>K</sub> sehingga
                                <span class="d-block text-center">
                                 |<sup>1</sup>&frasl;<sub>n</sub> - 0| =  <sup>1</sup>&frasl;<sub>n</sub> &le; <sup>1</sup>&frasl;<sub>K</sub>
                                </span>
                            </p>
                            <p style="padding-left:10px ;">
                                Kita perlu menemukan bilangan asli K yang memenuhi
                                <span class="d-block text-center">
                                 <sup>1</sup>&frasl;<sub>K</sub> &lt; ε
                                </span> <br> Bentuk diatas ekuivalen dengan
                                <span class="d-block text-center">
                                 K &gt; <sup>1</sup>&frasl;<sub>ε</sub>
                                </span> <br> Pembuktikan lim(<sup>1</sup>&frasl;<sub>n</sub>) = 0. <br> Diambil sebarang ε > 0 sehigga <sup>1</sup>&frasl;<sub>s</sub> &gt; 0 <br> Berdasarkan sifat Archimedes, terdapat sedemikian
                                sehingga
                                <span class="d-block text-center">
                                 K &gt; <sup>1</sup>&frasl;<sub>ε</sub> atau <sup>1</sup>&frasl;<sub>K</sub> &lt; ε
                                </span>
                                <br> Jika n &ge; K, maka
                                <span class="d-block text-center">
                                 |<sup>1</sup>&frasl;<sub>n</sub> - 0| = |<sup>1</sup>&frasl;<sub>n</sub>| =  <sup>1</sup>&frasl;<sub>n</sub> &le; <sup>1</sup>&frasl;<sub>K</sub> &lt; ε
                                </span> <br> Dengan demikian limit dari barisan tersebut adalah 0 (Terbukti).
                            </p>
                        </p>
                    </p>
                    <p>
                        2. Gunakan definisi limit barisan untuk membuktikan lim(<sup>2n</sup>&frasl;<sub>n+1</sub>) = 2.
                        <p style="padding-left: 10px;">
                            Bukti: <br> Diambil sebarang ε &gt; 0 sehingga <sup>2</sup>&frasl;<sub>s</sub> &gt; 0. <br> Berdasarkan sifat Archimedes, terdapat K &isin; N sedemikian sehingga
                            <span class="d-block text-center">
                             K &gt; <sup>2</sup>&frasl;<sub>ε </sub> atau <sup>2</sup>&frasl;<sub>K</sub>  &lt; ε
                            </span> Jika n &ge; K maka
                            <img src="../images/rumus6.png" alt="" class="w-75"> <br> = <sup>2</sup>&frasl;<sub>n+1 </sub> <br> &lt; <sup>2</sup>&frasl;<sub>n</sub> <br> &le; <sup>2</sup>&frasl;<sub>K</sub> <br> &lt; ε <br> Jadi demikian, limit dari barisan
                            tersebut adalah 2 ( Terbukti).
                        </p>
                    </p>
                    <p>
                        3. Misalkan (x<sub>n</sub>) adalah barisan bilangan real dan x &isin; R. Misalkan pula (a<sub>n</sub>) adalah barisan bilangan real positif yang konvergen ke 0 dan untuk suatu konstanta C dan m &isin; N berlaku |x<sub>n</sub> −
                        x | &le; Ca<sub>n</sub>. Untuk setiap n ≥ M <br> Buktikan bahwa lim(x<sub>n</sub>) = x. <br>
                        <p style="padding-left: 10px;">
                            Bukti: <br> Diambil sebarang ε &gt; 0 sehingga <sup>s</sup>&frasl;<sub>C</sub> &gt; 0. Karena (a<sub>n</sub>) konvergen ke 0 maka terdapat k &isin; N yang memenuhi a<sub>n</sub> = |a<sub>n</sub> - 0| &le; <sup>s</sup>&frasl;<sub>C</sub>                            untuk setiap n &ge; k. <br> Pilh K = max (m,k) sehingga untuk setiap n ≥ k berlaku
                            <span class="d-block text-center">
                         |x<sub>n</sub> - x| &le; Ca<sub>n</sub>  &le; C.<sup>ε</sup>&frasl;<sub>C</sub> = ε.
                         </span> <br> Berdasarkan definisi lim(x<sub>n</sub>) = x <i>(Terbukti)</i>.
                        </p>
                    </p>
                    <p>
                        4. Buktikan bahwa jika lim(x<sub>n</sub>) = x &gt; 0, maka ada bilangan asli M sedemikian sehingga x<sub>n</sub> &ge; 0 untuk semua n &ge; M.
                        <p style="padding-left: 10px;">
                            Bukti:</p>
                    </p>
                    <p>
                        5. Buktikan bahwa lim(<sup>1</sup>&frasl;<sub>&radic; n+7</sub>) = 0.
                        <p style="padding-left: 10px;">
                            Bukti:</p>
                    </p>
                </p>
                <p>
                    <b>Kesimpulan</b>
                    <p style=" text-indent: 20px;">
                        Suatu barisan dikatakan konvergen jika limit barisannya ada. Konsep limit barisan merupakan konsep dasar (basic) dalam matematika analisis. Kekonvergenan pada barisan bilangan real, selanjutnya bisa digeneralisasi pada ruang metrik atau ruang topologi.
                    </p>
                </p>
</div>

`
}