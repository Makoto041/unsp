import { useState, useEffect } from "react";
const Title = () => {
  const images = [
    "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&q=80&w=1920",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&q=80&w=1920",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&q=80&w=1920",
    "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&q=80&w=1920",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&q=80&w=1920",
    "https://images.unsplash.com/photo-1468814213359-09c0e70107f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&q=80&w=1920",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    // 5秒ごとに次の画像に切り替える
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval); // クリーンアップ
  }, [images.length]);

  return (
    <div
      className="title-header"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <h1 className="title-heading">Image Search App</h1>
      <p className="title-description">
        Images Courtesy of <a href="https://unsplash.com/">Unsplash</a>
      </p>
    </div>
  );
};

export default Title;
