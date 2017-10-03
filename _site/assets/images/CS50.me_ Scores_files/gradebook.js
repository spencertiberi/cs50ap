$(document).ready(function() {

    // Enable tooltips.
    $('[data-toggle="tooltip"]').tooltip()

    // Show scores for currently selected submission.
    function show_submission_scores() {

        // Get the selected problem.
        var problem = $(this).data('problem');
        var submission_id = $(this).val();
        var hash = $(this).find(':selected').data('hash');
        var username = $(this).find(':selected').data('username');

        // Hide all problem spans.
        $('.scoring-area[data-problem="' + problem + '"]').css('display', 'none');
        $('.final-score-area[data-problem="' + problem + '"]').css('display', 'none');

        // Show the selected spans.
        $('.scoring-area[data-individual="' + submission_id + '"]').css('display', 'inline');
        var final_score = $('.final-score-area[data-individual="' + submission_id + '"]');
        final_score.css('display', 'inline');

        // Set data sort value for columns.
        $('.scoring-cell[data-problem="' + problem + '"]').data('sort-value', final_score.html());

        // Set the link of the appropriate problem name.
        var link = $('.problem-name[data-problem="' + problem + '"]');
        if (hash != "None") {
            // Link the submission to the full diff of the code.
            link.removeClass('problem-link-disabled');
            link.attr('href', 'https://github.com/submit50/' + username + '/commit/' + hash + '?diff=unified');
        } else {
            // No tag hash, so disable the link.
            link.addClass('problem-link-disabled');
            link.removeAttr('href');
        }
    }

    $('#student-select').change(function() {
        window.location.href = $(this).val();
    });

    $('#student-select-button').click(function() {
        window.location.href = Flask.url_for('gradebook', {
            'course_identifier': $(this).data('course'),
            'username': $('#student-select-input').val()
        });
    });

    $('.submission-select').each(show_submission_scores);
    $('.submission-select').change(show_submission_scores);

    // Update gradebook on update of axis field.
    $('.axis-input').on('change', function() {
        var student_id = $(this).data('student');
        var submission_id = $(this).data('submission');
        var parameters = {
            'axis': $(this).attr('name'),
            'score': $(this).val(),
            'student_id': student_id,
            'submission': submission_id,
            'problem': $(this).data('problem')
        }
        $.post(Flask.url_for('submit_score'), parameters)
        .done(function(data) {
            
            // Update the final score if there's a change.
            if (data['success']) {
                var area = $('.final-score-area[data-individual="' + submission_id + '"]');
                area.attr('title', data['computation']).tooltip('fixTitle');
                if (data['score'] === null)
                    area.html('--');
                else
                    area.html(data['score']);
            }
        });
    });

    // Show additional options when button is clicked.
    $('.btn-additional-options').click(function() {

        // Get relevant information.
        var problem_id = $(this).data('problem');
        var student_id = $(this).data('student');
        var selector = $('.submission-select[data-problem="' + problem_id + '"]')
        var submission_id = selector.val();
        var submission = selector.find('option:selected').text();
    
        var parameters = {
            'problem_id': problem_id,
            'submission_id': submission_id,
            'student_id': student_id
        }
        
        // Prepare modal and show loading screen.
        $('#modal-title').html('Loading...');
        $('.modal-body-main').css('display', 'none');
        $('.modal-body-loading').css('display', 'inline');
        $('#modal-deadline').html('');
        $('#modal-extension').html('');

        // Set up resubmission button.
        $('#resubmit-btn').prop('disabled', false);
        $('#resubmit-btn, #extension-btn, #status-btn').data('problem', problem_id);
        $('#resubmit-btn, #extension-btn, #status-btn').data('student', student_id);
        $('#resubmit-btn').data('submission', submission_id);
        $('#resubmission-error').css('display', 'none');
        
        // Show modal.
        $('#options-modal').modal();

        // Get additional data.
        $.post(Flask.url_for('submission_data'), parameters)
        .done(function(data) {
            if (data['success'] !== true) {
                return;
            }

            // Show title.
            $('#modal-title').html(data['problem_name'] + ': ' + submission);

            // If cannot resubmit, then display as much.
            if (data['can_resubmit'] === false) {
                $('#resubmit-btn').prop('disabled', true);
                $('#resubmission-error').css('display', 'inline');
            }

            // Show deadline and extension info.
            if (data['deadline'] !== null) {
                $('#modal-deadline').html('This assignment is due on ' + data['deadline']);
            }
            $('#extension-input').val(data['extension']);
            if (data['extension'] > 0) {
                $('#modal-extension').html('Extension: ' + data['extension'] + ' hours.');
            }

            // Show score status info.
            $('#score-status-select').val(data['status']);

            // Show actual content.
            $('.modal-body-loading').css('display', 'none');
            $('.modal-body-main').css('display', 'inline');
        });
    });
    
    // Student or instructor wishes to resubmit assignment.
    $('#resubmit-btn').click(function() {
        var parameters = {
            'submission_id': $(this).data('submission'),
            'problem_id': $(this).data('problem'),
            'student_id': $(this).data('student'),
        }
        $.post(Flask.url_for('resubmit_submission'), parameters)
        .done(function(data) {
            if (data["success"])
                location.reload();
        });
    });
    
    // Instructor wishes to extend deadline.
    $('#extension-btn').click(function() {
        var parameters = {
            'problem_id': $(this).data('problem'),
            'student_id': $(this).data('student'),
            'extension': $('#extension-input').val()
        }
        $.post(Flask.url_for('problem_status_change'), parameters)
        .done(function(data) {
            if (data["success"])
                location.reload();
        });
    });
    
    // Change in score status.
    $('#status-btn').click(function() {
        var parameters = {
            'problem_id': $(this).data('problem'),
            'student_id': $(this).data('student'),
            'status': $('#score-status-select').val()
        }
        $.post(Flask.url_for('problem_status_change'), parameters)
        .done(function(data) {
            if (data['success'])
                location.reload();
        });
    });

});
