import axios from 'axios';

import { Config } from "../config/config"


export const GetHeartbeat = () => {

    const url = "http://" + Config.api_prefix + "heartbeat/"
    return axios.get(url)
        .then(response => {
            console.log(response.data);
            return (response.data);
        })
        .catch(error => {
            const errorMsg = "ERROR: API IS DOWN!";
            console.log(errorMsg);
            return (errorMsg);
        })
}