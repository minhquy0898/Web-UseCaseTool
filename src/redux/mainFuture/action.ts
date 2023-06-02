import { createAction } from "@reduxjs/toolkit";
import { useCasePointSlice } from "./reducer";
import { IUseCasePoint } from "./model/UseCasePoint";
import { IUseCasePointsECF } from "./model/UseCasePointsECF";
import { IUseCasePointsTCF } from "./model/UseCasePointsTCF";
import { IUseCasePointsUAW } from "./model/UseCasePointsUAW";
import { IUseCasePointsUUCP } from "./model/UseCasePointsUUCP";

//----------------------INIT state------------------------
export const _useCasePoint__Init = createAction(useCasePointSlice.actions.USECASEPOINT__INIT.type, (payload: any) => {
    return {
        payload
    };
});

//---------------------- useCasePoint
export const _useCasePointFetch = createAction(useCasePointSlice.actions.USECASEPOINT__FETCH.type, (payload: IUseCasePoint) => {
    return {
        payload
    };
});

export const _useCasePointSuccess = createAction(useCasePointSlice.actions.USECASEPOINT__ECF__SUCCESS.type, (payload: IUseCasePoint) => {
    return {
        payload
    };
});

export const _useCasePointError = createAction(useCasePointSlice.actions.USECASEPOINT__ERROR.type, (payload: any) => {
    return {
        payload
    };
});
//---------------------- ECF
export const _useCasePointEcfFectch = createAction(useCasePointSlice.actions.USECASEPOINT__ECF__FETCH.type, (payload: IUseCasePointsECF) => {
    return {
        payload
    };
});

export const _useCasePointEcfSuccess = createAction(useCasePointSlice.actions.USECASEPOINT__ECF__SUCCESS.type, (payload: {ecf:IUseCasePointsECF}) => {
    return {
        payload
    };
});

//---------------------- ECF
export const _useCasePointTcfFectch = createAction(useCasePointSlice.actions.USECASEPOINT__TCF__FETCH.type, (payload: IUseCasePointsTCF) => {
    return {
        payload
    };
});

export const _useCasePointTcfSuccess = createAction(useCasePointSlice.actions.USECASEPOINT__TCF__SUCCESS.type, (payload:{tcf: IUseCasePointsTCF}) => {
    return {
        payload
    };
});
//---------------------- UAW
export const _useCasePointUawFectch = createAction(useCasePointSlice.actions.USECASEPOINT__UAW__FETCH.type, (payload: IUseCasePointsUAW) => {
    return {
        payload
    };
});

export const _useCasePointUawSuccess = createAction(useCasePointSlice.actions.USECASEPOINT__UAW__SUCCESS.type, (payload:{uaw: IUseCasePointsUAW}) => {
    return {
        payload
    };
});

//---------------------- UUCP
export const _useCasePointUucpFectch = createAction(useCasePointSlice.actions.USECASEPOINT__UUCP__FETCH.type, (payload: IUseCasePointsUUCP) => {
    return {
        payload
    };
});


export const _useCasePointUucpSuccess = createAction(useCasePointSlice.actions.USECASEPOINT__UUCP__SUCCESS.type, (payload: {uucp:IUseCasePointsUUCP}) => {
    return {
        payload
    };
});


export const _useCasePointCurrentUucpSuccess = useCasePointSlice.actions.USECASEPOINT__CURRENT__UUCP__SUCCESS;
export const _useCasePointCurrentUawSuccess = useCasePointSlice.actions.USECASEPOINT__CURRENT__UAW__SUCCESS;
export const _useCasePointCurrentTcfSuccess = useCasePointSlice.actions.USECASEPOINT__CURRENT__TCF__SUCCESS;
export const _useCasePointCurrentEcfSuccess = useCasePointSlice.actions.USECASEPOINT__CURRENT__ECF__SUCCESS;