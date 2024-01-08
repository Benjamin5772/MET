function showGif(x, y, gifPath1, gifPath2,gifWidth1,gifWidth2) {
    const gif1 = document.createElement('img');
    gif1.src = gifPath1; // 使用第三个参数作为第一个GIF的路径
    gif1.style.position = 'absolute';
    gif1.style.left = x + 'px';
    gif1.style.top = y + 'px';
    gif1.style.transform = 'translate(-50%, -50%)';
    gif1.style.opacity = '1';
    gif1.style.zIndex = '-1';
    gif1.style.width = gifWidth1; // 设置宽度
    gameContainer.appendChild(gif1);

    setTimeout(() => {
        const gif2 = document.createElement('img');
        gif2.src = gifPath2; // 使用第四个参数作为第二个GIF的路径
        gif2.style.position = 'absolute';
        gif2.style.left = x + 'px';
        gif2.style.top = y + 'px';
        gif2.style.transform = 'translate(-50%, -50%)';
        gif2.style.opacity = '1';
        gif2.style.zIndex = '999';
        gif2.style.width = gifWidth2;
        gameContainer.appendChild(gif2);

        setTimeout(() => {
            gif1.remove(); // 500ms后移除第一个GIF
            setTimeout(() => {
                gif2.remove(); // 再500ms后移除第二个GIF
            }, 520);
        }, 500);
    }, 1000); // 在1秒后添加第二个GIF
}

function showGif1(x, y, gifPath1,gifWidth,showTime) {
    const gif1 = document.createElement('img');
    gif1.src = gifPath1; // 使用第三个参数作为第一个GIF的路径
    gif1.style.position = 'absolute';
    gif1.style.left = x + 'px';
    gif1.style.top = y + 'px';
    gif1.style.transform = 'translate(-50%, -50%)';
    gif1.style.opacity = '1';
    gif1.style.zIndex = '999';
    gif1.style.width = gifWidth; // 设置宽度
    gameContainer.appendChild(gif1);

        setTimeout(() => {
            gif1.remove(); 
    },showTime); // 在2秒后y移除GIF
}

function showGif2(x, y,gifPath1, gifPath2,gifWidth1,gifWidth2,showTime) {
    const gif1 = document.createElement('img');
    gif1.src = gifPath1; // 使用第三个参数作为第一个GIF的路径
    gif1.style.position = 'absolute';
    gif1.style.left = x + 'px';
    gif1.style.top = y + 'px';
    gif1.style.transform = 'translate(-50%, -50%)';
    gif1.style.opacity = '1';
    gif1.style.zIndex = '-1';
    gif1.style.width = gifWidth1; // 设置宽度
    gameContainer.appendChild(gif1);

    const gif2 = document.createElement('img');
    gif2.src = gifPath2; // 使用第四个参数作为第二个GIF的路径
    gif2.style.position = 'absolute';
    gif2.style.left = x + 'px';
    gif2.style.top = y + 'px';
    gif2.style.transform = 'translate(-50%, -50%)';
    gif2.style.opacity = '1';
    gif2.style.zIndex = '999';
    gif2.style.width = gifWidth2;
    gameContainer.appendChild(gif2);

        setTimeout(() => {
            gif1.remove(); 
            gif2.remove();
    },showTime); // 在2秒后y移除GIF
}
