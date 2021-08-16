import React, { useState } from 'react'
import * as Styles from '../../assets/styles/screens/news';
import EmblaCarousel from '../../components/carousel';
import Footer from '../../components/footer';
import Container from '../../layout/container';
import { timeSince } from '../../utils/helpers';
import { getNewsByTypeService, getNewsService, getWeatherService } from '../api/dataCovid';

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const News = ({ theme, news, weather }) => {
    const [newsData, setNewsData] = useState({
        data: news.slice(0,5),
        hasMore: true,
        full: news,
    });

    const getNewsByType = async (type) => {
        if(type === 1) {
            setNewsData({
                data: news.slice(0,5),
                hasMore: true,
                full: news,
            });
            return;
        }
        try {
            const result = await getNewsByTypeService(type);
            setNewsData({
                data: result.items.slice(0, 5),
                hasMore: true,
                full: result.items,
            })

        } catch(e) {
            console.log(e);
        }
    }
    return (
        <Container>
        <Styles.Flex>
            <Styles.NavMenu themeStore={theme.mode}>
                <li onClick={() => getNewsByType(0)}>Tin mới nhất</li>
                <li onClick={() => getNewsByType(1)}>Sức khỏe</li>
                <li onClick={() => getNewsByType(2)}>Chính trị</li>
                <li onClick={() => getNewsByType(3)}>Talks</li>
                <li onClick={() => getNewsByType(4)}>Thời sự</li>
                <li onClick={() => getNewsByType(5)}>Kinh doanh</li>
                <li onClick={() => getNewsByType(6)}>Giải trí</li>
                <li onClick={() => getNewsByType(7)}>Thế giới</li>
                <li onClick={() => getNewsByType(8)}>Giáo dục</li>
                <li onClick={() => getNewsByType(9)}>Đời sống</li>
                <li onClick={() => getNewsByType(10)}>Pháp luật</li>
                {/* <li onClick={() => getNewsByType(10)}>Thể thao</li>
                <li onClick={() => getNewsByType(11)}>Công nghệ</li>
                <li onClick={() => getNewsByType(13)}>Bất động sản</li>
                <li onClick={() => getNewsByType(14)}>Xe</li> */}
            </Styles.NavMenu>
            <Styles.NewsWrapper themeStore={theme.mode}>
                <Styles.Carousel themeStore={theme.mode}>
                    <EmblaCarousel slides={newsData.data.slice(0, 3)} themeStore={theme.mode}/>

                </Styles.Carousel>
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
                                    ...newsData,
                                    data: newsData.full,
                                    hasMore: false,
                                })
                                return;
                            }
                            setNewsData({
                                ...newsData,
                                data: news.slice(0, 5),
                                hasMore: true,
                            })
                        }}>
                        <p>{newsData.hasMore ? 'Xem thêm' : 'Thu gọn'}</p>
                    </Styles.ButtonHide>
                    </Styles.ListNews>
                </Styles.StatistWrapper>
                
            </Styles.NewsWrapper>
            <Styles.NavWrapper themeStore={theme.mode}>
                <Styles.Weather themeStore={theme.mode}>
                    <h4>Thời tiết hôm nay</h4>
                    <span>{weather[0].City}</span>
                    <img src={weather[0].CP} alt="weather"/>
                    <p>{weather[0].CT}°C</p>
                    <span>{weather[0].CI}</span>
                </Styles.Weather>
            </Styles.NavWrapper>
        </Styles.Flex>
        <Footer/>
        </Container>
    )
}
export default News;


export async function getStaticProps(context) {
    const getNews = await getNewsService();
    const getWeather = await getWeatherService();
    return {
      props: { 
        news: getNews.items,
        weather: getWeather.data.weather,
        revalidate: 1,
      }, // will be passed to the page component as props
    }
  }

