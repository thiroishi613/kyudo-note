// 空白のテンプレートの概要については、次のドキュメントを参照してください:
// http://go.microsoft.com/fwlink/?LinkID=397705
// ページ上のコードをデバッグするには、Ripple で読み込むか、Android デバイス/エミュレーターで読み込みます。アプリを起動し、ブレークポイントを設定します。
// 次に、JavaScript コンソールで "window.location.reload()" を実行します。
module KyudoNote {
    "use strict";

    export module Application {
        export function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }

        function onDeviceReady() {
            // Cordova の一時停止を処理し、イベントを再開します
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);

            // TODO: Cordova が読み込まれました。ここで、Cordova を必要とする初期化を実行します。
        }

        function onPause() {
            // TODO: このアプリケーションは中断されました。ここで、アプリケーションの状態を保存します。
        }

        function onResume() {
            // TODO: このアプリケーションが再アクティブ化されました。ここで、アプリケーションの状態を復元します。
        }

    }

    window.onload = function () {
        Application.initialize();
    }
}
