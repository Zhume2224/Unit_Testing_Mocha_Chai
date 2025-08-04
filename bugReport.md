this is to practice writing a bug report.


---

Title:
Phone Number field accepts alphabetic characters

Description:
The "Phone Number" input field allows users to enter alphabetic characters (e.g., "abc123"), which should not be permitted. The field is expected to accept only numeric input (0–9).

Steps to Reproduce:

1. Navigate to the form page.
2. Locate the "Phone Number" input field.
3. Enter a combination of letters and numbers (e.g., "abc123").
4. Submit or attempt to proceed.

Expected Result:
The field should accept only numeric input. Alphabetic characters should be blocked or trigger a validation error.

Actual Result:
The field accepts alphabetic characters without any validation error or restriction.

Impact:

* Data inconsistency in user records
* Possible failures during backend validation or processing
* Poor user experience

Severity:
Medium

Environment:

* Browser: Chrome 115.0.5790.171
* OS: Windows 10
* Build: v1.3.5 (Staging)

screenshot / Video :
*(if available)*

---

