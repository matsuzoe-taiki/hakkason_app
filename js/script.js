const savedButton = document.querySelector(".save-btn");
const textInput = document.querySelector(".text-input");

savedButton.addEventListener("click", () => {
    const titleText = textInput.value;
    console.log(titleText);
    localStorage.setItem("title-text", titleText);
});

const editButtons = document.querySelectorAll('.edit-btn');
console.log(`保存ボタン: ${editButtons.length}`);

editButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("ここまで来てる")
        const treeTitle = btn.closest(".deeply-card").querySelector(".title-input").innerText;
        console.log(treeTitle);
        const treeText = btn.closest(".deeply-card").querySelector(".text-deeply").value;

        const tree = JSON.parse(localStorage.getItem("tree"))||[];
        if (tree.some((t) => t.title === treeTitle)) {
            alert("もう入ってる！！");
            return ;
        }

        // 新しいtreeを追加
        tree.push({title: treeTitle, text: treeText});

        // ストレージに保存
        localStorage.setItem("tree", JSON.stringify(tree));

        alert("treeに追加完了");
    });
});



// 考えの全削除
const thinkDelete = document.querySelectorAll('.think-delete');
const allDelete = document.getElementById('allDelete');

allDelete.addEventListener('click', () => {
    localStorage.removeItem("title-text");
    localStorage.removeItem("tree");
    alert("全削除完了");
    window.location.reload();
});

const userDelete = document.getElementById("userDelete");

userDelete.addEventListener('click', () => {
    localStorage.removeItem("username");
    window.location.href = "/hakkason_app/pages/login.html"
})