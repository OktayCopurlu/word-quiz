/**
 * Merhabalar arkadaslar

Bu haftaki görevde json datasindaki verileri kullanarak bir word-quiz yapilmasi beklenmektedir. 
Ekrana random olarak Almanca bir kelime ve 4 tane secenek gelecek. 
Seceneklerden biri Almanca kelimenin dogru karsiligi olacak diger secenekler yanlis olmali. 
Sorularin cevaplanmasiyla diger soruya gecilecek ve her soruya gecildiginde skor güncellenecek. 

Kriterler:
=======================
- React state kullanilmasi,
- Json datasinin kullanilmasi,
 * @param {*} props 
 */

import { useState } from "react";
import Swal from "sweetalert2";

function GetData(props) {
  //Soruyo random alıp ekrana yazdırma
  let soru = props.list[Math.floor(Math.random() * props.list.length)];
  let answers = [];
  let isCorrect = [];

  soru.answersList.map((eleman) => {
    isCorrect.push(Object.entries(eleman));
    return answers.push(Object.values(eleman));
  });

  //cevap seçildikten sonraki aksiyonlar
  const [puan, setPuan] = useState(0);
  const [cevap, setCevap] = useState("DOGRU CEVAP 10 PUAN");
  const [dogruCevap, setDogruCevap] = useState(0);
  const [yanlisCevap, setYanlisCevap] = useState(0);
  const [soruSayisi, setSoruSayisi] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  function Choose(e) {
    setSoruSayisi(soruSayisi + 1);
    if (e.target.id.includes("true")) {
      setIsVisible(true);
      setPuan(puan + 10);
      setCevap("DOGRU BILDIN BRAVOOO");
      setDogruCevap(dogruCevap + 1);
    } else {
      setCevap("SIKI CALISMALISIN");
      setYanlisCevap(yanlisCevap + 1);
      setIsVisible(false);
    }
  }

  //OYUNU BITIRME BUTONU
  function Finish(e) {
    window.location.reload();
  }

  //OYUN ICI ALERTLER
  if (soruSayisi === 0) {
    Swal.fire("YENİ OYUN BASLIYOR.. HAZIRSAN BASLA");
  } else if (soruSayisi === 9) {
    Swal.fire(
      "SON SORU GELİYOR CEVABINDAN SONRA OYUN BITECEK---TOPLAM PUANIN :" + puan
    );
  }
  if (soruSayisi === 10) {
    //10 soruyu geçtiğinde oyun bitiyor.
    document.querySelector("#root").innerHTML = 
    `<button type="button">OYUN BITTI... PUANINIZ : ${puan}</button>
    <button id="finish" type="button">HAYDI BIR OYUN DAHA OYNA</button>`
    document.querySelector('#finish').addEventListener("click",
        
        function refreshPage(){ 
        window.location.reload();
    })
  
  }

  return (
    <>
      <button>{cevap}</button>
      <div id ="soru" className="soru">
        <div>
          <button>{soru.question}</button>
        </div>
        {answers.map((answer) => {
          return (
            <button key={answer} id={answer} onClick={Choose}>
              {answer}
            </button>
          );
        })}
      </div>

      <div className="skor">
        <button style={isVisible ? { backgroundColor: "green" } : null}>
          CORRECT ANSWER: {dogruCevap}
        </button>
        <button style={!isVisible ? { backgroundColor: "red" } : null}>
          FALSE ANSWER :{yanlisCevap}
        </button>
        <button>POINT : {puan}</button>
      </div>
      <button id="yeni-oyun" onClick={Finish} type="button">
        OYUNU BITIR VE YENI OYUNA BASLA
      </button>
    </>
  );
}

export default GetData;
