import { useState } from "react";
import "./styles.css";

export default function App() {
  const [answer, setAnswer] = useState(null);
  const Messages = [
    "Kesinlikle",
    "Kesinlikle öyle",
    "Kuşkusuz",
    "Evet - elbette",
    "Bana güvenebilirsin",
    "Gördüğüm kadarıyla, evet",
    "Çoğunlukla",
    "Dışarıdan iyi görünüyor",
    "Evet",
    "Belirtiler olduğu yönünde",
    "Biraz belirsiz, tekrar dene",
    "Sonra tekrar dene",
    "Şimdi söylemesem daha iyi",
    "Şimdi kehanette bulunamam",
    "Konsantre ol ve tekrar sor",
    "Bana öyle bakma",
    "Yanıtım hayır",
    "Kaynaklarım hayır diyor",
    "Pek iyi görünmüyor",
    "Çok şüpheli"
  ];

  function GetAnswer() {
    const number = Math.floor(Math.random() * 20);
    setAnswer(Messages[number]);
  }
  return (
    <div className="App">
      <h1 contentEditable>Yazılım Dünyası Renkli ve Eğlenceli Mi?!</h1>
      <div className="big-ball center" onClick={GetAnswer}>
        <div className="small-ball center">
          {answer ? <div>{answer}</div> : <div className="eight">8</div>}
        </div>
      </div>
    </div>
  );
}
