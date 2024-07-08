$(window).on({
  'load': () => {
    // HTMLドキュメントが読み込み完了
    console.log('loadイベントが発生しました');
  }, 
  'scroll': () => {
    // 画面スクロール
    console.log('scrollイベントが発生しました');
  }, 
});