// 模拟的好友数据
const friends = [
    { name: '妈妈', avatar: 'https://img.ixintu.com/download/jpg/201912/a7639cdf0a9c9a69ea8594039b864678.jpg!con' },
    { name: '大哥', avatar: 'https://img.zcool.cn/community/018fae5a9f4cfba801219586b6e26b.jpg@1280w_1l_2o_100sh.jpg' },
    { name: '二哥', avatar: 'https://img.zcool.cn/community/01089c59426acba8012193a3786b05.jpg@1280w_1l_2o_100sh.jpg' },
    { name: '大嫂', avatar: 'https://img.zcool.cn/community/01452a5e0af4ada80120a89566284b.jpg@1280w_1l_2o_100sh.jpg' },
    { name: '二嫂', avatar: 'https://c-ssl.duitang.com/uploads/item/201503/24/20150324003541_RSJX8.jpeg' },
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