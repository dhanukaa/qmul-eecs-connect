import React from 'react';

function EC() {
        return (
            <div>
                <h1>Apply for Extenuating Circumstances</h1>
                  {/* Personal Information section */}
                <h2>Personal Information</h2>
                <div id="personal-info">
                    <p>
                    Student ID: <input type="text" name="student_id" id="student-id" />
                    </p>
                    <p>
                    Forename: <input type="text" name="forename" id="forename" />
                    </p>
                    <p>
                    Surname: <input type="text" name="surname" id="surname" />
                    </p>
                    <p>
                    Date of birth: <input type="date" name="dob" id="dob" />
                    </p>
                </div>

                {/* Programme/Course Details section */}
                <h2>Programme/Course Details</h2>
                <div id="course-details">
                    <p>
                    Faculty: <input type="text" name="faculty" id="faculty" />
                    </p>
                    <p>
                    School/Institute:{' '}
                    <input type="text" name="school" id="school" />
                    </p>
                    <p>
                    Programme:{' '}
                    <input type="text" name="programme" id="programme" />
                    </p>
                    <p>
                    Route: <input type="text" name="route" id="route" />
                    </p>
                </div>

                {/* Logging a New Claim section */}
                <h2>Log a New Claim</h2>
                <div id="new-claim">
                    <form>
                    <p>Reason for claim:</p>
                    <textarea name="reason" rows="4" cols="50" id="reason"></textarea>
                    <p>Supporting evidence:</p>
                    <input type="file" name="evidence" id="evidence" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                    </form>
                </div>

                {/* Claims Yet to be Submitted section */}
                <h2>Claims Yet to be Submitted</h2>
                <div id="yet-to-submit">
                    <ul className="claims">
                    <li>No claims yet to be submitted.</li>
                    </ul>
                </div>

                {/* Claims Under Consideration section */}
                <h2>Claims Under Consideration</h2>
                <div id="under-consideration">
                    <ul className="claims">
                    <li>No claims under consideration.</li>
                    </ul>
                </div>

                {/* Completed Claims section */}
                <h2>Completed Claims</h2>
                <div id="completed-claims">
                    <ul className="claims">
                    <li>No completed claims.</li>
                    </ul>
                </div>
            </div>
        );
    }

export default EC;