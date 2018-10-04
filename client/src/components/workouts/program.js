import React, { Component } from "react";
import { connect } from "react-redux";
// increments setting for weights of workouts based on what is in gym

class Program extends Component {
  workout = [];

  increments(weight, weightCapacity = 2.5) {
    // remainder after getting modulus based on weightCapacity
    let remainder = weight % weightCapacity;

    // setting weight based on if remainder is closer to 0 than 2.5lbs
    if (remainder > 1.25) {
      return (weight += remainder);
    } else {
      return (weight -= remainder);
    }
  }

  newTrainingMax(lift, repStandard, reps, trnMax) {
    if (lift == "bench" || lift == "ohp") {
      return (trnMax = (reps - repStandard) * 2.5 + trnMax);
    }
  }

  trnMaxCalc(max) {
    let trnMax = max * 0.9;
    return trnMax;
  }

  oneRepMaxCalc(reps, weight) {
    let oneRepMax = reps * weight * 0.0333 + weight;
    return oneRepMax;
  }

  setCalc(set, weight, reps) {
    return {
      set: set,
      weight: weight,
      reps: reps
    };
  }

  programDay(day) {
    if (day == 1 || day % 4 == 1) {
      if (0 < day < 5) {
        this.accumWkCalc(10, this.props.userMaxes);
      } else if (15 < day < 20) {
        this.accumWkCalc(8, this.props.userMaxes);
      } else if (31 < day < 36) {
        this.accumWkCalc(5, this.props.userMaxes);
      } else if (47 < day < 52) {
        this.accumWkCalc(3, this.props.userMaxes);
      } else {
        console.log("error");
      }
    } else if (day == 2 || day % 4 == 2) {
      if (4 < day < 9) {
        this.intensWkCalc(10, this.props.userMaxes);
      } else if (19 < day < 24) {
        this.intensWkCalc(8, this.props.userMaxes);
      } else if (35 < day < 40) {
        this.intensWkCalc(5, this.props.userMaxes);
      } else if (51 < day < 56) {
        this.intensWkCalc(3, this.props.userMaxes);
      } else {
        console.log("error");
      }
    } else if (day == 3 || day % 4 == 3) {
      if (8 < day < 13) {
        this.realizeWkCalc(10, this.props.userMaxes);
      } else if (23 < day < 29) {
        this.realizeWkCalc(8, this.props.userMaxes);
      } else if (39 < day < 44) {
        this.realizeWkCalc(5, this.props.userMaxes);
      } else if (55 < day < 60) {
        this.realizeWkCalc(3, this.props.userMaxes);
      } else {
        console.log("error");
      }
    } else if (day == 4 || day % 4 == 0) {
      if (12 < day < 17) {
        this.deloadWkCalc(10, this.props.userMaxes);
      } else if (28 < day < 33) {
        this.deloadWkCalc(8, this.props.userMaxes);
      } else if (44 < day < 49) {
        this.deloadWkCalc(5, this.props.userMaxes);
      } else if (60 < day < 65) {
        this.deloadWkCalc(3, this.props.userMaxes);
      } else {
        console.log("error");
      }
    } else {
      console.log("error");
    }
  }

  accumWkCalc(wave, trnMax) {
    let weight, trueWeight;
    switch (wave) {
      case 10:
        weight = trnMax * 0.6;
        trueWeight = this.increments(weight);
        for (let i = 1; i < 6; i++) {
          this.workout.push(this.setCalc(i, trueWeight, 10));
        }
        return this.workout;
        break;
      case 8:
        weight = trnMax * 0.65;
        trueWeight = this.increments(weight);
        for (let i = 1; i < 6; i++) {
          this.workout.push(this.setCalc(i, trueWeight, 8));
        }
        return this.workout;
        break;
      case 5:
        weight = trnMax * 0.7;
        trueWeight = this.increments(weight);
        for (let i = 1; i < 6; i++) {
          this.workout.push(this.setCalc(i, trueWeight, 5));
        }
        return this.workout;
        break;
      case 3:
        weight = trnMax * 0.75;
        trueWeight = this.increments(weight);
        for (let i = 1; i < 6; i++) {
          this.workout.push(this.setCalc(i, trueWeight, 3));
        }
        return this.workout;
        break;

      default:
        break;
    }
  }

  intensWkCalc(wave, trnMax) {
    switch (wave) {
      case 10:
        for (let i = 1; i < 6; i++) {
          if (i == 1 || i == 2) {
            if (i == 0) {
              let weight = trnMax * 0.55;
            } else {
              let weight = trnMax * 0.625;
            }

            let trueWeight = this.increments(weight);
            this.workout.push(this.setCalc(i, trueWeight, 5));
          }
          let weight = trnMax * 0.675;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(i, trueWeight, 10));
        }
        break;
      case 8:
        for (let i = 1; i < 6; i++) {
          if (i == 1 || i == 2) {
            if (i == 0) {
              let weight = trnMax * 0.6;
            } else {
              let weight = trnMax * 0.675;
            }

            let trueWeight = this.increments(weight);
            this.workout.push(this.setCalc(i, trueWeight, 3));
          }
          let weight = trnMax * 0.725;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(i, trueWeight, 8));
        }
        break;
      case 5:
        for (let i = 1; i < 7; i++) {
          if (i == 1 || i == 2) {
            if (i == 0) {
              let weight = trnMax * 0.65;
            } else {
              let weight = trnMax * 0.725;
            }

            let trueWeight = this.increments(weight);
            this.workout.push(this.setCalc(i, trueWeight, 2));
          }
          let weight = trnMax * 0.775;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(i, trueWeight, 5));
        }
        break;
      case 3:
        for (let i = 1; i < 8; i++) {
          if (i == 1 || i == 2) {
            if (i == 0) {
              let weight = trnMax * 0.7;
            } else {
              let weight = trnMax * 0.775;
            }

            let trueWeight = this.increments(weight);
            this.workout.push(this.setCalc(i, trueWeight, 1));
          }
          let weight = trnMax * 0.825;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(i, trueWeight, 3));
        }
        break;

      default:
        console.log("not a wave");
        break;
    }
  }

  realizationMetrics = {
    weightPerc: [
      [0.5, 0.6, 0.7, 0.75],
      [0.5, 0.6, 0.7, 0.75, 0.8],
      [0.5, 0.6, 0.7, 0.75, 0.8, 0.85],
      [0.5, 0.6, 0.7, 0.75, 0.8, 0.9]
    ],
    reps: [
      [5, 3, 1, "AMRAP"],
      [5, 3, 2, 1, "AMRAP"],
      [5, 3, 2, 1, 1, "AMRAP"],
      [5, 3, 2, 1, 1, 1, "AMRAP"]
    ]
  };

  realizeWkCalc(wave, trnMax) {
    switch (wave) {
      case 10:
        for (let i = 0; i < 4; i++) {
          let perc = this.realizationMetrics.weightPerc[0];
          let reps = this.realizationMetrics.reps[0];
          let set = i + 1;
          let weight = perc[i] * trnMax;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(set, trueWeight, reps[i]));
        }
        break;
      case 8:
        for (let i = 0; i < 5; i++) {
          let perc = this.realizationMetrics.weightPerc[0];
          let reps = this.realizationMetrics.reps[0];
          let set = i + 1;
          let weight = perc[i] * trnMax;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(set, trueWeight, reps[i]));
        }
        break;
      case 5:
        for (let i = 1; i < 6; i++) {
          if (i == 1 || i == 2) {
            if (i == 0) {
              let weight = trnMax * 0.65;
            } else {
              let weight = trnMax * 0.725;
            }

            let trueWeight = this.increments(weight);
            this.workout.push(this.setCalc(i, trueWeight, 2));
          }
          let weight = trnMax * 0.775;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(i, trueWeight, 5));
        }
        break;
      case 3:
        for (let i = 0; i < 7; i++) {
          let perc = this.realizationMetrics.weightPerc[0];
          let reps = this.realizationMetrics.reps[0];
          let set = i + 1;
          let weight = perc[i] * trnMax;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(set, trueWeight, reps[i]));
        }
        break;

      default:
        return console.log("not a wave");
        break;
    }
  }

  deloadMetrics = {
    weightPerc: [0.4, 0.5, 0.6],
    reps: [5]
  };

  deloadWkCalc(wave, trnMax) {
    for (let i = 0; i < 3; i++) {
      let perc = this.deloadMetrics.weightPerc[0];
      let reps = this.deloadMetrics.reps[0];
      let set = i + 1;
      let weight = perc[i] * trnMax;
      let trueWeight = this.increments(weight);
      this.workout.push(this.setCalc(set, trueWeight, reps));
    }
  }
}

function mapStateToProps({ userMaxes }) {
  return { userMaxes };
}

export default connect(
  mapStateToProps,
  null
)(Program);
