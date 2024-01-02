'use client'

import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css';

export const AOSInit = ()=>{
useEffect(()=>{
Aos.init()
}, [])
return null
}