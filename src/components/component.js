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

function GetData(props) {
  //cevap seçildikten sonraki aksiyonlar
  const [puan, setPuan] = useState(0);
  const [cevap, setCevap] = useState("DOGRU CEVAP 10 PUAN");
  const [dogruCevap, setDogruCevap] = useState(0);
  const [yanlisCevap, setYanlisCevap] = useState(0);

  function Choose(e) {
    if (e.target.id.includes("true")) {
      setPuan(puan + 10);
      setCevap("DOGRU BILDIN BRAVOOO");
      setDogruCevap(dogruCevap + 1);
    } else {
      setCevap("SIKI CALISMALISIN");
      setYanlisCevap(yanlisCevap + 1);
    }
  }

  //Soruyo random alıp ekrana yazdırma
  let soru = props.list[Math.floor(Math.random() * props.list.length)];
  let answers = [];
  let isCorrect = [];

  soru.answersList.map((eleman) => {
    isCorrect.push(Object.entries(eleman));
    return answers.push(Object.values(eleman));
  });

  return (
    <>
      <button>{cevap}</button>
      <div className="soru">
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
        <button>DOGRU CEVAP : {dogruCevap}</button>
        <button>YANLIS CEVAP :{yanlisCevap}</button>
        <button>PUAN : {puan}</button>
      </div>
    </>
  );
}

export default GetData;
