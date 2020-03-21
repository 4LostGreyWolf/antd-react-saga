/**author:lijiamiao
 * createdOn:2017-08-30
 * 添加风格
 * */

//添加风格
// selectstyle,
// showStyleReducer,
import { createSelector } from 'reselect';

const getSelectstyle = (state: { getHomeList: any; }) => state.getHomeList;
const getSelectstyless = (state: { getHomedata: any; }) => state.getHomedata;

export const getSelectstyleData = createSelector(
  [  getSelectstyle,getSelectstyless],
    //reducer里组件对应的方法
    (getHomeList,getHomedata) => {

        return {
            getHomeList,getHomedata
        }
    }
);
