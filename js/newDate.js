function setTime() {
  const 오늘 = document.querySelector(".오늘");
  const 시간 = document.querySelector(".시간");
  오늘.style =
    "display: flex; justify-content: center;align-items: center; text-align: center;";
  시간.style =
    "display: flex; justify-content: center;align-items: center; text-align: center;";
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const hour = time.getHours().toString();
  const minute = time.getMinutes().toString();
  const second = time.getSeconds().toString();
  const clock = document.querySelector(".time");
  const toDay = document.querySelector(".toDay");
  clock.innerText = `${hour.padStart(2, "0")}:${minute.padStart(
    2,
    "0"
  )}:${second.padStart(2, "0")}`;
  toDay.innerText = `${year}년${month}월${day}일`;
}
setInterval(setTime, 1000);

setTimeout(function 루프() {
  console.log("루프를 시작합니다.");
  setTimeout(루프, 1000);
}, 1000);
