import React, { useEffect, useState } from "react";
import Options from "../Options/Options";
import LoadButton from "../LoadButton/LoadButton";
import NextPage from "../../NextPage/NextPage";
import LevelTable from "../LevelTable/LevelTable";
import { useTranslation } from "react-i18next";
import Loader from "../../Loader/Loader";

const Exercise = ({
  name,
  onRouteChange,
  calculateNutrition,
  onActExeAmount,
  onLoadActExe,
  optionCheckedState,
  onCheckBeforeNextPage,
  nextPageMessage,
}) => {
  const dayArr = ["1", "2", "3", "4", "5", "6", "7"];
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  const lng = i18n.language.includes("zh")
    ? "zh"
    : i18n.language.includes("en")
    ? "en"
    : "en";

  useEffect(() => {
    fetch(`https://yuwen-c.github.io/dieta/exerciseTableData/${lng}.json`)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [lng]);

  if (data.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="pa3 flex flex-column items-center">
        <legend className="fw7 f4 pv3 tc">{t("exercise.title")}</legend>
        <LevelTable data={data} />
        {name !== "Guest" && (
          <LoadButton name="exercise" onLoadActExe={onLoadActExe} />
        )}
        <div className="flex flex-wrap">
          {dayArr.map((item, index) => {
            return (
              <Options
                key={item}
                style={{ backgroundColor: "#96CCFF" }}
                item={item}
                name={`exercise${item}`}
                onActExeAmount={onActExeAmount}
                optionCheckedState={optionCheckedState[index]}
              />
            );
          })}
        </div>
        <NextPage
          // call two functions in onClick
          // onRouteChange={()=> {onRouteChange('result'); onDeleteActExeOption('exercise'); calculateNutrition()} }
          nextPageMessage={nextPageMessage}
          onCheckBeforeNextPage={() => {
            onCheckBeforeNextPage("result");
          }}
        />
      </div>
    );
  }
};

export default Exercise;
