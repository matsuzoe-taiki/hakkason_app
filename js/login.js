// ログイン画面のJS処理
const userInput = document.getElementById('userInput');
const startButton = document.getElementById('startButton');

startButton.addEventListener("click", () => {
    const username = userInput.value;
    console.log(username);
    localStorage.setItem("username", username);
    alert("データ保存完了");
});
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("username");
    if (saved) {
        window.location.href = '/hakkason_app/pages/home.html';
    }
})