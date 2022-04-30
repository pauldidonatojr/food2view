import React from 'react'
import {
 FaStar,
 FaCalendarAlt,
 FaIdCardAlt,
 FaObjectUngroup,
 FaTwitter,
 FaInstagram,
} from 'react-icons/fa'
export const links = [
 {
  id: 2,
  url: '/about',
  text: 'about us',
  icon: <FaStar />,
 },
 {
  id: 3,
  url: '/calendar',
  text: 'calendar',
  icon: <FaCalendarAlt />,
 },
 {
  id: 4,
  url: '/contact',
  text: 'contact',
  icon: <FaIdCardAlt />,
 },
 {
  id: 5,
  url: '/mission',
  text: 'mission statement',
  icon: <FaObjectUngroup />,
 },
]

export const social = [
 {
  id: 1,
  url: 'https://www.twitter.com',
  icon: <FaTwitter />,
 },
 {
  id: 2,
  url: 'https://www.instagram.com',
  icon: <FaInstagram/>,
 },
]
