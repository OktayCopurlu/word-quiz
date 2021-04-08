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

import { useState, useEffect } from "react";

import Alert from "./alerts";

function Quiz(props) {
  //Soruyo random alıp ekrana yazdırma
  let newList = props.list;
  const [soru, setSoru] = useState(
    newList[Math.floor(Math.random() * newList.length)]
  );
  const [soruSayisi, setSoruSayisi] = useState(0);

  useEffect(() => {
    setSoru(newList[Math.floor(Math.random() * newList.length)]);
  }, [soruSayisi, newList]);

  let answers = [];
  soru.answersList.map((eleman) => {
    return answers.push(Object.values(eleman));
  });
  //cevap seçildikten sonraki aksiyonlar
  const [puan, setPuan] = useState(0);
  const [cevap, setCevap] = useState("DOGRU CEVAP 10 PUAN");
  const [dogruCevap, setDogruCevap] = useState(0);
  const [yanlisCevap, setYanlisCevap] = useState(0);
  const [isVisible, setIsVisible] = useState(null); //true yada false oldugunda botton background değişiyor.

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

  Alert(soruSayisi, puan);

  return (
    <>
      {(soruSayisi < 10) ? ( // soru sayisi 10 dan küçük olduğu sürece çalışan kısım.
        <>
          <button>{cevap}</button>
          <div id="soru" className="soru">
            <div>
              <button>{soru.question}</button>
            </div>
            {answers.map((answer) => {
              return (
                <button type="button" key={answer} id={answer} onClick={Choose}>
                  {answer[0]}
                </button>
              );
            })}
          </div>
          <button id="yeni-oyun" onClick={Finish} type="button">
            OYUNU BITIR VE YENI OYUNA BASLA
          </button>
        </>
      ) : (
        // soru sayisi 10 a geldiğinde çalışan kısım.
        <>
          <button type="button">OYUN BITTI... PUANINIZ :{puan}</button>
          <button id="finish" type="button" onClick={Finish}>
            HAYDI BIR OYUN DAHA OYNA
          </button>
        </>
      )}

      <div className="skor">
        <button
          style={isVisible === true ? { backgroundColor: "green" } : null}
        >
          CORRECT ANSWER: {dogruCevap}
        </button>
        <button style={isVisible === false ? { backgroundColor: "red" } : null}>
          FALSE ANSWER :{yanlisCevap}
        </button>
        <button>POINT : {puan}</button>
      </div>
    </>
  );
}
export default Quiz;
