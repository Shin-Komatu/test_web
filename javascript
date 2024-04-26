// ページが読み込まれたときの処理
window.addEventListener('load', function() {
    console.log('ページが読み込まれました。');
});

// クリックイベントハンドラの追加
document.querySelector('button').addEventListener('click', function() {
    alert('ボタンがクリックされました！');
});

// DOM操作の例
document.querySelector('h1').textContent = 'こんにちは、みなさん！';

    