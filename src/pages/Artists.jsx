function Artists() {
  const artists = [
    {
      icon: "💄",
      name: "Ananya Sharma",
      role: "Makeup Artist",
      experience: "5 years of experience",
      specialty: "Bridal and party makeup",
    },
    {
      icon: "💇‍♀️",
      name: "Priya Verma",
      role: "Hair Stylist",
      experience: "4 years of experience",
      specialty: "Modern hairstyles and hair care",
    },
    {
      icon: "💅",
      name: "Meera Patel",
      role: "Nail Artist",
      experience: "3 years of experience",
      specialty: "Nail art and manicure",
    },
  ];

  return (
    <main className="artists-page">
      <section className="page-heading">
        <p className="eyebrow">TALENT · STYLE · BEAUTY</p>
        <h1>Meet Our <span>Artists</span></h1>
        <p>
          Discover our talented beauty professionals and find
          the perfect artist for your makeover.
        </p>
      </section>

      <section className="artists-section">
        <div className="artist-grid">
          {artists.map((artist) => (
            <article className="artist-card" key={artist.name}>
              <div className="artist-icon">{artist.icon}</div>
              <h2>{artist.name}</h2>
              <h3>{artist.role}</h3>
              <p>{artist.experience}</p>
              <p>{artist.specialty}</p>
              <a href="/booking" className="primary-button">
                Book Now
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Artists;