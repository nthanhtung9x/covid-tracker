import React from 'react'
import Container from '../../layout/container';
import * as Styles from '../../assets/styles/screens/world';
import Footer from '../../components/footer';
import { getCovidDataWorld } from '../api/dataCovid';
import { timeSince } from '../../utils/helpers';

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
}

const World = ({ theme, data }) => {
    const getCovidTotal = () => {
        return data.reduce((total, item) => {
            return total += item.cases;
        }, 0);
    }

    const getCovidToday = () => {
        return data.reduce((total, item) => {
            return total += item.todayCases;
        }, 0);
    }

    const getCovidDeathTotal = () => {
        return data.reduce((total, item) => {
            return total += item.deaths;
        }, 0);
    }

    const getCovidDeathToday = () => {
        return data.reduce((total, item) => {
            return total += item.todayDeaths;
        }, 0);
    }

    const getCovidRecoverTotal = () => {
        return data.reduce((total, item) => {
            return total += item.recovered;
        }, 0);
    }

    const getCovidRecoverToday = () => {
        return data.reduce((total, item) => {
            return total += item.todayRecovered;
        }, 0);
    }

    return (
        <Container>
            <Styles.StatistWrapper themeStore={theme.mode}>
                <Styles.TitleWrapper themeStore={theme.mode}>
                    <h1>Số liệu Covid-19 trên thế giới</h1>
                    <p>Nguồn dữ liệu {timeSince(new Date(data[0].updated))} trước</p>
                </Styles.TitleWrapper>
                <Styles.Item themeStore={theme.mode}>
                    <span>Hôm nay: +{numberWithCommas(getCovidToday())}</span>
                    <h4 className="yellow">{numberWithCommas(getCovidTotal())}</h4>
                    <p>Ca nhiễm</p>
                </Styles.Item>
                <Styles.Item themeStore={theme.mode}>
                    <span>Hôm nay: +{numberWithCommas(getCovidDeathToday())}</span>
                    <h4 className="red">{numberWithCommas(getCovidDeathTotal())}</h4>
                    <p>Tử vong</p>
                </Styles.Item>
                <Styles.Item themeStore={theme.mode}>
                    <span>Hôm nay: +{numberWithCommas(getCovidRecoverToday())}</span>
                    <h4 className="green">{numberWithCommas(getCovidRecoverTotal())}</h4>
                    <p>Hồi phục</p>
                </Styles.Item>
            </Styles.StatistWrapper>
            <Footer/>
        </Container>
    )
}

export default World;

export async function getStaticProps(context) {
    const data = await getCovidDataWorld();
    return {
        props: { 
            data, // will be passed to the page component as props
        }
    }
}
