const obj = {
  om: function () {
    const nest = {
      nm: function () {
        /**
         * 予想：false, true
         * 結果：false, true
         * 考察：関数宣言文の場合、thisは関数を定義しているオブジェクト(=nest)。
         */
        console.log(this === obj, this === nest);
      },
      arrow: () => {
        /**
         * 予想：false, false
         * 結果：true, false
         * 考察：アロー関数はthisの値を適切に継承するため、objを継承している。
         */
        console.log(this === obj, this === nest);
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();
