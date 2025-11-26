import React from "react";
import fotoNarendra from "../assets/foto-narendra.webp";

const Profile = ({ data }) => {
  return (
    <section className="profile-header">
      <div className="profile-content">
        <img
          src={fotoNarendra}
          alt={data.full_name}
          className="profile-photo"
        />
        <div className="profile-info">
          <h1 className="profile-name">{data.full_name}</h1>
          <p className="profile-short">{data.short_bio}</p>
          <div className="profile-badges">
            {/* <span className="info-badge">{data.nim}</span> */}
            <span className="info-badge">{data.prodi}</span>
            {/* <span className="info-badge">Tahun Angkatan {data.angkatan}</span> */}
          </div>
          <p className="profile-detail">{data.location} - {data.email}</p>
          {/* <p className="profile-bio">{data.profile}</p> */}
          <a href={data.portfolio_url} target="_blank" className="portfolio-button">
            Visit Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
