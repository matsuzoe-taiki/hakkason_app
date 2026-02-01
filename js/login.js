// ログイン画面のJS処理
const userInput = document.getElementById('userInput');
const startButton = document.getElementById('startButton');

startButton.addEventListener("click", () => {
    const username = userInput.value;
    localStorage.setItem("username", username);
    alert("データ保存完了");
    window.location.href = '/hakkason_app/pages/home.html';
});
