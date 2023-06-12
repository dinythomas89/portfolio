import "./logo.scss"

const Logo = () => {
  return (
    <div className="logo">
        <div className="image-wrapper">
          <img
            className="angle-bracket"
            src="https://img.icons8.com/metro/26/more-than.png"
            alt="more-than"
          />
          <div className="line-wrapper">
            <img
              className="line"
              src="https://img.icons8.com/ios-glyphs/30/horizontal-line.png"
              alt="horizontal-line"
            />
          </div>
        </div>
        <div className="text">DT</div>
      </div>
  )
}

export default Logo