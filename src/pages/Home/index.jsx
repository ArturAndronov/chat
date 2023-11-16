import React from 'react';

import {Message} from '../../components/index';

import "./Home.scss";


const Home = () => {
    return (
        <section className='home'>
           <Message 
           avatar="https://sun9-16.userapi.com/s/v1/if1/hQOabldD66sG_JbzWnkwXuLuQjeoDD1KGmFHqzGHWAh5R1nIgTZkyiGgVNuS3nCD0tedNjZs.jpg?size=50x50&quality=96&crop=3,0,745,745&ava=1" 
           text="Что я делаю на твоем сайте?" 
           date="2023-11-16T15:02:03.262Z"
           
           /> 
           <Message 
           avatar="https://sun9-36.userapi.com/s/v1/ig2/-pIatIoEJ9ZAs7_-3m1zzUDaSrOIsyi5cIVf_sgtoo25YyN_e2TX-6U_DE88ISQYGOufVb3k8F0nQeMEn2pKyE2N.jpg?size=50x50&quality=95&crop=152,332,553,553&ava=1" 
           text="Отдыхаешь" 
           date="2023-11-16T15:02:45.262Z"
           isMe={true}
           isReaded={false}
           /> 
          
        </section>
    );
}

export default Home;
