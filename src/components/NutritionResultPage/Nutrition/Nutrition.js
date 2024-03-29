import React from "react";
import Distribution from "../Distribution/Distribution";
import { useTranslation } from "react-i18next";

const Nutrition = ({
  name,
  onRouteChange,
  deficit,
  protein,
  oil,
  activity,
  exercise,
  dailyCalorie,
  dailyCarbon,
}) => {
  const dayArr = ["1", "2", "3", "4", "5", "6", "7"];
  const { t } = useTranslation();

  // if it's a guest user, ask if he/she wants to sign up?

  const button = (
    <div className="pv3">
      <input
        className="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib"
        type="submit"
        value={
          name === "Guest"
            ? t("nutrition.buttonGuest")
            : t("nutrition.buttonSignOut")
        }
        onClick={() => {
          onRouteChange(name === "Guest" ? "signup" : "signout");
        }}
      />
    </div>
  );

  // check if any carbon < 0
  const checkCarbon =
    dailyCarbon.filter((item) => item < 0).length === 0 ? (
      // all carbon > 0, show normal title.
      <legend className="fw7 f4 pv2 tc">
        {t("nutrition.title", { name: name })}
      </legend>
    ) : (
      // yes < 0, show warning.
      <legend className="fw7 f4 pv2 tc red">
        {t("nutrition.warning", { name: name })}
      </legend>
    );

  return (
    <div className="pa3 flex flex-column items-center">
      {checkCarbon}
      <div className="b">
        {t("nutrition.deficit")} : {deficit} Kcal
      </div>
      <div className="flex flex-wrap">
        {dayArr.map((item) => {
          return (
            <Distribution
              key={item}
              item={item}
              protein={protein}
              oil={oil}
              activity={activity}
              exercise={exercise}
              dailyCalorie={dailyCalorie}
              dailyCarbon={dailyCarbon}
            />
          );
        })}
      </div>
      {button}
    </div>
  );
};

export default Nutrition;
