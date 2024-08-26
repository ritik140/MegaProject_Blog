import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Apprwrite service :: createPost :: error", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
      return true;
    } catch (error) {
      console.log("Apprwrite service :: updatePost :: error", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Apprwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      console.log(slug);
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Apprwrite service :: getPost :: error", error);
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Apprwrite service :: getAllPost :: error", error);
      return false;
    }
  }

  //file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBuketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Apprwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(id) {
    try {
      await this.bucket.deleteFile(conf.appwriteBuketId, id);
      return true;
    } catch (error) {
      console.log("Apprwrite service :: deleteFile :: error", error);
      return false;
    }
  }
  async getFilePreview(fileId) {
    try {
      const check = this.bucket.getFilePreview(conf.appwriteBuketId, fileId);
      console.log(check);
      return check;
    } catch (error) {
      console.log("Apprwrite service :: getFilePreview :: error", error);
    }
  }
}

const service = new Service();
export default service;
