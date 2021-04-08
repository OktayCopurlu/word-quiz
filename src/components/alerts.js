import Swal from "sweetalert2";

export default function Alert(soruSayisi, puan) {
  //OYUN ICI ALERTLER

  if (soruSayisi === 0) {
    Swal.fire("NEW GAME IS STARTING.. ARE YOU READY ?");
  } else if (soruSayisi === 9) {
    Swal.fire("LAST QUESTION IS COMING");
  } else if (soruSayisi === 10) {
    Swal.fire("GAME OVER ... YOUR POINTS   : " + puan);
  }
}
