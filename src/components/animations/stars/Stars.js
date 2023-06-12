import "./stars.scss";

const Stars = () => {
  const starCount = 20;
  const starArray = [];
  let index = 0;

  while (index < starCount) {
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const scale = Math.random() * 0.2;
    const rotation = Math.random() * 360;

    const dotStyle = {
      left: posX + "px",
      top: posY + "px",
      transform: `rotate(${rotation}deg) scale(${scale})`,
    };
    starArray.push(
      <div key={index} className="animated-star" style={dotStyle} />
    );
    index++;
  }

  return (
    <div>
      <div>{starArray}</div>
      <div className="animated-dots"/>
    </div>
  );
};

export default Stars;
