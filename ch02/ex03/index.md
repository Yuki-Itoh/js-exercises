# OS
濁音や半濁音を含むファイル名のファイルを作ったとき、NFC で保存される OS と、NFD で保存される OSを調べて記述しなさい。

* Mac OS X  
https://qiita.com/knaka/items/48e1799b56d520af6a09  
NFDで保存される。

* Windows  
https://www.informe.co.jp/useful/dtp/dtp22/  
NFCで保存される。
NFDのファイルはそのまま。

> Windowsをはじめとする多くのOSとファイルシステムでは、NFC正規化されたファイル名もNFD正規化されたファイル名もそのまま保存されます。ただし、OSでファイル名を入力する際には濁音や半濁音は1つの合成済みで入力されるため、結果としてファイルのほとんどはNFC正規化されたファイル名がついています。ところがMac OS Xの標準ファイルシステムだったHFS+ではNFD（正確にはNFDを部分的にカスタマイズしたもの）が使われており、しかもデータをHFS+のストレージに保存した段階でファイル名に含まれる濁点は結合文字に変換されることになります。