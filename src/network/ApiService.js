import axios from "axios";

export async function getVideos(query) {
    const res = await axios.get("https://onlyaudioapi.hypernova101.repl.co/video", {
        headers: {
            "q" : query
        }
    });
    if(res.status !== 200) {
        return [];
    } 
    return res.data;
}

export async function getAudio(id) {
    const res = await axios.get("https://onlyaudioapi.hypernova101.repl.co/audio", {
        headers: {
            "id" : id
        }
    });
    if (res.status !== 200) {
        return undefined;
    } else {
        return res.data;
    }
}