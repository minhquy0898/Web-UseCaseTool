import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";
import { IUseCasePointsECF, UseCasePointsECF } from "./model/UseCasePointsECF";

import { IUseCasePointsTCF , UseCasePointsTCF } from "./model/UseCasePointsTCF";
import {
  IUseCasePointsUUCP,
  UseCasePointsUUCP,
} from "./model/UseCasePointsUUCP";
import { IUseCasePointsUAW, UseCasePointsUAW } from "./model/UseCasePointsUAW";
import { UseCasePoint } from "./model/UseCasePoint";

const uucp: UseCasePointsUUCP = {
  average: 0,
  complex: 0,
  simple: 0,
  uucp: 0,
 
};
const tcf: UseCasePointsTCF = {
  t1: 0,
  t2: 0,
  t3: 0,
  t4: 0,
  t5: 0,
  t6: 0,
  t7: 0,
  t8: 0,
  t9: 0,
  t10: 0,
  t11: 0,
  t12: 0,
  t13: 0,
  tcf: 0,
  tf:0,
};

const ecf: IUseCasePointsECF = {
  e1: 0,
  e2: 0,
  e3: 0,
  e4: 0,
  e5: 0,
  e6: 0,
  e7: 0,
  e8: 0,
  ecf: 0,
  ef: 0,
}

const uaw: UseCasePointsUAW = {
  average: 0,
  complex: 0,
  simple: 0,
  uaw: 0,

}

export const initState = {
  UseCasePoint: new UseCasePoint({
    ecf: ecf,
    tcf: tcf,
    uaw: uaw,
    uucp: uucp,
    ucp: 0,
    uid: "",
    pid: "",
  }),
  Loading: false,
  Error: null,
  CurentNumber:{
    ecf: ecf,
    tcf: tcf,
    uaw: uaw,
    uucp: uucp,
  }
};

export const useCasePointSlice = createSlice({
  name: "useCasePoint",
  initialState: JSON.parse(JSON.stringify(initState)),
  reducers: {
    USECASEPOINT__INIT:(state, action)=>{
        state.UseCasePoint.ecf = ecf;
        state.UseCasePoint.tcf = tcf;
        state.UseCasePoint.uaw = uaw;
        state.UseCasePoint.uucp = uucp;
        state.UseCasePoint.ucp = 0;
        state.UseCasePoint.uid = "";
        state.UseCasePoint.pid = "";
        state.Loading = false;
        state.Error = null;  
    },
    USECASEPOINT__SUCCESS: (state, action) => {
      const { ecf, tcf, uaw, uucp, ucp, uid, pid } = action.payload;
      state.UseCasePoint.ecf = ecf;
      state.UseCasePoint.tcf = tcf;
      state.UseCasePoint.uaw = uaw;
      state.UseCasePoint.ucp = uucp;
      state.UseCasePoint.ucp = ucp;
      state.UseCasePoint.uid = uid;
      state.UseCasePoint.pid = pid;
      state.Loading = false;
      state.Error = null;
    },
    USECASEPOINT__FETCH: (state, action) => {
      state.Loading = true;
      state.Error = null;
    },
    USECASEPOINT__ERROR: (state, action) => {
      state.Error = action.payload;
      state.Loading = false;
    },
    // ----------------------ECF------------------
    USECASEPOINT__ECF__SUCCESS: (state, action) => {
      const { ecf } = action.payload;
      state.UseCasePoint.ecf = ecf;
      
    },
    USECASEPOINT__ECF__FETCH: (state, action) => {
      state.Loading = true;
      state.Error = null;
    },
    // ----------------------TCF------------------
    USECASEPOINT__TCF__SUCCESS: (state, action) => {
        const { tcf } = action.payload;
        state.UseCasePoint.tcf = tcf;
      },
      USECASEPOINT__TCF__FETCH: (state, action) => {
        state.Loading = true;
        state.Error = null;
      },
       // ----------------------UAW------------------
      USECASEPOINT__UAW__SUCCESS: (state, action) => {
        const { uaw } = action.payload;
        state.UseCasePoint.uaw = uaw;
      },
      USECASEPOINT__UAW__FETCH: (state, action) => {
        state.Loading = true;
        state.Error = null;
      },
       // ----------------------UAW------------------
       USECASEPOINT__UUCP__SUCCESS: (state, action) => {
        const { uucp } = action.payload;
        state.UseCasePoint.uucp = uucp;
      },
      USECASEPOINT__UUCP__FETCH: (state, action) => {
        state.Loading = true;
        state.Error = null;
      },

      // ----------------------UCP------------------
      USECASEPOINT__UCP__SUCCESS: (state, action) => {
        const { ucp } = action.payload;
        state.UseCasePoint.ucp = ucp;
      },
      USECASEPOINT__UCP__FETCH: (state, action) => {
        state.Loading = true;
        state.Error = null;
      },

      // ----------------------INFOMATION------------------
      USECASEPOINT__INFO__SUCCESS: (state, action) => {
        const { uid,Pid } = action.payload;
        state.UseCasePoint.uid  = uid;
        state.UseCasePoint.pid = Pid;
      },
      USECASEPOINT__INFO__FETCH: (state, action) => {
        state.Loading = true;
        state.Error = null;
      },

      // Current Number ----------------------------------
      // ----------------------ECF------------------
    USECASEPOINT__CURRENT__ECF__SUCCESS: (state, action) => {
      const { ecf } = action.payload;
      state.CurentNumber.ecf = ecf;
      
    },
    
    // ----------------------TCF------------------
    USECASEPOINT__CURRENT__TCF__SUCCESS: (state, action) => {
        const { tcf } = action.payload;
        state.CurentNumber.tcf = tcf;
      },
      
       // ----------------------UAW------------------
      USECASEPOINT__CURRENT__UAW__SUCCESS: (state, action) => {
        const { uaw } = action.payload;
        state.CurentNumber.uaw = uaw;
      },
      
       // ----------------------UUCP------------------
       USECASEPOINT__CURRENT__UUCP__SUCCESS: (state, action) => {
        const { uucp } = action.payload;
        state.CurentNumber.uucp = uucp;
      },
     

      // ----------------------UCP------------------
      USECASEPOINT__CURRENT__UCP__SUCCESS: (state, action) => {
        const { ucp } = action.payload;
        state.CurentNumber.ucp = ucp;
      },
     
  },
});




