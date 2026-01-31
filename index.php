<?php
//DB設定読み込み
require_once __DIR__.'/config/database.php';
//共通関数API
require_once __DIR__.'/includes/function.php';
//ヘッダー
require_once __DIR__.'/includes/header.php';
?>

<?php
$page = $_GET['page'] ?? 'home';
if ($page === 'home') {
    require __DIR__ . '/pages/home.php';
}elseif ($page === 'login') {
    require __DIR__ . '/pages/login.php';
}
?>

<?php
//フッター
require_once __DIR__.'/includes/footer.php';
