'use client'

import React from 'react';
import { ManuItems } from './Config';
import "./Manu.css";
import Link from 'next/link';
const Manu = () => {
    const [activeManu, setActiveManu] = React.useState("/home");

    const fnClick=(link)=>{
        setActiveManu(link);
    }

  return (
    <div>
      <ul className='Unlist'>
      {
        ManuItems.map(({name, link}, ind)=>{
            return <li className={ activeManu == link ? "activeC":"not"} key={ind}>
                <Link onClick={()=>{fnClick(link)}} href={link}>{name}</Link>
            </li>
        })
      }
      </ul>
    </div>
  );
}

export default Manu;
