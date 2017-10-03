
var Flask = new (function(){
    'use strict';
    return {
        '_endpoints': [["section_submissions", ["/sections/", "/submissions/problem/", ""], ["section_identifier", "problem_id"]], ["section_submissions", ["/sections/", "/submissions/student/", ""], ["section_identifier", "username"]], ["course_submissions", ["/courses/", "/submissions/problem/", ""], ["course_identifier", "problem_id"]], ["course_submissions", ["/courses/", "/submissions/student/", ""], ["course_identifier", "username"]], ["submit50_results", ["/submit50/results/", "/", ""], ["username", "commit_hash"]], ["submit50_status", ["/submit50/status/", "/", ""], ["username", "commit_hash"]], ["section_gradebook", ["/sections/", "/scores/", ""], ["section_identifier", "username"]], ["check50_results", ["/check50/results/", "/", ""], ["username", "commit_hash"]], ["check50_status", ["/check50/status/", "/", ""], ["username", "commit_hash"]], ["gradebook", ["/courses/", "/scores/", ""], ["course_identifier", "username"]], ["section", ["/sections/", "/", ""], ["section_identifier", "page"]], ["course", ["/courses/", "/", ""], ["course_identifier", "page"]], ["new_course_problem", ["/courses/", "/branches/add"], ["course_identifier"]], ["new_section", ["/courses/", "/sections/new"], ["course_identifier"]], ["course_gradebook_download", ["/courses/", "/scores/download"], ["course_identifier"]], ["section_submissions", ["/sections/", "/submissions"], ["section_identifier"]], ["section_gradebook", ["/sections/", "/scores"], ["section_identifier"]], ["course_submissions", ["/courses/", "/submissions"], ["course_identifier"]], ["gradebook", ["/courses/", "/scores"], ["course_identifier"]], ["join_course", ["/courses/", "/join"], ["course_identifier"]], ["check_info", ["/checks/", "/info"], ["commit_hash"]], ["check_results", ["/checks/", ""], ["commit_hash"]], ["app_status", ["/status/", ""], ["app_name"]], ["static", ["/static/", ""], ["filename"]], ["add_student_to_section", ["/data/section/students/add"], []], ["problem_status_change", ["/data/problem/status/change"], []], ["add_grader_to_section", ["/data/section/heads/add"], []], ["reorder_course_problems", ["/data/course/problems/reorder"], []], ["delete_course_problem", ["/data/course/problems/delete"], []], ["edit_course_problem", ["/data/course/problems/edit"], []], ["delete_course_student", ["/data/course/roster/delete"], []], ["authorize_edx", ["/account/link/edx/"], []], ["webhook_comment", ["/hooks/submit50/comment"], []], ["hook_submit50_push", ["/hooks/submit50/push"], []], ["hook_check50_push", ["/hooks/check50/push"], []], ["submit_score", ["/data/score/submit"], []], ["change_timezone", ["/data/user/timezone"], []], ["submit50_version", ["/versions/submit50"], []], ["new_course", ["/courses/new"], []], ["resubmit_submission", ["/scores/resubmit"], []], ["hook_travis_build", ["/hooks/travis"], []], ["hook_ecs_task", ["/hooks/ecs"], []], ["submission_data", ["/data/submission"], []], ["redirect_uri_edx", ["/auth/edx"], []], ["api.course_info", ["/course"], []], ["api.foo", ["/foo"], []], ["problems", ["/submissions"], []], ["rate_limit", ["/rate_limit/"], []], ["serve_js", ["/jsglue.js"], []], ["authorize", ["/authorize"], []], ["classes", ["/gradebook"], []], ["account", ["/account"], []], ["classes", ["/courses"], []], ["health", ["/health"], []], ["logout", ["/logout/"], []], ["login", ["/login/"], []], ["index", ["/"], []]],
        'url_for': function(endpoint, rule) {
            if(typeof rule === "undefined") rule = {};

            var has_everything = false, url = "";

            var is_absolute = false, has_anchor = false, has_scheme;
            var anchor = "", scheme = "";

            if(rule['_external'] === true) {
                is_absolute = true;
                scheme = location.protocol.split(':')[0];
                delete rule['_external'];
            }

            if('_scheme' in rule) {
                if(is_absolute) {
                    scheme = rule['_scheme'];
                    delete rule['_scheme'];
                } else {
                    throw {name:"ValueError", message:"_scheme is set without _external."};
                }
            }

            if('_anchor' in rule) {
                has_anchor = true;
                anchor = rule['_anchor'];
                delete rule['_anchor'];
            }

            for(var i in this._endpoints) {
                if(endpoint == this._endpoints[i][0]) {
                    var url = '';
                    var j = 0;
                    var has_everything = true;
                    var used = {};
                    for(var j = 0; j < this._endpoints[i][2].length; j++) {
                        var t = rule[this._endpoints[i][2][j]];
                        if(typeof t === "undefined") {
                            has_everything = false;
                            break;
                        }
                        url += this._endpoints[i][1][j] + t;
                        used[this._endpoints[i][2][j]] = true;
                    }
                    if(has_everything) {
                        if(this._endpoints[i][2].length != this._endpoints[i][1].length)
                            url += this._endpoints[i][1][j];

                        var first = true;
                        for(var r in rule) {
                            if(r[0] != '_' && !(r in used)) {
                                if(first) {
                                    url += '?';
                                    first = false;
                                } else {
                                    url += '&';
                                }
                                url += r + '=' + rule[r];
                            }
                        }
                        if(has_anchor) {
                            url += "#" + anchor;
                        }

                        if(is_absolute) {
                            return scheme + "://" + location.host + url;
                        } else {
                            return url;
                        }
                    }
                }
            }

            throw {name: 'BuildError', message: "Couldn't find the matching endpoint."};
        }
    };
});