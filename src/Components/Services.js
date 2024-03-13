/**
 * Author: Aidan Thrall
 * Date: 3/5/2024
 * 
 * This is the services page for Christware
 */
import React, { useState } from "react";

import Modal from "./Modal";
import StaticWebsite from "./Services Modals/StaticWebsite";
import DynamicWebsite from "./Services Modals/DynamicWebsite"
import SEO from "./Services Modals/SEO"
import AppDev from "./Services Modals/AppDev"
import ITSupport from "./Services Modals/ITSupport"
import Tutoring from "./Services Modals/Tutoring"

import './Services.css'




function Services() {

    const [isOpen, setOpen] = useState(false);
    const [service, setService] = useState(null);

    const OpenModal = (child) => {
        setService(child);
        setOpen(true);
    }

    return(
        <div className="bodyWrapper">
            <div className="titleWrapper">
                <h1 className="ourServices">Our Services</h1>
            </div>
            <div className="servicesWrapper">
                <div onClick={() => OpenModal(StaticWebsite)} className="service">
                    <h3>Static Website Development</h3>
                    <p>
                        In today's digital age, establishing a robust online presence is more crucial than ever, especially for small businesses and individuals aiming to stand out. Our professional static website development service is designed to meet this need with efficiency and elegance.
                    </p>
                </div>
                <div onClick={() => OpenModal(DynamicWebsite)} className="service">
                    <h3>Dynamic Website Development</h3>
                    <p>
                        In an ever-evolving digital landscape, adaptability and engagement are the keys to staying ahead. Our dynamic website development services offer small businesses and individuals the opportunity to harness the full potential of the web. With custom-tailored solutions that breathe life into your online presence, we ensure your website is not just a platform, but a dynamic tool for growth and engagement.
                    </p>
                </div>
                <div onClick={() => OpenModal(SEO)} className="service">
                    <h3>Search Engine Optimization</h3>
                    <p>
                        In the vast expanse of the digital world, being visible is the lifeline of your online presence. Our SEO services are meticulously designed for small businesses and individuals who aspire to catapult their online visibility to new heights. By leveraging cutting-edge strategies and deep industry insights, we ensure your website not only climbs the search engine rankings but also secures a position that attracts and retains your target audience.
                    </p>
                </div>
                <div onClick={() => OpenModal(AppDev)} className="service">
                    <h3>Application Development</h3>
                    <p>
                        In a world increasingly driven by technology, having a custom app can set your business apart. Our App Development services are specifically designed for small businesses and individuals seeking to leverage mobile technology to enhance their operations, engage customers, and drive growth. With a focus on innovative, user-friendly, and efficient applications, we bring your ideas to life in the form of powerful mobile apps that meet today’s digital demands.
                    </p>
                </div>
                <div onClick={() => OpenModal(ITSupport)} className="service">
                    <h3>IT Support</h3>
                    <p>
                        In the rapidly evolving tech landscape, efficient and reliable IT support is not just a necessity—it's a cornerstone for success. Our IT Support services are meticulously crafted to meet the unique needs of small businesses and individuals, providing you with the peace of mind that comes from knowing your technology infrastructure is in expert hands. Whether you're tackling day-to-day issues or planning for future growth, our team is here to ensure that your IT operations run smoothly and efficiently.
                    </p>
                </div>
                <div onClick={() => OpenModal(Tutoring)} className="service">
                    <h3>Tutoring</h3>
                    <p>
                        In the journey of education and skill development, the right guidance can illuminate paths previously thought unreachable. Our tutoring services are dedicated to offering personalized, expert assistance in a wide range of subjects and skills, tailored specifically to the needs of each learner. Whether you're a small business looking to upskill your team, an individual seeking to master a new discipline, or a student aiming for academic excellence, our services are designed to help you achieve your goals.
                    </p>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setOpen(false)} children={service}/>
        </div>
    )
}

export default Services;