import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Permission, Role} from "appwrite"

class Uploads {
    client = new Client()
    databases;
    storage;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async uploadImage(file){
        try {
            return await this.storage.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file,
                permissions: [Permission.read(Role.any())]
            })
        } catch (error) {
            throw error
        }
    } 

    async deleteImage(fileId){
        try {
            return await this.storage.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId
            })
        } catch (error) {
            throw error
        }
    }

    getImagePreview(fileId){
        try {
            return this.storage.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId
        })
        } catch (error) {
            throw error
        }
    }

    async createSection({title, content, featuredImage1, featuredImage2, featuredImage3, featuredImage4, featuredImage5, userId}){
        try {
            return await this.databases.createDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: ID.unique(),
                data: {
                    title,
                    content,
                    featuredImage1,
                    featuredImage2,
                    featuredImage3,
                    featuredImage4,
                    featuredImage5,
                    userId
                },
                permissions: [Permission.read(Role.any())]
        })
        } catch (error) {
            throw error
        }
    }

    // async updateSection(documentId, {title, content, featuredImage1, featuredImage2, featuredImage3, featuredImage4, featuredImage5, userId}){
    //     try {
    //         return await this.databases.updateDocument({
    //             databaseId: conf.appwriteDatabaseId,
    //             collectionId: conf.appwriteCollectionId,
    //             documentId,
    //             data: {
    //                 title,
    //                 content,
    //                 featuredImage1,
    //                 featuredImage2,
    //                 featuredImage3,
    //                 featuredImage4,
    //                 featuredImage5,
    //                 userId
    //             },
    //             permissions: [Permission.read(Role.any())]
    //     })
    //     } catch (error) {
    //         throw error
    //     }
    //}
    
}

const uploads = new Uploads
export default uploads

