import styled from 'styled-components';
import Container from '../layout/container';
import * as Styles from '../assets/styles/screens/home';
import { useEffect, useState } from 'react';
import FullChart from '../components/full-chart';
import ColumnChart from '../components/bar-chart';
import ArrowIcon from '../public/images/arrow-down.svg';
import Image from 'next/image';
import Footer from '../components/footer';
import { getChartDataCovid, getDataCovid, getNewsService } from './api/dataCovid';
import {
  COVID_CASES_HANOI_VERSION_2,
  COVID_CASES_HCMC,
  COVID_CASES_HCMC_VERSION_2,
  COVID_CASES_PROVINCE,
  COVID_CASES_VIETNAM,
  COVID_VACCINE_VIETNAM,
  TRIGGER_HOOKS,
  VNEXPRESS_COVID_DATA,
  VNEXPRESS_NEWS,
} from "../utils/constants";
import axios from 'axios';
import TinyChart from '../components/tiny-bar-chart';
import TwoFullChart from '../components/two-full-chart';
import { timeSince } from '../utils/helpers';

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return parts.join(",");
}

export default function Home({ theme, data, dataChart, news }) {
  const [position, setPosition] = useState('VN');
  const [session4, setSession4] = useState({
    total: '',
    today: '',
  });
  const [typeTotal, setTypeTotal] = useState(7);
  const [typeTotalTiny, setTypeTotalTiny] = useState(7);
  const [province, setProvince] = useState({
    data: data?.covidDataProvince?.cases?.slice(0, 4),
    hasMore: true,
  });
  const [toggleProvince, setToggleProvince] = useState(true);
  const [newsData, setNewsData] = useState({
    data: news.slice(0,5),
    hasMore: true,
  });
  const getTotalRecovered = (list) => {
    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    if (day[0] === '0') {
      day = day[1];
    }
    if(month[0] === '0') {
      month = month[1];
    }
    let currentDay = `${day}/${month}`;
    const current = list?.filter(item => item.date === currentDay);

    return numberWithCommas(current[0].totalRecovered2020);
  }

  const getTotalRecoveredToday = (list) => {
    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    if (day[0] === '0') {
      day = day[1];
    }
    if(month[0] === '0') {
      month = month[1];
    }
    let currentDay = `${day}/${month}`;
    const current = list?.filter(item => item.date === currentDay);

    return numberWithCommas(current[0].recovered);
  }

  const getTotalDeath = (list) => {
    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    if (day[0] === '0') {
      day = day[1];
    }
    if(month[0] === '0') {
      month = month[1];
    }
    let currentDay = `${day}/${month}`;
    const current = list?.filter(item => item.date === currentDay);

    return numberWithCommas(current[0].totalDeath2020);
  }

  const getTotalDeathToday = (list) => {
    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    if (day[0] === '0') {
      day = day[1];
    }
    if(month[0] === '0') {
      month = month[1];
    }
    let currentDay = `${day}/${month}`;
    const current = list?.filter(item => item.date === currentDay);

    return numberWithCommas(current[0].deaths);
  }

  const getTotalActiveCases = (list) => {
    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    if (day[0] === '0') {
      day = day[1];
    }
    if(month[0] === '0') {
      month = month[1];
    }
    let currentDay = `${day}/${month}`;
    const current = list?.filter(item => item.date === currentDay);

    return numberWithCommas(current[0].activeCases);
  }
  
  useEffect(() => {
    if(position === 'VN') {
      setSession4({
        total: data?.covidDataVN?.vnSeason4?.total,
        today: data?.covidDataVN?.vnSeason4?.toDay,
      })
    } else if (position === 'SG') {
      setSession4({
        total: data?.covidDataHCMCv2?.all?.total,
        today: data?.covidDataHCMCv2?.all?.toDay,
      })
    } else if (position === 'HN') {
      setSession4({
        total: data?.covidDataHNv2?.all?.total,
        today: data?.covidDataHNv2?.all?.toDay,
      })
    }
  }, [position]);

  return (
    <Container>
      <Styles.StatistWrapper themeStore={theme.mode}>
        <Styles.TitleWrapper themeStore={theme.mode}>
          <h1>Số liệu Covid-19 tại Việt Nam</h1>
          <p>Nguồn dữ liệu từ Zing News & VnExpress</p>
          <p>Cập nhật: {timeSince(new Date(news[0].pubDate))} trước</p>
        </Styles.TitleWrapper>
        <Styles.SubText>Kể từ khi dịch bùng phát từ đầu 2020 đến nay</Styles.SubText>
        <Styles.TotalWrapper>
          <Styles.Item className="yellow">
            <span>Hôm nay: {numberWithCommas(data?.covidDataProvince?.toDay)}</span>
            <p>{numberWithCommas(data?.covidDataProvince?.total)}</p>
            <section>
              <span>Ca nhiễm</span>
            </section>
          </Styles.Item>

          <Styles.Item className="green">
            <span>Hôm nay: {getTotalRecoveredToday(data?.covidDataVnExpress)}</span>
            <p>{getTotalRecovered(data?.covidDataVnExpress)}</p>
            <section>
              <span>Hồi phục</span>
            </section>
          </Styles.Item>

          <Styles.Item className="red">
            <span>Hôm nay: {getTotalDeathToday(data?.covidDataVnExpress)}</span>
            <p>{getTotalDeath(data?.covidDataVnExpress)}</p>
            <section>
              <span>Tử vong</span>
            </section>
          </Styles.Item>

          <Styles.Item className="grey" themeStore={theme.mode}>
            <span></span>
            <p>{getTotalActiveCases(data?.covidDataVnExpress)}</p>
            <section>
              <span>Đang chữa trị</span>
            </section>
          </Styles.Item>
        </Styles.TotalWrapper>

      </Styles.StatistWrapper>
      <Styles.StatistWrapper themeStore={theme.mode}>
        <Styles.SubText>Đợt bùng phát dịch từ ngày 27/4</Styles.SubText>
        <Styles.TotalWrapper>
          <Styles.Item className="yellow">
            <span></span>
            <p>{numberWithCommas(session4.total)}</p>
            <section>
              <span>Ca nhiễm</span>
            </section>
          </Styles.Item>
          <Styles.Item className="red">
            <span></span>
            <p>+{numberWithCommas(session4.today)}</p>
            <section>
              <span>Hôm nay</span>
            </section>
          </Styles.Item>
        </Styles.TotalWrapper>
      </Styles.StatistWrapper>
      <Styles.SideBar>
          <Styles.SideBarItem
            className={position === 'VN' ? 'active' : ''}
            onClick={() => {
              setPosition('VN')
            }}
            themeStore={theme.mode}
          >Việt Nam</Styles.SideBarItem>
          <Styles.SideBarItem
            className={position === 'SG' ? 'active' : ''}
            onClick={() => {
              setPosition('SG')
            }}
            themeStore={theme.mode}
          >TP.HCM</Styles.SideBarItem>
          <Styles.SideBarItem
            className={position === 'HN' ? 'active' : ''}
            onClick={() => {
              setPosition('HN')
            }}
            themeStore={theme.mode}
          >Hà Nội</Styles.SideBarItem>
      </Styles.SideBar>

      <Styles.ChartWrapper>
        <Styles.ChartItem  themeStore={theme.mode}>
          <h1>Tổng số ca tại Việt Nam</h1>
          <FullChart data={dataChart} time={typeTotal}/>
          <Styles.SideBarChart>
            <Styles.SideBarItem
              className={typeTotal === 7 ? 'active' : ''}
              onClick={() => {
                setTypeTotal(7)
              }}
              themeStore={theme.mode}
            >Tuần</Styles.SideBarItem>
            <Styles.SideBarItem
              className={typeTotal === 30 ? 'active' : ''}
              onClick={() => {
                setTypeTotal(30)
              }}
              themeStore={theme.mode}
            >Tháng</Styles.SideBarItem>
            <Styles.SideBarItem
              className={typeTotal === 0 ? 'active' : ''}
              onClick={() => {
                setTypeTotal(0)
              }}
              themeStore={theme.mode}
            >Tất cả</Styles.SideBarItem>
        </Styles.SideBarChart>
        </Styles.ChartItem>
        <Styles.ChartItem  themeStore={theme.mode}>
          <h1>Số ca theo ngày Việt Nam</h1>
          <TinyChart data={dataChart} time={typeTotalTiny} />
          <Styles.SideBarChart>
            <Styles.SideBarItem
              className={typeTotalTiny === 7 ? 'active' : ''}
              onClick={() => {
                setTypeTotalTiny(7)
              }}
              themeStore={theme.mode}
            >Tuần</Styles.SideBarItem>
            <Styles.SideBarItem
              className={typeTotalTiny === 30 ? 'active' : ''}
              onClick={() => {
                setTypeTotalTiny(30)
              }}
              themeStore={theme.mode}
            >Tháng</Styles.SideBarItem>
            <Styles.SideBarItem
              className={typeTotalTiny === 0 ? 'active' : ''}
              onClick={() => {
                setTypeTotalTiny(0)
              }}
              themeStore={theme.mode}
            >Tất cả</Styles.SideBarItem>
        </Styles.SideBarChart>
        </Styles.ChartItem>
        <Styles.ChartItem themeStore={theme.mode}>
          <h1>Tỉnh thành dẫn đầu về số ca</h1>
          <ColumnChart data={data} type="total"/>
        </Styles.ChartItem>
        <Styles.ChartItem themeStore={theme.mode}>
          <h1>Tỉnh thành nhiều ca nhất trong ngày</h1>
          <ColumnChart data={data} type="day"/>
        </Styles.ChartItem>
      </Styles.ChartWrapper>
    
      <Styles.StatistWrapper themeStore={theme.mode}>
        <Styles.AllCountryTitle onClick={() => setToggleProvince(!toggleProvince)}>
          <p>Tình hình COVID-19 tại các tỉnh thành</p>
          <Image 
            src={ArrowIcon}
            className={toggleProvince ? 'down' : 'up' }
            alt="arrow"
          />
        </Styles.AllCountryTitle>
        {
          toggleProvince && 
            <Styles.ColumnWrapper>
            <Styles.ColumnTitle className="bold">#</Styles.ColumnTitle>
            <Styles.ColumnTitle className="name bold">Tỉnh</Styles.ColumnTitle>
            <Styles.ColumnTitle className="bold">Hôm nay</Styles.ColumnTitle>
            <Styles.ColumnTitle className="bold">Tổng</Styles.ColumnTitle>
            {
              province?.data?.map((item, index) => {
                return <Styles.ColumnItem key={index} themeStore={theme.mode}>
                <Styles.ColumnItemChild className="bold">{index + 1}</Styles.ColumnItemChild>
                <Styles.ColumnItemChild className="name bold">{item.x}</Styles.ColumnItemChild>
                <Styles.ColumnItemChild className="today">+{numberWithCommas(item.y)}</Styles.ColumnItemChild>
                <Styles.ColumnItemChild className="total">{numberWithCommas(item.z)}</Styles.ColumnItemChild>
              </Styles.ColumnItem>
              })
            }
            
            <Styles.ButtonHide themeStore={theme.mode} onClick={() => {
              if (province.hasMore) {
                setProvince({
                  data: data?.covidDataProvince?.cases,
                  hasMore: false,
                })
              } else {
                setProvince({
                  data: data?.covidDataProvince?.cases?.slice(0, 4),
                  hasMore: true,
                })
              }
            }}>
              <p>{province.hasMore ? 'Xem thêm' : 'Thu gọn' }</p>
            </Styles.ButtonHide>
          </Styles.ColumnWrapper>
          }
      </Styles.StatistWrapper>
    
      <Styles.StatistWrapper themeStore={theme.mode}>
        <Styles.FlexVaccine>
          <Styles.FlexVaccineItem className="vaccine-active" themeStore={theme.mode}>
            <p>Tổng người đã tiêm</p>
            <b>{numberWithCommas(data?.covidVaccineVN?.first?.total + data?.covidVaccineVN?.second?.total)}</b>
          </Styles.FlexVaccineItem>
          <Styles.FlexVaccineItem themeStore={theme.mode}>
            <p>Đã tiêm 1 mũi</p>
            <b>{numberWithCommas(data?.covidVaccineVN?.first?.total)}</b>
          </Styles.FlexVaccineItem>
          <Styles.FlexVaccineItem themeStore={theme.mode}>
            <p>Đã tiêm 2 mũi</p>
            <b>{numberWithCommas(data?.covidVaccineVN?.second?.total)}</b>
          </Styles.FlexVaccineItem>
        </Styles.FlexVaccine>
        <Styles.FlexTipVaccine>
          <section>% dân số đã tiêm 2 mũi</section>
          <span>{numberWithCommas(data?.covidVaccineVN?.secondRatio.toFixed(2))}%</span>
        </Styles.FlexTipVaccine>
        <Styles.ProgressVaccine progressVaccine={data?.covidVaccineVN?.secondRatio.toFixed(2)}></Styles.ProgressVaccine>
        <Styles.ProgressSubText>
          Mục tiêu: 70% dân số (tương đương 150 triệu liều vaccine)
        </Styles.ProgressSubText>
      </Styles.StatistWrapper>
    
      <Styles.ChartWrapper>
        <Styles.ChartItem themeStore={theme.mode}>
          <h1>Tổng số người tiêm vaccine</h1>
          <TwoFullChart data={data?.covidVaccineVN} type={'total'}/>
        </Styles.ChartItem>
        <Styles.ChartItem themeStore={theme.mode}>
          <h1>Số lượng tiêm vaccine theo ngày</h1>
          <TwoFullChart data={data?.covidVaccineVN} type={''}/>
        </Styles.ChartItem>
      </Styles.ChartWrapper>
    
      <Styles.StatistWrapper themeStore={theme.mode}>
        <Styles.TitleWrapper themeStore={theme.mode}>
          <h1>Tin mới nhất</h1>
        </Styles.TitleWrapper>
        <Styles.ListNews themeStore={theme.mode}>
          {
            newsData.data.map((item, index) => {
              return  <li key={index}>
                <a href={item.link} target="_blank">
                  <Styles.ThumnailNew>
                    <img 
                      src={item.thumbnail}
                      alt={item.thumbnail}
                    />
                  </Styles.ThumnailNew>
                  <Styles.ContentNew themeStore={theme.mode}>
                    <article>{item.title}</article>
                    <h4>{item.description.substring(0, 40)}</h4>
                    <span>Theo Vietnamnet</span>
                    <p>{timeSince(new Date(item.pubDate))} trước</p>
                  </Styles.ContentNew>
                </a>
              </li>
            })
          }
           
            <Styles.ButtonHide themeStore={theme.mode} onClick={() => {
              if(newsData.hasMore) {
                setNewsData({
                  data: news,
                  hasMore: false,
                })
                return;
              }
              setNewsData({
                data: news.slice(0, 5),
                hasMore: true,
              })
            }}>
              <p>{newsData.hasMore ? 'Xem thêm' : 'Thu gọn'}</p>
          </Styles.ButtonHide>
        </Styles.ListNews>
      </Styles.StatistWrapper>
      <Footer/>
    </Container>
  )
}

const vnExpressDataFormatter = (data) => {
  const lines = data.split("\n");
  return lines.slice(2, lines.length - 1).map((l) => ({
    date: dateFormater(l.split('","')[0].slice(1)),
    community: l.split('","')[1],
    totalCommunity: l.split(",")[2],
    deaths: l.split('","')[6],
    recovered: l.split('","')[7],
    cases: l.split('","')[8],
    totalCase: l.split('","')[9],
    totalDeath: l.split('","')[10],
    totalRecovered: l.split('","')[11],
    totalRecovered2020: l.split('","')[24],
    totalDeath2020: l.split('","')[23],
    totalCases2020: l.split('","')[22],
    activeCases: l.split('","')[21],
  }));
};

export const dateFormater = (data) => {
  const splitData = data.split("/");
  const newDate = (Number(splitData[0]) < 10 ? "0" : "") + splitData[0];
  return newDate + "/" + splitData[1];
};


export async function getStaticProps(context) {
  const dataChart = await getChartDataCovid();
  const getNews = await getNewsService();
  const covidDataVN = await axios
    .get(COVID_CASES_VIETNAM)
    .then((c) => c.data.data);
  const covidDataHCMC = await axios
    .get(COVID_CASES_HCMC)
    .then((c) => c.data.data);
  const covidDataHCMCv2 = await axios
    .get(COVID_CASES_HCMC_VERSION_2)
    .then((c) => formatDataV2(c.data.data));
  const covidDataHNv2 = await axios
    .get(COVID_CASES_HANOI_VERSION_2)
    .then((c) => formatDataV2(c.data.data));
  const covidVaccineVN = await axios
    .get(COVID_VACCINE_VIETNAM)
    .then((c) => c.data.data);
  const covidDataProvince = await axios
    .get(COVID_CASES_PROVINCE)
    .then((c) => c.data.data);
  const covidDataVnExpress = await axios
    .get(VNEXPRESS_COVID_DATA)
    .then((c) => vnExpressDataFormatter(c.data));
  return {
    props: { 
      data: {
        covidDataVN,
        covidDataHCMC,
        covidDataHCMCv2,
        covidDataHNv2,
        covidDataProvince,
        covidVaccineVN,
        covidDataVnExpress,
      },
      dataChart: dataChart.data,
      news: getNews.items,
    }, // will be passed to the page component as props
  }
}

const formatDataV2 = (covidDataHCMCv2) => ({
  all: {
    cases: covidDataHCMCv2.data.map((e) => ({
      x: e.date,
      y: parseFloat(e.total.replace(/\./g, "")),
    })),
    lastUpdated: covidDataHCMCv2.lastUpdated,
    toDay: parseFloat(
      covidDataHCMCv2.data.slice(-1)[0].daily.replace(/\./g, "")
    ),
    total: parseFloat(
      covidDataHCMCv2.data.slice(-1)[0].total.replace(/\./g, "")
    ),
  },
  daily: {
    cases: covidDataHCMCv2.data.map((e) => ({
      x: e.date,
      y: parseFloat(e.daily.replace(/\./g, "")),
    })),
    lastUpdated: covidDataHCMCv2.lastUpdated,
    toDay: parseFloat(
      covidDataHCMCv2.data.slice(-1)[0].daily.replace(/\./g, "")
    ),
    total: parseFloat(
      covidDataHCMCv2.data.slice(-1)[0].total.replace(/\./g, "")
    ),
  },
});
