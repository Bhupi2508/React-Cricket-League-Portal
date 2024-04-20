import { images } from './imageImports'; // Assuming the correct path to your imageImports.js file

const cardsData = [
    {
        image: images.aaaa,
        // title: ",
        // description: "",
        // details: "",
        // projectLink: "",
        // repoLink: ""
    },
    { image: images.bbbb },
    { image: images.cccc },
];

const slideData = [
    { image: images.aaaa },
    { image: images.bbbb },
    { image: images.cccc },
    { image: images.dddd },
    { image: images.eeee },
    { image: images.ffff },
    { image: images.gggg },
    { image: images.hhhh },
    { image: images.iiii },
    { image: images.jjjj },
    { image: images.kkkk },
    { image: images.llll },
    { image: images.mmmm },
    { image: images.nnnn },
    { image: images.oooo },
    { image: images.pppp },
    { image: images.qqqq },
    { image: images.rrrr },
    { image: images.ssss },
    { image: images.tttt },
    { image: images.uuuu },
    { image: images.vvvv },
    { image: images.wwww },
    { image: images.xxxx },
    { image: images.yyyy },
    { image: images.zzzz },
    { image: images.aaaa1 },
    { image: images.uuuu1 },
    { image: images.vvvv1 },
    { image: images.wwww1 },
];

const players = [
    {
        name: "Anuj",
        role: "All-Rounder",
        matches: 150,
        runs: 3200,
        wickets: 100,
        strikeRate: 120.5,
        location: "Thei, Bharatpur, Rajasthan",
        description: "Anuj, the dynamic all-rounder from Thei, Bharatpur, Rajasthan, has been a key player with both bat and ball. Known for his aggressive style, he has maintained an impressive strike rate of 120.5. His ability to turn the game around with crucial wickets and quick runs makes him a valuable asset in any format of the game."
    },
    {
        name: "Tushar",
        role: "Bowler",
        matches: 80,
        runs: 100,
        wickets: 150,
        economyRate: 4.8,
        location: "Bayana, Bharatpur, Rajasthan",
        description: "Tushar, the skilled bowler from Bayana, Bharatpur, Rajasthan, has consistently troubled batsmen with his precise bowling. His economy rate of 4.8 makes him a valuable asset to the team. With the ability to swing the ball both ways and deliver accurate yorkers, he is a bowler to watch out for in crunch situations."
    },
    {
        name: "Mohit",
        role: "Batsman",
        matches: 120,
        runs: 5000,
        strikeRate: 95.2,
        location: "Udaipur, Rajasthan",
        description: "Mohit, the stylish batsman from Udaipur, Rajasthan, has been a run machine for his team. His ability to maintain a steady strike rate of 95.2 has been instrumental in many victories. Known for his elegant strokes and ability to anchor the innings, he is a reliable batsman in any situation."
    },
    {
        name: "Lavkesh",
        role: "Batsman",
        matches: 100,
        runs: 4200,
        strikeRate: 105.8,
        location: "Undra, Bharatpur, Rajasthan",
        description: "Lavkesh, the aggressive batsman from Undra, Bharatpur, Rajasthan, is known for his ability to score quick runs. With a strike rate of 105.8, he puts pressure on the bowlers from the start. His ability to play big shots and rotate the strike makes him a valuable asset in limited-overs cricket."
    },
    {
        name: "Bhupi",
        role: "All-Rounder",
        matches: 180,
        runs: 2800,
        wickets: 120,
        strikeRate: 110.2,
        location: "Bayana, Bharatpur, Rajasthan",
        description: "Bhupi, the all-rounder from Bayana, Bharatpur, Rajasthan, is a key player in the team's success. With 120 wickets and 2800 runs in 180 matches, he has proven his worth with both bat and ball. His strike rate of 110.2 showcases his ability to score quick runs when needed."
    },
    {
        name: "Harendra",
        role: "Bowler",
        matches: 90,
        runs: 150,
        wickets: 130,
        economyRate: 4.5,
        location: "Bayana, Bharatpur, Rajasthan",
        description: "Harendra, the bowler from Bayana, Bharatpur, Rajasthan, is known for his ability to take crucial wickets. With 130 wickets in just 90 matches, he has been a consistent performer for his team. His economy rate of 4.5 shows his ability to maintain pressure on the batsmen."
    },
    {
        name: "Punnu",
        role: "Bowler",
        matches: 100,
        runs: 200,
        wickets: 160,
        economyRate: 4.7,
        location: "Undra, Bharatpur, Rajasthan",
        description: "Punnu, the bowler from Undra, Bharatpur, Rajasthan, is a key player in the team's bowling attack. With 160 wickets in 100 matches, he has been a consistent wicket-taker. His economy rate of 4.7 shows his ability to contain runs and build pressure on the opposition."
    },
    {
        name: "Akash",
        role: "All-Rounder",
        matches: 160,
        runs: 2000,
        wickets: 90,
        strikeRate: 112.0,
        location: "Beawar, Rajasthan",
        description: "Akash, the all-rounder from Beawar, Rajasthan, has been a valuable player for his team. With 90 wickets and 2000 runs in 160 matches, he has contributed with both bat and ball. His strike rate of 112.0 showcases his ability to score quick runs."
    },
    {
        name: "Pradeep",
        role: "Bowler",
        matches: 70,
        runs: 50,
        wickets: 100,
        economyRate: 4.9,
        location: "Bayana, Bharatpur, Rajasthan",
        description: "Pradeep, the bowler from Bayana, Bharatpur, Rajasthan, is known for his ability to pick up wickets at crucial moments. With 100 wickets in just 70 matches, he has been a key bowler for his team. His economy rate of 4.9 shows his ability to contain runs."
    },
    {
        name: "Parvendra",
        role: "All-Rounder",
        matches: 170,
        runs: 3500,
        wickets: 110,
        strikeRate: 108.5,
        location: "Undra, Bharatpur, Rajasthan",
        description: "Parvendra, the all-rounder from Undra, Bharatpur, Rajasthan, has been a consistent performer for his team. With 110 wickets and 3500 runs in 170 matches, he has been a valuable asset with both bat and ball. His strike rate of 108.5 showcases his ability to score quick runs."
    },
    {
        name: "Nitesh",
        role: "Bowler",
        matches: 80,
        runs: 50,
        wickets: 120,
        economyRate: 4.6,
        location: "Sikar, Rajasthan",
        description: "Nitesh, the bowler from Sikar, Rajasthan, is known for his ability to take wickets consistently. With 120 wickets in just 80 matches, he has been a key bowler for his team. His economy rate of 4.6 shows his ability to maintain pressure on the batsmen."
    },
    {
        name: "Chirag",
        role: "Batsman",
        matches: 110,
        runs: 5000,
        strikeRate: 100.0,
        location: "Bikaner, Rajasthan",
        description: "Chirag, the aggressive batsman from Bikaner, Rajasthan, is known for his ability to score quick runs. With a strike rate of 100.0, he is capable of taking the game away from the opposition. His ability to play big shots and build partnerships makes him a key player in the team."
    }
];


export { cardsData, slideData, players };