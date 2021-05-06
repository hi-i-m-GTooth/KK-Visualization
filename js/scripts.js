var vm = new Vue({
    delimiters: ["[[", "]]"],
    el: '#app',
    data:{
        now_alg: "",
        available_algs: ["Alg 1", "BPR"],
        testing_algs: ["Test 1"],
        now_user: "",
        users: [],
        now_vods: [
            {
                'img_url': "https://m.media-amazon.com/images/M/MV5BNGY0NzgzYzctYWQwMC00MzM2LThjNGMtZjFjMWUyNzg0ZmM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX140_CR0,0,140,207_.jpg",
                'artist': [],
                'available': false,
                'channel_id': 16584,
                'description': '５３種類の植物素材を使用し、長い年月をかけ果実の皮や種までまるごと発酵・熟成させた万田酵素ペーストを使用。話題の発酵美容が美味しく試せるゼリータイプのサプリ。 番組詳細内容お知らせ売れ続けるには訳がある～観て納得のロングセラー！～／多くのファンを魅了するショップチャンネルの人気者に光を当て、長く愛される秘密に迫ります。お知らせショップチャンネルは、ファッション、コスメ、家庭用品、健康グッズなど、世界中から厳選した商品を24時間365日生放送でご紹介。司会進行役のキャストとゲストが商品の魅力を徹底的にご案内します。見ているだけで楽しめる新しいお買い物スタイルで、あなたのお気に入りを見つけてください。＊ライブ放送につき、番組および商品内容に変更が生じる場合もございます。ＨＰ：https://www.shopch.jp',
                'duration': 10000.0,
                'end_time': 1587726000,
                'genre': ['101:ショッピング・通販', '96:情報/ワイドショー'],
                'item_id': '1Zf04samnl9zFsZ1dTkfu5gp3CW',
                'keyword': null,
                'mood': null,
                'rating': 'G',
                'start_time': 1587722400,
                'title': '植物の恵みでキレイと健康をサポート！万田酵素の美容ゼリー',
                'type': 'JCM'
            },
            {
                'img_url': "https://m.media-amazon.com/images/M/MV5BZDZlMjc0MTItZWY2YS00ZDJhLWI2M2MtODVjNWFmYTQxYmJjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_QL75_UX140_CR0,7,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BZDZlMjc0MTItZWY2YS00ZDJhLWI2M2MtODVjNWFmYTQxYmJjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_QL75_UX210_CR0,11,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BZDZlMjc0MTItZWY2YS00ZDJhLWI2M2MtODVjNWFmYTQxYmJjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_QL75_UX280_CR0,14,280,414_.jpg 280w",
                'artist': [],
                'available': false,
                'channel_id': 17085,
                'description': 'MONO情報毎回魅力的な商品をご紹介する通販番組。',
                'duration': 3000.0,
                'end_time': 1584777600,
                'genre': ['101:ショッピング・通販', '176:趣味/教育', '188:生涯教育・資格', '96:情報/ワイドショー'],
                'item_id': '1Y6wsHPqIHOKEys7S6pzXfgkL2H',
                'keyword': null,
                'mood': null,
                'rating': 'G',
                'start_time': 1584775800,
                'title': 'MONO情報',
                'type': 'JCM'
            },
            {
                'img_url': "https://m.media-amazon.com/images/M/MV5BZWEzZDdjMjAtOWM1Zi00MTZkLWE5OTEtMDg2YmNmODFjOTBjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_QL75_UX140_CR0,1,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BZWEzZDdjMjAtOWM1Zi00MTZkLWE5OTEtMDg2YmNmODFjOTBjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_QL75_UX210_CR0,2,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BZWEzZDdjMjAtOWM1Zi00MTZkLWE5OTEtMDg2YmNmODFjOTBjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_QL75_UX280_CR0,3,280,414_.jpg 280w",
                'artist': [],
                'available': true,
                'channel_id': 16941,
                'description': '「瓔珞＜エイラク＞」のシュー・カイ出演！圧倒的な映像美で贈る、アクション、ロマンス、復讐を盛り込んだ中国発の大型ラブ史劇をTV初放送！[全55話] 番組詳細内容番組内容虚宗（きょそう）門の門主、江河（こうが）を訪ねたものの、牢（ろう）に捕らわれてしまった南山主、顧カン光は、破傷風を発症し、危険な状態に陥る。その頃、虚宗門の禁術を使い、洛明軒（らくめいけん）の治療を試みる江河だったが、その真の狙いは別のところにあった。出演者バイ・ルー、シュー・カイ、ダイ・スー\u3000ほか制作2019年',
                'duration': 10000.0,
                'end_time': 1595424600,
                'genre': ['32:ドラマ', '35:海外ドラマ'],
                'item_id': '1TwLDMZPXwFBwpzPU5hYtJ8Ny4V',
                'keyword': 'ストーリーだけじゃない!素敵な映像美も見どころ!;恋の芽生えはいつの時代も不変!ロマンス時代劇!',
                'mood': null,
                'rating': 'G',
                'start_time': 1595421000,
                'title': '［初］招揺＜ショウヨウ＞＃４７［字］\u3000TV初放送！中国発の大型ラブ史劇',
                'type': 'JCM'
            },
            {
                'img_url': "https://m.media-amazon.com/images/M/MV5BNWMzZjNjMjgtYjdlNS00ZmNiLThlYWQtOTkyNmNmZjBlOTdhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX140_CR0,0,140,207_.jpg",
                'artist': [],
                'available': false,
                'channel_id': 41504,
                'description': null,
                'duration': 3000.0,
                'end_time': 1592598060,
                'genre': ['101:ショッピング・通販', '96:情報/ワイドショー'],
                'item_id': '1dIzp67NOosl19fIlQSIGYFX4N5',
                'keyword': null,
                'mood': null,
                'rating': 'G',
                'start_time': 1592596260,
                'title': 'テレビショッピング',
                'type': 'OTD'
            },
            {
              'img_url': "https://m.media-amazon.com/images/M/MV5BNWMzZjNjMjgtYjdlNS00ZmNiLThlYWQtOTkyNmNmZjBlOTdhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX140_CR0,0,140,207_.jpg",
              'artist': [],
              'available': false,
              'channel_id': 61456,
              'description': 'メインキャスターは夏目三久。あさ6時から最新ニュース満載の2時間、豊富な専門知識を持つゲストが詳しく解説。独自の視点を加えてより深い情報をお届けする。 番組内容メインキャスター夏目三久が、あさ6時から最新ニュースをお伝えする2時間。報道現場の最前線からあがってくる“ナマの情報”を豊富な専門知識を持つゲストが詳しく解説。独自の視点を加えてより深い情報をお届けする。スポーツ・お天気など、番組独自の切り口で、「今」にこだわってお伝えします!これを見ればきょう一日役に立つ情報が満載!出演者MC:夏目三久曜日レギュラー:長嶋一茂\u3000住田裕子\u3000松木安太郎\u3000浜田敬子\u3000沢松奈生子アナウンサー:藤森祥平\u3000加藤シルビア\u3000篠原梨菜\u3000宇賀神メグ\u3000熊崎風斗\u3000日比麻音子天気:増田雅昭公式ページ◇番組HP http://www.tbs.co.jp/asachan/◇twitterhttps://twitter.com/TBS_asachan@TBS_asachan◇フェイスブック https://www.facebook.com/asachan.tbs動画公開中!◇TBS公式 YouTubooぐでたま→ https://www.youtube.com/playlist?list=PLCUNF--_h4Ox8Pm_-6SUjTQQmKNzBKMKZおことわり番組の内容と放送時間は変更になる場合があります。',
              'duration': 20000.0,
              'end_time': 1583967600,
              'genre': ['112:ニュース/報道',
                '113:定時・総合',
                '48:スポーツ',
                '49:スポーツニュース',
                '96:情報/ワイドショー',
                '97:芸能・ワイドショー'],
              'item_id': '1YkVNag8V4u5GRWvDO8lT4NMh1y',
              'keyword': null,
              'mood': null,
              'rating': 'G',
              'start_time': 1583960400,
              'title': 'あさチャン!',
              'type': 'OTD'
          }
        ],
      now_usr_vod_dict: {},
    },
    methods:{
        changeAlg(text){
            if(this.now_alg!=text){
              
              this.now_alg = text;

              if(text == "BPR"){
                var usr_vod = JSON.parse(BPR_hard_result_20);
                this.now_usr_vod_dict = usr_vod;
              }

            }
        },
        changeUsr(text){
            this.now_user = text;
        },
        rerenderWindow(){
          
        },
    },
    created: function(){
        this.users = total_users;
        this.now_user = this.users[0];
        this.now_alg = this.available_algs[0];
    },
});

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}