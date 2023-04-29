function limit() {
    homeContent.innerHTML = `
<div style="margin-bottom:6rem;"  class="mt-4 surah font-sans p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-2xl">
<b>A. Konsep Limit </b>
<p style="padding-left: 10px;">
    Ada beberapa konsep untuk menguji limit suatu fungsi, diantaranya dua teorema di bawah ini.
    <br>
    <b>Teorema 5.2.1
    </b> <br> Misalkan fungsi f: A &#8834; R &#8594; R dengan a sebagai titik limit A lim<sub>x &#8594; a</sub> f(x) = l jika dan hanya jika untuk setiap barisan bilangan nyata {f(x<sub>n</sub>)} konvergen ke l.
    <p style="padding-left: 10px;">
        <b>Bukti: (syarat perlu)</b> lim<sub>x &#8594; a</sub> f(x) = l jika dan hanya jika untuk setiap bilangan ε > 0 terdapat bilangan r > 0 sehingga jika x ≠ a, x ∈ A, |x − a| &#60; r berakibat |f (x) − l| &#60; ε.
    </p>
    <p style="padding-left: 10px;">
        Diambil sebarang barisan bilangan r > 0 tersebut dapat dipilih {x<sub>n</sub>} dengan x<sub>n</sub> ∈ A yang konvergen ke a. Hal ini berarti untuk bilangan r > 0 tersebut dapat dipilih bilangan asli n<sub>0</sub> sehingga jika
        n ≥ n<sub>0</sub> berakibat |x<sub>n</sub> − a| &#60; r. Menurut hipotesis di atas karena x<sub>n</sub> ≠ a, x<sub>n</sub> ∈ A, |x<sub>n</sub> − a| &#60; r, diperoleh <br>
        <p class="text-center">
            <img src="../images/rumus20.png" alt="" class="w-50">
        </p>
        <img src="../images/rumus21.png" alt="" class="w-75">
        <span class="d-block ">
         <img src="../images/17.png" alt="" class="w-100">
        </span>
        <span class="d-block ">
         <img src="../images/18.png" alt="" class="w-100">
        </span>
        <span class="d-block ">
         <img src="../images/19.png" alt="" class="w-100">
        </span>
    </p>
</p>
<p>
    <b>Kesimpulan
    </b> <br> Dalam bahasa matematika, limit menjelaskan nilai suatu fungsi jika didekati dari titik tentu. Mengapa harus didekati dari titik tertentu dan bukan tepat di titik tertentu? Hal ini disebabkan tidak semua
    fungi terdefinisi pada semua titik. Faktor terpenting adalah memahami teorema limit fungsi dan juga sifat-sifatnya.
</p>
</div>

`
}