describe("快照测试", function () {
  beforeEach(() => {
    jasmine.addMatchers(snapshotMatchers); // 注入快照断言
  });

  // snapshotIt 为快照用例
  snapshotIt("绘制红色方块", function (snapshot) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 80, 100); // 绘制一个 80*100 的红色矩形
    snapshot(canvas); // 快照断言，上传图片快照比较图片的差异
  });
});
