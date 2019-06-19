require("dotenv").config()

export class SettingManager {

    static getSetting = (name : string) : string => {
        //settings read from .env file at root of project 
        return process.env[name];
    }
}

