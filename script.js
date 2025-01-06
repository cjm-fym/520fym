// 模拟的好友数据
const friends = [
    { name: '妈妈', avatar: 'https://img.ixintu.com/download/jpg/201912/a7639cdf0a9c9a69ea8594039b864678.jpg!con' },
    { name: '大哥', avatar: 'https://img.keaitupian.cn/newupload/12/1735527805928604.png' },
    { name: '二哥', avatar: 'https://img.keaitupian.cn/newupload/12/1735526953909608.png' },
    { name: '大嫂', avatar: 'https://img.keaitupian.cn/newupload/12/1735527805747290.png' },
    { name: '二嫂', avatar: 'https://img.keaitupian.cn/newupload/12/1734923859639078.png' },
    { name: 'chenjiaming', avatar: 'https://www.keaitupian.cn/cjpic/frombd/2/253/1405846251/2452424234.jpg' }

];

// 生成好友列表
function generateFriendList() {
    const friendListContainer = document.getElementById('friend-list');
    
    friends.forEach(friend => {
        const friendCard = document.createElement('div');
        friendCard.className = 'friend-card';

        const img = document.createElement('img');
        img.src = friend.avatar;
        img.alt = `${friend.name}'s Avatar`;

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = friend.name;

        friendCard.appendChild(img);
        friendCard.appendChild(name);

        friendListContainer.appendChild(friendCard);
    });
}

// 初始化好友列表
window.onload = generateFriendList;