import Swal from "sweetalert2";

export default function Alert(soruSayisi, puan) {
  //OYUN ICI ALERTLER

  if (soruSayisi === 0) {
    Swal.fire("YENİ OYUN BASLIYOR.. HAZIRSAN BASLA");
  } else if (soruSayisi === 9) {
    Swal.fire("SON SORU GELİYOR");
  } else if (soruSayisi === 10) {
    Swal.fire("OYUN BITTI PUANINIZ : " + puan);
  }
}
