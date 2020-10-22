// 文字列セブ島と留学を連結した結果をconsoleに表示してください。
console.log('セブ島' + '留学');

// 以下の計算の結果をconsoleに表示してください。
// ① 5 たす 8
// ② 4 ひく 2
// ③ 8 かける 2
// ④ 6 わる 3
// ⑤ 9 わる 2の余り

console.log('① 5 たす 8=' + String (5 + 8));
console.log(4 - 2);
console.log(8 * 2);
console.log(6 / 3);
console.log(9 % 2);

// 変数countryを作成して、文字列Japanを代入してください。
// 変数countryをconsoleに表示してください。
// 1で作成した変数countryに文字列Philippinesを代入してください。
// 変数countryをconsoleに表示してください。

let country = 'Japan';
console.log(country);
country = 'Philippines'
console.log(country);

let schoolName = 'NexSeed';
console.log(`私の所属先は、${schoolName}です`)

// 変数jobを作成して、文字列engineerを代入してください。
// テンプレートリテラルを使用して、私の仕事は、engineerですとconsoleに表示してください。

let job = `engineer`;
console.log(`私の仕事は、${job}です`)

// 変数applicationsを作成して、配列['LINE', 'Facebook', 'Twitter']を代入してください。
// 変数applicationsをconsoleに表示してください。
// 変数applicationsにInstagramを追加してください。
// 変数applicationsの中のInstagramをconsoleに表示してください。

let applications = ['LINE', 'Facebook', 'Twitter'];
console.log(applications);
applications.push('Instagram');
// console.log(applications);
// ↑でもOKだけど下のほうがいい
console.log(applications[3]);

// // 変数capitalCitiesを作成して、連想配列{ Japan: 'Tokyo', Philippines: 'Manila' }を代入してください。
// 変数capitalCitiesをconsoleに表示してください。
// 変数capitalCitiesにAmerica: Washingtonを追加してください。
// 変数capitalCitiesの中のWashingtonをconsoleに表示してください。

let capitalCities = { Japan: 'Tokyo', Philippines: 'Manila' };
console.log(capitalCities);
capitalCities.America = 'Washington';
console.log(capitalCities);

// 宿題
// クラスのみんなも名簿を2次元配列で作る。
// 配列の中に、連想配列のかたち。
// リストの0番目の人の名前をconsoleで表示する。
// リストの3番目人の出身地をconsoleで表示する。
// リストの４番目の人の趣味をconsoleで表示する。

let studentList =[
	{name:"Seedくん",from:"セブ島",hobby:"サーフィン"},
	{name:"えりんごさん",from:"青森",hobby:"旅"},
	{name:"あいちゃん",from:"沖縄",hobby:"旅行"},
	{name:"クォッカ",from:"オーストラリア",hobby:"人と写真を撮る"},
	{name:"えりぴょん",from:"和歌山",hobby:"もえぴーの専属カメラマン"},
	{name:"めぐりん",from:"東京",hobby:"アウトドア"},
	{name:"ゆうこりん",from:"沖縄",hobby:"写真"},
	{name:"もえ",from:"山形",hobby:"韓ドラ"},
	{name:"しょうさん",from:"岩手",hobby:"スノボしながらナンパ"},
	{name:"ゆうだい",from:"大阪",hobby:"えいこうちゃんのファンクラブサイト作り"},
	{name:"ゆた",from:"千葉",hobby:"田舎廻り"},
	{name:"ルイス",from:"ペルー",hobby:"ヘアセット"},
	{name:"このみん",from:"千葉",hobby:"ディズニー"},
	{name:"よっしー",from:"京都",hobby:"デリバリー"}
];
console.log(studentList);
console.log(studentList[0].name);
console.log(studentList[3].from);
console.log(studentList[4].hobby);

// ------------------ 条件分岐------------------

// 変数weightに任意の数字を代入してください。
// weightが200以上の場合はヘビー級
// weightが115以上、118以下の場合はバンタム級
// それ以外の場合はその他の階級
// とconsoleに表示してください。

let weight = 100;

if (weight >= 200){
	console.log('ヘビー級');
}else if (weight >= 115 && weight<= 118){
	console.log('バンダム級');
}	else {
		console.log('その他の階級')
}

// 変数greetingに任意の文字列を代入してください。
// greetingがおはようの場合は日本語
// greetingがgood morningの場合は英語
// それ以外の場合は?
// とconsoleに表示してください。

let greeting = 'good morning'
switch (greeting) {
	case 'おはよう' :
		console.log('日本語');
		break;
	case ('good morning'):
		console.log('英語');
		break;
	default:
	console.log('?');
		break;
}

// 繰り返し
for (let i = 1; i <= 10; i++) {
	// let n =  i * 2;
	// console.log('くりかえしているよ');
		console.log(i);
}

// for文を使って。下のstudentList2のnameの部分をconsolecに全て表示せよ。
// ヒント：:for文のiは○番目、という数字としても使えます。

let studentList2 =[
	{name:"Seedくん",from:"セブ島",hobby:"サーフィン"},
	{name:"えりんごさん",from:"青森",hobby:"旅"},
	{name:"あいちゃん",from:"沖縄",hobby:"旅行"},
	{name:"クォッカ",from:"オーストラリア",hobby:"人と写真を撮る"},
	{name:"えりぴょん",from:"和歌山",hobby:"もえぴーの専属カメラマン"},
	{name:"めぐりん",from:"東京",hobby:"アウトドア"},
	{name:"ゆうこりん",from:"沖縄",hobby:"写真"},
	{name:"もえ",from:"山形",hobby:"韓ドラ"},
	{name:"しょうさん",from:"岩手",hobby:"スノボしながらナンパ"},
	{name:"ゆうだい",from:"大阪",hobby:"えいこうちゃんのファンクラブサイト作り"},
	{name:"ゆた",from:"千葉",hobby:"田舎廻り"},
	{name:"ルイス",from:"ペルー",hobby:"ヘアセット"},
	{name:"このみん",from:"千葉",hobby:"ディズニー"},
	{name:"よっしー",from:"京都",hobby:"デリバリー"}
];

for (let i = 0; i <= 12; i++) {
	console.log(studentList2[i] ['name']);
}

// 初期化式で変数iに2を代入する
// iが20以下の間繰り返す
// 1回ごとにiを1増やす
// 繰り返しのたびにiをconsoleに表示する


for (let i =2; i<= 20; i++) {
	console.log(i);
}

//1 - 30までの数値で、3の倍数ではないものを表示するプログラム
//3の倍数の時だけ処理が不要なため、continueでスキップする。
console.log('3の倍数でないものを表示する');
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// 以下の条件にあうfor文を書いてください。

// 初期化式で変数iに1を代入する
// iが50以下の間繰り返す
// 1回ごとにiを1増やす
// 繰り返しのたびにiをconsoleに表示する
// ただし、iが5の倍数でない場合は表示しない。
console.log('5の場合のみ表示する')
for (let i = 1; i <= 50; i++) {
	if (i % 5 ===0) {
			console.log(i);
		}else{
		continue;
		}
}

console.log('乱数を使ったプログラム')
// randomに0から10の数値がランダムに代入される
var random = Math.floor( Math.random() * 6 );

console.log( random );

// ランダム変数を使って、おみくじを作ってみよう
let omikuji = [
'やったね大吉',
'いいね中吉',
'いいんじゃない小吉',
'ラッキー吉',
'おおぴえん大凶',
'ざんねーーーん凶'];

console.log(omikuji[random]);

let dinnar = [
'パスタ',
'ぎょうざ定食',
'ビビンバ',
'パエリア',
'ラーメン',
'パンケーキ'];

console.log(dinnar[random]);








