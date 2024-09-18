## 問題

実際のサービスの通信をデベロッパーツールなどで眺めて CORS の設定を確認しなさい。

(金融系の認証ページなどで CORS の設定がされていることが多い)

## 回答

以下のようなHedderが登録されていた。
access-control-allow-credentials:
true
access-control-allow-headers:
Origin, X-Requested-With, Content-Type, Accept, Authorization, X-HTTP-Method-Override, LP-DOMAIN-REFERER, LP-URL, ETag, ac-revision, X-LP-Last-Modified, If-Match, Authentication-Method, Credit-Card-Ref, Automation-Secret, Email-Token
access-control-allow-methods:
GET, POST, PATCH
access-control-expose-headers:
X-Requested-With, X-HTTP-Method-Override, LP-DOMAIN-REFERER, LP-URL, ETag, ac-revision, X-LP-Last-Modified, If-Match, Authentication-Method, Credit-Card-Ref, Automation-Secret, Email-Token, x-lp-host, Lp-Req-Time, date, x-application-context, strict-transport-security, x-content-type-options, x-download-options, x-xss-protection, x-cache-status, x-amz-id-2, x-amz-request-id, expires, last-modified, set-cookie, content-security-policy, x-frame-options
