<?php
require_once __DIR__ . '/config/database.php';

$stmt = $pdo->query("SELECT name FROM sqlite_master WHERE type='table'");
$tables = $stmt->fetchALL(PDO::FETCH_COLUMN);

echo '<pre>';
print_r($tables);
echo '</pre>';