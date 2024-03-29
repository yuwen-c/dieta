import React, { useState, useEffect } from "react";
import Options from "../Options/Options";
import LoadButton from "../LoadButton/LoadButton";
import NextPage from "../../NextPage/NextPage";
import LevelTable from "../LevelTable/LevelTable";
import { useTranslation } from "react-i18next";
import Loader from "../../Loader/Loader";

// onLoadActExe的參數竟然不用在最底層的onClick帶入！！
const Activity = ({
  name,
  onRouteChange,
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
    fetch(`https://yuwen-c.github.io/dieta/activityTableData/${lng}.json`)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [lng]);

  if (data.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="pa3 flex flex-column items-center">
        <legend className="fw7 f4 pv3 tc">{t("activity.title")}</legend>
        <LevelTable data={data} />
        {name !== "Guest" && (
          <LoadButton name="activity" onLoadActExe={onLoadActExe} />
        )}
        {/* 在map裡面如果用optionState加[0]: TypeError: Cannot read property '1' of undefined (OPTIONS) */}
        {/* 在options裡面加index, 與map裡面加index，只能擇一，否則出錯*/}
        <div className="flex flex-wrap">
          {dayArr.map((item, index) => {
            return (
              <Options
                key={item}
                style={{ backgroundColor: "#A463F2" }}
                item={item}
                name={`activity${item}`}
                onActExeAmount={onActExeAmount}
                optionCheckedState={optionCheckedState[index]}
              />
            );
          })}
        </div>
        <NextPage
          // onRouteChange={()=> {onRouteChange('exercise'); onDeleteActExeOption('activity')}}
          onCheckBeforeNextPage={() => {
            onCheckBeforeNextPage("exercise");
          }}
          nextPageMessage={nextPageMessage}
        />
      </div>
    );
  }
};

export default Activity;
