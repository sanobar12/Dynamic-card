import { Button } from "./button";
export const MainCard = (props) => {
  const {
    imgUrl,
    mainHead,
    mainText,
    textColor,
    btText,
    btnColor,
    bgColor,
    customClasss,
    width
  } = props;
  return (
    <div className="card">
      <div className="b-img">
        <img className="card-img-top" src={imgUrl} alt="image" style={{width: width, height: "100px" }} />
        <div className="card-body">
          <h5 className="card-title mt-50">{mainHead}</h5>
          <p className={`card-text ${textColor}`} >
            {mainText}
          </p>
          <Button
            className={customClasss}
            fontSize="14px"
            btnText={btText}
            bgColor={bgColor}
            clr={btnColor}
          />
        </div>
      </div>
    </div>
  );
};
