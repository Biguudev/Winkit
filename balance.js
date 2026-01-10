/******************************
[rewrite_local]
# > Wink Credit
^https?:\/\/api-sub\.meitu\.com\/v1/\virtual/\account/\balance\.json url script-response-body
[mitm] 
hostname = api-sub.meitu.com
*******************************/

var objc = JSON.parse($response.body);

objc = {
    "meiye_balance": "25",
    "total_amount": "25",
    "meiye_freeze_amount": "0",
    "my_credits": "My Credits",
    "meidou_balance": "0"
  },
  "request_id": "68bd3c5147be42099e14867a08519e0a",
  "success": true
};
$done({
    body: JSON.stringify(obj)
