import {HOME_OPEN_LIST_RES,PAGES_INDEX} from "../../Actions/homeAction";

let ste =[{
    index:"0"
}]
export function getHomeList(state=ste,action) {
    switch (action.type)
    {

        case HOME_OPEN_LIST_RES:
        // eslint-disable-next-line no-lone-blocks
        {
            console.log("数据回来",state)
            return[
                ...state,
                {
                    data:action.data
                }
            ]
        }break;
        // eslint-disable-next-line no-lone-blocks
        case PAGES_INDEX:{
            return [...state,{
                index:action.data
            }]
        }break;

        default :return state
    }
}


