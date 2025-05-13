import React, {useState, useReducer, useRef} from "react";
import { Link } from "react-router-dom";
import pageStyles from "./pageStyles/Main.module.scss";
import { JobProvider, useJobContext } from './useJobContext';
import UserImage from "../assets/images/userImage.jpg";

// SLIDER SWIPER
import './pageStyles/Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function reducer(state, {action, type}) {
  switch (action) {
    case "tabSwitch":
      return { activeTab: type };
    default:
      return state;
  }
}

// JOB CONTEXT

const JobList = () => {
    const jobPosts = useJobContext();

    return(
        <>
            {jobPosts.map((job, index) => (
                <div key={index} className={pageStyles.jobBox}>
                    <div className={pageStyles.jobTitlePublishDate}>
                        <div className={pageStyles.jobNameAction}>
                            <span className={pageStyles.jobDatePublish}>Posted 11 hours ago</span>
                            <Link to="/" className={pageStyles.jobLinkTitle}>{job.title}</Link>
                        </div>
                        <div className={pageStyles.jobDisLikeSaveBtns}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.027 15h3.225v2.46c.083.95.513 1.837 1.207 2.49A3.87 3.87 0 0012.015 21v-3.61l2.905-3.08A3 3 0 0016.01 12V4a1 1 0 00-.999-1H6.265a.997.997 0 00-.998.75l-2.206 8.76a2.003 2.003 0 001.08 2.298c.277.131.58.197.886.193z" clip-rule="evenodd"></path><path fill="var(--icon-color, #001e00)" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.504 13H21V3h-2.496v10z"></path></svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.674 6.176c-1.722-1.634-4.484-1.515-6.165.16L11.988 7.89l-1.642-1.634a4.314 4.314 0 00-6.085 0 4.269 4.269 0 000 6.058s5.485 5.221 7.246 6.537c.28.199.68.199.96 0 1.762-1.316 7.247-6.537 7.247-6.537 1.721-1.714 1.721-4.464-.04-6.138z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                    <p className={pageStyles.jobBudget}>Fixed-price - Intermediate - Est. Budget: {job.budget}</p>
                    <p className={pageStyles.jobDescription}>{job.description}</p>
                    <div className={pageStyles.jobTags}>
                        {job.tags.map((tag, index) => (
                            <span className={pageStyles.tagName} key={index}>{tag}</span>
                        ))}
                    </div>
                    <div className={pageStyles.ratingPaymentLocation}>
                        <span className={pageStyles.payemntVerifyStatus}>
                            {job.paymentVerified ? (
                                <>
                                    <svg className={pageStyles.verified} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path fill-rule="evenodd" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.4 13.1c.8 1 .3 2.5-.9 2.9-.8.2-1.3 1-1.3 1.8 0 1.3-1.2 2.2-2.5 1.8-.8-.3-1.7 0-2.1.7-.7 1.1-2.3 1.1-3 0-.5-.7-1.3-1-2.1-.7-1.4.4-2.6-.6-2.6-1.8 0-.8-.5-1.6-1.3-1.8-1.2-.4-1.7-1.8-.9-2.9.5-.7.5-1.6 0-2.2-.9-1-.4-2.5.9-2.9.8-.2 1.3-1 1.3-1.8C5.9 5 7.1 4 8.3 4.5c.8.3 1.7 0 2.1-.7.7-1.1 2.3-1.1 3 0 .5.7 1.3 1 2.1.7 1.4-.5 2.6.5 2.6 1.7 0 .8.5 1.6 1.3 1.8 1.2.4 1.7 1.8.9 2.9-.4.6-.4 1.6.1 2.2z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.5 9.7L11 14.3l-2.5-2.5"></path></svg>
                                    <span>Payment verified</span>
                                </>
                            ) : (
                                <>
                                    <svg className={pageStyles.unverified} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.259 13.016c.793.992.297 2.48-.893 2.876-.793.198-1.29.992-1.29 1.785 0 1.29-1.19 2.182-2.479 1.785-.793-.297-1.685 0-2.082.694a1.761 1.761 0 01-2.975 0c-.496-.694-1.29-.991-2.083-.694-1.388.397-2.579-.595-2.579-1.785 0-.793-.495-1.587-1.289-1.785-1.19-.397-1.686-1.785-.892-2.876.495-.694.495-1.587 0-2.182-.893-.992-.397-2.48.892-2.876.794-.198 1.29-.992 1.29-1.785 0-1.19 1.19-2.182 2.38-1.686.793.298 1.686 0 2.082-.694a1.762 1.762 0 012.976 0c.495.694 1.289.992 2.082.694 1.389-.496 2.579.496 2.579 1.686 0 .793.495 1.587 1.289 1.785 1.19.397 1.686 1.785.892 2.876-.396.595-.396 1.587.1 2.182zM8.953 8.95l5.95 5.95m0-5.95l-5.95 5.95"></path></svg>
                                    <span>Payment unverified</span>
                                </>
                                
                            )}
                        </span>
                        <div className={pageStyles.rating}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <React.Fragment key={star}>
                                    <input
                                    type="radio"
                                    id={`${star}`}
                                    name="rating"
                                    value={star}
                                    />
                                    <label
                                        htmlFor={`${star}`}
                                        className={star <= job.rating && pageStyles.filled}
                                    ></label>
                                </React.Fragment>
                            ))}
                        </div>
                        <span style={{fontSize: '14px', fontWeight: 500, color: "#a5a5a5"}}>{job.amountSpent} spent</span>
                        <span className={pageStyles.jobLocation}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 11.9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.4 9.4C18.4 5.9 15.6 3 12 3 8.4 3 5.6 5.9 5.6 9.4c0 1.5.6 2.9 1.5 4.1 1.3 1.8 5 7.5 5 7.5s3.6-5.7 5-7.5c.7-1.2 1.3-2.5 1.3-4.1z"></path></svg>
                            {job.location}
                        </span>
                    </div>
                    <p className={pageStyles.jobPorposals}>Proposals: {job.proposals}</p>
                </div>
            ))}
        </>
    )
}

// DROPDOWN, CONNECT...

const Accardion = ({children, button}) => {
    const [isOpen, setIsOpen] = useState(false);
    const accardionRef = useRef(null);

    const openDropdown = () => setIsOpen((prev) => !prev);

    return(
        <div className={pageStyles.accardion}>
            <div onClick={openDropdown} className={pageStyles.accardionButton}>
                <span>{button}</span>
                <svg style={{transform: isOpen && "rotate(180deg)", fill: '#fff', width: "14px", height: "14px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
            </div>
            <div 
                ref={accardionRef}
                style={{maxHeight: isOpen ? `${accardionRef.current.scrollHeight}px` : '0px',}}
                className={pageStyles.accardionItems}
            >
                {children}
            </div>
        </div>
    );
}

const Main = () => {
    const[input, setInput] = useState('');
    const [state, dispatch] = useReducer(reducer, { activeTab: 'Best Matches' });

    return(
        <main>
            <div className={pageStyles.mainColumn1}>

                {/* SLIDER */}

                <div className={pageStyles.sliderContainer}>
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<div class="${className} my-bullet bullet-${index}"></div>`;
                            },
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{backgroundColor: "#13544e"}}>
                            <div></div>
                        </SwiperSlide>
                        <SwiperSlide style={{backgroundColor: "#13544e"}}>
                            <div></div>
                        </SwiperSlide>
                        <SwiperSlide style={{backgroundColor: "#14a800"}}>
                            <div></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                
                {/* SEARCH JOB */}

                <div className={pageStyles.searchContainer}>
                    <form className={pageStyles.searchForJob}>
                        <svg className={pageStyles.searchSvg} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10.688 18.377a7.688 7.688 0 100-15.377 7.688 7.688 0 000 15.377zm5.428-2.261L21 21"></path></svg>
                        <input type="text" placeholder="Search for jobs" value={input} onChange={(e) => setInput(e.target.value)}/>
                        {input !== '' && (
                            <button className={pageStyles.cleanValue} type="button" onClick={() => setInput('')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.94 8.94l5.786 5.786m0-5.786l-5.785 5.786m2.892 6.107a9 9 0 100-18 9 9 0 000 18z"></path></svg>
                            </button>
                        )} 
                    </form>
                </div>

                {/* Jobs you might like */}

                <div className={pageStyles.jobContainer}>
                    <span className={pageStyles.containerTitle}>
                        Jobs you might like
                    </span>
                    <div className={pageStyles.tabJobs}>
                        <div className={pageStyles.tabButtons}>
                            <button 
                                className={`${state.activeTab === "Best Matches" && pageStyles.active}`}
                                onClick={() => dispatch({action: "tabSwitch",type: "Best Matches"})}
                            >
                                Best Matches    
                            </button>
                            <button 
                                className={`${state.activeTab === "Most Recent" && pageStyles.active}`}
                                onClick={() => dispatch({action: "tabSwitch",type: "Most Recent"})}
                            >
                                Most Recent
                            </button>
                            <button 
                                className={`${state.activeTab === "Saved Jobs" && pageStyles.active}`}
                                onClick={() => dispatch({action: "tabSwitch",type: "Saved Jobs"})}
                            >
                                Saved Jobs
                            </button>
                        </div>
                        <span className={pageStyles.tabDescription}>
                            Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.
                        </span>
                    </div>
                    <div style={{display: state.activeTab === "Best Matches" ? "block" : "none"}} className={pageStyles.jobsTabContainer}>
                        <JobProvider>
                            <JobList/>
                        </JobProvider>
                    </div>
                    <div style={{display: state.activeTab === "Most Recent" ? "block" : "none"}} className={pageStyles.jobsTabContainer}>
                        <JobProvider>
                            <JobList/>
                        </JobProvider>
                    </div>
                    <div style={{display: state.activeTab === "Saved Jobs" ? "block" : "none"}} className={pageStyles.jobsTabContainer}>

                    </div>
                </div>
            </div>

            <div className={pageStyles.mainColumn2}>
                <div className={pageStyles.rightColumnBox}>
                    <div className={pageStyles.userImageName}>
                        <Link to="/">
                            <img src={UserImage} alt="User" className={pageStyles.userImage}/>
                        </Link>
                        <span className={pageStyles.namePosition}>
                            <Link className={pageStyles.userName} to="/">User</Link>
                            <span className={pageStyles.position}>Frontend Developer</span>
                        </span>
                    </div>
                    <div className={pageStyles.profileCompleteItems}>
                        <Link className={pageStyles.profileSettings} to="/">Complete your profile</Link>
                        <div className={pageStyles.profileTools}>
                            <div></div>
                            <span>40%</span>
                        </div>
                    </div>
                </div>

                <div className={pageStyles.rightColumnBox}>
                    <Accardion button="Promote with ads">
                        <div className={pageStyles.promoteAds}>
                            <div className={pageStyles.availableBadje}>
                                <div className={pageStyles.editRow}>
                                    <div>Availability badge</div>
                                    <div>Off</div>
                                </div>
                                <button className={pageStyles.editButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.734 5.544l3.708 3.702"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.488 20.551l-1.919.41A1.3 1.3 0 013 19.393l.38-1.916c.098-.508.35-.975.72-1.337L16.492 3.768a2.6 2.6 0 013.698 0v0a2.595 2.595 0 01.571 2.847 2.595 2.595 0 01-.571.845L7.827 19.833c-.363.37-.83.62-1.339.718v0z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className={pageStyles.availableBadje}>
                                <div className={pageStyles.editRow}>
                                    <div>Availability badge</div>
                                    <div>Off</div>
                                </div>
                                <button className={pageStyles.editButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.734 5.544l3.708 3.702"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.488 20.551l-1.919.41A1.3 1.3 0 013 19.393l.38-1.916c.098-.508.35-.975.72-1.337L16.492 3.768a2.6 2.6 0 013.698 0v0a2.595 2.595 0 01.571 2.847 2.595 2.595 0 01-.571.845L7.827 19.833c-.363.37-.83.62-1.339.718v0z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </div>
                    </Accardion>
                </div>

                <div className={pageStyles.rightColumnBox}>
                    <Accardion button="Connects: 132">
                        <div className={pageStyles.promoteAds}>
                            <div className={pageStyles.viewDetils}>
                                <Link to="/">View details</Link>
                                <span>|</span>
                                <Link to="/">Buy Connects</Link>
                            </div>
                        </div>
                    </Accardion>
                </div>

                <div className={pageStyles.rightColumnBox}>
                    <div style={{paddingBottom: "16px"}}>
                        <Accardion button="Preferences">
                            <div className={pageStyles.promoteAds}>
                                <div className={pageStyles.availableBadje} style={{paddingBottom: "16px"}}>
                                    <div className={pageStyles.editRow}>
                                        <div>Hours per week</div>
                                        <span style={{paddingTop:"8px", fontSize: "14px"}}>More than 30 hrs/week</span>
                                    </div>
                                    <button className={pageStyles.editButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.734 5.544l3.708 3.702"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.488 20.551l-1.919.41A1.3 1.3 0 013 19.393l.38-1.916c.098-.508.35-.975.72-1.337L16.492 3.768a2.6 2.6 0 013.698 0v0a2.595 2.595 0 01.571 2.847 2.595 2.595 0 01-.571.845L7.827 19.833c-.363.37-.83.62-1.339.718v0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div className={pageStyles.availableBadje} style={{paddingBottom: "16px"}}>
                                    <div className={pageStyles.editRow}>
                                        <div>Profile Visibility</div>
                                        <span style={{paddingTop:"8px", fontSize: "14px"}}>Public</span>
                                    </div>
                                    <button className={pageStyles.editButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.734 5.544l3.708 3.702"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.488 20.551l-1.919.41A1.3 1.3 0 013 19.393l.38-1.916c.098-.508.35-.975.72-1.337L16.492 3.768a2.6 2.6 0 013.698 0v0a2.595 2.595 0 01.571 2.847 2.595 2.595 0 01-.571.845L7.827 19.833c-.363.37-.83.62-1.339.718v0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div className={pageStyles.availableBadje} style={{paddingBottom: "16px"}}>
                                    <div className={pageStyles.editRow}>
                                        <div>Job Preference</div>
                                        <span style={{paddingTop:"8px", fontSize: "14px"}}>No preference set</span>
                                    </div>
                                    <button className={pageStyles.editButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.734 5.544l3.708 3.702"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.488 20.551l-1.919.41A1.3 1.3 0 013 19.393l.38-1.916c.098-.508.35-.975.72-1.337L16.492 3.768a2.6 2.6 0 013.698 0v0a2.595 2.595 0 01.571 2.847 2.595 2.595 0 01-.571.845L7.827 19.833c-.363.37-.83.62-1.339.718v0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div className={pageStyles.availableBadje}>
                                    <div className={pageStyles.editRow}>
                                        <div>My Categories</div>
                                        <Link to="/" style={{paddingTop:"8px", fontSize: "14px"}} className={pageStyles.profileSettings}>Web Development</Link>
                                    </div>
                                    <button className={pageStyles.editButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.734 5.544l3.708 3.702"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.488 20.551l-1.919.41A1.3 1.3 0 013 19.393l.38-1.916c.098-.508.35-.975.72-1.337L16.492 3.768a2.6 2.6 0 013.698 0v0a2.595 2.595 0 01.571 2.847 2.595 2.595 0 01-.571.845L7.827 19.833c-.363.37-.83.62-1.339.718v0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </Accardion>
                    </div>
                    <div style={{padding: "16px 0", borderTop: "1px solid #333"}}>
                        <Accardion button="Proposals">
                            <div className={pageStyles.promoteAds} style={{paddingTop: "8px"}}>
                                <div className={pageStyles.availableBadje}>
                                    <div className={pageStyles.editRow}>
                                        <Link to="/" className={pageStyles.profileSettings}>My Proposals</Link>
                                        <div style={{color: "#fff", marginTop: "12px", lineHeight: "150%"}}>Looking for work? Browse jobs and get started on a proposal.</div>
                                    </div>
                                </div>
                            </div>
                        </Accardion>
                    </div>
                    <div style={{paddingTop: "16px", borderTop: "1px solid #333"}}>
                        <Accardion button="Project Catalog">
                            <div className={pageStyles.promoteAds} style={{paddingTop: "8px"}}>
                                <div className={pageStyles.availableBadje}>
                                    <div className={pageStyles.editRow}>
                                        <Link to="/" className={pageStyles.profileSettings}>My Project Dashboard</Link>
                                        <div style={{color: "#fff", marginTop: "12px", lineHeight: "150%"}}>
                                            <Link to="/" className={pageStyles.profileSettings}>Create a Catalog project </Link>
                                             for clients to purchase instantly</div>                                        
                                    </div>
                                </div>
                            </div>
                        </Accardion>
                    </div>
                </div>

                <div className={pageStyles.rightColumnBox} style={{padding: "32px 24px"}}>
                    <div className={pageStyles.slidebarItems}>
                        <Link className={pageStyles.slidebarLinks}>
                            <span>Direct Contracts</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 12v6.3c0 1.53-1.17 2.7-2.7 2.7H5.7C4.17 21 3 19.83 3 18.3V5.7C3 4.17 4.17 3 5.7 3H12m4.5.09H21v4.5m-9 4.5l9-9"></path></svg>
                        </Link>
                        <Link className={pageStyles.slidebarLinks}>
                            <span>Get Paid</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 12v6.3c0 1.53-1.17 2.7-2.7 2.7H5.7C4.17 21 3 19.83 3 18.3V5.7C3 4.17 4.17 3 5.7 3H12m4.5.09H21v4.5m-9 4.5l9-9"></path></svg>
                        </Link>
                        <Link className={pageStyles.slidebarLinks}>
                            <span>Help Center</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 12v6.3c0 1.53-1.17 2.7-2.7 2.7H5.7C4.17 21 3 19.83 3 18.3V5.7C3 4.17 4.17 3 5.7 3H12m4.5.09H21v4.5m-9 4.5l9-9"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;