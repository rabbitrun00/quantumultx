[rewrite_local]
# > arc app
^https?:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://github.com/rabbitrun00/quantumultx/blob/main/scripts/arc.js


[mitm] 
hostname = api.revenuecat.com

*******************************/

{
  "request_date_ms" : 1668626565540,
  "request_date" : "2022-11-16T19:22:45Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-11-13T18:53:04Z",
    "original_application_version" : "370003",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "subscriptionBiannual" : {
        "original_purchase_date" : "2022-11-13T18:57:33Z",
        "expires_date" : "2023-01-13T18:57:32Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : "2022-11-13T20:13:55Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2022-11-13T18:57:32Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "backer" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-13T18:57:32Z",
        "product_identifier" : "subscriptionBiannual",
        "expires_date" : "9999-01-13T18:57:32Z"
      }
    },
    "original_purchase_date" : "2022-11-13T18:52:45Z",
    "original_app_user_id" : "$RCAnonymousID:a885a2e257664d028030254e7b36bd7e",
    "last_seen" : "2022-11-16T09:04:15Z"
  }
