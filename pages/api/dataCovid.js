import axios from 'axios';

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