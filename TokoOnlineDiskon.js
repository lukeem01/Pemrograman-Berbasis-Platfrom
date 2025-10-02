function hitungHargaAkhir(totalBelanja) {
    let diskon = 0;

    if (totalBelanja > 1000000) {
        diskon = 0.15; //-> Diskon 15%
    } else if (totalBelanja > 500000) {
        diskon = 0.10; //-> Diskon 10%
    } else {
        diskon = 0; //No Diskon
    }
    let hargaAkhir = totalBelanja - (totalBelanja * diskon);
}
console.log("Total Belanja Rp400.000 -> Harga Akhir: Rp"+hitungHargaAkhir(400000));
console.log("Total Belanja Rp750.000 -> Harga Akhir: Rp"+hitungHargaAkhir(750000));
console.log("Total Belanja Rp1.200.000 -> Harga Akhir: Rp"+hitungHargaAkhir(1200000));
