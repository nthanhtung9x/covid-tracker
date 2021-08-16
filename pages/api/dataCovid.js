import axios from 'axios';

const TypeNew = [
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Ftin-moi-nhat.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Ftin-moi-nhat.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthoi-su-chinh-tri.rss', 
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Ftalkshow.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthoi-su.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fkinh-doanh.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fgiai-tri.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthe-gioi.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fgiao-duc.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fdoi-song.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fphap-luat.rss',
    // 'the-thao',
    // 'cong-nghe',
    // 'bat-dong-san',
    // 'oto-xe-may',
]


export const getDataCovid = async () => {
    try {
        const result = await axios.get('https://covid19-vn.vercel.app/_next/data/AYfvNSk2U1nF4tQ6_ihD4/index.json');
        return result.data.pageProps;
    } catch (e) {
        throw new Error(e);
    }
}

export const getChartDataCovid = async () => {
    try {
        const result = await axios.get('https://api.zingnews.vn/public/v2/corona/getChart');
        return result.data;
    } catch (e) {
        throw new Error(e);
    }
}

export const getNewsService = async () => {
    try {
        const result = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Ftin-moi-nhat.rss');
        return result.data;
    } catch (e) {
        throw new Error(e);
    }
}

export const getCovidDataWorld = async () => {
    try {
        const result = await axios.get('https://corona.lmao.ninja/v2/countries');
        return result.data;
    } catch (e) {
        throw new Error(e);
    }
}

export const getNewsByTypeService = async (type) => {
    try {
        const result = await axios.get(TypeNew[type]);
        return result.data;
    } catch (e) {
        throw new Error(e);
    }
}

export const getWeatherService = async () => {
    try {
        const result = await axios.get(`https://api.zingnews.vn/public/v2/getUtilities`);
        
        return result.data;
    } catch(e) {
        throw new Error(e);
    }
}