import { RootState } from "../store";

export const selectorUseCasePoint = (state: RootState) =>
  state.user.rootUseCasePoint.UseCasePoint;

export const selectorEcf = (state: RootState) =>
  state.user.rootUseCasePoint.UseCasePoint.ecf;

export const selectorTcf = (state: RootState) =>
  state.user.rootUseCasePoint.UseCasePoint.tcf;

  export const selectorUcp = (state: RootState) => state.user.rootUseCasePoint.UseCasePoint.ucp;

export const selectorUaw = (state: RootState) =>
  state.user.rootUseCasePoint.UseCasePoint.uaw;

export const selectorUucp = (state: RootState) =>
  state.user.rootUseCasePoint.UseCasePoint.uucp;

export const selectorUid = (state: RootState) =>
  state.user.rootUseCasePoint.UseCasePoint.uid;

export const selectorPid = (state: RootState) =>
  state.user.rootUseCasePoint.UseCasePoint.pid;
// -----------------------current selector 
  export const selectorCurrentEcf = (state: RootState) =>
  state.user.rootUseCasePoint.CurentNumber.ecf;

export const selectorCurrentTcf = (state: RootState) =>
  state.user.rootUseCasePoint.CurentNumber.tcf;

  export const selectorCurrentUcp = (state: RootState) => state.user.rootUseCasePoint.UseCasePoint.ucp;

export const selectorCurrentUaw = (state: RootState) =>
  state.user.rootUseCasePoint.CurentNumber.uaw;

export const selectorCurrentUucp = (state: RootState) =>
  state.user.rootUseCasePoint.CurentNumber.uucp;



