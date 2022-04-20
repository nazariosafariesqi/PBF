import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI (path = 'posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDiKirim) => PostAPI (path = 'posts', dataYgDiKirim);
const DeleteNewsBlog = (dataYgDiHapus) => DeleteAPI (path = 'posts', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    DeleteNewsBlog
}

export default API;