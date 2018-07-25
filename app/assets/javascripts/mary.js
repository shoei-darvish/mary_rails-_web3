
var mary;
var userAccount;

window.addEventListener('load', function() {

  // Web3がブラウザにインジェクトされているかチェック (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Mist/MetaMaskのプロバイダの使用
    web3js = new Web3(web3.currentProvider);
    window.web3 = web3js;
    console.log(window.web3)
  } else {
    // ユーザーがweb3を持たない場合の対処。
    // アプリを使用するためにMetamaskをインストールするよう
    // 伝えるメッセージを表示。
    alert("Metamaskをインストールしてください")
  }

  // アプリのスタート＆Web3.jsへの自由なアクセスが可能に:
  startApp()
  //  alert("startapp完了")
})
function startApp() {
  // Rposten
  //  maryABIは別ファイルからインポート
  var maryAddress = "0x40deA50302F41b7B695135b588B1ce2b5834Ccd3";
  mary = new window.web3.eth.Contract(maryABI, maryAddress);
}
 var userAccount = window.web3.eth.accounts[0];
 console.log(userAccount);

function propose(address) {
  // しばらく時間がかかるので、UIを更新してユーザーに
  // トランザクションが送信されたことを知らせる
  // $("#txStatus").text("Proposing marriage on the block chain. This may take a while...");
  // トランザクションをコントラクトに送信する:
  console.log(userAccount, address)
    return mary.methods.propose(address)
    .send({ from: userAccount })
    .on("receipt", function(receipt) {
    //  $("#txStatus").text("Successfully Proposed " + address + "!");
      // トランザクションがブロックチェーンに取り込まれた。UIをアップデートしよう
      alert("トランザクションが発行されました");
    })
    .on("error", function(error) {
      // トランザクションが失敗したことをユーザーに通知するために何かを行う
      alert("トランザクションが失敗しました");
    });
  }
  function getPartnerAddressesByPersonalAddress(address) {
    // しばらく時間がかかるので、UIを更新してユーザーに
    // トランザクションが送信されたことを知らせる
    // $("#txStatus").text("Proposing marriage on the block chain. This may take a while...");
    // トランザクションをコントラクトに送信する:
    console.log(userAccount, address)
      return mary.methods.propose(address)
      .send({ from: userAccount ,value: window.web3.utils.toWei("0.001", "ether")})
      .on("receipt", function(receipt) {
      //  $("#txStatus").text("Successfully Proposed " + address + "!");
        // トランザクションがブロックチェーンに取り込まれた。UIをアップデートしよう
        alert("トランザクションが発行されました");
      })
      .on("error", function(error) {
        // トランザクションが失敗したことをユーザーに通知するために何かを行う
        alert("トランザクションが失敗しました");
      });
    }
