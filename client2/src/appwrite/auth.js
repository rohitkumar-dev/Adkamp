import conf from "../conf/conf.js";

import {Client, Account, ID} from "appwrite"

class AuthService {
    client = new Client()
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({email, password})
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            return false
        }
    }

    async logout(){
        try {
            await this.account.deleteSession({sessionId: "current"})
        } catch (error) {
            throw error
        }
    }

    async updateUserPassword({password, oldPassword}){
        try {
            return await this.account.updatePassword({password, oldPassword})
        } catch (error) {
            throw error
        }
    }

    async createPasswordRecovery({email}){
        try {
            return await this.account.createRecovery({
                email, url: "http://localhost:5173/admin/forget-password"
            })
        } catch (error) {
            throw error
        }
    }

    async updatePasswordRecovery({userId, secret, password}){
        try {
            return await this.account.updateRecovery({userId, secret, password})
        } catch (error) {
            throw error
        }
    }

}

const authService = new AuthService()

export default authService