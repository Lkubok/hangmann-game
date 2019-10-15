import React, { Component } from "react";
import Highcharts, { map } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import Loading from "../EditQuote/Loading";
import { connect } from "react-redux";
import { setRequesting } from "../../actions/appActions";
import "./Stats.scss";

const { REACT_APP_API_HOST } = process.env;
const connectionOptions = {
  method: "GET",
  url: REACT_APP_API_HOST + `/stats`
};

export class Stats extends Component {
  state = {
    chartOptions: {
      chart: {
        type: "column",
        backgroundColor: "#1f2227"
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 550
            },
            chartOptions: {
              chart: {
                width: 350
              }
            }
          }
        ]
      },
      yAxis: {
        gridLineColor: "#6dba0a",
        title: {
          text: ""
        }
      },
      xAxis: {
        lineColor: "#6dba0a"
      },
      colorAxis: {
        gridLineColor: "green"
      },
      legend: {
        itemStyle: {
          color: "white"
        }
      },
      column: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0
      },
      title: {
        text: "Number of played games",
        style: {
          color: "#6dba0a"
        }
      },
      series: []
    },
    data: {
      quickestGame: {
        player: "",
        stateOfGame: "",
        lifes: "",
        gameTime: "",
        difficulty: "easy"
      },
      quickestWinGames: [],
      langs: []
    }
  };
  componentDidMount() {
    const { setRequesting } = this.props;
    setRequesting(true);
    axios({ ...connectionOptions })
      .then(response => {
        this.setState(prevState => {
          return {
            chartOptions: {
              ...prevState.chartOptions,
              series: [
                {
                  name: "Games in General",
                  data: [
                    ...response.data.games
                      .toString()
                      .split(" ")
                      .map(el => parseInt(el))
                  ],
                  color: "#3c434f",
                  borderColor: "#6dba0a"
                },
                {
                  name: "Win Games",
                  data: [
                    ...response.data.winGames
                      .toString()
                      .split(" ")
                      .map(el => parseInt(el))
                  ],
                  color: "#6dba0a",
                  borderColor: "#3c434f"
                },
                {
                  name: "Dead Games",
                  data: [
                    ...response.data.deadGames
                      .toString()
                      .split(" ")
                      .map(el => parseInt(el))
                  ],
                  color: "#bd1600",
                  borderColor: "#6dba0a"
                }
              ]
            }
          };
        });
        setRequesting(false);
        this.setState({ data: response.data });
      })
      .catch(error => {
        alert(error);
      });
  }
  renderQuickestGames = quickestWinGames => {
    return quickestWinGames.map((el, index) => (
      <div className="single-stat" key={index}>
        <h4>{index + 1} place :</h4>
        <p className="stat-item"> Player: </p>
        <p className="stat-item-subitem"> {el.player} </p>

        <p className="stat-item"> Game lang: </p>
        <p className="stat-item-subitem"> {el.lang} </p>

        <p className="stat-item"> Time: </p>
        <p className="stat-item-subitem"> {el.gameTime / 1000 + "s"} </p>

        <p className="stat-item"> Diffculty: </p>
        <p className="stat-item-subitem"> {el.difficulty} </p>

        <p className="stat-item"> Lifes left: </p>
        <p className="stat-item-subitem"> {el.lifes} </p>
      </div>
    ));
  };
  render() {
    console.log(this.state.data);
    const { isRequesting } = this.props;
    const {
      quotesCount,
      quickestGame: { player, stateOfGame, gameTime, lifes },
      quickestWinGames,
      langs,
      games,
      winGames,
      deadGames
    } = this.state.data;
    return isRequesting ? (
      <Loading />
    ) : (
      <div className="chart-wrapper">
        <div className="chart-item-chart">
          <HighchartsReact
            highcharts={Highcharts}
            options={this.state.chartOptions}
          />
        </div>
        <div className="chart-item">
          <div className="stat-box">
            <div className="stat-section">
              <div className="box-item">
                <h3 className="stat-header"> Quotes in database </h3>
                <p className="stat-item-center"> {quotesCount} </p>
              </div>
              <div className="box-item">
                <h3 className="stat-header"> Quickest game by: </h3>
                <div className="single-stat">
                  <p className="stat-item"> Player: </p>
                  <p className="stat-item-subitem"> {player} </p>

                  <p className="stat-item"> Game Result: </p>
                  <p className="stat-item-subitem"> {stateOfGame} </p>

                  <p className="stat-item"> Time: </p>
                  <p className="stat-item-subitem"> {gameTime / 1000 + "s"} </p>

                  <p className="stat-item"> Lifes left: </p>
                  <p className="stat-item-subitem"> {lifes} </p>
                </div>
              </div>

              <div className="box-item">
                <h3 className="stat-header"> Langs avaliable </h3>
                <p className="stat-item-center"> {langs.join(", ")} </p>
              </div>

              <div className="box-item">
                <h3 className="stat-header"> Games played </h3>
                <p className="stat-item-center"> {games} </p>
              </div>

              <div className="box-item">
                <h3 className="stat-header"> Games won </h3>
                <p className="stat-item-center"> {winGames} </p>
              </div>
              <div className="box-item">
                <h3 className="stat-header"> Games defeated </h3>
                <p className="stat-item-center"> {deadGames} </p>
              </div>
            </div>

            <div className="stat-section">
              <div className="box-item">
                <h2>Best scores</h2>
                {quickestWinGames.length > 0
                  ? this.renderQuickestGames(quickestWinGames)
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isRequesting: state.appParamsReducer.isRequesting
});

const mapDispatchToProps = dispatch => ({
  setRequesting: arg => dispatch(setRequesting(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
