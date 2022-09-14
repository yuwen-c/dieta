import React, { Component } from "react";
import NextMove from "../NextMove/NextMove";
import NextPage from "../../NextPage/NextPage";
import RateGuide from "../RateGuide/RateGuide";
import { withTranslation } from "react-i18next";

class RateCalculation extends Component {
  constructor() {
    super();
    this.state = {
      showGuide: false, // show guide card after calculating rate
      weightThisWeek: 0,
      weightLastWeek: 0,
      rate: 0, // % of losing rate
      speed: "", // 'normal', 'fast', 'slow'
      error: "",
    };
  }
  onThisWeekInput = (event) => {
    this.setState({ weightThisWeek: parseFloat(event.target.value) });
  };

  onLastWeekInput = (event) => {
    this.setState({ weightLastWeek: parseFloat(event.target.value) });
  };

  rateCalculation = () => {
    this.setState({ error: "" });
    const { weightThisWeek, weightLastWeek } = this.state;

    if (!isNaN(weightThisWeek) && !isNaN(weightLastWeek)) {
      if (
        weightThisWeek <= 1000 &&
        weightThisWeek >= 40 &&
        weightLastWeek <= 1000 &&
        weightLastWeek >= 40
      ) {
        const rateNum = (weightThisWeek - weightLastWeek) / weightLastWeek;
        let speed =
          rateNum <= -0.005 && rateNum > -0.015 //-0.5% ~ -1.5%
            ? "normal"
            : rateNum <= -0.015 // -1.5% or more
            ? "fast"
            : // - less than 0.5%
              "slow";

        this.setState({
          rate: Math.round((rateNum + Number.EPSILON) * 10000) / 100,
          showGuide: true,
          speed: speed,
        });
        window.scrollTo(0, 300); //scroll page the guide part
      } else {
        const errorMes = this.props.t("button.error_weight");
        this.setState({ error: errorMes });
      }
    } else {
      const errorMes = this.props.t("button.error_weight");
      this.setState({ error: errorMes });
    }
  };

  render() {
    const { showGuide, speed, error, rate } = this.state;
    const { t } = this.props;
    let percentage;
    if (showGuide === true) {
      percentage =
        rate >= 0 ? (
          <p>{t("rate.percentage.gain", { percent: rate })}</p>
        ) : (
          <p>{t("rate.percentage.lose", { percent: rate })}</p>
        );
    }

    return (
      <div className="flex flex-column items-center">
        <div className="w5 w-70-ns">
          <div id="cardDiv" className="pa3 ">
            <article className="ba pv1 br2 b--light-silver bg-white shadow-1">
              <div className="ph3">
                <div className="br2" style={{ backgroundColor: "#96CCFF" }}>
                  <h3>{t("rate.title")}</h3>
                </div>
                <div className="fw7 f8  pb1">{t("rate.calculate")}</div>
                <div className="measure">
                  <label htmlFor="name" className="f6 b db mb2">
                    {t("rate.aveThis")}
                    <span className="normal black-60"> kg</span>
                  </label>
                  <input
                    id="weightThisWeek"
                    className="input-reset ba b--black-60 pa2 mb2 db w3"
                    type="text"
                    aria-describedby="name-desc"
                    onChange={this.onThisWeekInput}
                  />
                </div>
                <div className="measure">
                  <label htmlFor="name" className="f6 b db mb2">
                    {t("rate.aveLast")}
                    <span className="normal black-60"> kg</span>
                  </label>
                  <input
                    id="weightLastWeek"
                    className="input-reset ba b--black-60 pa2 mb2 db w3"
                    type="text"
                    aria-describedby="name-desc"
                    onChange={this.onLastWeekInput}
                  />
                </div>

                <div className="pb3 flex flex-wrap">
                  <input
                    className="ph3 pv2 input-reset ba b--black bg-white grow pointer b f6 dib"
                    type="submit"
                    value={t("rate.submit")}
                    onClick={this.rateCalculation}
                  />
                  <span className="f5 link dark-pink dib ml2 pt3">{error}</span>
                </div>
                {percentage}
              </div>
            </article>
          </div>
          <RateGuide showGuide={showGuide} speed={speed} />
        </div>
        <div id="cardDiv" className="pa3 w5 w-70-ns">
          <article className="ba pv1 br2 b--light-silver bg-white shadow-1">
            <div className="ph3">
              <NextMove
                maintainRate={this.props.maintainRate}
                deficit={this.props.deficit}
                onModifySpeed={this.props.onModifySpeed}
                modifySpeedUp={this.props.modifySpeedUp}
                modifySlowDown={this.props.modifySlowDown}
                onModifyDeficit={this.props.onModifyDeficit}
              />
            </div>
          </article>
        </div>
        <NextPage
          nextPageMessage={this.props.nextPageMessage}
          onCheckBeforeNextPage={() => {
            this.props.onCheckBeforeNextPage("RateCalToActivity");
          }}
        />
      </div>
    );
  }
}

// export default RateCalculation;
export default withTranslation()(RateCalculation);
