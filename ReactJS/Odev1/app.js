import axios from 'axios';

const getData = async (userId) => {
    const { data: userInfo } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const { data: userPosts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    const userData = { userInfo, userPosts }
    console.log(userData);
}

export default getData;