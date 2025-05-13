import React from 'react';
import { Link } from "react-router-dom";
import styles from "./styles/Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.footerColumns}>
                    <div className={styles.columns}>
                        <Link to="/" className={styles.footerLinks}>About Us</Link>
                        <Link to="/" className={styles.footerLinks}>Feedback</Link>
                        <Link to="/" className={styles.footerLinks}>Trust, Safety & Security</Link>
                    </div>
                    <div className={styles.columns}>
                        <Link to="/" className={styles.footerLinks}>Help & Support</Link>
                        <Link to="/" className={styles.footerLinks}>Upwork Foundation</Link>
                        <Link to="/" className={styles.footerLinks}>Terms of Service</Link>
                    </div>
                    <div className={styles.columns}>
                        <Link to="/" className={styles.footerLinks}>Privacy Policy</Link>
                        <Link to="/" className={styles.footerLinks}>CA Notice at Collection</Link>
                        <Link to="/" className={styles.footerLinks}>Cookie Settings</Link>
                    </div>
                    <div className={styles.columns}>
                        <Link to="/" className={styles.footerLinks}>Accessibility</Link>
                        <Link to="/" className={styles.footerLinks}>Desktop App</Link>
                        <Link to="/" className={styles.footerLinks}>Cookie Policy</Link>
                        <Link to="/" className={styles.footerLinks}>Enterprise Solutions</Link>
                    </div>
                </div>
                <div className={styles.socialMedia}>
                    <div className={styles.socialMediaWeb}>
                        <span className={styles.mediaTitle}>Follow Us</span>
                        <ul>
                            <li title='Visit Upwork on Facebook'>
                                <Link to="/" className={styles.mediaLinks}>
                                    <svg className={styles.fillSvg} xmlns="http://www.w3.org/2000/svg" fill="none" ariaHidden="true" viewBox="0 0 24 24" role="img"><path d="M21 12.033C21 7.043 16.972 3 12 3s-9 4.043-9 9.033a9.028 9.028 0 006.826 8.765v-6.005H7.968v-2.76h1.858v-1.19c0-3.074 1.386-4.497 4.392-4.497.568 0 1.555.112 1.954.224v2.5a11.71 11.71 0 00-1.04-.033c-1.476 0-2.045.56-2.045 2.02v.976h2.941l-.504 2.76h-2.433V21C17.548 20.458 21 16.65 21 12.033z"></path></svg>
                                </Link>
                            </li>
                            <li title='Read Upwork company news on LinkedIn'>
                                <Link to="/" className={styles.mediaLinks}>
                                    <svg className={styles.fillSvg} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path d="M19.67 3H4.33C3.59 3 3 3.59 3 4.33v15.34C3 20.4 3.59 21 4.33 21h15.34c.73 0 1.33-.59 1.33-1.33V4.33C21 3.6 20.41 3 19.67 3zM8.36 18.33H5.65V9.74h2.71v8.6-.01zM7.01 8.55c-.86 0-1.56-.66-1.56-1.55s.7-1.55 1.56-1.55c.86 0 1.56.66 1.56 1.55s-.7 1.55-1.56 1.55zm11.33 9.79h-2.71v-4.7c0-1.39-.59-1.81-1.35-1.81-.8 0-1.59.6-1.59 1.85v4.66H9.98v-8.6h2.6v1.19h.03c.26-.53 1.18-1.43 2.57-1.43 1.51 0 3.14.9 3.14 3.52v5.32h.02z"></path></svg>
                                </Link>
                            </li>
                            <li title='Follow @Upwork on Twitter'>
                                <Link to="/" className={styles.mediaLinks}>
                                    <svg className={styles.fillSvg} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path d="M13.482 10.622L20.04 3h-1.554l-5.693 6.618L8.245 3H3l6.876 10.007L3 21h1.554l6.012-6.989L15.368 21h5.245l-7.131-10.378zm-2.128 2.473l-.697-.996-5.543-7.93H7.5l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787z"></path></svg>
                                </Link>
                            </li>
                            <li title='Watch Upwork videos on YouTube'>
                                <Link to="/" className={styles.mediaLinks}>
                                    <svg className={styles.fillSvg} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path fill-rule="evenodd" d="M19.814 5.715c.86.233 1.539.915 1.767 1.78.419 1.57.419 4.846.419 4.846s0 3.276-.42 4.846a2.506 2.506 0 01-1.767 1.778c-1.559.422-7.813.422-7.813.422s-6.254 0-7.814-.422a2.513 2.513 0 01-1.769-1.778C2 15.617 2 12.34 2 12.34s0-3.276.417-4.846a2.52 2.52 0 011.769-1.78c1.56-.42 7.814-.42 7.814-.42s6.256 0 7.814.42zm-4.633 6.626L9.952 9.366v5.949l5.229-2.974z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </li>
                            <li title='Follow Upwork on Instagram'>
                                <Link to="/" className={styles.mediaLinks}>
                                    <svg className={styles.fillPath} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5z"></path><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.34 7a.35.35 0 100-.7.35.35 0 000 .7z"></path></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.socialMediaMobail}>
                        <span className={styles.mediaTitle}>Mobile app</span>
                        <ul>
                            <li title='Download Upwork app from iTunes'>
                                <Link to="/" className={styles.mediaLinks}>
                                    <svg className={styles.fillSvg} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path fill-rule="evenodd" d="M15.117 3a3.908 3.908 0 01-.87 2.918 3.607 3.607 0 01-2.778 1.409 3.657 3.657 0 01.9-2.848A4.287 4.287 0 0115.117 3z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M18.295 18.381c.453-.69.844-1.42 1.17-2.178a3.997 3.997 0 01-.53-7.204 4.586 4.586 0 00-3.458-1.83c-.705.01-1.401.16-2.048.44-.433.22-.905.353-1.389.39a4.726 4.726 0 01-1.559-.36c-.6-.25-1.24-.388-1.888-.41a4.676 4.676 0 00-3.777 2.26c-1.31 1.998-1.09 5.805.999 8.992.79 1.2 1.808 2.508 3.127 2.508.46-.01.91-.123 1.32-.33a3.997 3.997 0 013.587 0c.395.217.838.334 1.289.34 1.329-.01 2.398-1.459 3.157-2.618z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </li>
                            <li title='Download Upwork app from Google Play'>
                                <Link to="/" className={styles.mediaLinks}>
                                    <svg className={styles.fillSvg} xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path fill-rule="evenodd" d="M8.471 17.265h.784v2.614c0 .598.55 1.12 1.176 1.12.628 0 1.177-.522 1.177-1.12v-2.614h1.568v2.614c0 .598.549 1.12 1.176 1.12.628 0 1.177-.522 1.177-1.12v-2.614h.784c.47 0 .784-.299.784-.747l-.001-7.687H7.688l-.001 7.687c0 .448.314.747.784.747zM6.008 8.633C5.471 8.633 5 9.197 5 9.843v5.645c0 .646.47 1.21 1.008 1.21s1.008-.564 1.008-1.21V9.842c0-.645-.47-1.21-1.008-1.21zm11.764 1.21v5.645c0 .646.47 1.21 1.008 1.21s1.008-.564 1.008-1.21V9.842c0-.645-.47-1.21-1.008-1.21s-1.008.565-1.008 1.21zm-1.616-6.189a.35.35 0 000-.523.392.392 0 00-.549 0l-1.176 1.12c-.55-.373-1.255-.522-2.04-.522-.783 0-1.489.15-2.116.448l-1.098-1.12a.906.906 0 00-.627-.001.79.79 0 000 .598l1.019.972c-1.098.822-1.882 2.092-1.882 3.558h9.41a4.252 4.252 0 00-1.96-3.558l1.019-.972zm-5.02 3.282H9.801V5.592h1.335v1.344zm2.553 0V5.592h1.334v1.344H13.69z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    © 2015 - 2025 Upwork® Global Inc.
                </div>
            </div>
        </footer>
    );
}

export default Footer;

