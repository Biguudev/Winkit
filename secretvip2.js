/******************************
[rewrite_local]
# > Wink Vip BiguuDev
^https?:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json url script-response-body
[mitm] 
hostname = api-sub.meitu.com
*******************************/



{
  "code": 0,
  "error_code": "00000",
  "message": "success",
  "data": {
    "account_type": 2,
    "account_id": "3123520137",
    "is_vip": true,
    "use_vip": true,
    "limit_type": 0,
    "have_valid_contract": true,
    "show_renew_flag": false,
    "show_renew_flag_abroad": false,
    "in_trial_period": false,
    "in_grace_period": true
  },
  "request_id": "8da317db5d34400d964016e5984dfa9e",
  "success": true
}