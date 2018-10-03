export default function(){
  return {

    workout : [],

    increments(weight, weightCapacity = 2.5) {
      // remainder after getting modulus based on weightCapacity
      let remainder = weight % weightCapacity;
      // setting weight based on if remainder is closer to 0 than 2.5lbs
      if (remainder > 1.25) {
          return weight += remainder;
      } else {
          return weight -= remainder;
      }
  },

  newTrainingMax(lift, repStandard, reps, trnMax) {
      if (lift == "bench" || lift == "ohp") {
          return trnMax = (reps - repStandard) * 2.5 + trnMax;
      }
  },

  trnMaxCalc(max) {
      let trnMax = max * .9;
      return trnMax;
  },

  oneRepMaxCalc(reps, weight) {
      let oneRepMax = (reps * weight * 0.0333) + weight;
      return oneRepMax;
  },

  setCalc(set, weight, reps) {
      return {
          "set": set,
          "weight": weight,
          "reps": reps
      }
  },

  workoutDay(day){
    let workoutType
    if( day === 1 || day % 4 === 1){
        workoutType = "Bench";
        } else if (day === 2 || day % 16 === 2){
        workoutType = "Squats";
        } else if (day === 3 || day % 4 === 3) {
        workoutType = "Deadlift";  
        } else if (day === 4 || day % 4 === 0){
        workoutType = "OHP";
        }
    },

  programDay(day, userMaxes){
    console.log(day);
    if( 0 < day && day < 5){
        return this.accumWkCalc(10, userMaxes)
    } else if(15 < day && day < 20) {
        return this.accumWkCalc(8, userMaxes)
    } else if ( 31 < day && day < 36){
        return this.accumWkCalc(5, userMaxes)
    } else if ( 47 < day && day < 52){
        return this.accumWkCalc(3, userMaxes)
    } else if( 4 < day && day < 9){
          return this.intensWkCalc(10, userMaxes)
      } else if( 19 < day && day < 24) {
          return this.intensWkCalc(8, userMaxes)
      } else if ( 35 < day && day < 40){
          return this.intensWkCalc(5, userMaxes)
      } else if ( 51 < day && day < 56){
          return this.intensWkCalc(3, userMaxes)
      } else if( 8 < day && day < 13){
          return this.realizeWkCalc(10, userMaxes)
      } else if( 23 < day && day < 29) {
          return this.realizeWkCalc(8, userMaxes)
      } else if ( 39 < day && day < 44){
          return this.realizeWkCalc(5, userMaxes)
      } else if ( 55 < day && day < 60){
          return this.realizeWkCalc(3, userMaxes)
      } else if( 12 < day && day < 17){
          return this.deloadWkCalc(10, userMaxes)
      } else if( 28 < day && day < 33) {
          return this.deloadWkCalc(8, userMaxes)
      } else if ( 44 < day && day < 49){
          return this.deloadWkCalc(5, userMaxes)
      } else if ( 60 < day && day < 65){
          return this.deloadWkCalc(3, userMaxes)
      } else {
          console.log("error")
      }
  },

 

  accumWkCalc(wave, trnMax) {
      let weight, trueWeight;
      this.workout = [];
      switch (wave) {
          case 10:
              weight = trnMax * 0.6;
              trueWeight = this.increments(weight);
              console.log(trueWeight);
              for (let i = 1; i < 6; i++) {
                  console.log(this.setCalc)
                  this.workout.push(this.setCalc(i, trueWeight, 10))
              }
                return this.workout
              break;
          case 8:
              weight = trnMax * 0.65;
              trueWeight = this.increments(weight);
              for (let i = 1; i < 6; i++) {
                  this.workout.push(this.setCalc(i, trueWeight, 8))
              }
              console.log(this.workout);
              return this.workout;
              break;
          case 5:
              weight = trnMax * 0.7;
              trueWeight = this.increments(weight);
              for (let i = 1; i < 6; i++) {
                  this.workout.push(this.setCalc(i, trueWeight, 5))
              }
              return this.workout;
              break;
          case 3:
              weight = trnMax * 0.75;
              trueWeight = this.increments(weight);
              for (let i = 1; i < 6; i++) {
                  this.workout.push(this.setCalc(i, trueWeight, 3))
              }
              return this.workout;
              break;

          default:
              break;
      }
  },

  intensWkCalc(wave, trnMax) {
        let weight, trueWeight;
      this.workout= [];
      switch (wave) {
          case 10:
              for (let i = 0; i < 6; i++) {
                  if ( 0 <= i <= 2) {
                      if (i == 0) {
                          weight = trnMax * 0.55
                      } else {
                          weight = trnMax * 0.625
                      }

                      trueWeight = this.increments(weight);
                      this.workout.push(this.setCalc(i, trueWeight, 5))
                  }
                  weight = trnMax * 0.675
                  trueWeight = this.increments(weight);
                  this.workout.push(this.setCalc(i, trueWeight, 10))
                  console.log(this.workout);  
              }
              return this.workout;
              break;
          case 8:
              for (let i = 1; i < 6; i++) {
                  if (i == 1 || i == 2) {
                      if (i == 0) {
                          let weight = trnMax * 0.6
                      } else {
                          let weight = trnMax * 0.675
                      }

                      let trueWeight = this.increments(weight);
                      this.workout.push(this.setCalc(i, trueWeight, 3))
                  }
                  let weight = trnMax * 0.725
                  let trueWeight = this.increments(weight);
                  this.workout.push(this.setCalc(i, trueWeight, 8))
              } 
              return this.workout;
              break;
          case 5:
              for (let i = 1; i < 7; i++) {
                  if (i == 1 || i == 2) {
                      if (i == 0) {
                          let weight = trnMax * 0.65
                      } else {
                          let weight = trnMax * 0.725
                      }

                      let trueWeight = this.increments(weight);
                      this.workout.push(this.setCalc(i, trueWeight, 2))
                  }
                  let weight = trnMax * 0.775
                  let trueWeight = this.increments(weight);
                  this.workout.push(this.setCalc(i, trueWeight, 5))
              }
              break;
          case 3:
              for (let i = 1; i < 8; i++) {
                  if (i == 1 || i == 2) {
                      if (i == 0) {
                         let  weight = trnMax * 0.7
                      } else {
                         let  weight = trnMax * 0.775
                      }

                      let trueWeight = this.increments(weight);
                      this.workout.push(this.setCalc(i, trueWeight, 1))
                  }
                 let  weight = trnMax * 0.825
                  let trueWeight = this.increments(weight);
                  this.workout.push(this.setCalc(i, trueWeight, 3))
              }
              break;

          default:
              console.log("not a wave");
              break;
      }
  },

  realizationMetrics: {
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
  },

  realizeWkCalc(wave, trnMax) {
      switch (wave) {
          case 10:
              for (let i = 0; i < 4; i++) {
                  let perc = this.realizationMetrics.weightPerc[0];
                  let reps = this.realizationMetrics.reps[0];
                  let set = i + 1;
                  let weight = perc[i] * trnMax;
                  let trueWeight = this.increments(weight);
                  this.workout.push(this.setCalc(set, trueWeight, reps[i]))
              }
              break;
          case 8:
              for (let i = 0; i < 5; i++) {
                  let perc = this.realizationMetrics.weightPerc[0];
                  let reps = this.realizationMetrics.reps[0];
                  let set = i + 1;
                  let weight = perc[i] * trnMax;
                  let trueWeight = this.increments(weight);
                  this.workout.push(this.setCalc(set, trueWeight, reps[i]))
              }
              break;
          case 5:
              for (let i = 1; i < 6; i++) {
                  if (i == 1 || i == 2) {
                      if (i == 0) {
                         let  weight = trnMax * 0.65
                      } else {
                         let  weight = trnMax * 0.725
                      }

                      let trueWeight = this.increments(weight);
                      this.workout.push(this.setCalc(i, trueWeight, 2))
                  }
                 let  weight = trnMax * 0.775
                  let trueWeight = this.increments(weight);
                  this.workout.push(this.setCalc(i, trueWeight, 5))
              }
              break;
          case 3:
              for (let i = 0; i < 7; i++) {
                  let perc = this.realizationMetrics.weightPerc[0];
                  let reps = this.realizationMetrics.reps[0];
                  let set = i + 1;
                  let weight = perc[i] * trnMax;
                  let trueWeight = this.increments(weight);
                  this.workout.push(this.setCalc(set, trueWeight, reps[i]))
              }
              break;

          default:
              return console.log("not a wave");
              break;

      }
  },

  deloadMetrics: {
      weightPerc: [0.4, 0.5, 0.6],
      reps: [5]
  },

  deloadWkCalc(wave, trnMax) {
      for (let i = 0; i < 3; i++) {
          let perc = this.deloadMetrics.weightPerc[0];
          let reps = this.deloadMetrics.reps[0];
          let set = i + 1;
          let weight = perc[i] * trnMax;
          let trueWeight = this.increments(weight);
          this.workout.push(this.setCalc(set, trueWeight, reps))
      }
  }
  }
}