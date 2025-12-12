/******************************
[rewrite_local]
# > Wink Vip BiguuDev
^https?:\/\/api-sub\.meitu\.com\/v2\/user\/info_by_entrance\.json url script-response-body
[mitm] 
hostname = api-sub.meitu.com
*******************************/

{
  "code": 0,
  "error_code": "00000",
  "message": "success",
  "data": {
    "account_type": 2,
    "account_id": "1230818232",
    "is_vip": true,
    "use_vip": true,
    "limit_type": 0,
    "have_valid_contract": true,
    "show_renew_flag": false,
    "show_renew_flag_abroad": false,
    "in_trial_period": false,
    "in_grace_period": true
  },
  "request_id": "",
  "success": true
}
