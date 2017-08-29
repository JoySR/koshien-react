import AsahiLogo from '../assets/images/asahi_logo.png';
import MBSLogo from '../assets/images/mbs_logo_s.png';
import NHKLogo from '../assets/images/nhk_logo.png';

export default {
  siteName: '第99回全国高等学校野球選手権大会',
  startDate: '2017.08.09',
  endDate: '',
  dateList: [{
    date: "08",
    weekday: "月"
  }, {
    date: "09",
    weekday: "火"
  }, {
    date: "10",
    weekday: "水"
  }, {
    date: "11",
    weekday: "木"
  }, {
    date: "12",
    weekday: "金"
  }, {
    date: "13",
    weekday: "土"
  }, {
    date: "14",
    weekday: "日"
  }, {
    date: "15",
    weekday: "月"
  }, {
    date: "16",
    weekday: "火"
  }, {
    date: "17",
    weekday: "水"
  }, {
    date: "18",
    weekday: "木"
  }, {
    date: "19",
    weekday: "金"
  }, {
    date: "20",
    weekday: "土",
    isRestDay: true
  }, {
    date: "21",
    weekday: "日",
    isAfterRestDay: true
  }, {
    date: "22",
    weekday: "月",
    isAfterRestDay: true
  }],
  linkList: [{
    url: 'http://www.nhk.or.jp/koushien',
    image: {NHKLogo},
    name: 'NHK Online'
  }, {
    url: 'http://mainichi.jp/koshien/',
    image: {MBSLogo},
    name: 'MBS'
  }, {
    url: 'http://www.asahi.com/koshien',
    image: {AsahiLogo},
    name: '朝日新聞'
  }],
}
