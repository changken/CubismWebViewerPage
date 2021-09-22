document.querySelector('.reveal').addEventListener('change', e => {
  let val = parseFloat(e.target.value);
  let id = e.target.id;
  runModel(view => {
    //先傳到lapp delegate的view的參數
    //綁定參數
    if (id === 'ParamAngleX') view.angleX = val;
    if (id === 'ParamAngleY') view.angleY = val;
    if (id === 'ParamAngleZ') view.angleZ = val;
    if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
    if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
    if (id === 'ParamEyeROpen') view.eyeROpen = val;
    if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
    if (id === 'ParamEyeBallX') view.eyeBallX = val;
    if (id === 'ParamEyeBallY') view.eyeBallY = val;
    view.eyeBallForm = 0;
    if (id === 'ParamBrowLY') view.browLY = val;
    if (id === 'ParamBrowRY') view.browRY = val;
    if (id === 'ParamBrowLX') view.browLX = val;
    if (id === 'ParamBrowRX') view.browRX = val;
    if (id === 'ParamBrowLAngle') view.browLAngle = val;
    if (id === 'ParamBrowRAngle') view.browRAngle = val;
    if (id === 'ParamBrowLForm') view.browLForm = val;
    if (id === 'ParamBrowRForm') view.browRForm = val;
    //mouth form
    // view.mouthForm = rangeValueMouthForm / 100;
    if (id === 'ParamMouthForm') view.mouthForm = val;
    //mouth openY
    //view.mouthOpenY = rangeValueMouthY / 100;
    if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
    if (id === 'ParamCheek') view.cheek = val;
    if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
    if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
    if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
    if (id === 'ParamBreath') view.breath = val;
    view.armLA = 0;
    view.armRA = 0;
    view.armLB = 0;
    view.armRB = 0;
    view.handL = 0;
    view.handR = 0;
    if (id === 'ParamHairFront') view.hairFront = val;
    view.hairSide = 0;
    if (id === 'ParamHairBack') view.hairBack = val;
    view.hairFluffy = 0;
    view.shoulderY = 0;
    view.bustX = 0;
    view.bustY = 0;
    view.baseX = 0;
    view.baseY = 0;
  });
});
