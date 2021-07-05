function agile_createContact(r, c) {
    var b = {};
    var e = [];
    for (var s in r) {
        if (r.hasOwnProperty(s) && s != "tags" && s != "lead_score" && s != "agile_source") {
            e.push(agile_propertyJSON(s, r[s]))
        }
    }
    var k = agile_read_cookie(agile_guid.cookie_original_ref);
    var f = agile_read_cookie(agile_guid.cookie_tags);
    var j = agile_read_cookie(agile_guid.cookie_score);
    var t = agile_read_cookie(agile_guid.cookie_campaigns);
    var p = agile_getUtmParamsAsProperties();
    var a = agile_read_data("agile-browser-id");
    var l = agile_guid.get();
    b.properties = e;
    if (k) {
        e.push(agile_propertyJSON("original_ref", k))
    }
    if (p && p.size != 0) {
        try {
            e.push.apply(e, p)
        } catch (d) {
            console.debug("Error occured while pushing utm params " + d)
        }
    }
    if (r.tags) {
        var h = r.tags;
        var m = h.trim().replace("/ /g", " ");
        m = m.replace("/, /g", ",");
        b.tags = m.split(",");
        for (var o = 0; o < b.tags.length; o++) {
            b.tags[o] = b.tags[o].trim()
        }
    }
    if (f) {
        agile_delete_cookie(agile_guid.cookie_tags);
        var m = f.trim().replace("/ /g", " ");
        m = m.replace("/, /g", ",");
        var g = m.split(",");
        if (b.tags) {
            for (var o = 0; o < g.length; o++) {
                b.tags.push(g[o].trim())
            }
        } else {
            b.tags = [];
            for (var o = 0; o < g.length; o++) {
                b.tags.push(g[o].trim())
            }
        }
    }
    if (r.lead_score) {
        b.lead_score = parseInt(r.lead_score)
    }
    if (r.agile_source) {
        b.source = r.agile_source
    }
    if (j) {
        agile_delete_cookie(agile_guid.cookie_score);
        if (b.lead_score) {
            b.lead_score = b.lead_score + parseInt(j)
        } else {
            b.lead_score = parseInt(j)
        }
    }
    var q = "contact={0}".format(encodeURIComponent(JSON.stringify(b)));
    if (t) {
        agile_delete_cookie(agile_guid.cookie_campaigns);
        q = q + "&campaigns={0}".format(encodeURIComponent(t))
    }
    if (a != "") {
        q = q + "&browserId=" + encodeURIComponent(a)
    }
    if (l != null || l != undefined) {
        q = q + "&guId=" + encodeURIComponent(l)
    }
    var n = agile_id.getURL() + "/contacts?callback=?&id=" + agile_id.get() + "&" + q;
    if (n.length > 1200 && document.getElementById("agile-form") != null) {
        document.getElementById("agile-form").setAttribute("method", "POST");
        throw new Error("Whoops!")
    } else {
        agile_json(n, c)
    }
}

function agile_deleteContact(b, c) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contact/delete?callback=?&id=" + agile_id.get() + "&email=" + encodeURIComponent(b);
    agile_json(a, c)
}

function agile_getContact(b, d) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var c = "email={0}".format(encodeURIComponent(b));
    var a = agile_id.getURL() + "/contact/email?callback=?&id=" + agile_id.get() + "&" + c;
    agile_json(a, d)
}

function agile_updateContact(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "data={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/contact/update?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_createCompany(e, f) {
    var d = [];
    for (var c in e) {
        if (e.hasOwnProperty(c)) {
            d.push(agile_propertyJSON(c, e[c]))
        }
    }
    var b = {};
    b.properties = d;
    var a = agile_id.getURL() + "/company?callback=?&id=" + agile_id.get() + "&data=" + encodeURIComponent(JSON.stringify(b));
    agile_json(a, f)
}

function agile_getUtmParamsAsProperties() {
    var a = [];
    try {
        var d = agile_getUtmParams();
        for (var c in d) {
            if (d.hasOwnProperty(c)) {
                a.push(agile_propertyJSON(c, d[c]))
            }
        }
    } catch (b) {
        console.debug(b)
    }
    return a
}

function agile_addNote(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "data={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/contacts/add-note?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_getNotes(c, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contacts/get-notes?callback=?&id=" + agile_id.get() + "&" + "email={0}".format(encodeURIComponent(b));
    agile_json(a, c)
}

function agile_addDeal(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "opportunity={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/opportunity?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_getDeals(c, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contacts/get-deals?callback=?&id=" + agile_id.get() + "&" + "email={0}".format(encodeURIComponent(b));
    agile_json(a, c)
}

function agile_updateDeal(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "opportunity={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/opportunity/update-deal?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_enable_console_logging() {
    var a = false;
    if (typeof console === "undefined" || !a) {
        console = {
            log: function() {},
            error: function() {}
        }
    }
    if (typeof(console.log) === "undefined" || !a) {
        console.log = function() {
            return 0
        }
    }
    if (typeof(console.error) === "undefined" || !a) {
        console.error = function() {
            return 0
        }
    }
}

function agile_track_webrule(a, d, c) {
    var b = "https://" + agile_id.getNamespace() + ".agilecrm.com/savedata?callback=?&email=" + a.email + "&domain=" + agile_id.getNamespace() + "&webruleid=" + CURRENT_AGILE_WEB_RULE_ID + "&webruletype=" + c;
    agile_json(b)
}
var _agile = {
    set_account: function(c, b, a) {
        _agile._filter(function() {
            agile_setAccount(c, b, a)
        })
    },
    set_email: function(a) {
        _agile._filter(function() {
            agile_setEmail(a)
        })
    },
    track_page_view: function(a) {
        _agile._filter(function() {
            agile_trackPageview(a)
        })
    },
    set_tracking_domain: function(a) {
        _agile._filter(function() {
            agile_trackingDomain(a)
        })
    },
    create_contact: function(a, b) {
        _agile._filter(function() {
            agile_createContact(a, b)
        })
    },
    get_contact: function(a, b) {
        _agile._filter(function() {
            agile_getContact(a, b)
        })
    },
    add_tag: function(b, c, a) {
        _agile._filter(function() {
            agile_addTag(b, c, a)
        })
    },
    remove_tag: function(b, c, a) {
        _agile._filter(function() {
            agile_removeTag(b, c, a)
        })
    },
    add_score: function(b, c, a) {
        _agile._filter(function() {
            agile_addScore(b, c, a)
        })
    },
    subtract_score: function(b, c, a) {
        _agile._filter(function() {
            agile_subtractScore(b, c, a)
        })
    },
    add_note: function(b, c, a) {
        _agile._filter(function() {
            agile_addNote(b, c, a)
        })
    },
    set_property: function(b, c, a) {
        _agile._filter(function() {
            agile_setProperty(b, c, a)
        })
    },
    add_task: function(b, c, a) {
        _agile._filter(function() {
            agile_addTask(b, c, a)
        })
    },
    add_deal: function(b, c, a) {
        _agile._filter(function() {
            agile_addDeal(b, c, a)
        })
    },
    get_score: function(b, a) {
        _agile._filter(function() {
            agile_getScore(b, a)
        })
    },
    get_tags: function(b, a) {
        _agile._filter(function() {
            agile_getTags(b, a)
        })
    },
    get_notes: function(b, a) {
        _agile._filter(function() {
            agile_getNotes(b, a)
        })
    },
    add_campaign: function(b, c, a) {
        _agile._filter(function() {
            agile_addCampaign(b, c, a)
        })
    },
    get_campaigns: function(b, a) {
        _agile._filter(function() {
            agile_getCampaigns(b, a)
        })
    },
    get_campaign_logs: function(b, a) {
        _agile._filter(function() {
            agile_getCampaignlogs(b, a)
        })
    },
    get_workflows: function(a) {
        _agile._filter(function() {
            agile_getWorkflows(a)
        })
    },
    get_pipelines: function(a) {
        _agile._filter(function() {
            agile_getPipelines(a)
        })
    },
    get_milestones: function(a) {
        _agile._filter(function() {
            agile_getMilestones(a)
        })
    },
    get_milestones_by_pipeline: function(a, b) {
        _agile._filter(function() {
            agile_getMilestones_by_pipeline(a, b)
        })
    },
    update_contact: function(b, c, a) {
        _agile._filter(function() {
            agile_updateContact(b, c, a)
        })
    },
    get_email: function(a) {
        _agile._filter(function() {
            agile_getEmail(a)
        })
    },
    create_company: function(a, b) {
        _agile._filter(function() {
            agile_createCompany(a, b)
        })
    },
    get_property: function(b, c, a) {
        _agile._filter(function() {
            agile_getProperty(b, c, a)
        })
    },
    remove_property: function(b, c, a) {
        _agile._filter(function() {
            agile_removeProperty(b, c, a)
        })
    },
    add_property: function(b, c, a) {
        _agile._filter(function() {
            agile_setProperty(b, c, a)
        })
    },
    web_rules: function(a) {
        _agile._filter(function() {
            agile_webRules(a)
        })
    },
    unsubscribe_campaign: function(b, c, a) {
        _agile._filter(function() {
            agile_unsubscribeCampaign(b, c, a)
        })
    },
    allowed_domains: function(a) {
        _agile._filter(function() {
            agile_allowedDomains(a)
        })
    },
    is_valid_call: function() {
        return !_agile_check_function_caller_is_console()
    },
    _filter: function(a) {
        if (_agile.is_valid_call()) {
            return a()
        }
        console.log("%cStop! Function calls from console are disabled.", "color: red;")
    }
};
var _agile_synch_form_v4 = function(w) {
    if (w) {
        if (w.querySelectorAll(".agile_span_date_error").length > 0) {
            return
        }
        if (!agile_validations(w)) {
            return
        }
        var e = w.querySelectorAll(".agile-button")[0];
        if (e) {
            e.setAttribute("disabled", "disabled")
        }
        var v = w.querySelectorAll('span[id="agile-error-msg"]')[0];
        if (v) {
            var g = document.createElement("img");
            g.src = "https://s3.amazonaws.com/PopupTemplates/form/spin.gif";
            v.appendChild(g)
        }
        var o = w
    } else {
        if (document.querySelectorAll(".agile_span_date_error").length > 0) {
            return
        }
        if (!agile_validations()) {
            return
        }
        var e = document.querySelectorAll(".agile-button")[0];
        if (e) {
            e.setAttribute("disabled", "disabled")
        }
        var v = document.getElementById("agile-error-msg");
        if (v) {
            var g = document.createElement("img");
            g.src = "https://s3.amazonaws.com/PopupTemplates/form/spin.gif";
            v.appendChild(g)
        }
        var o = document.forms["agile-form"]
    }
    if (!o) {
        return
    }
    var f = "#";
    if (o._agile_redirect_url) {
        f = o._agile_redirect_url.value
    }
    var m = {};
    var b = {};
    var u = [];
    var d = {};
    var t = true;
    var c, n;
    if (typeof o == "object" && o.nodeName == "FORM") {
        var r = o.elements.length;
        for (var q = 0; q < r; q++) {
            c = o.elements[q];
            if (c.id && c.id == "g-recaptcha-response") {
                continue
            }
            if (c.name && !c.disabled && c.type != "file" && c.type != "reset" && c.type != "submit" && c.type != "button") {
                d[c.id] = c.value;
                if ("address, city, state, country, zip".indexOf(c.name) != -1) {
                    b[c.name] = c.value
                } else {
                    if (c.type == "select-multiple") {
                        n = o.elements[q].options.length;
                        for (var p = 0; p < n; p++) {
                            if (c.options[p].selected && c.options[p].value) {
                                if (m.hasOwnProperty(c.name)) {
                                    m[c.name] = m[c.name] + ", " + c.options[p].value
                                } else {
                                    m[c.name] = c.options[p].value
                                }
                            }
                        }
                    } else {
                        if ((c.type != "checkbox" && c.type != "radio") || c.checked) {
                            if (c.value) {
                                if (m.hasOwnProperty(c.name)) {
                                    m[c.name] = m[c.name] + "," + c.value
                                } else {
                                    m[c.name] = c.value
                                }
                            }
                        }
                    }
                }
                if (c.name == "note" && m.note) {
                    var s = {};
                    var k = agile_find_closest_element(c, function(j) {
                        if (j.getElementsByTagName("label")[0]) {
                            return (" " + j.getElementsByTagName("label")[0].className + " ").replace(/[\n\t]/g, " ").indexOf(" agile-label ") != -1
                        }
                        return false
                    });
                    var h = "";
                    if (k) {
                        h = k.getElementsByTagName("label")[0]
                    }
                    if (h) {
                        s.subject = h.innerText || h.textContent || "Form Note"
                    } else {
                        s.subject = "Form Note"
                    }
                    s.subject = s.subject.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                    s.description = m.note;
                    if (s.description) {
                        u.push(s)
                    }
                    delete m.note
                }
            }
        }
    }
    b = JSON.stringify(b);
    if (b.length > 2) {
        m.address = b
    }
    var a = m.email;
    if (a) {
        _agile.set_email(a)
    }
    m = deleteAgileHiddenFields(m);
    m.agile_source = "form";
    _agile.create_contact(m, {
        success: function(x) {
            var l = x.id;
            var y = 0;
            if (u.length > 0) {
                for (var j = 0; j < u.length; j++) {
                    _agile.add_note(u[j], {
                        success: function(z) {
                            y++;
                            if (y == u.length) {
                                agile_formCallback(["", v], e, f, o, l, d, t, w)
                            }
                        },
                        error: function(z) {
                            agile_formCallback(["Error in sending data", v], e, f, o, w)
                        }
                    })
                }
            } else {
                agile_formCallback(["", v], e, f, o, l, d, t, w)
            }
        },
        error: function(j) {
            if (j.error.indexOf("Duplicate") != -1) {
                _agile.update_contact(m, {
                    success: function(y) {
                        t = false;
                        var x = y.id;
                        var z = 0;
                        if (u.length > 0) {
                            for (var l = 0; l < u.length; l++) {
                                _agile.add_note(u[l], {
                                    success: function(A) {
                                        z++;
                                        if (z == u.length) {
                                            agile_formCallback(["", v], e, f, o, x, d, t, w)
                                        }
                                    },
                                    error: function(A) {
                                        agile_formCallback(["Error in sending data", v], e, f, o, w)
                                    }
                                })
                            }
                        } else {
                            agile_formCallback(["", v], e, f, o, x, d, t, w)
                        }
                    },
                    error: function(l) {
                        if (l && l.error) {
                            agile_formCallback(["Error: " + l.error, v], e, f, o, w)
                        } else {
                            agile_formCallback(["Error in sending data", v], e, f, o, w)
                        }
                    }
                })
            } else {
                if (j && j.error) {
                    agile_formCallback(["Error: " + j.error, v], e, f, o, w)
                } else {
                    agile_formCallback(["Error in sending data", v], e, f, o, w)
                }
            }
        }
    })
};
var prepareDateTypeValue = function(k) {
    var b = k.currentTarget.parentElement.id;
    var p = k.currentTarget.parentElement.nextElementSibling.childNodes[0];
    var f = k.currentTarget.parentElement.nextElementSibling.childNodes;
    var l = null;
    for (i = 0; i < f.length; i++) {
        var c = f[i];
        if (c != null && c.className != null) {
            if (c.className.indexOf("agile_span_date_error") > -1) {
                l = c;
                break
            }
        }
    }
    var g = p.name;
    var h = p.getAttribute("data-agilefield-type");
    var e = k.currentTarget.parentElement.children[0].value;
    var j = k.currentTarget.parentElement.children[1].value;
    var m = k.currentTarget.parentElement.children[2].value;
    if (h == null) {
        p.value = "01-Jan-2017";
        return
    }
    if (h.indexOf("DATE") > -1) {
        if (e && j && m) {
            var o = agileDateValueValidate(e, j, m, b, p, l);
            if (!o) {
                var a = e + "-" + j + "-" + m;
                var d = Date.parse(a) / 1000;
                console.log(typeof(d) + "	" + d);
                p.value = d
            }
        } else {
            if (l == null) {
                var n = document.createElement("p");
                n.innerHTML = "Select a valid date.";
                n.id = "agile_span_" + b;
                n.className = "agile_span_date_error";
                n.style.color = "#d9534f";
                n.style.fontSize = "12px";
                p.parentNode.insertBefore(n, p.nextSibling)
            }
            p.value = ""
        }
    } else {
        if (e && j && m) {
            var o = agileDateValueValidate(e, j, m, b, p, l);
            if (!o) {
                var a = e + "-" + j + "-" + m;
                console.log(typeof(a) + "	" + a);
                p.value = a.trim()
            }
        } else {
            if (l == null) {
                var n = document.createElement("p");
                n.innerHTML = "Select a valid date.";
                n.id = "agile_span_" + b;
                n.className = "agile_span_date_error";
                n.style.color = "#d9534f";
                n.style.fontSize = "12px";
                p.parentNode.insertBefore(n, p.nextSibling)
            }
            p.value = ""
        }
    }
};
var agileDateValueValidate = function(c, d, e, a, j, h) {
    var g = false;
    if (d.indexOf("Feb") > -1) {
        var b = parseInt(c);
        if (b > 28) {
            if (b == 29) {
                if (!(((e % 4 == 0) && (e % 100 != 0)) || (e % 400 == 0))) {
                    g = true;
                    if (h == null) {
                        var f = document.createElement("p");
                        f.innerHTML = "Select a valid date.";
                        f.id = "agile_span_" + a;
                        f.className = "agile_span_date_error";
                        f.style.color = "#d9534f";
                        f.style.fontSize = "12px";
                        j.parentNode.insertBefore(f, j.nextSibling)
                    }
                }
            } else {
                g = true;
                if (h == null) {
                    var f = document.createElement("p");
                    f.innerHTML = "Select a valid date.";
                    f.id = "agile_span_" + a;
                    f.className = "agile_span_date_error";
                    f.style.color = "#d9534f";
                    f.style.fontSize = "12px";
                    j.parentNode.insertBefore(f, j.nextSibling)
                }
            }
        }
    } else {
        if (d.indexOf("Apr") > -1 || d.indexOf("June") > -1 || d.indexOf("Sep") > -1 || d.indexOf("Nov") > -1) {
            if (c.indexOf("31") > -1) {
                g = true;
                if (h == null) {
                    var f = document.createElement("p");
                    f.innerHTML = "Select a valid date.";
                    f.id = "agile_span_" + a;
                    f.className = "agile_span_date_error";
                    f.style.color = "#d9534f";
                    f.style.fontSize = "12px";
                    j.parentNode.insertBefore(f, j.nextSibling)
                }
            }
        }
    }
    if (!g) {
        if (h) {
            h.parentNode.removeChild(h)
        }
    }
    return g
};

function agile_setEmail(a) {
    agile_guid.set_email(a)
}

function agile_getEmail(c) {
    var b = agile_guid.get_email();
    if (b == null || !b) {
        if (c && typeof(c.success) == "function") {
            c.success({
                email: "null"
            })
        }
        return
    }
    var a = agile_id.getURL() + "/email?callback=?&id=" + agile_id.get() + "&email=" + encodeURIComponent(b);
    agile_json(a, c)
}

function agile_setProperty(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "data={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/contacts/add-property?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_getProperty(c, d, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    if (!c) {
        return
    }
    var a = agile_id.getURL() + "/contacts/get-property?callback=?&id=" + agile_id.get() + "&name=" + c + "&email=" + encodeURIComponent(b);
    agile_json(a, d)
}

function agile_removeProperty(c, d, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    if (!c) {
        return
    }
    var a = agile_id.getURL() + "/contacts/remove-property?callback=?&id=" + agile_id.get() + "&name=" + c + "&email=" + encodeURIComponent(b);
    agile_json(a, d)
}

function loadAgileCRMForm(e) {
    var c = e.split("_");
    var d = c.pop();
    var b = c.join("_");
    var a = document.createElement("script");
    a.src = agile_id.getDomainHostURL() + "/core/api/forms/form/js/" + d;
    document.body.appendChild(a)
}

function showAgileCRMForm(j, d) {
    var k = document.getElementById(d);
    if (k === null) {
        var m = d.split("_").pop();
        k = document.querySelectorAll("[id*=_" + m + "]")[0]
    }
    if (!k) {
        return
    }
    if (j == null) {
        k.innerHTML = "This Form no longer exists";
        return
    }
    var a = navigator.userAgent;
    if (a.indexOf("MSIE") != -1 && parseInt(a.split("MSIE")[1]) < 9) {
        var h = document.createElement("link");
        h.rel = "stylesheet";
        h.type = "text/css";
        h.href = "https://s3.amazonaws.com/agilecrm/forms/v1/agile-form-min.css";
        if (document.getElementsByTagName("head")[0] != undefined) {
            document.getElementsByTagName("head")[0].appendChild(h)
        }
    }
    k.innerHTML = j.formHtml;
    appendFutureYears();
    var c = document.getElementById("gRecaptchaSrc");
    if (c) {
        k.removeChild(c)
    }
    var e = k.getElementsByTagName("script");
    e = e[0].innerHTML;
    var g = document.createElement("script");
    g.id = "agileCRMFormLoadScript";
    g.text = e;
    document.body.appendChild(g);
    utmHiddenField();
    var b = JSON.parse(j.formJson);
    for (var l in b[0].fields.agilepreloadfields.value) {
        if (b[0].fields.agilepreloadfields.value[l]["selected"]) {
            if (b[0].fields.agilepreloadfields.value[l]["value"] == "true") {
                _agile_load_form_fields()
            }
        }
    }
    var b = JSON.parse(j.formJson);
    if (typeof b[0].fields.agileformcaptcha !== "undefined") {
        for (var l in b[0].fields.agileformcaptcha.value) {
            if (b[0].fields.agileformcaptcha.value[l]["selected"]) {
                if (b[0].fields.agileformcaptcha.value[l]["value"] == "true") {
                    var f = document.createElement("script");
                    f.src = "https://www.google.com/recaptcha/api.js";
                    document.body.appendChild(f)
                }
            }
        }
    }
}

function agileOnloadFunction() {
    var b = document.querySelectorAll(".agile_crm_form_embed");
    if (b.length != 0) {
        for (var a = 0; a < b.length; a++) {
            loadAgileCRMForm(b[a].getAttribute("id"));
            b[a].style.display = ""
        }
    }
}

function agileOnLoadEventListener(b, c, a) {
    if (c.addEventListener) {
        c.addEventListener(b, a, false)
    } else {
        if (c.attachEvent) {
            c.attachEvent("on" + b, a)
        }
    }
}
agileOnLoadEventListener("load", window, agileOnloadFunction);

function _agile_is_js_serving_from_cloudfront() {
    var a = "";
    var b = document.getElementById("_agile_min_js");
    if (b) {
        a = b.src || b.getAttribute("src")
    }
    return (a.indexOf("cloudfront") > -1)
}

function agile_webRules(b) {
    var a = agile_id.getURL() + "/web-rules?callback=?&id=" + agile_id.get();
    agile_json(a, b)
}

function _agile_execute_web_rules() {
    if (typeof IS_AGILE_WEB_RULE_EXECUTED !== "undefined") {
        return
    }
    IS_AGILE_WEB_RULE_EXECUTED = "true";
    var a = "https://s3.amazonaws.com/agilecrm/web-rules-static/agile-webrules-min.js";
    if (agile_id.getDomainHostURL().indexOf(".appspot.com") !== -1) {
        a = "https://s3.amazonaws.com/agilecrm/web-rules-static/beta/agile-webrules-min.js"
    }
    _agile_require_js(a, function() {
        _agile_webrules()
    })
}

function _agile_require_js(d, c) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;
    a.src = d;
    if ((navigator.appVersion).indexOf("MSIE") > 0) {
        a.onreadystatechange = function() {
            if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                c()
            }
        }
    } else {
        a.onload = function() {
            if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                c()
            }
        }
    }
    var b = document.getElementsByTagName("head")[0];
    b.appendChild(a)
}
var _agile_synch_form_v3 = function() {
    var h = document.querySelectorAll(".agile-button")[0];
    if (h) {
        h.setAttribute("disabled", "disabled")
    }
    var r = document.getElementById("agile-error-msg");
    if (r) {
        var k = document.createElement("img");
        k.src = "https://s3.amazonaws.com/PopupTemplates/form/spin.gif";
        r.appendChild(k)
    }
    var m = document.forms["agile-form"];
    var j = m._agile_redirect_url.value;
    var l = {};
    var c = {};
    var g = undefined;
    var q = [];
    var d = {};
    var p = true;
    for (var n = 0; n < m.length; n++) {
        var a = m[n].getAttribute("name");
        var s = m[n].value;
        var f = m[n].getAttribute("id");
        var e = m[n].getAttribute("type");
        if (e == "hidden") {
            m[n].setAttribute("disabled", "disabled")
        }
        if ((e == "radio" || e == "checkbox") && !m[n].checked) {
            continue
        }
        if (a && s) {
            d[f] = s;
            if ("address, city, state, country, zip".indexOf(a) != -1) {
                c[a] = s
            } else {
                if (a == "tags") {
                    if (g) {
                        g = g + "," + s
                    } else {
                        g = s
                    }
                } else {
                    if (a == "note") {
                        var o = {};
                        o.subject = m[n].parentNode.parentNode.getElementsByTagName("label")[0].innerHTML;
                        o.description = s;
                        q.push(o)
                    } else {
                        l[a] = s
                    }
                }
            }
        } else {
            if (s) {
                d[f] = s
            }
        }
    }
    c = JSON.stringify(c);
    if (c.length > 2) {
        l.address = c
    }
    if (g) {
        l.tags = g
    }
    var b = l.email;
    if (b) {
        _agile.set_email(b)
    }
    l = deleteAgileHiddenFields(l);
    _agile.create_contact(l, {
        success: function(v) {
            var u = v.id;
            var w = 0;
            if (q.length > 0) {
                for (var t = 0; t < q.length; t++) {
                    _agile.add_note(q[t], {
                        success: function(x) {
                            w++;
                            if (w == q.length) {
                                agile_formCallback(["", r], h, j, m, u, d, p)
                            }
                        },
                        error: function(x) {
                            agile_formCallback(["Error in sending data", r], h, j, m)
                        }
                    })
                }
            } else {
                agile_formCallback(["", r], h, j, m, u, d, p)
            }
        },
        error: function(t) {
            if (t.error.indexOf("Duplicate") != -1) {
                _agile.update_contact(l, {
                    success: function(w) {
                        p = false;
                        var v = w.id;
                        var x = 0;
                        if (q.length > 0) {
                            for (var u = 0; u < q.length; u++) {
                                _agile.add_note(q[u], {
                                    success: function(y) {
                                        x++;
                                        if (x == q.length) {
                                            agile_formCallback(["", r], h, j, m, v, d, p)
                                        }
                                    },
                                    error: function(y) {
                                        agile_formCallback(["Error in sending data", r], h, j, m)
                                    }
                                })
                            }
                        } else {
                            agile_formCallback(["", r], h, j, m, v, d, p)
                        }
                    },
                    error: function(u) {
                        agile_formCallback(["Error in sending data", r], h, j, m)
                    }
                })
            } else {
                agile_formCallback(["Error in sending data", r], h, j, m)
            }
        }
    })
};

function agile_track_form_action(a) {}

function agile_validations(a) {
    var o = true;
    var g = null;
    if (a) {
        var p = a;
        var j = a.querySelector("span[id='agile-error-msg']")
    } else {
        var p = document.forms["agile-form"];
        var j = document.querySelector("span[id='agile-error-msg']")
    }
    for (var d = 0; d < p.length; d++) {
        var n = p[d].getAttribute("id");
        var b = p[d].getAttribute("type");
        var m = p[d];
        var h = null;
        if (m.nextSibling != null && typeof(m.nextSibling.getAttribute) != "undefined" && m.nextSibling.getAttribute("id") == "agile_span" + d) {
            var h = m.nextSibling
        }
        var k = p[d].getAttribute("required");
        if (n) {
            if (m.value == "" && h == null && k == "") {
                o = false;
                var l = document.createElement("span");
                l.innerHTML = "Enter a value for this field.";
                l.id = "agile_span" + d;
                l.style.color = "red";
                l.style.fontSize = "12px";
                l.className += "agile_val_error";
                m.parentNode.insertBefore(l, m.nextSibling);
                g++;
                continue
            } else {
                if (m.value && h) {
                    if (p[d].type == "email") {
                        if (validateEmail(m.value)) {
                            h.remove();
                            o = true;
                            continue
                        } else {
                            h.innerHTML = "Please enter a valid email.";
                            g++;
                            o = false;
                            continue
                        }
                    }
                    if (p[d].name == "phone") {
                        if (validatePhonenumber(m.value)) {
                            h.remove();
                            o = true;
                            continue
                        } else {
                            h.innerHTML = "Please enter valid phone number.";
                            g++;
                            o = false;
                            continue
                        }
                    }
                    if (p[d].name == "tags") {
                        if (validTagsString(m.value)) {
                            if (p[d].type == "hidden") {
                                j.innerHTML = ""
                            } else {
                                h.remove()
                            }
                            o = true;
                            continue
                        } else {
                            if (p[d].type == "hidden") {
                                j.innerHTML = "Error: Invalid form tag."
                            } else {
                                h.innerHTML = "Please enter a valid tag."
                            }
                            g++;
                            o = false;
                            continue
                        }
                    }
                    if (b == "radio" || b == "checkbox") {
                        if (m.parentElement != null && m.parentElement.parentElement != null) {
                            if (m.parentElement.parentElement.classList.length == 0) {
                                if (m.parentElement.parentElement.parentElement != null && m.parentElement.parentElement.parentElement.parentElement != null && m.parentElement.parentElement.parentElement.parentElement.querySelector(".agile-span-asterisk") != null) {
                                    if (m.parentElement.parentElement.nextElementSibling == null || m.parentNode.parentNode.parentNode.querySelector("#agile_span" + d) != null) {
                                        if ((b == "radio" && m.parentElement.parentElement.parentElement.querySelectorAll(" input[type='radio']:checked").length == 0) || (b == "checkbox" && m.parentElement.parentElement.parentElement.querySelectorAll(" input[type='checkbox']:checked").length == 0)) {
                                            if (m.parentNode.parentNode.parentNode.querySelector("#agile_span" + d) == null) {
                                                h.innerHTML = "Please provide atleast one selection";
                                                m.parentNode.parentNode.parentNode.insertBefore(l, null);
                                                g++
                                            }
                                            o = false;
                                            continue
                                        } else {
                                            h = m.parentNode.parentNode.parentNode.querySelector("#agile_span" + d);
                                            if (h != null) {
                                                h.remove()
                                            }
                                            o = true
                                        }
                                    }
                                } else {
                                    o = true
                                }
                            } else {
                                if (m.parentElement.parentElement != null && m.parentElement.parentElement.parentElement != null && m.parentElement.parentElement.parentElement.querySelector(".agile-span-asterisk") != null) {
                                    if (m.parentElement.nextElementSibling == null || m.parentNode.parentNode.querySelector("#agile_span" + d) != null) {
                                        if ((b == "radio" && m.parentElement.parentElement.querySelectorAll(" input[type='radio']:checked").length == 0) || (b == "checkbox" && m.parentElement.parentElement.querySelectorAll(" input[type='checkbox']:checked").length == 0)) {
                                            if (m.parentNode.parentNode.querySelector("#agile_span" + d) == null) {
                                                var l = document.createElement("p");
                                                l.innerHTML = "Please provide atleast one selection";
                                                l.id = "agile_span" + d;
                                                l.style.color = "red";
                                                l.style.fontSize = "12px";
                                                l.className += "agile_val_error";
                                                m.parentNode.parentNode.insertBefore(l, null)
                                            }
                                            g++;
                                            o = false
                                        } else {
                                            h = m.parentNode.parentNode.querySelector("#agile_span" + d);
                                            if (h != null) {
                                                h.remove()
                                            }
                                            o = true
                                        }
                                    }
                                } else {
                                    o = true
                                }
                            }
                        }
                        continue
                    }
                    if (m.value.length > 250 && ((m.nodeName == "TEXTAREA" && m.id != "g-recaptcha-response") || m.type == "text")) {
                        h.innerHTML = "Please enter upto 250 characters.";
                        g++;
                        o = false;
                        continue
                    }
                    h.remove();
                    o = true;
                    continue
                } else {
                    if (m.value && h == null) {
                        if (p[d].type == "email") {
                            if (validateEmail(m.value)) {
                                o = true;
                                continue
                            } else {
                                var l = document.createElement("span");
                                l.innerHTML = "Please enter a valid email.";
                                l.id = "agile_span" + d;
                                l.style.color = "red";
                                l.style.fontSize = "12px";
                                l.className += "agile_val_error";
                                m.parentNode.insertBefore(l, m.nextSibling);
                                g++;
                                o = false;
                                continue
                            }
                        }
                        if (p[d].name == "phone") {
                            if (validatePhonenumber(m.value)) {
                                o = true;
                                continue
                            } else {
                                var l = document.createElement("span");
                                l.innerHTML = "Please enter valid phone number.";
                                l.id = "agile_span" + d;
                                l.style.color = "red";
                                l.style.fontSize = "12px";
                                l.className += "agile_val_error";
                                m.parentNode.insertBefore(l, m.nextSibling);
                                g++;
                                o = false;
                                continue
                            }
                        }
                        if (p[d].name == "tags") {
                            if (validTagsString(m.value)) {
                                if (p[d].type == "hidden") {
                                    j.innerHTML = ""
                                }
                                o = true;
                                continue
                            } else {
                                if (p[d].type == "hidden") {
                                    j.innerHTML = "Error: Invalid form tag."
                                } else {
                                    var l = document.createElement("span");
                                    l.innerHTML = "Please enter a valid tag.";
                                    l.id = "agile_span" + d;
                                    l.style.color = "red";
                                    l.style.fontSize = "12px";
                                    l.className += "agile_val_error";
                                    m.parentNode.insertBefore(l, m.nextSibling)
                                }
                                g++;
                                o = false;
                                continue
                            }
                        }
                        if (b == "radio" || b == "checkbox") {
                            if (m.parentElement != null && m.parentElement.parentElement != null) {
                                if (m.parentElement.parentElement.classList.length == 0) {
                                    if (m.parentElement.parentElement.parentElement != null && m.parentElement.parentElement.parentElement.parentElement != null && m.parentElement.parentElement.parentElement.parentElement.querySelector(".agile-span-asterisk") != null) {
                                        if (m.parentElement.parentElement.nextElementSibling == null || m.parentNode.parentNode.parentNode.querySelector("#agile_span" + d) != null) {
                                            if ((b == "radio" && m.parentElement.parentElement.parentElement.querySelectorAll(" input[type='radio']:checked").length == 0) || (b == "checkbox" && m.parentElement.parentElement.parentElement.querySelectorAll(" input[type='checkbox']:checked").length == 0)) {
                                                if (m.parentNode.parentNode.parentNode.querySelector("#agile_span" + d) == null) {
                                                    var l = document.createElement("span");
                                                    l.innerHTML = "Please provide atleast one selection";
                                                    l.id = "agile_span" + d;
                                                    l.style.color = "red";
                                                    l.style.fontSize = "12px";
                                                    l.className += "agile_val_error";
                                                    m.parentNode.parentNode.parentNode.insertBefore(l, null)
                                                }
                                                g++;
                                                o = false
                                            } else {
                                                h = m.parentNode.parentNode.parentNode.querySelector("#agile_span" + d);
                                                if (h != null) {
                                                    h.remove()
                                                }
                                                o = true
                                            }
                                        }
                                    } else {
                                        o = true
                                    }
                                } else {
                                    if (m.parentElement.parentElement != null && m.parentElement.parentElement.parentElement != null && m.parentElement.parentElement.parentElement.querySelector(".agile-span-asterisk") != null) {
                                        if (m.parentElement.nextElementSibling == null || m.parentNode.parentNode.querySelector("#agile_span" + d) != null) {
                                            if ((b == "radio" && m.parentElement.parentElement.querySelectorAll(" input[type='radio']:checked").length == 0) || (b == "checkbox" && m.parentElement.parentElement.querySelectorAll(" input[type='checkbox']:checked").length == 0)) {
                                                if (m.parentNode.parentNode.querySelector("#agile_span" + d) == null) {
                                                    var l = document.createElement("p");
                                                    l.innerHTML = "Please provide atleast one selection";
                                                    l.id = "agile_span" + d;
                                                    l.style.color = "red";
                                                    l.style.fontSize = "12px";
                                                    l.className += "agile_val_error";
                                                    m.parentNode.parentNode.insertBefore(l, null)
                                                }
                                                g++;
                                                o = false
                                            } else {
                                                h = m.parentNode.parentNode.querySelector("#agile_span" + d);
                                                if (h != null) {
                                                    h.remove()
                                                }
                                                o = true
                                            }
                                        }
                                    } else {
                                        o = true
                                    }
                                }
                            }
                            continue
                        }
                        if (m.value.length > 250 && ((m.nodeName == "TEXTAREA" && m.id != "g-recaptcha-response") || m.type == "text")) {
                            var l = document.createElement("span");
                            l.innerHTML = "Please enter upto 250 characters.";
                            l.id = "agile_span" + d;
                            l.style.color = "red";
                            l.style.fontSize = "12px";
                            l.className += "agile_val_error";
                            m.parentNode.insertBefore(l, m.nextSibling);
                            g++;
                            o = false;
                            continue
                        }
                    } else {
                        if (m.value == "" && h) {
                            o = false;
                            g++;
                            continue
                        }
                    }
                }
            }
        }
        if (g != null) {
            o = false
        }
        if (n == "g-recaptcha-response") {
            var c = validateCaptcha();
            if (c != true) {
                if (a) {
                    var e = a.querySelectorAll(".g-recaptcha")[0];
                    var f = document.createElement("p");
                    f.setAttribute("id", "captcha-error-msg");
                    f.setAttribute("class", "captcha-error-msg-class");
                    f.innerHTML = "<span style='color:red;font-size: small;'>Please verify that you are not a robot.</span>";
                    if (a.querySelectorAll(".captcha-error-msg-class").length == 0) {
                        e.appendChild(f)
                    }
                    o = false;
                    g++;
                    continue
                } else {
                    var e = document.querySelectorAll(".g-recaptcha")[0];
                    var f = document.createElement("p");
                    f.setAttribute("id", "captcha-error-msg");
                    f.innerHTML = "<span style='color:red;font-size: small;'>Please verify that you are not a robot.</span>";
                    if (document.getElementById("captcha-error-msg") == null) {
                        e.appendChild(f)
                    }
                    o = false;
                    g++;
                    continue
                }
            }
        }
    }
    return o
}

function validateEmail(a) {
    var b = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (b.test(a)) {
        return true
    } else {
        return false
    }
}

function validatePhonenumber(b) {
    var a = /^(?=.*[0-9])[- +().0-9]+$/;
    if (a.test(b)) {
        return true
    } else {
        return false
    }
}

function validateCaptcha() {
    var a = grecaptcha.getResponse();
    if (a.length == 0) {
        return false
    } else {
        return true
    }
}
var agileGCaptchaOnSuccess = function(c, b) {
    if (b != null) {
        if (b.querySelectorAll(".captcha-error-msg-class").length > 0) {
            var a = b.querySelectorAll(".captcha-error-msg-class")[0]
        }
    } else {
        var a = document.getElementById("captcha-error-msg")
    }
    if (typeof a != "undefined" && a != null) {
        a.parentNode.removeChild(a)
    }
};

function validTagsString(d) {
    var b = "\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var c = "^[" + b + "][" + b + " 0-9_-]*$";
    d = d.split(",");
    for (var a = 0; a < d.length; a++) {
        if (!new RegExp(c).test(d[a])) {
            return false
        }
    }
    return true
}
var _agile_synch_form = function() {
    var j = document.querySelectorAll(".agile-button")[0];
    if (j) {
        j.setAttribute("disabled", "disabled")
    }
    var r = document.getElementById("agile-error-msg");
    if (r) {
        var l = document.createElement("img");
        l.src = "https://s3.amazonaws.com/PopupTemplates/form/spin.gif";
        r.appendChild(l)
    }
    var o = document.getElementById("agile-form");
    var s = document.getElementById("agile-form-data");
    var k = s.getAttribute("agile-redirect-url");
    var c = s.getAttribute("agile-api");
    var h = s.getAttribute("agile-domain");
    var m = {};
    var b = {};
    var g = undefined;
    var d = {};
    var q = true;
    for (var p = 0; p < o.length; p++) {
        var t = o[p].getAttribute("agile-field");
        var n = o[p].value;
        var f = o[p].getAttribute("id");
        var e = o[p].getAttribute("type");
        if ((e == "radio" || e == "checkbox") && !o[p].checked) {
            continue
        }
        if (t && n) {
            d[f] = n;
            if ("address, city, state, country, zip".indexOf(t) != -1) {
                b[t] = n
            } else {
                if (t == "tags") {
                    if (g) {
                        g = g + "," + n
                    } else {
                        g = n
                    }
                } else {
                    m[t] = n
                }
            }
        } else {
            if (n) {
                d[f] = n
            }
        }
    }
    b = JSON.stringify(b);
    if (b.length > 2) {
        m.address = b
    }
    if (g) {
        m.tags = g
    }
    var a = m.email;
    if (!(agile_id.get() && agile_id.getNamespace())) {
        _agile.set_account(c, h);
        _agile.track_page_view()
    }
    if (a) {
        _agile.set_email(a)
    }
    _agile.create_contact(m, {
        success: function(v) {
            var u = v.id;
            agile_formCallback(["", r], j, k, o, u, d, q)
        },
        error: function(u) {
            if (u.error.indexOf("Duplicate") != -1) {
                _agile.update_contact(m, {
                    success: function(w) {
                        q = false;
                        var v = w.id;
                        agile_formCallback(["", r], j, k, o, v, d, q)
                    },
                    error: function(v) {
                        agile_formCallback(["Error in sending data", r], j, k, o)
                    }
                })
            } else {
                agile_formCallback(["Error in sending data", r], j, k, o)
            }
        }
    })
};

function agile_addScore(c, d, b) {
    if (!c) {
        return
    }
    if (!b) {
        if (!agile_guid.get_email()) {
            agile_cookieScore("add", c);
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contacts/add-score?callback=?&id=" + agile_id.get() + "&score=" + c + "&email=" + encodeURIComponent(b);
    agile_json(a, d)
}

function agile_subtractScore(c, d, b) {
    if (!c) {
        return
    }
    if (!b) {
        if (!agile_guid.get_email()) {
            agile_cookieScore("delete", c);
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contacts/subtract-score?callback=?&id=" + agile_id.get() + "&score=" + c + "&email=" + encodeURIComponent(b);
    agile_json(a, d)
}

function agile_getScore(c, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contacts/get-score?callback=?&id=" + agile_id.get() + "&" + "email={0}".format(encodeURIComponent(b));
    agile_json(a, c)
}

function agile_allowedDomains(b) {
    var a = agile_id.getURL() + "/allowed-domains?callback=?&id=" + agile_id.get();
    agile_json(a, b)
}

function agile_getAllUsers(b) {
    var a = agile_id.getURL() + "/users?callback=?&id=" + agile_id.get();
    agile_json(a, b)
}
if (window.attachEvent) {
    window.attachEvent("onload", function() {
        appendFutureYears()
    })
} else {
    if (window.addEventListener) {
        window.addEventListener("load", function() {
            appendFutureYears()
        }, true)
    }
}

function appendFutureYears() {
    var c = new Date();
    var b = c.getFullYear();
    var g = document.getElementsByClassName("choose-year");
    if (g.length != 0) {
        for (var d = 0; d < g.length; d++) {
            var f = parseInt(g[d].getElementsByTagName("option")[1].value);
            if (f != (b + 3)) {
                for (var a = 1; a <= (b + 3) - f; a++) {
                    var e = document.createElement("option");
                    e.value = f + a;
                    e.innerText = f + a;
                    g[d].getElementsByTagName("option")[0].after(e)
                }
            }
        }
    }
}

function agile_removeCommonTags(d, c) {
    var f = d.length;
    while (--f >= 0) {
        var e = c.length;
        while (--e >= 0) {
            if (d[f] && d[f].trim() == c[e].trim()) {
                d.splice(f, 1);
                f = d.length
            }
        }
    }
    return d
}

function agile_cookieTags(b, g) {
    var h = agile_read_cookie(agile_guid.cookie_tags);
    if (!h) {
        if (g == "add") {
            agile_create_cookie(agile_guid.cookie_tags, b, 5 * 365)
        }
        return
    }
    var e = h.split(",");
    var a = b.split(",");
    agile_delete_cookie(agile_guid.cookie_tags);
    if (g == "delete") {
        var f = agile_removeCommonTags(e, a);
        if (f.length > 0) {
            agile_create_cookie(agile_guid.cookie_tags, f.toString(), 5 * 365)
        }
    }
    if (g == "add") {
        var d = agile_removeCommonTags(a, e);
        var c = d.length;
        while (--c >= 0) {
            e.push(d[c])
        }
        agile_create_cookie(agile_guid.cookie_tags, e.toString(), 5 * 365)
    }
    return
}

function agile_cookieScore(b, c) {
    var a = agile_read_cookie(agile_guid.cookie_score);
    if (!a) {
        if (b == "add" || b == "delete") {
            agile_create_cookie(agile_guid.cookie_score, c, 365 * 5)
        }
        return
    }
    c = parseInt(c);
    agile_delete_cookie(agile_guid.cookie_score);
    if (b == "add") {
        a = parseInt(a) + c
    }
    if (b == "delete") {
        a = parseInt(a) - c
    }
    if (a != 0) {
        agile_create_cookie(agile_guid.cookie_score, a.toString(), 365 * 5)
    }
    return
}

function agile_cookieCampaigns(b, a) {
    var c = agile_read_cookie(agile_guid.cookie_campaigns);
    if (!c) {
        if (b == "add") {
            c = [];
            c.push(a.id);
            agile_create_cookie(agile_guid.cookie_campaigns, c.toString(), 365 * 5)
        }
        return
    }
    c = c.split(",");
    agile_delete_cookie(agile_guid.cookie_campaigns);
    if (b == "add" || b == "delete") {
        c = agile_updateCookieCampaigns(b, a, c);
        if (c.length > 0) {
            agile_create_cookie(agile_guid.cookie_campaigns, c.toString(), 365 * 5)
        }
    }
    return
}

function agile_updateCookieCampaigns(c, b, d) {
    for (var a = 0; a < d.length; a++) {
        if (d[a] == b.id) {
            if (c == "add") {
                return d
            } else {
                if (c == "delete") {
                    d.splice(a, 1);
                    return d
                }
            }
        }
    }
    if (c == "add") {
        d.push(b.id);
        return d
    }
    if (c == "delete") {
        return d
    }
}

function agile_formCallback(j, d, a, l, h, f, k, b) {
    if (!j[0]) {
        if (h) {
            var e;
            if (f._agile_form_id) {
                e = true
            } else {
                e = false
            }
            var c = f._agile_form_name || (l.getElementsByTagName("legend")[0] ? l.getElementsByTagName("legend")[0].innerHTML : "");
            var g = agile_id.getURL() + "/formsubmit?id=" + agile_id.get() + "&contactid=" + h + "&formname=" + encodeURIComponent(c) + "&formdata=" + encodeURIComponent(JSON.stringify(f)) + "&new=" + k + "&checkId=" + e;
            agile_json(g)
        }
        setTimeout(function() {
            if (j[1]) {
                j[1].innerHTML = ""
            }
            if (d) {
                d.removeAttribute("disabled")
            }
            if (b) {
                var n = b.querySelectorAll('input[id="_agile_document_url"]')[0]
            } else {
                var n = document.getElementById("_agile_document_url")
            }
            var o = "";
            if (n) {
                o = n.value
            }
            var t = agile_guid.get_email();
            if (typeof t != "undefined") {
                if (a && a != "#" && o === "") {
                    var p = encodeURIComponent('{"email":"' + t + '"}');
                    var s = a.indexOf("?");
                    if (s != -1) {
                        window.location = a + "&fwd=cd&data=" + p
                    } else {
                        window.location = a + "?fwd=cd&data=" + p
                    }
                } else {
                    if (o !== "") {
                        if (b) {
                            var q = b.querySelectorAll('input[id="_agile_confirmation_msg"]')[0];
                            var r = "Great! Thanks for filling out the form.";
                            if (q) {
                                r = q.value
                            }
                            b.querySelectorAll('span[id="agile-error-msg"]')[0].innerHTML = '<br><span style="color:green; font-size: 13px;">' + r + '</span> <br> <span style="color:green;"><a style="text-decoration: none;" href=' + o + ">Click here</a> to download</span>";
                            var u = b;
                            if (typeof grecaptcha != "undefined") {
                                grecaptcha.reset()
                            }
                            u.reset()
                        } else {
                            var q = document.getElementById("_agile_confirmation_msg");
                            var r = "Great! Thanks for filling out the form.";
                            if (q) {
                                r = q.value
                            }
                            document.getElementById("agile-error-msg").innerHTML = '<br><span style="color:green; font-size: 13px;">' + r + '</span> <br> <span style="color:green;"><a style="text-decoration: none;" href=' + o + ">Click here</a> to download</span>";
                            var u = document.forms["agile-form"];
                            if (typeof grecaptcha != "undefined") {
                                grecaptcha.reset()
                            }
                            u.reset()
                        }
                    } else {
                        if (a && a == "#") {
                            if (b) {
                                var q = b.querySelectorAll('input[id="_agile_confirmation_msg"]')[0];
                                var r = "Great! Thanks for filling out the form.";
                                if (q) {
                                    r = q.value
                                }
                                b.querySelectorAll('span[id="agile-error-msg"]')[0].innerHTML = '<br><span style="color:green; font-size: 13px;">' + r + "</span>";
                                var u = b;
                                if (typeof grecaptcha != "undefined") {
                                    grecaptcha.reset()
                                }
                                u.reset()
                            } else {
                                var q = document.getElementById("_agile_confirmation_msg");
                                var r = "Great! Thanks for filling out the form.";
                                if (q) {
                                    r = q.value
                                }
                                document.getElementById("agile-error-msg").innerHTML = '<br><span style="color:green; font-size: 13px;">' + r + "</span>";
                                var u = document.forms["agile-form"];
                                if (typeof grecaptcha != "undefined") {
                                    grecaptcha.reset()
                                }
                                u.reset()
                            }
                        }
                    }
                }
            } else {
                if (b) {
                    if (a && a != "#" && o === "") {
                        window.location = a
                    } else {
                        if (o !== "") {
                            b.querySelectorAll('span[id="agile-error-msg"]')[0].innerHTML = '<br><span style="color:green; font-size: 13px;">Form submitted successfully</span> <br> <span style="color:green;"><a style="text-decoration: none;" href=' + o + ">Click here</a> to download</span>";
                            var u = b;
                            if (typeof grecaptcha != "undefined") {
                                grecaptcha.reset()
                            }
                            u.reset()
                        } else {
                            if (a && a == "#") {
                                var q = b.querySelectorAll('input[name="_agile_confirmation_msg"]')[0];
                                var r = "Great! Thanks for filling out the form.";
                                if (q) {
                                    r = q.value
                                }
                                b.querySelectorAll('span[id="agile-error-msg"]')[0].innerHTML = '<span style="color:green">' + r + "</span>";
                                var u = b;
                                if (typeof grecaptcha != "undefined") {
                                    grecaptcha.reset()
                                }
                                u.reset()
                            }
                        }
                    }
                } else {
                    if (a && a != "#" && o === "") {
                        window.location = a
                    } else {
                        if (o !== "") {
                            document.getElementById("agile-error-msg").innerHTML = '<br><span style="color:green; font-size: 13px;">Form submitted successfully</span> <br> <span style="color:green;"><a style="text-decoration: none;" href=' + o + ">Click here</a> to download</span>";
                            var u = document.forms["agile-form"];
                            if (typeof grecaptcha != "undefined") {
                                grecaptcha.reset()
                            }
                            u.reset()
                        } else {
                            if (a && a == "#") {
                                document.getElementById("agile-error-msg").innerHTML = '<span style="color:green">Form submitted successfully</span>';
                                var u = document.forms["agile-form"];
                                if (typeof grecaptcha != "undefined") {
                                    grecaptcha.reset()
                                }
                                u.reset()
                            }
                        }
                    }
                }
            }
            if (b != null) {
                var m = b.querySelectorAll('input[name="_agile_form_id"]')[0].value;
                agile_track_form_action({
                    id: m || null,
                    name: c,
                    email: t
                })
            } else {
                agile_track_form_action({
                    id: f._agile_form_id || null,
                    name: c,
                    email: t
                })
            }
        }, 1500)
    } else {
        if (j[1]) {
            j[1].innerHTML = j[0];
            if (d) {
                d.removeAttribute("disabled")
            }
        }
    }
}

function _agile_load_form_fields() {
    var a = agile_read_cookie("agile-email");
    if (!a) {
        return
    }
    _agile.get_contact(a, {
        success: function(h) {
            if (h) {
                var n = {};
                var m = h.properties;
                for (var b = 0; b < m.length; b++) {
                    if (m[b].name == "address") {
                        var f = JSON.parse(m[b].value);
                        var o = Object.keys(f);
                        for (var j = 0; j < o.length; j++) {
                            n[o[j]] = f[o[j]]
                        }
                    } else {
                        n[m[b].name] = m[b].value
                    }
                }
                var c = document.getElementById("agile-form");
                for (var q = 0; q < c.length; q++) {
                    if (n[c[q].name] && c[q].type != "checkbox" && c[q].type != "radio") {
                        if (c[q].name != "country") {
                            c[q].value = n[c[q].name]
                        } else {
                            if (c[q].name == "country") {
                                if (n.countryname) {
                                    c[q].value = n.countryname
                                } else {
                                    c[q].value = n[c[q].name]
                                }
                            }
                        }
                        if (c[q].className.indexOf("date-hiddeninput") != -1) {
                            if (/^\d+$/.test(n[c[q].name])) {
                                var p = new Date();
                                p.setUTCSeconds(n[c[q].name])
                            } else {
                                var p = new Date(n[c[q].name])
                            }
                            var g = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                            var e = ("0" + p.getDate()).slice(-2);
                            var k = p.getMonth();
                            var l = ("0" + p.getFullYear()).slice(-4);
                            var d = c[q].closest(".agile-group");
                            d.getElementsByClassName("choose-date")[0].value = e;
                            d.getElementsByClassName("choose-month")[0].value = g[k];
                            d.getElementsByClassName("choose-year")[0].value = l
                        }
                    } else {
                        if (n[c[q].name] && (c[q].type == "checkbox" || c[q].type == "radio")) {
                            if (c[q].name != "country") {
                                if (c[q].value == n[c[q].name]) {
                                    c[q].checked = true
                                }
                            } else {
                                if (c[q].name == "country") {
                                    if (n.countryname) {
                                        if (c[q].value == n.countryname) {
                                            c[q].checked = true
                                        }
                                    } else {
                                        if (c[q].value == n[c[q].name]) {
                                            c[q].checked = true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        error: function(b) {
            return
        }
    })
}

function getParameterByName(a) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var c = new RegExp("[\\?&]" + a + "=([^&#]*)"),
        b = c.exec(location.search);
    return b == null ? "" : decodeURIComponent(b[1].replace(/\+/g, " "))
}

function agile_setUtmParams() {
    try {
        if (!agile_read_data("agile_utm_source")) {
            var f = getParameterByName("utm_source");
            if (f) {
                agile_store_data("agile_utm_source", f, 90)
            }
        }
        if (!agile_read_data("agile_utm_medium")) {
            var c = getParameterByName("utm_medium");
            if (c) {
                agile_store_data("agile_utm_medium", c, 90)
            }
        }
        if (!agile_read_data("agile_utm_campaign")) {
            var b = getParameterByName("utm_campaign");
            if (b) {
                agile_store_data("agile_utm_campaign", b, 90)
            }
        }
        if (!agile_read_data("agile_utm_content")) {
            var a = getParameterByName("utm_content");
            if (a) {
                agile_store_data("agile_utm_content", a, 90)
            }
        }
        if (!agile_read_data("agile_utm_term")) {
            var d = getParameterByName("utm_term");
            if (d) {
                agile_store_data("agile_utm_term", d, 90)
            }
        }
    } catch (e) {
        console.log("Error while setting utm params - " + e)
    }
}

function agile_getUtmParams() {
    var g = {};
    try {
        var e = agile_read_data("agile_utm_source");
        var b = agile_read_data("agile_utm_medium");
        var f = agile_read_data("agile_utm_campaign");
        var d = agile_read_data("agile_utm_content");
        var a = agile_read_data("agile_utm_term");
        if (e) {
            g.utm_source = e
        }
        if (b) {
            g.utm_medium = b
        }
        if (f) {
            g.utm_campaign = f
        }
        if (a) {
            g.utm_term = a
        }
        if (d) {
            g.utm_content = d
        }
        return g
    } catch (c) {
        console.log("Error occured while getting utm params - " + c)
    }
}

function _agile_check_function_caller_is_console() {
    try {
        var a;
        try {
            throw new Error()
        } catch (d) {
            a = d.stack
        }
        if (!a) {
            return false
        }
        var b = a.split("\n");
        for (var c = 0; c < b.length; c++) {
            if (b[c].indexOf("at Object.InjectedScript.") >= 0) {
                return true
            }
            if (b[c].indexOf("@debugger eval code") == 0) {
                return true
            }
            if (b[c].indexOf("_evaluateOn") == 0) {
                return true
            }
        }
        return false
    } catch (d) {
        console.log(d);
        return false
    }
}

function agile_find_closest_element(a, b) {
    return a && (b(a) ? a : agile_find_closest_element(a.parentNode, b))
}
var agile_guid = {
    init: function() {
        this.cookie_name = "agile-crm-guid";
        this.cookie_email = "agile-email";
        this.cookie_original_ref = "agile-original-referrer";
        this.cookie_tags = "agile-tags";
        this.cookie_score = "agile-score";
        this.cookie_campaigns = "agile-campaigns";
        this.new_guid = false
    },
    random: function() {
        var a = function() {
            return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
        };
        return (a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a())
    },
    get: function() {
        var a = agile_read_cookie(this.cookie_name);
        if (!a) {
            a = this.generate()
        }
        return a
    },
    generate: function() {
        guid = this.random();
        agile_create_cookie(this.cookie_name, guid, 365 * 5);
        this.set_original_referrer();
        this.new_guid = true;
        return guid
    },
    reset: function() {
        agile_create_cookie(this.cookie_name, "", -1)
    },
    set_email: function(a) {
        var b = agile_read_cookie(this.cookie_email);
        if (!b || (b != a)) {
            this.email = a;
            if (b) {
                this.reset();
                agile_session.reset()
            }
            agile_create_cookie(this.cookie_email, this.email, 365 * 5)
        }
    },
    get_email: function() {
        if (this.email) {
            return this.email
        }
        var a = agile_read_cookie(this.cookie_email);
        return a
    },
    set_original_referrer: function() {
        var a = document.referrer;
        if (a) {
            agile_create_cookie(this.cookie_original_ref, a, 365 * 5)
        }
    }
};
agile_guid.init();

function agile_setAccount(c, b, a) {
    agile_id.set(c, b, a);
    agile_setEmailFromUrl()
}

function agile_setEmailFromUrl() {
    if (window.location.href.search("fwd=cd") !== -1) {
        try {
            var a = decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI("data").replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
            if (a) {
                agile_guid.set_email(JSON.parse(a).email)
            }
        } catch (b) {
            console.log(b.message)
        }
    }
}

function _agile_set_whitelist(a) {
    window["agile-domain"] = a
}

function agile_addTask(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "task={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/task?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_getTasks(c, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contacts/get-tasks?callback=?&id=" + agile_id.get() + "&" + "email={0}".format(encodeURIComponent(b));
    agile_json(a, c)
}
var _agile_synch_form_v2 = function() {
    var j = document.querySelectorAll(".agile-button")[0];
    if (j) {
        j.setAttribute("disabled", "disabled")
    }
    var u = document.getElementById("agile-error-msg");
    if (u) {
        var l = document.createElement("img");
        l.src = "https://s3.amazonaws.com/PopupTemplates/form/spin.gif";
        u.appendChild(l)
    }
    var o = document.getElementById("agile-form");
    var w = document.getElementById("agile-form-data").getAttribute("name").split(" ");
    var k = w[2];
    var c = w[1];
    var h = w[0];
    var v = h + " " + c + " " + k + " ";
    var p = document.getElementById("agile-form-data").getAttribute("name").replace(v, "");
    var m = {};
    var b = {};
    var g = undefined;
    var t = [];
    var d = {};
    var s = true;
    for (var q = 0; q < o.length; q++) {
        var x = o[q].getAttribute("name");
        var n = o[q].value;
        var f = o[q].getAttribute("id");
        var e = o[q].getAttribute("type");
        if ((e == "radio" || e == "checkbox") && !o[q].checked) {
            continue
        }
        if (x && n) {
            d[f] = n;
            if ("address, city, state, country, zip".indexOf(x) != -1) {
                b[x] = n
            } else {
                if (x == "tags") {
                    if (g) {
                        g = g + "," + n
                    } else {
                        g = n
                    }
                } else {
                    if (x == "note") {
                        var r = {};
                        r.subject = o[q].parentNode.parentNode.getElementsByTagName("label")[0].innerHTML;
                        r.description = n;
                        t.push(r)
                    } else {
                        m[x] = n
                    }
                }
            }
        } else {
            if (n) {
                d[f] = n
            }
        }
    }
    b = JSON.stringify(b);
    if (b.length > 2) {
        m.address = b
    }
    if (g) {
        if (p) {
            m.tags = g + "," + p
        } else {
            m.tags = g
        }
    } else {
        if (p) {
            m.tags = p
        }
    }
    var a = m.email;
    if (!(agile_id.get() && agile_id.getNamespace())) {
        _agile.set_account(c, h);
        _agile.track_page_view()
    }
    if (a) {
        _agile.set_email(a)
    }
    _agile.create_contact(m, {
        success: function(A) {
            var z = A.id;
            var B = 0;
            if (t.length > 0) {
                for (var y = 0; y < t.length; y++) {
                    _agile.add_note(t[y], {
                        success: function(C) {
                            B++;
                            if (B == t.length) {
                                agile_formCallback(["", u], j, k, o, z, d, s)
                            }
                        },
                        error: function(C) {
                            agile_formCallback(["Error in sending data", u], j, k, o)
                        }
                    })
                }
            } else {
                agile_formCallback(["", u], j, k, o, z, d, s)
            }
        },
        error: function(y) {
            if (y.error.indexOf("Duplicate") != -1) {
                _agile.update_contact(m, {
                    success: function(B) {
                        s = false;
                        var A = B.id;
                        var C = 0;
                        if (t.length > 0) {
                            for (var z = 0; z < t.length; z++) {
                                _agile.add_note(t[z], {
                                    success: function(D) {
                                        C++;
                                        if (C == t.length) {
                                            agile_formCallback(["", u], j, k, o, A, d, s)
                                        }
                                    },
                                    error: function(D) {
                                        agile_formCallback(["Error in sending data", u], j, k, o)
                                    }
                                })
                            }
                        } else {
                            agile_formCallback(["", u], j, k, o, A, d, s)
                        }
                    },
                    error: function(z) {
                        agile_formCallback(["Error in sending data", u], j, k, o)
                    }
                })
            } else {
                agile_formCallback(["Error in sending data", u], j, k, o)
            }
        }
    })
};

function agile_read_cookie(b) {
    b = agile_id.get() + "-" + b;
    var e = b + "=";
    var a = document.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length)
        }
        if (f.indexOf(e) == 0) {
            return unescape_html(unescape(f.substring(e.length, f.length)))
        }
    }
    return null
}

function show_cookie_banner(b) {
    var c = '<div style="background: #333; position: fixed; bottom: 0; left:0; width: 100%;"><div  style="margin: 0 auto; width: 70%; color: #f0f0f0; padding: 15px;"><p style="font-size: small;">' + b.banner_text + ' </p> <a href=""  style="background: #ccc; color: #333; text-decoration: none; padding: 0px 10px; border-radius: 3px; display: inline-block; border: 1px solid #aaa; border-bottom: 2px solid #aaa; cursor: pointer;" onclick="add_cookie()">' + b.accept_caption + '</a> &nbsp; <a href=""  style="background: #ccc; color: #333; text-decoration: none; padding: 0px 10px; border-radius: 3px; display: inline-block; border: 1px solid #aaa; border-bottom: 2px solid #aaa; cursor: pointer;" onclick="decline_cookie()">' + b.decline_caption + '</a><p style="font-size: small;">' + b.note_text + "</p></div></div>";
    var a = document.createElement("div");
    a.setAttribute("id", "myConsent");
    a.setAttribute("style", "z-index: 10; overflow-x: overlay; overflow-y: overlay; top: 0; position: absolute; left: 0;");
    document.body.appendChild(a);
    document.getElementById("myConsent").innerHTML = c
}

function add_cookie() {
    event.preventDefault();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("agile_cookie_concern", true);
        hide_banner()
    }
}

function hide_banner() {
    var a = document.querySelector("#myConsent");
    a.style.display = "none"
}

function decline_cookie() {
    event.preventDefault();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("agile_cookie_concern", false);
        hide_banner()
    }
}

function agile_create_cookie_callback() {
    return {
        success: function(a) {
            if (!document.getElementById("myConsent")) {
                show_cookie_banner(a)
            }
        },
        error: function(a) {
            console.log(a)
        }
    }
}

function agile_create_cookie(c, d, e) {
    if (agile_id.getEnable()) {
        if (localStorage.getItem("agile_cookie_concern") == null) {
            var b = agile_id.getURL() + "/consent-cookie?callback=?&id=" + agile_id.get();
            agile_json(b, agile_create_cookie_callback())
        } else {
            if (localStorage.getItem("agile_cookie_concern") == "true") {
                agile_create_cookie_helper(c, d, e)
            }
        }
    } else {
        agile_create_cookie_helper(c, d, e)
    }
}

function agile_create_cookie_helper(c, e, f) {
    c = agile_id.get() + "-" + c;
    if (f) {
        var b = new Date();
        b.setTime(b.getTime() + (f * 24 * 60 * 60 * 1000));
        var a = "; expires=" + b.toGMTString()
    } else {
        var a = ""
    }
    var d = "";
    if (agile_id.getDomain()) {
        d = ";domain=" + agile_id.getDomain()
    }
    e = encode_cookie(e);
    document.cookie = c + "=" + escape(e) + a + "; path=/" + d
}

function agile_createCookieInAllAgileSubdomains(c, d, e) {
    if (e) {
        var b = new Date();
        b.setTime(b.getTime() + (e * 24 * 60 * 60 * 1000));
        var a = "; expires=" + b.toGMTString()
    } else {
        var a = ""
    }
    document.cookie = c + "=" + escape(d) + a + "; path=/; domain=agilecrm.com"
}

function agile_delete_cookie(a) {
    agile_create_cookie(a, "", -1)
}

function agile_store_data(a, b, c) {
    if (typeof(Storage) !== "undefined") {
        if (agile_islocalStorageHasSpace()) {
            localStorage.setItem(a, b)
        }
    } else {
        agile_create_cookie(a, b, c)
    }
}

function agile_read_data(a) {
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem(a)
    } else {
        return agile_read_cookie(a)
    }
}

function agile_erase_data(a) {
    if (typeof(Storage) !== "undefined") {
        return localStorage.removeItem(a)
    } else {
        return agile_delete_cookie(a)
    }
}

function agile_islocalStorageHasSpace() {
    var a = false;
    var c = 1242597;
    var b = 1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length;
    if (b) {
        if (b > c) {
            a = true
        }
    } else {
        a = true
    }
    return a
}

function encode_cookie(b) {
    try {
        b = JSON.parse(b)
    } catch (c) {}
    if (b instanceof Array) {
        for (var a = 0; a < b.length; a++) {
            b[a] = escape_json_values(b[a])
        }
    } else {
        if (typeof b == "object") {
            return escape_json_values(b)
        }
    }
    return b
}

function escape_html(a) {
    if (!a) {
        return
    }
    a = a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&#34;").replace(/'/g, "&#039;");
    return a
}

function escape_json_values(a) {
    if (!a) {
        return
    }
    try {
        a = JSON.stringify(a)
    } catch (b) {
        return escape_html(a)
    }
    return escape_html(a)
}

function unescape_html(a) {
    if (!a) {
        return
    }
    a = a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#34;/g, '"').replace(/&#039;/g, "'");
    return a
}

function agile_getPipelines(b) {
    var a = agile_id.getURL() + "/milestone/get-pipelines?callback=?&id=" + agile_id.get();
    agile_json(a, b)
}

function agile_getMilestones(b) {
    var a = agile_id.getURL() + "/contact/get-milestones?callback=?&id=" + agile_id.get();
    agile_json(a, b)
}

function agile_getMilestones_by_pipeline(b, c) {
    var a = agile_id.getURL() + "/milestone/get-milestones?callback=?&id=" + agile_id.get() + "&pipeline_id=" + b;
    agile_json(a, c)
}

function _agile_synch_form_v5(e) {
    if (e.querySelectorAll(".agile_span_date_error").length > 0) {
        return
    }
    if (!agile_validations(e)) {
        var m = document.getElementsByClassName("agile_val_error");
        if (m.length) {
            try {
                m[0].previousSibling.focus()
            } catch (f) {
                return
            }
        }
        return
    }
    var l = e.querySelectorAll('input[type="email"]')[0];
    if (l) {
        _agile.set_email(l.value)
    }
    var b = e.action + "?cors=true";
    var d = "";
    var c = e.querySelectorAll('span[id="agile-error-msg"]')[0];
    if (c) {
        var a = document.createElement("img");
        a.src = "https://s3.amazonaws.com/PopupTemplates/form/spin.gif";
        c.appendChild(a)
    }
    var d = {};
    for (var k = 0; k < e.length; k++) {
        if (e[k].name) {
            if ((e[k].type == "select-one" || e[k].type == "select-multiple")) {
                var h = e[k].options.length;
                for (var g = 0; g < h; g++) {
                    if (e[k].options[g].selected) {
                        if (d.hasOwnProperty(e[k].name)) {
                            d[e[k].name] = d[e[k].name] + "," + e[k].value
                        } else {
                            d[e[k].name] = e[k].value
                        }
                    }
                }
            } else {
                if ((e[k].type == "radio" || e[k].type == "checkbox")) {
                    if (e[k].checked) {
                        if (d.hasOwnProperty(e[k].name)) {
                            d[e[k].name] = d[e[k].name] + "," + e[k].value
                        } else {
                            d[e[k].name] = e[k].value
                        }
                    }
                } else {
                    if (d.hasOwnProperty(e[k].name)) {
                        d[e[k].name] = d[e[k].name] + "," + e[k].value
                    } else {
                        d[e[k].name] = e[k].value
                    }
                }
            }
        }
    }
    if (typeof AGILE_CRM_FORM_SUBMIT_HANDLER !== "undefined" && typeof AGILE_CRM_FORM_SUBMIT_HANDLER === "function") {
        AGILE_CRM_FORM_SUBMIT_HANDLER(b, d, e, c)
    } else {
        d = _agile_form_serialize(d);
        _agile_sendRequest(b, d, e, c)
    }
}

function _agile_getUtmParamsForV5(c) {
    try {
        var e = agile_getUtmParams();
        for (var d in e) {
            if (e.hasOwnProperty(d)) {
                var a = document.createElement("input");
                a.type = "hidden";
                a.name = "_agile_" + d;
                a.value = e[d];
                c.appendChild(a)
            }
        }
    } catch (b) {
        console.debug(b)
    }
}

function _agile_form_serialize(b) {
    var c = [];
    for (var a in b) {
        if (b.hasOwnProperty(a)) {
            c.push(encodeURIComponent(a) + "=" + encodeURIComponent(b[a]))
        }
    }
    return c.join("&")
}

function _agile_sendRequest(b, a, f, c) {
    var e = _agile_createXMLHTTPObject();
    if (e && "withCredentials" in e) {
        var d = "POST";
        e.open(d, b, true);
        if (a) {
            e.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        }
        _agile_requestData(e, b, a, f, c)
    } else {
        f.method = "POST";
        throw new Error("Error occured!")
    }
}
var _agileXMLHttpFactories = [function() {
    return new XMLHttpRequest()
}, function() {
    return new ActiveXObject("Msxml2.XMLHTTP")
}, function() {
    return new ActiveXObject("Msxml3.XMLHTTP")
}, function() {
    return new ActiveXObject("Microsoft.XMLHTTP")
}];

function _agile_createXMLHTTPObject() {
    var b = false;
    for (var a = 0; a < _agileXMLHttpFactories.length; a++) {
        try {
            b = _agileXMLHttpFactories[a]()
        } catch (c) {
            continue
        }
        break
    }
    return b
}

function _agile_requestData(e, b, a, f, c) {
    var d = f.querySelectorAll('input[name="_agile_redirect_url"]')[0].value;
    var g = f.querySelector('button[type="submit"]');
    e.onreadystatechange = function() {
        if (e.readyState != 4) {
            return
        }
        if (e.status != 200 && e.status != 304) {
            return
        }
    };
    if (e.readyState == 4) {
        return
    }
    if (e.addEventListener) {
        e.addEventListener("load", function(k) {
            var j;
            var h = k.target.responseText;
            if (h.indexOf("Error:") > -1) {
                j = h.split("Error:")[1]
            } else {
                if (h.indexOf("Error") > -1) {
                    j = "Server side error"
                }
            }
            agile_formCallback([j, c], g, d, null, null, null, null, f)
        });
        e.addEventListener("error", function(h) {
            alert("Oops! Something goes wrong.")
        })
    } else {
        e.onload = function(k) {
            var j;
            var h = k.target.responseText;
            if (h.indexOf("Error:") > -1) {
                j = h.split("Error:")[1]
            } else {
                if (h.indexOf("Error") > -1) {
                    j = "Server side error"
                }
            }
            agile_formCallback([j, c], g, d, null, null, null, null, f)
        };
        e.onerror = function(h) {
            alert("Oops! Something goes wrong.")
        }
    }
    e.send(a)
}
var agile_id = {
    set: function(c, b, a) {
        this.id = c;
        this.namespace = b;
        this.enable = a
    },
    get: function() {
        return this.id
    },
    getEnable: function() {
        return this.enable
    },
    getURL: function() {
        return this.getDomainHostURL() + "/core/js/api"
    },
    getNamespace: function() {
        return this.namespace
    },
    setDomain: function(a) {
        this.domain = a
    },
    getDomain: function() {
        return this.domain
    },
    getDomainHostURL: function() {
        if (!this.namespace || this.namespace == "localhost") {
            return "http://localhost:8888"
        } else {
            if (typeof AGILE_DOMAIN_HOST_URL !== "undefined") {
                AGILE_DOMAIN_HOST_URL = AGILE_DOMAIN_HOST_URL.replace("{domain}", this.namespace);
                return AGILE_DOMAIN_HOST_URL.replace(/\/$/, "")
            } else {
                return "https://" + this.namespace + ".agilecrm.com"
            }
        }
    }
};
var agile_session = {
    init: function() {
        this.cookie_name = "agile-crm-session_id";
        this.cookie_start_time = "agile-crm-session_start_time";
        this.cookie_duration_secs = 60 * 1000;
        this.new_session = false
    },
    random: function() {
        var a = function() {
            return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
        };
        return (a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a())
    },
    get: function() {
        var b = agile_read_cookie(this.cookie_name);
        if (!b) {
            return this.generate()
        }
        var a = agile_read_cookie(this.cookie_start_time);
        var c = new Date().getUTCSeconds();
        if ((c < a) || (c > (a + this.cookie_duration_secs))) {
            return this.generate()
        }
        return b
    },
    generate: function() {
        var a = this.random();
        agile_create_cookie(this.cookie_name, a, 0);
        agile_create_cookie(this.cookie_start_time, new Date().getUTCSeconds(), 0);
        this.new_session = true;
        return a
    },
    reset: function() {
        agile_create_cookie(this.cookie_name, "", -1);
        agile_create_cookie(this.cookie_start_time, "", -1)
    }
};
agile_session.init();

function agile_addTag(c, e, b) {
    if (!c) {
        return
    }
    if (!b) {
        if (!agile_guid.get_email()) {
            agile_cookieTags(c, "add");
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "email={0}&tags={1}".format(encodeURIComponent(b), encodeURIComponent(c));
    var a = agile_id.getURL() + "/contacts/add-tags?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_removeTag(c, e, b) {
    if (!c) {
        return
    }
    if (!b) {
        if (!agile_guid.get_email()) {
            agile_cookieTags(c, "delete");
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "email={0}&tags={1}".format(encodeURIComponent(b), encodeURIComponent(c));
    var a = agile_id.getURL() + "/contacts/remove-tags?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_getTags(d, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var c = "email={0}".format(encodeURIComponent(b));
    var a = agile_id.getURL() + "/contacts/get-tags?callback=?&id=" + agile_id.get() + "&" + c;
    agile_json(a, d)
}

function utmHiddenField() {
    var d = "";
    for (var b = 0, a = localStorage.length; b < a; ++b) {
        if (localStorage.key(b).indexOf("agile_utm_") != -1) {
            d += '<input type="hidden" name="_' + localStorage.key(b) + '" value="' + localStorage.getItem(localStorage.key(b)) + '">'
        }
    }
    if (d) {
        var c = document.createElement("div");
        c.innerHTML = d;
        document.getElementById("agile-form").appendChild(c)
    }
}

function deleteAgileHiddenFields(a) {
    for (var b in a) {
        if (b.indexOf("_agile_") != -1) {
            delete a[b]
        }
    }
    return a
}

function agileUtmOnLoadFormFunction() {
    if (document.getElementById("agile-form") != null) {
        utmHiddenField()
    }
}
agileOnLoadEventListener("load", window, agileUtmOnLoadFormFunction);

function agile_trackPageview(j) {
    var b = "https://stats2.agilecrm.com";
    var g = agile_guid.get();
    var c = agile_session.get();
    var a = document.location.href || "";
    var e = agile_id.get();
    var d = "";
    if (agile_session.new_session) {
        var h = document.referrer || "";
        d = "guid={0}&sid={1}&url={2}&agile={3}&new=1&ref={4}".format(g, c, encodeURIComponent(a), e, encodeURIComponent(h))
    } else {
        d = "guid={0}&sid={1}&url={2}&agile={3}".format(g, c, encodeURIComponent(a), e)
    }
    if (agile_guid.get_email()) {
        d += "&email=" + encodeURIComponent(agile_guid.get_email())
    }
    if (agile_id.getNamespace()) {
        d += "&domain=" + encodeURIComponent(agile_id.getNamespace())
    }
    agile_setUtmParams();
    var f = b + "/addstats?callback=?&" + d;
    agile_json(f)
}

function agile_trackingDomain(a) {
    agile_id.setDomain(a)
}

function agile_addCampaign(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            agile_cookieCampaigns("add", c);
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "data={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/contacts/add-campaign?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_getCampaigns(c, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contacts/get-campaigns?callback=?&id=" + agile_id.get() + "&" + "email={0}".format(encodeURIComponent(b));
    agile_json(a, c)
}

function agile_getCampaignlogs(c, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var a = agile_id.getURL() + "/contacts/get-campaign-logs?callback=?&id=" + agile_id.get() + "&" + "email={0}".format(encodeURIComponent(b));
    agile_json(a, c)
}

function agile_getWorkflows(b) {
    var a = agile_id.getURL() + "/contacts/get-workflows?callback=?&id=" + agile_id.get();
    agile_json(a, b)
}

function agile_unsubscribeCampaign(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            agile_cookieCampaigns("delete", c);
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "data={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/contacts/unsubscribe-campaign?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_createCase(c, e, b) {
    if (!b) {
        if (!agile_guid.get_email()) {
            return
        } else {
            b = agile_guid.get_email()
        }
    }
    var d = "case={0}&email={1}".format(encodeURIComponent(JSON.stringify(c)), encodeURIComponent(b));
    var a = agile_id.getURL() + "/case?callback=?&id=" + agile_id.get() + "&" + d;
    agile_json(a, e)
}

function agile_propertyJSON(a, d, c) {
    var b = {};
    if (c == undefined) {
        switch (a) {
            case "first_name":
            case "last_name":
            case "email":
            case "company":
            case "title":
            case "name":
            case "url":
            case "website":
            case "address":
            case "phone":
            case "original_ref":
                b.type = "SYSTEM";
                break;
            default:
                b.type = "CUSTOM";
                break
        }
    } else {
        b.type = c
    }
    b.name = a;
    b.value = d;
    return b
}
var agile_json_timer;

function agile_json(a, c) {
    if (!document.body) {
        clearInterval(agile_json_timer);
        agile_json_timer = setInterval(function() {
            agile_json(a, c)
        }, 100);
        return
    }
    clearInterval(agile_json_timer);
    var b = "json" + (Math.random() * 100).toString().replace(/\./g, "");
    window[b] = function(d) {
        if (d.error) {
            if (c && typeof(c.error) == "function") {
                c.error(d)
            }
            return
        }
        if (c && typeof(c.success) == "function") {
            c.success(d)
        }
        if (c && typeof(c) == "function") {
            c(d)
        }
    };
    document.getElementsByTagName("body")[0].appendChild((function() {
        var d = document.createElement("script");
        d.type = "application/javascript";
        d.src = a.replace("callback=?", "callback=" + b);
        return d
    })())
}
String.prototype.format = function() {
    var a = arguments;
    if (this instanceof String) {
        return this.replace(/{(\d+)}/g, function(b, c) {
            return typeof a[c] != "undefined" ? a[c] : b
        })
    }
};
var Agile_API = Agile_API || {};
(function() {
    try {
        Agile_API.on_after_load()
    } catch (a) {}
})();