//获取所有的td
let tds = document.querySelectorAll('td');
//遍历
tds.forEach(item => {
    item.onclick = function () {
        this.style.background = '#222';
        console.log("服务器启动");

    }
}) 