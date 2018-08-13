
/**
 * 宣言的レンダリング
*/
// 1.テンプレート構文でDOMに描画する
const app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!!'
	}
});

// 2.リアクティブ
// jsとDOMの変更が相互に反映される
const app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on' + new Date().toLocaleString()
	}
});
// jsの変更がDOMにも反映される
app2.message = 'タイトル属性変えたぜ！'

/**
 * 条件分岐とループ
 */
 
 // 1. v-if 要素の表示有無を切り替える
const app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});
// 3秒後に消す
setTimeout(function(){app3.seen = false}, 3 * 1000);

// 2. v-for 
const app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{text: 'Lean Javascript'},
			{text: 'Lean Vue'},
			{text: 'Build something awesome'}
		]
	}
});
// 3秒後にリストの項目追加
setTimeout(function(){app4.todos.push({text: 'New Item'})}, 3 * 1000);

/**
 * ユーザ入力の制御
 */
 
 // 
 const app5 = new Vue({
 	el: '#app-5',
 	data: {
 		message: 'Hello Vue.js!'
 	},
 	methods: {
 		reverseMassage: function() {
 			this.message = this.message.split('').reverse().join('');
 		}
 	}
 });
 
 // 双方向バインディング
 const app6 = new Vue({
 	el: '#app-6',
 	data: {
 		message: 'Hello Vue!'
 	}
 });