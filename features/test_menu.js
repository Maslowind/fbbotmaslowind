module.exports = function(controller) {
controller.api.messenger_profile.greeting('Hello! I\'m a Botkit bot!');
controller.api.messenger_profile.get_started('sample_get_started_payload');
controller.api.messenger_profile.menu([{
        "locale":"default",
        "composer_input_disabled":true,
        "call_to_actions":[
            {
                "title":"My Skills",
                "type":"nested",
                "call_to_actions":[
                    {
                        "title":"Hello",
                        "type":"postback",
                        "payload":"Hello"
                    },
                    {
                        "title":"Hi",
                        "type":"postback",
                        "payload":"Hi"
                    }
                ]
            },
            {
                "type":"web_url",
                "title":"Botkit Docs",
                "url":"https://github.com/howdyai/botkit/blob/master/readme-facebook.md",
                "webview_height_ratio":"full"
            }
        ]
    },
    {
        "locale":"zh_CN",
        "composer_input_disabled":false
    }
]);
controller.api.messenger_profile.account_linking('https://www.yourAwesomSite.com/oauth?response_type=code&client_id=1234567890&scope=basic');
controller.api.messenger_profile.get_account_linking(function (err, accountLinkingUrl)  {
    console.log('****** Account linkink URL:', accountLinkingUrl);
});
controller.api.messenger_profile.delete_account_linking();
controller.api.messenger_profile.domain_whitelist('https://localhost');
controller.api.messenger_profile.domain_whitelist(['https://127.0.0.1', 'https://0.0.0.0']);
controller.api.messenger_profile.delete_domain_whitelist();
controller.api.messenger_profile.get_domain_whitelist(function (err, data)  {
    console.log('****** Whitelisted domains:', data);
});

controller.api.messenger_profile.home_url({
    "url": 'https://mydomain.com',
    "webview_height_ratio": 'tall',
    "in_test": false
})

controller.api.messenger_profile.get_home_url(function (err, data)  {
    console.log('****** Home url:', data);
});

controller.api.messenger_profile.delete_home_url();

// Target Audience
controller.api.messenger_profile.target_audience({
    "audience_type":"custom",
    "countries":{
        "whitelist":["US", "CA"]
    }
});
controller.api.messenger_profile.delete_target_audience();
controller.api.messenger_profile.get_target_audience(function (err, data)  {
    console.log('****** Target Audience:', data);
});
}