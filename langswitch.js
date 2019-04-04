// =========================================================
//      画面が開かれたときの初期設定
// =========================================================
window.onload = function() {

    // --- ブラウザのデフォルト言語を取得して初回の表示 ----- 
    let wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    langSet(wDef);
    let elm = document.getElementsByName("langKbn");
    for(let i = 0; i < elm.length; i++){
        console.log("wDef: " + wDef);
        if(elm[i].getAttribute("lang") == wDef){
            elm[i].checked = true;
        }
    }
    
}
// =========================================================
//      選択された言語のみ表示
// =========================================================
function langSet(argLang){
    
    // --- 切り替え対象のclass一覧を取得 ----------------------
    let elm = document.getElementsByClassName("langCng");

    for (let i = 0; i < elm.length; i++) {

        // --- 選択された言語と一致は表示、その他は非表示 -------
        if(elm[i].getAttribute("lang") == argLang){
            elm[i].style.display = '';
        }
        else{
            elm[i].style.display = 'none';
        }
    }
}