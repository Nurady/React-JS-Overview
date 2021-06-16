import Get from "./Get";
import Post from "./Post";
import Put from './Put';
import Delete from './Delete';

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const postNewBlog = (data) => Post('posts', false, data);
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);

const API = {
    getNewsBlog,
    getComments,
    postNewBlog,
    updateNewsBlog,
    deleteNewsBlog
};

export default API;

