import React from "react";
import CalorieDeficit from "../CalorieDeficit/CalorieDeficit";
import NextPage from "../../NextPage/NextPage";
import "./Weight.css";
import { useTranslation } from "react-i18next";

const Weight = ({
  onWeightChange,
  onDeficitChange,
  nextPageMessage,
  onCheckBeforeNextPage,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-column items-center">
      <div id="cardDiv" className="pa3 w5 w-70-ns">
        <article className="ba pv1 br2 b--light-silver bg-white shadow-1">
          <div className="ph3">
            <div className="br2" style={{ backgroundColor: "#96CCFF" }}>
              <h3>{t("weight.start_title")}</h3>
            </div>
            <div className="fw7 f8 pb3">{t("weight.instruction")}</div>
            <div className="measure">
              <label htmlFor="name" className="f6 b db mb2">
                {t("weight.weight")}
                <span className="normal black-60"> kg</span>
              </label>
              <div className="flex flex-wrap">
                <input
                  id="weight"
                  className="input-reset ba b--black-60 pa2 db w3"
                  type="text"
                  aria-describedby="name-desc"
                  onChange={onWeightChange}
                />
              </div>
              <small id="name-desc" className="f6 black-60 db mb2">
                {t("weight.example")}
              </small>
            </div>
          </div>
        </article>
      </div>
      <div id="cardDiv" className="pa3 w5 w-70-ns">
        <article className="ba pv1 br2 b--light-silver bg-white shadow-1">
          <div className="ph3">
            <CalorieDeficit onDeficitChange={onDeficitChange} />
          </div>
        </article>
      </div>
      <NextPage
        className=""
        onCheckBeforeNextPage={() => onCheckBeforeNextPage("weightToActivity")}
        nextPageMessage={nextPageMessage}
      />
    </div>
  );
};

export default Weight;
