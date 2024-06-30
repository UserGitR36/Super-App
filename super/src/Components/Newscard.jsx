import React from 'react';
import './Newscard.css';
// Simulated news data (replace with actual API fetch in production)
const newsData = [
  {
    uri: "8185315184",
    lang: "eng",
    isDuplicate: false,
    date: "2024-06-19",
    time: "12:36:57",
    dateTime: "2024-06-19T12:36:57Z",
    dateTimePub: "2024-06-19T12:35:24Z",
    dataType: "news",
    sim: 0,
    url: "https://www.marketscreener.com/quote/stock/MICROSTRATEGY-INCORPORATE-10105/news/MicroStrategy-Incorporated-The-good-and-bad-sides-of-the-trade-47002073/",
    title: "MicroStrategy Incorporated: The good and bad sides of the trade",
    body: "The market sometimes serves the grotesque purpose of transferring money from the pockets of the ingenuous to those of the rapacious, who never lose their heads. Once a software company, MicroStrategy turned to bitcoin speculation at the instigation of its folkloric chairman Michael Saylor, a ...",
    source: { /* source details */ },
    authors: [],
    concepts: [ /* concepts */ ],
    categories: [ /* categories */ ],
    image: "https://img.zonebourse.com/reuters/2024-04/2024-04-10T132915Z_1_LYNXNPEK390MJ_RTROPTP_3_USA-BITCOIN.JPG",
    eventUri: null,
    sentiment: 0.05098039215686279,
    wgt: 456496617,
    relevance: 2
  },
  {
    uri: "8185313816",
    lang: "eng",
    isDuplicate: false,
    date: "2024-06-19",
    time: "12:35:38",
    dateTime: "2024-06-19T12:35:38Z",
    dateTimePub: "2024-06-19T12:34:32Z",
    dataType: "news",
    sim: 0.6235294342041016,
    url: "https://coingape.com/videos/explainers/best-crypto-airdrops-for-2024/",
    title: "Best crypto Airdrops for 2024",
    body: "Our editorial policy follows strict guidelines and review methodology when it comes to transparency and accuracy of the content we publish. We inculcate the extensive knowledge and wisdom of seasoned writers in our team so that the content is well-researched and crafted, tailoring to crypto ...",
    source: { /* source details */ },
    authors: [],
    concepts: [ /* concepts */ ],
    categories: [ /* categories */ ],
    image: "https://coingape.com/wp-content/uploads/2024/06/yt_15-06-24_1.jpg",
    eventUri: "eng-9664846",
    sentiment: 0.2392156862745098,
    wgt: 456496538,
    relevance: 1
  },
  {
    uri: "8185313811",
    lang: "eng",
    isDuplicate: false,
    date: "2024-06-19",
    time: "12:35:30",
    dateTime: "2024-06-19T12:35:30Z",
    dateTimePub: "2024-06-19T12:34:32Z",
    dataType: "news",
    sim: 0,
    url: "https://blockchainreporter.net/foxy-lands-on-alchemy-pay-simplifying-crypto-transactions/",
    title: "FOXY Lands on Alchemy Pay: Simplifying Crypto Transactions",
    body: "FOXY, the trending memecoin and mascot on Linea, has now become even more accessible. Thanks to its recent integration with Alchemy Pay, purchasing FOXY with fiat currency is now straightforward and hassle-free. This collaboration enables users to buy FOXY using their local currencies and preferred ...",
    source: { /* source details */ },
    authors: [],
    concepts: [ /* concepts */ ],
    categories: [ /* categories */ ],
    image: "https://blockchainreporter.net/wp-content/uploads/2024/03/blue.webp",
    eventUri: null,
    sentiment: 0.1372549019607843,
    wgt: 456496530,
    relevance: 1
  },

];

const NewsCard = () => {
  return (
    <div className="news-section">
      <h2>News</h2>
      <ul>
        {newsData.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;