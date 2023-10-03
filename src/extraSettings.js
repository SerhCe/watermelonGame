
// Extra points: modifying numbers
let extraScore = 1;

// 无敌模式：true 改为 false
// Invincible mode: true or false
let wuDi = true;

// First fruit: change the number to 0-10, 0 for grapes, 9 for half a watermelon.
let firstFruit = 0;

// 水果合成反转：false 改为 true
//Fruit synthesis reversed: false or true
let reverseLevelUp = false;

// 指定生成的水果：默认值: 不开启反转 0-5 开启反转 6-11，修改对应数字即可控制随机生成的水果范围
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 生成随机水果最小值（0-10）0 为葡萄，9 为半个西瓜
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 生成随机水果最大值（1-11）0 为葡萄，9 为半个西瓜
let setFruits = {
  // 指定前几次生成的水果，可填入任意数量的数字，0 为葡萄，9 为半个西瓜
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 让水果更 Q 弹：false 改为大于 0 小于 1 的任意小数（推荐 0.9）
let fruitQTan = false;

// 让水果下落缓慢：false 改为大于 0 的任意数，值越大阻力越大，下落越慢（推荐 5）
let fruitSlowDown = false;

// 点击右上方图标更换水果：false 改为 true 即可
// Click on the icon in the upper right to change the fruit: false or true
let clickChangeFruit = true;

// 广告链接：false 或为空字符串表示不会跳转到广告
// Advertisement link: false or empty string means it will not jump to the advertisement
let adLink = false;

// Modify the title of the page
document.getElementsByTagName("title")[0].innerText = 'Enna Watermelon Game';

// Enable the opt-in popup: change false to true
let selectModal = false;
