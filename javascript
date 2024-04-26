// ページが読み込まれたときの処理
window.addEventListener('load', function() {
    console.log('ページが読み込まれました。');
});

// クリックイベントハンドラの追加
document.addEventListener('DOMContentLoaded', function() {
    // ボタンがクリックされたときの処理
    document.querySelector('button').addEventListener('click', function() {
        alert('ボタンがクリックされました！');
    });
});

// DOM操作の例
document.addEventListener('DOMContentLoaded', function() {
    // h1要素のテキストを変更する
    document.querySelector('h1').textContent = 'こんにちは、みなさん！';
});


    