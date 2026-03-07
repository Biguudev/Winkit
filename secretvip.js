var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj.data) {

  // Force VIP
  obj.data.is_vip = true;
  obj.data.vip_type = 1;

  // Enable premium tools
  obj.data.can_use_premium = true;
  obj.data.is_pro = true;
  obj.data.premium = true;

  // Future expiry
  obj.data.vip_expire_time = 4092599349000;

}

$done({ body: JSON.stringify(obj) });
