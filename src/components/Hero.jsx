//the above is use of the default objects  (Props)
//below is the use of objects by destructuring (Desturcturing Props)
//below is the use of default of properties of objects (Default Prop)

// const Hero = (props) => {
//   return (
//     <>
//       <section className="bg-indigo-700 py-20 mb-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
//               {/* Become a React Dev */}
//               {props.title}
//             </h1>
//             <p className="my-4 text-xl text-white">
//               {/* Find the React job that fits your skills and needs */}
//               {props.subtitle}
//             </p>
//           </div>
//         </div>
//       </section>
//       ;
//     </>
//   );
// };
// export default Hero;

//here is the destructuring done
// const Hero = ({ title, subtitle }) => {
//   return (
//     <>
//       <section className="bg-indigo-700 py-20 mb-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
//               {/* Become a React Dev */}
//               {title}
//             </h1>
//             <p className="my-4 text-xl text-white">
//               {/* Find the React job that fits your skills and needs */}
//               {subtitle}
//             </p>
//           </div>
//         </div>
//       </section>
//       ;
//     </>
//   );
// };
// export default Hero;

//here is the default props when we give them a default values only used when there is nothing

const Hero = ({ title = "Default title", subtitle = "Default Subtitle" }) => {
  return (
    <>
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {/* Become a React Dev */}
              {title}
            </h1>
            <p className="my-4 text-xl text-white">
              {/* Find the React job that fits your skills and needs */}
              {subtitle}
            </p>
          </div>
        </div>
      </section>
      ;
    </>
  );
};
export default Hero;
