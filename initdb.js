// mongodb
// npm install mongodb
const { MongoClient } = require('mongodb');

// title, slug, image, summary, conntent, creater, creater_email
const initData = [
    {
        title: '여름방학 스터디 모집',
        slug: 'summer-study-recruitment',
        image: '/images/photo1.jpg',
        summary: '여름방학 동안 프로그래밍 스터디를 진행합니다. 관심 있는 분들은 참여해 주세요!',
        content: `여름방학 동안 자바스크립트와 리액트에 대해 깊이 있는 스터디를 계획 중입니다. 
        많은 관심 부탁드립니다.`,
        creator: '홍길동',
        creator_email: 'hong@example.com'
    },
    {
        title: '동아리 해커톤 대회 안내',
        slug: 'club-hackathon-event',
        image: '/images/photo2.jpg',
        summary: '동아리 해커톤 대회를 개최합니다. 참가자들의 열정적인 참여를 기다립니다!',
        content: `해커톤 대회는 다가오는 주말에 열리며, 참가 신청은 이번 주 중에 마감됩니다. 
        많은 관심과 참여 부탁드립니다.`,
        creator: '이순신',
        creator_email: 'lee@example.com'
    },
    {
        title: '동아리 공연 축하 공연',
        slug: 'club-concert-celebration',
        image: '/images/photo3.jpg',
        summary: '동아리 공연 축하 공연을 개최합니다. 많은 관람 바랍니다!',
        content: `공연은 다음 주 토요일에 열리며, 많은 동아리원들의 참여로 풍성한 공연을 기대하고 있습니다. 
        자세한 일정은 곧 공지될 예정입니다.`,
        creator: '김유신',
        creator_email: 'kim@example.com'
    },
    {
        title: '동아리 여름 수영 대회 안내',
        slug: 'club-summer-swimming-contest',
        image: '/images/photo4.jpg',
        summary: '동아리 여름 수영 대회를 개최합니다. 수영을 좋아하는 분들의 많은 참여 바랍니다!',
        content: `여름 수영 대회는 다음 주 일요일에 열리며, 참가 신청은 이번 주까지 가능합니다. 
        기대되는 많은 참여 부탁드립니다.`,
        creator: '윤봉길',
        creator_email: 'yun@example.com'
    },
    {
        title: '동아리 영화 시청 모임 공지',
        slug: 'club-movie-screening-meeting',
        image: '/images/photo5.jpg',
        summary: '동아리 영화 시청 모임을 개최합니다. 함께 즐거운 시간 보내세요!',
        content: `다음 주 금요일에 예정된 영화 시청 모임에 많은 참여 부탁드립니다. 
        함께하는 즐거움이 기다리고 있습니다.`,
        creator: '안중근',
        creator_email: 'ahn@example.com'
    }
];


//mongodb+srv://admin:<password>@cluster0.ggeylyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
async function connectDB(){
    const url = 'mongodb+srv://admin:admin@cluster0.ggeylyc.mongodb.net/';
    const options = {};
    let connectDB;

    if(process.env.NODE_ENV === 'development'){
        if(!global._mongo){
            global._mongo = new MongoClient(url, options).connect()
        }
        return connectDB = global._mongo
    }else{
        return connectDB = new MongoClient(url, options).connect()
    }
}

// 더미데이터 입력 (mydb 안에 group안에 입력)
async function inserDummyData(){
    const client = await connectDB();       // 연결
    const db = client.db('mydb')            // database 이름으로 연결
    const collection = db.collection('group')   // group컬렉션 이름을 입력

    const result = await collection.insertMany(initData);      // 객체 배열을 전부 입력(insertOne)
    console.log(`${result} 입력`);

}
inserDummyData()

// node 파일명