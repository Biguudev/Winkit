var body = $response.body;
var obj = JSON.parse(body);

if (obj.data) {
  obj.data.meiye_balance = "999999";
  obj.data.total_amount = "999999";
  obj.data.meidou_balance = "999999";
  obj.data.meiye_freeze_amount = "0";
}

$done({ body: JSON.stringify(obj) });
