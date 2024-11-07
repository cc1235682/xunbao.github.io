document.addEventListener('DOMContentLoaded', function () {
    const statusElement = document.getElementById("status");
    const libraryImage = document.getElementById("library-img");
    const lockImage = document.getElementById("lock-img");
    const templeImage = document.getElementById("temple-img");
    const guardImage = document.getElementById("guard-img");
    const treasureImage = document.getElementById("treasure-img");
  
    let clueObtained = false;  // 标记是否获得线索
    let decodingCompleted = false;  // 标记解码是否完成
  
    // 更新状态的异步函数
    async function updateStatus(message) {
      statusElement.textContent = message;
      await new Promise(resolve => setTimeout(resolve, 100)); // 缩短延迟为500ms
    }
  
    // 点击图书馆获得线索
    libraryImage.addEventListener("click", async () => {
      if (!clueObtained) {
        clueObtained = true;
        await updateStatus("在古老的图书馆里找到了第一个线索...");
      }
    });
  
    // 点击密码锁进行解码
    lockImage.addEventListener("click", async () => {
      if (!clueObtained) {
        await updateStatus("没有线索可以解码!");
      } else {
        decodingCompleted = true;
        await updateStatus("解码成功!宝藏在一座古老的神庙中...");
        templeImage.style.display = "block";  // 显示神庙图片
      }
    });
  
    // 点击神庙图片，根据随机结果触发事件
    templeImage.addEventListener("click", async () => {
      if (!decodingCompleted) {
        await updateStatus("没有解码成功，无法进入神庙!");
        return;
      }
  
      // 随机选择事件
      const randomOutcome = Math.random(); // 0到1之间的随机数
  
      if (randomOutcome < 0.4) {
        // 50%概率遇到神庙守卫
        await updateStatus("糟糕!遇到了神庙守卫!");
        guardImage.style.display = "block"; // 显示守卫图片
        await updateStatus("任务失败。");
      } else {
        // 50%概率找到神秘箱子
        await updateStatus("找到了一个神秘的箱子...");
        treasureImage.style.display = "block"; // 显示宝藏图片
        await updateStatus("恭喜你，成功找到了宝藏!");
      }
    });
  });
  