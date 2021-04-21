import './App.css';
import { useEffect } from 'react'
import queryString from 'query-string'
import { listFriends } from './friends'
function App() {
  const $ = (id) => {
    return document.getElementById(id);
  }

  const id = queryString.parse(window.location.search).id;

  const friend = listFriends.find(item => item.id === parseInt(id))

  useEffect(() => {
    const card = $('card')
    const openB = $('open')
    const closeB = $('close')
    let timer = null
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });

    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  }, [])

  return (
    <>
      <div id="card">
        <div id="card-inside">
          <div className="wrap">
            <p>😀 Chào <strong>{friend?.name}</strong>, </p>
            <p>👉 Vào ngày chủ nhật tuần này, 25/04/2021. Trường mình có tổ chức lễ tốt nghiệp cho khoá 16 sau 2 lần hoãn do dịch COVID19.</p>
            <p>👉 Vậy nên, nếu sắp xếp được thời gian. Mình, Thanh Giàu mời bạn đến cùng mình chụp bức hình kỉ niệm cho sự kiện này.</p>
            <p>😍😍😍😍😍</p>
            <p className="signed">Thanh Giàu 👏👏👏</p>
          </div>
        </div>
        <div id="card-front">
          <div className="wrap">
            <h1>Hello, {friend?.name}!</h1>
          </div>
          <button id="open">&gt;</button>
          <button id="close">&lt;</button>
        </div>
      </div>
      <div className="more-info">
        <p><strong>Thời gian:</strong> 11h, ngày 25/04/2021</p>
        <p><strong>Địa điểm:</strong> Số 1, Võ Văn Ngân, Thủ Đức, HCM (ngay ngã tư Thủ Đức)</p>
        <p><strong>Link google map:</strong> <a href="https://bom.to/aznaTLckt1iuu" target="_blank">Click vào đây nha</a></p>
      </div>
    </>

  );
}

export default App;
