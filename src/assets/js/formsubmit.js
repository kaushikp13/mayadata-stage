_agile.set_account('2fj7t9epllsfe6c2jm86pnpqro', 'cloudbyte');
_agile.track_page_view();
_agile_execute_web_rules();

export function getDetailsUsecasesAll(tag, name, email, company) {
  var email_received = email;
  var contact = {};
  contact.first_name = name;
  contact.email = email_received;
  contact.company = company;
  let fields = allField1(name, company, email_received, tag);
  let payload = signupMayadataPayload(fields)
  slackIntgration(payload);
}

export function sentToSlackForPricing(name, email, company, tag) {
  let email_received = email;
  let contact = {};
  contact.first_name = name;
  contact.company = company;
  contact.email = email_received;
  let fields = allField1(name, company, email_received, tag);
  let payload;
  if (tag == 'MDAP-Pricing') {
    payload = signupPricingPagePayload(fields);
  } else if (tag == 'MDAP-Demo') {
    payload = signupRequestADemoPayload(fields);
  } else {
    payload = signupForUsecases(fields, tag);
  }

  slackIntgration(payload);
}

export function sentToSlackForContactus(first_name, last_name, company, job_title, email, contact_number, message, tag) {
  let email_received = email;
  let contact = {};
  contact.first_name = first_name;
  contact.last_name = last_name;
  contact.company = company;
  contact.job_title = job_title;
  contact.email = email_received;
  contact.contact_number = contact_number;
  contact.message = message || "";
  let fields = slackPayloadFields(first_name, last_name, company, job_title, email, contact_number, message, tag);
  let payload;
  payload = payloadForContactUs(fields);
  slackIntgration(payload);
}

export function sentToSlackForDemo(first_name, last_name, company, job_title, email, contact_number, message, tag) {
  let email_received = email;
  let contact = {};
  contact.first_name = first_name;
  contact.last_name = last_name;
  contact.company = company;
  contact.job_title = job_title;
  contact.email = email_received;
  contact.contact_number = contact_number;
  contact.message = message || "";
  let fields = slackPayloadFields(first_name, last_name, company, job_title, email, contact_number, message, tag);
  let payload;
  payload = signupRequestADemoPayload(fields);
  slackIntgration(payload);
}


export function createContact(name, email, company) {
  var email_received = email;
  var contact = {};
  contact.email = email_received;
  contact.first_name = name;
  contact.company = company;
  let fields = allField1(name, company, email_received, tag);
  let payload = signupMayadataPayload(fields)
  slackIntgration(payload);
}

function allField1(name, company, email, tag) {
  var fields = [{
    "title": "Name",
    "value": name,
    "short": true
  },
  {
    "title": "Company",
    "value": company,
    "short": true
  },
  {
    "title": "Email",
    "value": email,
    "short": true
  },
  {
    "title": "Tag",
    "value": tag,
    "short": true
  }
  ];
  return fields;
}

function slackPayloadFields(first_name, last_name, company, job_title, email, contact_number, message, tag) {
  let fields = [{
    "title": "First Name",
    "value": first_name,
    "short": true
  },
  {
    "title": "Last Name",
    "value": last_name,
    "short": true
  },
  {
    "title": "Company",
    "value": company,
    "short": true
  },
  {
    "title": "Job Title",
    "value": job_title,
    "short": true
  },
  {
    "title": "Email",
    "value": email,
    "short": true
  },
  {
    "title": "Contact Number",
    "value": contact_number,
    "short": true
  },
  {
    "title": "Tag",
    "value": tag,
    "short": true
  },
  {
    "title": "Message",
    "value": message,
    "short": false
  }];
  return fields;
}

function signupMayadataPayload(fields) {
  var payload = {
    "text": "New User signup for mayadata",
    "attachments": [{
      "text": "",
      "fields": fields,
      "color": "#7CD197"
    },

    ],

  };
  return payload;
}

function signupPricingPagePayload(fields) {
  var payload = {
    "text": "New user for pricing",
    "attachments": [{
      "text": "",
      "fields": fields,
      "color": "#7CD197"
    },

    ],

  };
  return payload;
}

function signupRequestADemoPayload(fields) {
  var payload = {
    "text": "New user for request a demo",
    "attachments": [{
      "text": "",
      "fields": fields,
      "color": "#7CD197"
    },

    ],

  };
  return payload;
}

function signupForUsecases(fields, tag) {
  var payload = {
    "text": "New user for request demo for " + tag,
    "attachments": [{
      "text": "",
      "fields": fields,
      "color": "#7CD197"
    },

    ],

  };
  return payload;
}

function payloadForContactUs(fields) {
  let payload = {
    "text": "A user contacted us",
    "attachments": [{
      "text": "",
      "fields": fields,
      "color": "#7CD197"
    }]
  };
  return payload;
}


function slackIntgration(payload) {
  var payloadToSend = JSON.stringify(payload);
  var host = window.location.host;
  if (host == 'mayadata.io' || host == 'www.mayadata.io') {
    var webhookURL = "https://hooks.slack.com/services/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"; // main
  } else {
    var webhookURL = "https://hooks.slack.com/services/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" // testing
  }
  $.ajax({
    url: webhookURL,
    type: "POST",
    processData: true,
    data: payloadToSend,
    dataType: "JSON",
    success: function (data) {
      // console.log("Data successfully sent to slack : " + data)
    },
    error: function (data) {
      console.log("Data not sent to slack :" + data)
    }
  });
}
