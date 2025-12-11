/******************************
[rewrite_local]
# > Wink Mở khóa tư cách thành viên vĩnh viễn
^https?:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json url script-response-body
[mitm] 
hostname = api-sub.meitu.com
*******************************/

{
  "code": 0,
  "error_code": "00000",
  "message": "success",
  "data": {
    "meiye_balance": "99",
    "total_amount": "99",
    "meiye_freeze_amount": "0",
    "my_credits": "My Credits",
    "meidou_balance": "99"
  },
  "request_id": "",
  "success": true
}
