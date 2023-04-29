function divergen() {
    homeContent.innerHTML = `
<div style="margin-bottom:6rem;" class="mt-4 surah font-sans p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-2xl">
                <b>A. DEFINISI BARISAN CAUCHY </b>
                <p style="text-indent: 20px;">
                    Misal (x<sub>n</sub>) adalah barisan bilangan real. Barisan (x<sub>n</sub>) dikatakan barisan Cauchy jika dan hanya jika (x<sub>n</sub>) memenuhi: untuk ϵ>0, terdapat bilangan asli N sedemikian sehingga untuk tiap bilangan asli n,m
                    dengan n, m ≥ N, berlaku bahwa:
                    <span class="d-block text-center">
                     |x<sub>n</sub> − x<sub>m</sub>| &lt; ε 
                    </span>
                </p>
                <p style="text-indent: 20px;">
                    Perhatikan bahwa notasi ∣ x<sub>n</sub> − x<sub>m</sub>∣ &lt; ε menyatakan selisih dari suku-suku yang lebih dari N. Sehingga pada dasarnya, jika kita berbicara mengenai barisan Cauchy, maka kita berbicara mengenai selisih dari suku-suku
                    di ekor barisannya. Berbeda dengan definisi konvergensi barisan yang berbicara tentang selisih dari suku-sukunya dengan nilai limitnya. Oleh karena itu, secara intuitif, barisan cauchy adalah barisan yang memiliki ekor barisan yang
                    semakin mengecil (selisihnya semakin kecil, yaitu menuju nol ataupun bahkan sama dengan nol).
                </p>
                <p>
                    <b>B. TEOREMA TERKAIT DENGAN BARISAN CAUCHY</b>
                    <p style="text-indent: 20px;">
                        Selanjutnya kita akan membahas tentang beberapa teorema terkait dengan barisan Cauchy.
                    </p>
                    <p>
                        <b>Teorema 1: </b> Jika (x<sub>n</sub>) adalah barisan yang konvergen ke suatu bilangan real α, maka barisan tersebut adalah barisan Cauchy.
                    </p>
                    <p>
                        <i>Bukti:</i> Diberikan (x<sub>n</sub>) adalah barisan yang konvergen ke suatu bilangan real α. Akan ditunjukkan bahwa barisan tersebut adalah barisan Cauchy dengan menggunakan definisi dari barisan Cauchy. Untuk itu, misalkan
                        ϵ &gt; 0 sebarang. Karena (x<sub>n</sub>) konvergen ke α, maka terdapat <i>N </i> ∈ N sedemikian sehingga
                        <span class="d-block text-center">
                         |x<sub>n</sub> − α| &lt; <sup>ε</sup>&frasl;<sub>2</sub> <br> Dan  |x<sub>m</sub> − α| &lt; <sup>ε</sup>&frasl;<sub>2</sub>
                        </span>
                    </p>
                    <p>
                        Sehingga dengan ketaksamaan segitiga, diperoleh bahwa
                        <span class="d-block text-center">
                         |x<sub>n</sub> − x<sub>m</sub>| = |x<sub>n</sub> - α + α-x<sub>m</sub>| <br> 
                         &le;  |x<sub>n</sub> − α| + |x<sub>m</sub> − α| <br>
                         &lt; <sup>ε</sup>&frasl;<sub>2</sub> + <sup>ε</sup>&frasl;<sub>2</sub> = ε
                        </span>
                    </p>
                    <p>
                        untuk tiap bilangan asli n, m dengan n,m ≥ N. Oleh karena itu, terdapat bilangan asli N sedemikian sehingga untuk tiap bilangan asli n, m dengan n,m ≥ N, berlaku bahwa
                        <span class="d-block text-center">
                         |x<sub>n</sub> − x<sub>m</sub>| &lt; ε
                        </span>
                    </p>
                    <p>
                        Jadi, dengan definisi barisan Cauchy, (x<sub>n</sub>) adalah barisan Cauchy.
                    </p>
                    <p>
                        <b>Teorema 2:</b>
                        <p>
                            Setiap barisan Cauchy adalah barisan yang terbatas. (Catatan: Suatu barisan (x<sub>n</sub>) terbatas jika terdapat M positif sedemikian sehingga ∣ x<sub>n</sub> ∣ ≤ M untuk tiap n ∈ N).
                        </p>
                        <p>
                            <i>Bukti:</i> Diberikan (x<sub>n</sub>) adalah barisan Cauchy. Akan ditunjukkan bahwa barisan tersebut adalah barisan yang terbatas. ϵ = 1 karena (x<sub>n</sub>) adalah barisan cauchy, maka terdapat N ∈ N sedemikian sehingga
                            untuk tiap bilangan asli n,m dengan n, m ≥ <i>N</i>, berlaku bahwa:
                            <span class="d-block text-center">
                                |x<sub>n</sub> − x<sub>m</sub>| &lt; ε = 1
                            </span>
                        </p>
                        <p>
                            Sehingga, dengan ketaksamaan segitiga, maka untuk tiap bilangan asli n dengan n ≥ <i>N</i>, berlaku bahwa:
                            <span class="d-block text-center">
                                |x<sub>n</sub>| = |x<sub>n</sub> - xN + xN| &lt; |x<sub>n</sub> - xN| + |xN| &lt; 1 + |xN|
                            </span>
                        </p>
                        <p>
                            Tulis
                            <span class="d-block text-center">
                             <i>M</i> = max {|x<sub>1</sub>|, |x<sub>2</sub>|, ..., |x<sub>n</sub> - 1|, 1+ |xN|}
                            </span>
                        </p>
                        <p>
                            Maka, untuk tiap n dengan n ≥ N, berlaku
                            <span class="d-block text-center">
                                |x<sub>n</sub>| &lt; 1 + |xN| &le; <i>M</i>
                            </span>
                        </p>
                        <p>
                            dan untuk n=1,…,<i>N</i>−1, berlaku
                            <span class="d-block text-center">
                                |x<sub>n</sub>| &le; <i>M</i>
                            </span>
                        </p>
                        <p>
                            Jadi,
                        </p>
                        <p>
                            untuk tiap n ∈ N dan (x<sub>n</sub>) merupakan barisan yang terbatas.
                        </p>
                    </p>
                    <p>
                        <b>Teorema 3:</b>
                        <p>
                            Jika sebuah barisan Cauchy memiliki subbarisan yang konvergen ke α∈R, maka barisan tersebut merupakan barisan yang konvergen ke α.
                        </p>
                        <p>
                            <i>Bukti:</i> Misalkan (x<sub>n</sub>) adalah barisan Cauchy dan asumsikan bahwa barisan tersebut mempunyai subbarisan (<i>xkn</i>) yang konvergen ke α∈R. Akan ditunjukkan bahwa barisan (x<sub>n</sub>) adalah barisan konvergen
                            dengan menggunakan definisi barisan konvergen.
                        </p>
                        <p>
                            Diberikan ϵ>0, karena (x<sub>n</sub>) adalah barisan Cauchy, maka terdapat bilangan asli <i>N</i> sedemikian sehingga untuk tiap bilangan asli <i>n</i>,<i>m</i> dengan <i>n</i>,<i>m</i>≥<i>N</i>, berlaku bahwa
                            <span class="d-block text-center">
                                |x<sub>n</sub> - x<sub>m</sub>| &lt; <sup>ε</sup>&frasl;<sub>2</sub>
                            </span>
                        </p>
                        <p>
                            Selain itu, karena subbarisan (xkn) konvergen ke α ∈ R, maka terdapat bilangan asli K sedemikian sehingga untuk tiap bilangan asli n dengan n ≥ K, berlaku bahwa
                            <span class="d-block text-center">
                                |xkn - α| &lt; <sup>ε</sup>&frasl;<sub>2</sub>
                            </span>
                        </p>
                        <p>
                            Pilih <i>M</i> = max{<i>K,N</i>}. Maka, untuk n ≥ M, berlaku bahwa n ≥ M ≥ N dan kn ≥ n ≥ K, sehingga dengan ketaksamaan segitiga:
                            <span class="d-block text-center">
                                |x<sub>n</sub> - α| = |x<sub>n</sub> - xkn + xkn - x<sub>n</sub>| <br>
                                &le;  |x<sub>n</sub> - xkn| + |x<sub>n</sub> - xkn| <br>
                                &lt; <sup>ε</sup>&frasl;<sub>2</sub> + <sup>ε</sup>&frasl;<sub>2</sub> = ε.
                            </span>
                        </p>
                        <p>
                            Oleh karena itu, terdapat M∈R sedemikian sehingga untuk n∈N dengan n≥N, berlaku bahwa
                            <span class="d-block text-center">
                                |x<sub>n</sub> - α| &lt; ε
                            </span>
                        </p>
                        <p>
                            Karena ϵ>0 sebarang, maka kita dapat menyimpulkan bahwa (x<sub>n</sub>) adalah barisan yang konvergen α.
                        </p>
                    </p>
                </p>
                <p>
                    <b>C. SIFAT BARISAN</b>
                    <p style="padding-left: 10px; text-indent: 20px;">
                        Pada sub bab ini diberikan beberapa sifat dari suatu barisan bilangan real (x<sub>n</sub>) yang mendekati atau menuju ke ±∞, yaitu lim (x<sub>n</sub>) = +∞ dan lim (x<sub>n</sub>) = −∞. Ingat bahwa barisan divergen adalah barisan
                        yang tidak konvergen.
                    </p>
                    <p style="padding-left: 10px;">
                        Defenisi 1 diberikan barisan bilangan real (x<sub>n</sub>):
                    </p>
                    <p>
                        <ol type="i">
                            <li>
                                Barisan (x<sub>n</sub>) dikatakan mendekati +∞, ditulis dengan lim (x<sub>n</sub>) = +∞, jika untuk setiap α ∈ R terdapat K(α) ∈ N sedemikian hingga jika n ≥ K(α), maka x<sub>n</sub> > α.
                            </li>
                            <li>
                                Barisan (x<sub>n</sub>) dikatakan mendekati−∞, ditulis dengan lim (x<sub>n</sub>) = −∞, jika untuk setiap β ∈ R terdapat K(β) ∈ N sedemikian hingga jika n ≥ K(β), maka x<sub>n</sub> &lt; β.
                            </li>
                        </ol>
                    </p>
                    <p style="padding-left: 10px;">
                        Barisan (x<sub>n</sub>) dikatakan divergen proper (tepat/tegas) jika lim (x<sub>n</sub>) = +∞ atau lim (x<sub>n</sub>) = −∞.
                    </p>
                </p>
                <p>
                    <b>Teorema 1</b>
                    <p>
                        Barisan bilangan real monoton merupakan barisan divergen proper jika dan hanya jika barisannya tidak terbatas.
                    </p>
                    <p>a) Jika (x<sub>n</sub>) barisan naik tak terbatas, maka lim (x<sub>n</sub>) = +∞. </p>
                    <p>
                        Bukti.
                    </p>
                    <p>
                        Misalkan (x<sub>n</sub>) barisan naik. Jika (x<sub>n</sub>) terbatas, maka (x<sub>n</sub>) konvergen. Jika(x<sub>n</sub>) tidak terbatas, maka untuk sebarang α ∈ R terdapat n(α) ∈ N sedemikian hingga α &lt; (x<sub>n</sub> (α)).
                        Tetapi karena (x<sub>n</sub>) naik, diperoleh α &lt; (x<sub>n</sub>) untuk semua n > n(α). Karena α sebarang, maka diperoleh bahwa lim (x<sub>n</sub>) = +∞.
                    </p>
                </p>
                <p>
                    <b>Teorema 2 </b>
                    <p>
                        Diberikan barisan bilangan real (x<sub>n</sub>) dan (y<sub>n</sub>), dengan x<sub>n</sub> ≤ y<sub>n</sub> untuk semua n ∈ N.
                    </p>
                    <p>
                        <ol type="a">
                            <li>
                                Jika lim (x<sub>n</sub>) = +∞, maka lim (y<sub>n</sub>) = +∞.
                            </li>
                            <li>
                                Jika lim (x<sub>n</sub>) = -∞, maka lim (y<sub>n</sub>) = -∞.
                            </li>
                        </ol>
                    </p>
                    <p>
                        Bukti.
                    </p>
                    <p>
                        <ol type="a">
                            <li>
                                Jika lim (x<sub>n</sub>) = +∞, dan jika diberikan a ∈ R, maka terdapat K(α) ∈ N sedemikian sehingga jika n ≥ K(α), maka a &lt; x<sub>n</sub>. Karena diketahui x<sub>n</sub> ≤ y<sub>n</sub> untuk semua n ∈ N, maka a &lt;
                                y
                                <sub>n</sub> untuk semua n ≥ K(α). Karena sebarang, maka lim (y
                                <sub>n</sub>) = +∞.
                            </li>
                            <li>
                                Bukti hampir sama dengan a).
                            </li>
                        </ol>
                    </p>
                </p>
                <p>
                    <b>Kesimpulan</b>
                    <p style="text-indent: 20px;">
                        Barisan (x<sub>n</sub>) dikatakan barisan Cauchy jika dan hanya jika (x<sub>n</sub>) memenuhi: untuk ϵ>0, terdapat bilangan asli N sedemikian sehingga untuk tiap bilangan asli n,m dengan n,m ≥ N, berlaku bahwa : ∣ x<sub>n</sub>                        − x<sub>m</sub>∣ &lt; ϵ. Beberapa sifat dari suatu barisan bilangan real (x<sub>n</sub>) yang mendekati atau menuju ke ±∞, yaitu lim (x<sub>n</sub>)=+ ∞ dan lim (x<sub>n</sub>)=− ∞. Ingat bahwa barisan divergen adalah barisan yang
                        tidak konvergen.
                    </p>
                    <p style="text-indent: 20px;">
                        Beberapa sifat dari suatu barisan bilangan real (x<sub>n</sub>) yang mendekati atau menuju ke ±∞, yaitu lim (x<sub>n</sub>)=+ ∞ dan lim (x<sub>n</sub>) = −∞. Ingat bahwa barisan divergen adalah barisan yang tidak konvergen.
                    </p>
                    <p>
                        Defenisi 1 diberikan barisan bilangan real (x<sub>n</sub>):
                    </p>
                    <p>
                        <ol type="i">
                            <li>
                                Barisan (x<sub>n</sub>) dikatakan mendekati +∞, ditulis dengan lim (x<sub>n</sub>) = +∞, jika untuk setiap α ∈ R terdapat K(α) ∈ N sedemikian hingga jika n ≥ K(α), maka x<sub>n</sub> > α.
                            </li>
                            <li>
                                Barisan (x<sub>n</sub>) dikatakan mendekati−∞, ditulis dengan lim (x<sub>n</sub>) = −∞, jika untuk setiap β ∈ R terdapat K(β) ∈ N sedemikian hingga jika n ≥ K(β), maka x<sub>n</sub> &lt; β.
                            </li>
                        </ol>
                    </p>
                    <p>
                        Barisan (x<sub>n</sub>) dikatakan divergen proper (tepat/tegas) jika lim (x<sub>n</sub>) = +∞ atau lim (x<sub>n</sub>) = −∞.
                    </p>
                </p>
                <p>
                    <b class="text-center d-block">CONTOH SOAL DAN PEMBAHASAN </b>
                    <p>
                        <b>Contoh 1.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buktikan apakah barisan berikut ini merupakan barisan divergen. Jika iya, apakah merupakan barisan divergen proper?
                    </p>
                    <img src="../images/rumus7.png" alt="" class="w-75">
                    <p>
                        <b>Contoh 2.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buktikan apakah barisan berikut ini merupakan barisan divergen. Jika iya, apakah merupakan barisan divergen proper?
                    </p>
                    <img src="../images/rumus8.png" alt="" class="w-50">
                    <img src="../images/rumus9.png" alt="" class="w-75">
                    <p>
                        <b>Contoh 3.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buktikan bahwa barisan berikut ini merupakan barisan divergen proper! <br> x<sub>n</sub> = (-1)<sup>n</sup>.
                    </p>
                    <img src="../images/rumus10.png" alt="" class="w-75">
                    <p>
                        <b>Contoh 4.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buktikan apakah barisan berikut ini merupakan barisan divergen proper. <br> x<sub>n</sub> = 2n - 1. <br> Ambil sembarang n &#8714; <i>N</i>. <br> n = 1 &#8594 x<sub>1</sub> =2(1) - 1 = 1 <br> n = 2 &#8594 x<sub>2</sub> =2(2) -
                        1 = 3 <br> n = 3 &#8594 x<sub>3</sub> =2(3) - 1 = 5 <br> Karean lim x<sub>n</sub> = +&#8734;, maka x<sub>n</sub> merupakan barisan divergen proper.
                    </p>
                    <p>
                        <b>Contoh 5.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buktikan barisan (<sup>1</sup>&frasl;<sub>2</sub>) merupakan barisan Cauchy. <br> Jawab: <br>
                        <img src="../images/rumus11.png" alt="" class="w-75">
                    </p>
                    <p>
                        <b>Contoh 6.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Selidiki barisan X = (X<sub>n</sub>) berikut divergen atau bukan jika: <br> X
                        <sub>n</sub> = <sup>n</sup>&frasl;<sub>n+1</sub> <br> Jawab: <br>
                        <img src="../images/rumus12.png" alt="" class="w-75">
                    </p>
                    <p>
                        <b>Contoh 7.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Selidiki barisan X = (X<sub>n</sub>) berikut divergen atau bukan jika: <br> X
                        <sub>n</sub> = <sup>(-1)<sup>n</sup>n</sup>&frasl;<sub>n+1</sub> <br> Jawab:
                    </p>
                    <p>
                        <b>Contoh 8.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Selidiki barisan X = (X<sub>n</sub>) berikut divergen atau bukan jika: <br> X
                        <sub>n</sub> = <sup>n<sup>2</sup></sup>&frasl;<sub>n+1</sub> <br> Jawab:
                    </p>
                    <p>
                        <b>Contoh 9.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Selidiki barisan X = (X<sub>n</sub>) berikut divergen atau bukan jika: <br> X
                        <sub>n</sub> = <sup>2n<sup>2</sup>+3</sup>&frasl;<sub>n<sup>2</sup>+1</sub> <br> Jawab:
                    </p>
                    <p>
                        <b>Contoh 10.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Tunjukkan bahwa setiap barisan konvergen adalah Barisan Cauchy. <br> Jawab:
                    </p>
                    <p>
                        <b>Contoh 11.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buatlah contoh barisan divergen X, Y , tetapi X + Y konvergen
                        <br> Jawab: <br>
                        <img src="../images/rumus13.png" alt="" class="w-75">
                    </p>
                    <p>
                        <b>Contoh 12.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buatlah contoh barisan divergen X, Y , tetapi X + Y konvergen
                        <br> Jawab: <br>
                        <img src="../images/rumus14.png" alt="" class="w-75">
                    </p>
                    <p>
                        <b>Contoh 13.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buatlah contoh barisan divergen X, Y , tetapi X - Y konvergen
                        <br> Jawab: <br>
                        <img src="../images/rumus15.png" alt="" class="w-75">
                    </p>
                    <p>
                        <b>Contoh 14.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        Buatlah contoh barisan divergen X, Y , tetapi X - Y konvergen
                        <br> Jawab: <br>
                        <img src="../images/rumus16.png" alt="" class="w-75">
                    </p>
                    <p>
                        <b>Contoh 15.</b>
                    </p>
                    <p style="text-indent: 20px;">
                        BBerikan contoh barisan divergen dengan sifat lim<sub>n → ∞</sub>(X<sub>n</sub> <sup>1</sup>&frasl;<sub>2</sub>) = L.
                        <br> Jawab: <br>
                        <img src="../images/rumus17.png" alt="" class="w-75">
                    </p>
                </p></div>
`
}