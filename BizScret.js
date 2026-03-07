var body = $response.body;
var obj = JSON.parse(body);

if (obj.data) {
  obj.data.coin = 999999;
  obj.data.vip_type = 1;
  obj.data.show_coin = 1;
}

$done({body: JSON.stringify(obj)});
