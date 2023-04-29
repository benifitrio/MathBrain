function limitFungsi() {
    homeContent.innerHTML = `
<div style="margin-bottom:6rem;" class="mt-4 surah font-sans p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-2xl">
<b>A. Limit Fungsi </b>
                <p style="text-indent: 20px;">
                    Pada bagian ini kita akan mempelajari konsep limit fungsi. Sebelum melangkah lebih jauh, untuk menyegarkan ingatan, perhatikan kembali fungsi f(x) = <sup>x<sup>2</sup>-1</sup>&frasl;<sub>x-1</sub> yang tidak terdefinisi di x = 1. Namun
                    demikian kita dapat melihat bahwa jika x cukup dekat ke 1 tapi x ≠ 1 maka f(x) cukup dekat ke 2. Ini adalah contoh sederhana untuk mengingat gagasan limit fungsi.
                </p>
                <p style="text-indent: 20px;">
                    Sesungguhnya yang dimaksud dengan “fungsi f mempunyai limit L di c adalah nilai f mendekati L, untuk x mendekati c”. Dengan demikian, dapat diartikan bahwa f(x) terletak pada sembarang persekitaran-ε, hanya berlaku jika x terletak pada persekitaran-δ
                    dari c, dan x ≠ c. Pemilihan nilai δ bergantung pada pemilihan nilai ε sehingga kadang-kadang ditulis δ = δ(ε). Yang perlu diperhatikan adalah f tidak harus terdefinisi di c, tetapi harus terdefinisi pada titik- titik di sekitar c
                    (terletak pada persekitaran-δ dari c).
                </p>
                <p>
                    <b>Definisi:</b>
                </p>
                <p style="text-indent: 20px;">
                    A &#8838; R. Titik c &#8712; R adalah titik limit dari A, jika untuk setiap persekitaran-δ dari c, V<sub>ð(c)</sub> = (c-δ, c + δ), memuat paling sedikit satu titik dalam A yang berbeda dengan c. Dengan kata lain: A &#8838; R, c titik
                    limit dari A jika V<sub>ð(c)</sub> &#8745; A – {c} ≠ &#8709;.
                </p>
                <p style="text-indent: 20px;">
                    Perhatikan, pada definisi di atas tidak disyaratkan bahwa c ada di A, namun di lingkungan sekecil apapun sekitar c selalu ada elemen x ∈ A yang berbeda dari c.
                </p>
                <p>
                    <b>Teorema</b>
                    <p>
                        Bilangan real c adalah titik limit dari A, A &#8838; R, jika dan hanya jika ada barisan (an) dalam A dan a<sub>n</sub> ≠ c, &#8704; n ∈ N sedemikian hingga lim (a<sub>n</sub>) = c.
                    </p>
                    <p>
                        <b>Bukti:</b>
                    </p>
                    <p style="text-indent: 20px;">
                        (&#8594) A &#8838; R. Bilangan real c adalah titik limit dari A maka akan ditunjukkan ada barisan (a<sub>n</sub>) dalam A dan a<sub>n</sub> ≠ c, &#8704; n ∈ N sedemikian hingga lim (a<sub>n</sub>) = c.
                    </p>
                    <p>
                        c adalah titik limit dari A, artinya untuk sembarang n ∈ N, persekitaran -<sup>1</sup>&frasl;<sub>n</sub> dari c, yaitu V<sub><sup>1</sup>&frasl;<sub>n</sub></sub> (c) memuat paling sedikit satu titik dalam A yang berbeda dengan
                        c. Jika a<sub>n</sub>, &#8704; n ∈ N merupakan titik-titik tersebut, maka a<sub>n</sub> ∈ A, a<sub>n</sub> ≠ c dan lim (a<sub>n</sub>) = c. (terbukti).
                    </p>
                    <p style="text-indent: 20px;">
                        (&#8592;) jika ada barisan (a<sub>n</sub>) dalam A dan a<sub>n</sub> ≠ c, &#8704; n ∈ N sedemikian hingga lim (a<sub>n</sub>) = c akan ditunjukkan bahwa c adalah titik limit dari A (a<sub>n</sub>) dalam A dan a<sub>n</sub> ≠ c
                        maka (a<sub>n</sub>) dalam A – {c}, dan lim (a<sub>n</sub>) = c, artinya untuk sembarang δ &gt; 0, &#8707; K(δ) ∈ N sehingga jika n &ge; K(δ), maka a<sub>n</sub> ∈ Vð(c).
                    </p>
                    <p style="text-indent: 20px;">
                        Dengan kata lain, terdapat persekitaran-δ dari c, Vð(c), yang memuat titik-titik a<sub>n</sub>,&#8704; n &ge; K(δ), a<sub>n</sub> ∈ A dan a<sub>n</sub> ≠ c. Jadi, c merupakan titik limit dari A.
                    </p>
                </p>
                <p>
                    <b>Definisi Limit</b>
                    <p>
                        A &#8838; R, f: A &#8594; R, dan c merupakan titik limit dari A Bilangan real L merupakan limit dari f di c, jika untuk sembarang persekitaran-ε dari L, V<sub>s</sub>(L), ada persekitaran-δ dari c, V<sub>ð</sub>(c), sedemikian
                        hingga untuk sembarang x ∈ V<sub>ð</sub>(c) &#8898; A, x ≠ c, maka f(x) ∈ V <sub>s</sub>(L).
                    </p>
                    <p>
                        <u>Catatan:</u>
                        <ul>
                            <li>Pengambilan nilai δ bergantung pada pengambilan ε, sehingga kadang-kadang δ ditulis dengan δ(ε).
                            </li>
                        </ul>
                        Jika L merupakan limit f di c, maka dikatakan f konvergen ke L di c, dan ditulis :
                        <img src="../images/11.png" alt="" class="w-75">
                    </p>
                </p>
                <p>
                    <b>C. Teorema</b>
                    <p>
                        Jika f: A &#8594; R, dan c titik limit dari A, maka f hanya mempunyai satu limit di c.
                    </p>
                    <p>
                        <b>Bukti:</b>
                    </p>
                    <p>
                        Andaikan f mempunyai dua nilai limit di c, yaitu L<sub>1</sub> dan L<sub>2</sub>, L<sub>1</sub> ≠ L<sub>2</sub>.
                    </p>
                    <img src="../images/12.png" alt="" class="w-100">
                    <p>
                        Karena c merupakan titik limit dari A, maka paling sedikit terdapat satu titik dalam A, yaitu x<sub>0</sub> ≠ c dan x<sub>0</sub> ∈ A &#8745 V<sub>ð(c)</sub>. Sebagai akibatnya,
                        <img src="../images/13.png" alt="" class="w-75">
                    </p>
                </p>
                <p>
                    <b>D. Teorema</b> (Kriteria ε – δ untuk Limit)
                    <p style="text-indent: 20px;">
                        f: A &#8594; R, titik limit dari A, maka:
                    </p>
                    <p>
                        <img src="../images/14.png" alt="" class="w-100">
                    </p>
                    <p>
                        <b>Bukti:</b>
                    </p>
                    <p>
                        (i) &#8594; (ii) Jika f mempunyai limit L di c. Maka untuk sembarang ε > 0 terdapat δ(ε) &gt; 0 sehingga untuk setiap x ∈ A dan x ∈ V<sub>ð(c)</sub> x ≠ c, maka f(x) ∈ Vs(L). <br> (iii) &#8594; (i) Untuk sembarang ε > 0, terdapat
                        δ(ε) > 0 sehingga jika x ∈ A dan 0 &lt; |x - c| &lt; δ(ε), maka |f(x) - L| &lt; ε.
                    </p>
                </p>
                <p>
                    <b>Teorema</b> (Kriteria Barisan)
                    <p>
                        f: A &#8594; R, dan c merupakan titik limit dari A; maka :
                    </p>
                    <ol type="i">
                        <li>
                            <img src="../images/15.png" alt="" class="w-75">
                        </li>
                        <li>
                            Untuk setiap barisan (x<sub>n</sub>) dalam A yang konvergen ke c, sedemikian hingga x<sub>n</sub> ≠ c, &#8704; n ∈ N, maka barisan (f(x<sub>n</sub>)) konvergen ke L.
                        </li>
                    </ol>
                </p>
                <p>
                    <b>Bukti:</b>
                    <p>
                        (i) &#8594; (ii). Anggap f mempunyai limit L di c, serta (x<sub>n</sub>) merupakan barisan dalam A dengan lim(x<sub>n</sub>) = c dan x<sub>n</sub> ≠ c, &#8704; n ∈ N. Kita harus menunjukkan bahwa barisan (f(x<sub>n</sub>)) konvergen
                        ke L.
                    </p>
                    <p>
                        (i) &#8594; (i). Pembuktian akan menggunakan kontra positif, yaitu dengan mengandaikan (i) tidak benar akan diperoleh juga bahwa (ii) tidak benar.
                        <p>
                            <img src="../images/16.png" alt="" class="w-100">
                        </p>
                    </p>
                    <p style="text-indent: 20px;">
                        Tetapi, |f(x<sub>n</sub>)L| &ge; ε0, &#8704; n ∈ N.
                    </p>
                    <p>
                        Dengan demikian dapat disimpulkan, terdapat barisan (x<sub>n</sub>) termuat dalam A – {c} yang konvergen ke c, tetapi barisan (f(x<sub>n</sub>)) tidak konvergen ke L. Jadi, dengan mengambil (i) tidak benar diperoleh (ii) tidak
                        benar, sesuai sifat kontra positif, maka (ii) &#8594; (i) bernilai benar!
                    </p>
                    <p style="text-indent: 20px;">
                        Dari beberapa teorema di atas maka tampak bahwa beberapa sifat dasar limit fungsi dapat dibuktikan dengan menggunakan sifat-sifat kekonvergensian barisan.
                    </p>
                    <p style="text-indent: 20px;">
                        Contoh : Jika (x<sub>n</sub>) merupakan sembarang barisan yang konvergen ke suatu bilangan c, maka (x<sub>n</sub><sup>2</sup> ) konvergen ke c<sup>2</sup> . Oleh karena itu, dengan menggunakan Kriteria Barisan, fungsi h(x):= x<sup>2</sup>                        mempunyai limit : lims‹c h(x) = c<sup>2</sup>
                    </p>
                </p>
                <p>
                    <b>F. Kriteria Divergensi</b>
                    <p style="text-indent: 20px;">
                        Berikut akan ditunjukkan (i) suatu bilangan tertentu bukan merupakan limit dari suatu fungsi pada suatu titik, atau (ii) suatu fungsi tidak mempunyai limit pada suatu titik. <br> A &#8838; R, f: A &#8594; R, dan c merupakan titik
                        limit dari A.
                    </p>
                    <ul style="list-style-type: none;" class="px-0">
                        <li>
                            <img src="../images/rumus18.png" alt="" class="w-100">
                        </li>
                        <li>
                            <img src="../images/rumus18.png" alt="" class="w-100">
                        </li>
                    </ul>
                </p>
                <p>
                    <b>Kesimpulan</b>
                    <p style="text-indent: 20px;">Dalam bahasa Matematika, limit menjelaskan nilai suatu fungsi jika didekati dari titik tertentu. Mengapa harus didekati dari titik tertentu dan bukan tepat di titik tertentu? Hal ini disebabkan tidak semua fungsi terdefinisi pada semua
                        titik. Faktor terpenting adalah memahami konsep dan definisi dari limit fungsi itu sendiri dan juga sifat-sifatnya. </p>
                </p>
</div>`
}