// // リストを取得し、指定
// const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
// const listEl = document.querySelector('.side-scroll-list');

// // gsap.to()=指定した状態へ変化する
// gsap.to(listEl, { // アニメーション対象を引数に指定（クラス名を文字列で入れてもok）
//   x: () => -(listEl.clientWidth - listWrapperEl.clientWidth), // リストの横幅 – リストラッパーの横幅
//   // ↑関数で指定すると画面のリサイズに対応してくれる
//   ease: 'none',

//   // scrollTriggerプラグイン
//   scrollTrigger: {
//     trigger: '.side-scroll', // .side-scrollが画面内に入ったら実行
//     start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
//     end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,  // xと同じ
//     scrub: true, // スクロールに同期する
//     pin: true, // ピン止めする（スクロールで下に行けない）
//     anticipatePin: 1, // ガタツキ防止
//     invalidateOnRefresh: true, // リサイズ設定
//     markers: true, // デバッグ機能
//   },
// });

// unicorn
const $trigger = document.getElementById('trigger');
const $wrapper = document.getElementById('wrap');
const $field = document.getElementById('field');

const wrapperWidth =  $wrapper.clientWidth;
const wrapperHeight = $wrapper.clientHeight;
const fieldWidth = $field.clientWidth;
const fieldHeight = $field.clientHeight;

gsap.timeline({
  defaults: {
    ease: 'none',
  },
  scrollTrigger: {
    trigger: $trigger,
    start: 'top top',
    end: () => `+=${fieldWidth - wrapperWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    markers: true,
  }
})
  .to($field, { x: ()=> 100, y: ()=> fieldHeight })
  .to($field, { x: ()=> 200, y: ()=> 0, })
