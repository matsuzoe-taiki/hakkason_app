const savedButton = document.querySelectorAll(".save-button");
const textInput = document.querySelector(".text-input");

savedButton.addEventListener("click", () => {
    const titleText = textInput.value;
    localStorage.setItem("title-text", titleText);
});

const editButtons = document.querySelectorAll('edit-btn');

editButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const treeTitle = btn.closest(".deeply-card").querySelector(".title-input").innerText;
        const treeText = btn.closest(".deeply-card").querySelector(".text-deeply").value;

        const tree = JSON.parse(localStorage.getItem("tree"))||[];
        if (tree.some((t) => t.title === treeTitle)) {
            alert("もう入ってる！！");
        }

        // 新しいtreeを追加
        tree.push({title: treeTitle, text: treeText});

        // ストレージに保存
        localStorage.setItem("tree", JSON.stringify(tree));

        alert("treeに追加完了");
    });
});

// ユーザー名の変更
const userDelete = document.getElementById('userDelete');

userDelete.addEventListener('click', () => {
    localStorage.removeItem("username");
    window.location.href = '/hakkason_app/pages/login';
})

// 考えの全削除
const thinkDelete = document.getElementById('thinkDelete');

thinkDelete.addEventListener('click', () => {
    localStorage.removeItem("tree");
    window.location.reload();
});