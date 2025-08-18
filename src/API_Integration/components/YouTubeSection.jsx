import React, { useState, useEffect } from 'react';
import './YouTubeSection.css';

const YouTubeSection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Replace with your actual API key
        const API_KEY = 'YOUR_YOUTUBE_API_KEY';
        const channelId = 'UCE_M8A5yxnLfW0KghEeajjw'; // Apple's YouTube channel ID
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        
        const data = await response.json();
        setVideos(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div className="youtube-loading">Loading Apple videos...</div>;
  if (error) return <div className="youtube-error">Error: {error}</div>;

  return (
    <section className="youtube-section">
      <h2 className="section-title">Latest from Apple</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
              <h3 className="video-title">{video.snippet.title}</h3>
              <p className="video-date">
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTubeSection;