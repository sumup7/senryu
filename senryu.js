'use strict';
const selectButton1 = document.getElementById('select1');
const selectButton2 = document.getElementById('select2');
const selectButton3 = document.getElementById('select3');
const resetButton = document.getElementById('reset');
const resultDivided1 = document.getElementById('result-area1');
const resultDivided2 = document.getElementById('result-area2');
const resultDivided3 = document.getElementById('result-area3');
const comentDivided = document.getElementById('coment');
const tweetDivided = document.getElementById('tweet-area');

 /**
* 指定した要素の子どもを全て削除する
* @param {HTMLElement} element HTMLの要素
*/
function removeAllChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
const answers1 = [
`まちむすめ　上田敏`,
`「ああしんど」	池田 蕉園`,
`あばばばば　芥川龍之介`,
`犬と笛　芥川龍之介`,
`蜘蛛の糸　芥川龍之介`,
`火事とポチ　有島武郎`,
`かざぐるま　小川未明`,
`きりぎりす　太宰治`,
`女生徒　太宰治`,
`たずねびと　太宰治`,
`走れメロス　太宰治`,
`さがしもの　土田 耕平`,
`花が咲く　徳田 秋声`,
`不如帰　徳冨 蘆花`,
`田舎者　豊島 与志雄`,
`花ふぶき　豊島 与志雄`,
`変な男　豊島 与志雄`,
`銀の匙　中 勘助`,
`すみだ川　永井 荷風`,
`にぎり飯　永井 荷風`,
`白い雲　小川未明`,
`白いくま　小川未明`,
`子ども達　林 芙美子`,
`たけくらべ　樋口一葉`,
`花ごもり　樋口一葉`,
`琴の音　樋口一葉`,
`風立ちぬ　堀辰雄`,
  ];
  const answers2 = [
    `無念女工 榎南 謙一`,
    `小さき者へ　有島武`,
    `呼ばれし乙女　岡本かの子`,
    `赤いえりまき　小川未明`,
    `秋が　きました　小川未明`,
    `秋のお約束　小川未明`,
    `朝の公園　小川未明`,
    `生きぬく力　小川未明`,
    `海のまぼろし　小川未明`,
    `いろいろな花　小川未明`,
    `風はささやく　小川未明`,
    `つめたい　メロン　小川未明`,
    `どこで笛吹く　小川未明`,
    `春が来る前　小川未明`,
    `ぐうたら戦記　坂口安吾`,
    `街はふるさと　坂口安吾`,
    `あさましきもの  太宰治`,
    `女の決闘　太宰治`,
    `人間失格　太宰治`,
    `パンドラの匣　太宰治`,
    `新茶のかおり　田山花袋`,
    `悪魔の宝    豊島与志雄`,
    `地図にない街　橋本五郎`,
    `生爪を剥ぐ 　葉山嘉樹`,
    `真夏日の散歩　原民喜`,
    `星のわななき  原民喜`,
    `あなたも私も　久生十蘭`,
  ];
  
  /**
   * ボタンを押したら乱数をつくり配列の添え字を乱数で割って選ぶ
   */
  function select1() {
    //乱数をつくる
    const n1 = Math.floor(Math.random() * 100);
    const index1 = n1 % answers1.length;
    let result1 = answers1[index1];
    return result1;
  }
  function select2() {
    //乱数をつくる
    const n2 = Math.floor(Math.random() * 100);
    const index2 = n2 % answers2.length;
    let result2 = answers2[index2];
    return result2;
  }
  function select3() {
    //乱数をつくる
    const n3 = Math.floor(Math.random() * 100);
    const index3 = n3 % answers1.length;
    let result3 = answers1[index3];
    return result3;
  }
//セレクトボタン１を押すと最初の５文字が表示される。
selectButton1.onclick = () => {
 removeAllChildren(resultDivided1);
 const paragraph1 = document.createElement('h2');
 let poetry1 = select1();
 paragraph1.innerText = poetry1;
 resultDivided1.appendChild(paragraph1);
}
//セレクトボタン２を押すと２番目のの７文字が表示される。
selectButton2.onclick = () => {
  removeAllChildren(resultDivided2);
  const paragraph2 = document.createElement('h2');
  let poetry2 = select2();
  paragraph2.innerText = poetry2;
  resultDivided2.appendChild(paragraph2);
 }
//セレクトボタン３を押すと最後の５文字とコメントが表示される。
selectButton3.onclick = () => {
  removeAllChildren(resultDivided3);
  removeAllChildren(comentDivided);
  let paragraph3 = document.createElement('h2');
  const paragraph4 = document.createElement('p')
  let poetry1 = select1();
  let poetry2 = select2();
  let  poetry3 = select3();
  paragraph3.innerText = poetry3;
  paragraph4.innerText = "川柳ぽっくなりましたか？何度も遊んでみてください!!!!";
  resultDivided3.appendChild(paragraph3);
  comentDivided.appendChild(paragraph4);
 
  //ツイートエリアの作成
let result = poetry1 + poetry2 + poetry3;
removeAllChildren(tweetDivided);
const anchor = document.createElement('a');
const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
+ encodeURIComponent('タイトル川柳メーカー')
+ '&ref_src=twsrc%5Etfw';
anchor.setAttribute('href',hrefValue);
anchor.className ='twitter-hashtag-button';
anchor.setAttribute('data-text', result);
anchor.innerText = 'Tweet #タイトル川柳メーカー';

tweetDivided.appendChild(anchor);

const script = document.createElement('script');
script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(script);

}


resetButton.onclick = () => {
  removeAllChildren(resultDivided1);
  removeAllChildren(resultDivided2);
  removeAllChildren(resultDivided3);
  removeAllChildren(comentDivided);
  removeAllChildren(tweetDivided);
}
