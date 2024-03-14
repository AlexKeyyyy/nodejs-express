import PostModel from "./PostModel.js";
import FileService from "./FileService.js";
import fileService from "./FileService.js";
class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture)
        const createdPost = await PostModel.create({...post, picture: fileName});
        return createdPost;
    }

    async getAll() {
        const posts = await PostModel.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const post = await PostModel.findById(id);
        return post;
    }

    async update(post) {
        if (!post) {
            throw new Error('ID не указан')
        }
        const updatedPost = await PostModel.findByIdAndUpdate(post._id, post,{new: true})
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const post = await PostModel.findByIdAndDelete(id);
        return post;
    }

}

export default new PostService();