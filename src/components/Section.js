const Section = ({ section }) => {
    
    if(section.title === 'About me'){
        return (
            <div className='section'>
               <h2>{section.title}</h2>
               <p>{section.text1}</p>
               <p>{section.text2}</p>
               <p>{section.text3}</p>

               <hr/>

               <h3>{section.technologies.title}</h3>
               <div className='flexContainer'>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech1}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech2}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech3}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech4}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech5}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech6}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech7}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech8}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech9}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech10}</div>
                   <div className='itemFlex'><b className='arrowList'>&#9658;</b>{section.technologies.techs.tech11}</div>
               </div>
               <br/>

               <hr/>

               <h3>{section.experiences.title}</h3>
               <div className='flexContainer'>
                   
                   
                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience7.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience7.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience7.time}</b></div>
                   </div>


                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience6.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience6.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience6.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience5.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience5.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience5.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience4.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience4.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience4.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience3.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience3.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience3.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience2.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience2.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience2.time}</b></div>
                   </div>

                   <div className='itemFlex'><b className='arrowListE'>&#9658;</b>
                   <b>{section.experiences.experience1.title}</b><br/>
                    <div className='subItemFlex'>{section.experiences.experience1.enterprise}<br/>
                    <b className='experienceE'>{section.experiences.experience1.time}</b></div>
                   </div>
                   
                   
               </div>
            </div>
        )
    }else if(section.title === 'Works'){
        return (
            <div className='section'>
                <hr/>
               <h2>{section.title}</h2>
               <p>{section.text}</p>

               <div className='flexContainer'>

                 <div className='itemFlexWork'>
                    <img className='img' alt="" src={`/images/${section.works.work1.image}`}/>
                    <div>{section.works.work1.title}<br/></div>
                </div>

                 <div className='itemFlexWork'>
                    <img className='img' alt="" src={`/images/${section.works.work1.image}`}/>
                    <div>{section.works.work1.title}<br/></div>
                </div>

                 <div className='itemFlexWork'>
                    <img className='img' alt="" src={`/images/${section.works.work1.image}`}/>
                    <div>{section.works.work1.title}<br/></div>
                </div>

               </div>
            </div>
        )
    }


}

export default Section
