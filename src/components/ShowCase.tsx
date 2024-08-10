// 'use client';

// import React from "react";
// import { Title } from "./ui/typography/TitleLogo";
// import { showcase } from "../../assets/data/infodata";
// import { Card } from "./ui/card/Card";
// import Link from "next/link";
// import { HiOutlineArrowRight } from "react-icons/hi";

// const ShowCase: React.FC = () => {
//   return (
//     <section className='showcase'>
//       <div className='container'>
//         <div className='heading-title'>
//           <Title title='Selected cases' />
//         </div>
//         <div className='hero-content grid-3 py'>
//           {showcase.map((item) => (
//             <Card
//               data={{
//                 ...item,
//                 id: item.id.toString(), // Convertir id a string
//               }}
//               key={item.id}
//             />
//           ))}
//         </div>
//         <div className='card links'>
//           <Link href='/'>
//             VIEW ALL CASES <HiOutlineArrowRight className='link-icon' />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShowCase;
