import Card from "./Card";
import Link from "next/link";

const Section = ({ genre, videos }) => {
  return (
    <div className="section">
      <h3>{genre}</h3>
      <div className="video-feed">
        {videos.map((video) => {
          return (
            <Link key={video.id} href={`/video/${video.slug}`}>
              <Card thumbnail={video.thumbnail} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
