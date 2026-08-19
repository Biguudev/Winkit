let headers = $request.headers;

delete headers["X-MT-Origin-Host"];
delete headers["x-mt-origin-host"];
delete headers["Cookie"];
delete headers["cookie"];

$done({ headers });
