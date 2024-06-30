'use client'

import './image-slider.css'
import Image from 'next/image'
import slide1 from '@/assets/slide1.jpg';
import slide2 from '@/assets/slide2.jpg';
import slide3 from '@/assets/slide3.jpg';
import slide4 from '@/assets/slide4.jpg';
import slide5 from '@/assets/slide5.jpg';
import slide6 from '@/assets/slide6.jpg';
import slide7 from '@/assets/slide7.jpg';
import { useEffect, useState } from 'react';


// 화면을 그ㅐ그때 바꿔주기 위해 useState와 useEffect를 사용
// 'use client'
const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7
];

export default function ImageSlider(){
    const [curSlideIdx, setCurSlideIdx] = useState(0);

    useEffect(()=>{
        // 타이머 또는 fetch
        // useEffect : 오래걸리는 작업을 별도로 실행시키게함
        // 1. 로딩시 2. 언로딩시 3. 갱신시
        // 1. 로딩시 함수 내부 작성
        // 2. 언로딩시 return에 작성
        // 3. 갱신시 [] 안에 대상 변수나 state를 넣어주기\

        // 3초에 한번씩 동작하는 타이머 (state의 값을 1씩 증가시키기)
        const slideTimer = setInterval(()=>{
            setCurSlideIdx(prev => prev < images.length -1 ? prev + 1 : 0)
        }, 3000);       // 3000m에 한번씩 실행하는 함수

        return () => clearInterval(slideTimer);


    }, [])  // [] 를 사용시 모든것에 대한 갱신X

    return(
        <div className='slideshow'>
            {
                images.map((item, index)=>{
                    return(
                        <Image src={item}
                        className={index === curSlideIdx ? 'active' : ''}
                        alt='' key={index}/>
                    )
                    
                })
            }
        </div>
    )
}