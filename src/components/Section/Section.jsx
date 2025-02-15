import React, { useState } from 'react';
import "./section.scss";

const Section = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const renderContent = () => {
    switch (activeTab) {
      case 'latest':
        return (
          <div className='blog'>
            {[...Array(3)].map((_, i) => (
              <div className="card_1" key={i}>
                {[...Array(3)].map((_, j) => (
                  <div className="card" key={j}>
                    <b className='blog_b'>03.04</b>
                    <h1 className='blog_h1'>Title of the post</h1>
                    <p className='blog_p'>Description of the post and now Lorem Ipsum is simply dummy text of the...</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      case 'popular':
        return (
          <div className='blog'>
            <h2>Most Popular Posts</h2>
          </div>
        );
      case 'oldest':
        return (
          <div className='blog'>
            <h2>Oldest Posts</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="container">
        <div className="blog_page">
          <button className={`blog_btn ${activeTab === 'latest' ? 'active' : ''}`} onClick={() => setActiveTab('latest')} style={{ backgroundColor: activeTab === 'latest' ? '#4619FB' : 'white', color: activeTab === 'latest' ? 'white' : '#4619FB' }}>Latest</button>
          <button className={`blog_btn1 ${activeTab === 'popular' ? 'active' : ''}`} onClick={() => setActiveTab('popular')} style={{ backgroundColor: activeTab === 'popular' ? '#4619FB' : 'white', color: activeTab === 'popular' ? 'white' : '#4619FB' }}>Most Popular</button>
          <button className={`blog_btn2 ${activeTab === 'oldest' ? 'active' : ''}`} onClick={() => setActiveTab('oldest')} style={{ backgroundColor: activeTab === 'oldest' ? '#4619FB' : 'white', color: activeTab === 'oldest' ? 'white' : '#4619FB' }}>Oldest</button>
        </div>
        {renderContent()}
        <button className='section_btn'>See More</button>
      </div>
    </section>
  );
};

export default Section;
