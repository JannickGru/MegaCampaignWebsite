Initial Comments: Use cases need revision. What information exactly will be looked up ?


## Use Case: Connect to Discord Account  

| **Attribute**    | **Description**                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Name:**         | Connect to Discord Account                                                                          |
| **Actor:**        | User                                                                                                |
| **Description:**  | The User connects their Discord account to the system for authentication and participation in campaigns. |
| **Precondition:** | The system is operational. The User has a valid Discord account.                                    |
| **Scenario:**     | 1. **Actor:** Requests to connect Discord account. <br> 2. **System:** Redirects User to Discord authorization page. <br> 3. **Actor:** Grants permission. <br> 4. **System:** Confirms successful connection and links the Discord account. |
| **Result:**       | The User’s Discord account is linked to the system.                                                 |
| **Extensions:**   | 3a1. **Actor:** Cancels authorization. <br> 3a2. **System:** Returns User to system with no connection established. |
| **Exceptions:**   | 2a1. **System:** Cannot reach Discord API. Displays error message. <br> 2a2. **Use case ends here** |  

---

## Use Case: Register to a Mega-Campaign  

| **Attribute**    | **Description**                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Name:**         | Register to a Mega-Campaign                                                                         |
| **Actor:**        | User                                                                                              |
| **Description:**  | The User registers for an available mega-campaign.                                                  |
| **Precondition:** | The system is operational. A mega-campaign is available for registration. The User is connected with Discord. |
| **Scenario:**     | 1. **Actor:** requests upcoming mega-campaigns. <br> 2. **System** shows all available mega campaigns <br> 3. **Actor:** Selects a mega-campaign. <br> 4. **System:** Shows information on campaign. <br> 5. **User:** Selects preffered countries <br> 6. **System:** Registers the User for the selected campaign. <br> 7. **System:** Confirms registration. |
| **Result:**       | The User is registered for the selected mega-campaign.                                              |
| **Extensions:**   | 5a1. **System:** Campaign is already full. Displays notification. <br> 5a2. **Use case ends here** |
| **Exceptions:**   | 2a1. **System:** Cannot retrieve campaign data. Displays error. <br> 2a2. **Use case ends here** |  

---

## Use Case: View Mega-Campaign Information  
| **Attribute**    | **Description**                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Name:**         | View Mega-Campaign Information                                                                     |
| **Actor:**        | User                                                                                                |
| **Description:**  | The User views information about an active mega-campaign.                                           |
| **Precondition:** | The system is operational. A mega-campaign exists.                                                  |
| **Scenario:**     | 1. **Actor:** Requests list of  mega-campaigns. <br> 2. **System:**  Displays campaigns to the User. <br> 3. **Actor:** Selects mega-campaign <br> 4. **System:** Displays campaign information to User |
| **Result:**       | The User sees the details of the mega-campaign.                                                     |
| **Extensions:**   | None                                                                                                |
| **Exceptions:**   | 2a1. **System:** Cannot find campaign data. Displays error message. <br> 2a2. **Use case ends here** |  

---

## Use Case: Download Save Games  

| **Attribute**    | **Description**                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Name:**         | Download Save Games                                                                                |
| **Actor:**        | User                                                                                                |
| **Description:**  | The User downloads save game files from the system.                                                 |
| **Precondition:** | The system is operational. Save games are available for download. <br>Use Case: View Mega-Campaign Information                                   |
| **Scenario:**     | 1. **Actor:** Requests to download a save game. <br> 2. **System:** Retrieves the save game file. <br> 3. **System:** Provides download link or file transfer. <br> 4. **Actor:** Downloads the file. |
| **Result:**       | The save game is downloaded by the User.                                                            |
| **Extensions:**   | None                                                                                                |
| **Exceptions:**   | 2a1. **System:** Save game file not found. Displays error. <br> 2a2. **Use case ends here** |  

---

## Use Case: Set Up a New Campaign  

| **Attribute**    | **Description**                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Name:**         | Set Up a New Campaign                                                                              |
| **Actor:**        | Admin                                                                                               |
| **Description:**  | The Admin creates and configures a new campaign in the system.                                      |
| **Precondition:** | The system is operational. The Admin is authenticated.                                              |
| **Scenario:**     | 1. **Actor:** Requests to create new campaign. <br> 2. **System:** Displays campaign setup form. <br> 3. **Actor:** Provides campaign details. <br> 4. **System:** Validates and saves the new campaign. <br> 5. **System:** Confirms campaign creation. |
| **Result:**       | A new campaign is created in the system.                                                            |
| **Extensions:**   | 3a1. **Actor:** Leaves mandatory fields empty. <br> 3a2. **System:** Displays error message. <br> 3a3. **Continue with step 3** |
| **Exceptions:**   | 4a1. **System:** Cannot save campaign due to technical error. Displays error. <br> 4a2. **Use case ends here** |  

---

## Use Case: Assign Players to a Country  

| **Attribute**    | **Description**                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Name:**         | Assign Players to a Country                                                                        |
| **Actor:**        | Admin                                                                                               |
| **Description:**  | The Admin assigns registered players to countries within a campaign.                                |
| **Precondition:** | The system is operational. A campaign exists with registered players. <br>Use Case: View Mega-Campaign                                 |
| **Scenario:**     | 1. **Actor:** Opens player assignment interface. <br> 2. **System:** Displays available players and countries. <br> 3. **Actor:** Selects a player and assigns a country. <br> 4. **System:** Saves the assignment. <br> 5. **System:** Confirms assignment. |
| **Result:**       | Players are assigned to countries within the campaign.                                              |
| **Extensions:**   | 3a1. **Actor:** Selects a player already assigned. <br> 3a2. **System:** Displays overwrite warning. <br> 3a3. **Actor:** Confirms or cancels overwrite. |
| **Exceptions:**   | 2a1. **System:** Cannot retrieve player or country data. Displays error. <br> 2a2. **Use case ends here** |  

---

## Use Case: Upload Save Games  

| **Attribute**    | **Description**                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Name:**         | Upload Save Games                                                                                  |
| **Actor:**        | Admin                                                                                               |
| **Description:**  | The Admin uploads save game files to the system.                                                    |
| **Precondition:** | The system is operational. The Admin is authenticated. <br>Use Case: View Mega-Campaign                                              |
| **Scenario:**     | 1. **Actor:** Requests to upload a save game. <br> 2. **System:** Displays upload interface. <br> 3. **Actor:** Provides save game file. <br> 4. **System:** Validates and saves the file. <br> 5. **System:** Confirms successful upload. |
| **Result:**       | The save game file is stored in the system.                                                         |
| **Extensions:**   | 4a1. **System:** File format mismatch. Displays error. <br> 4a2. **Continue with step 3** |
| **Exceptions:**   | 4b1. **System:** Cannot save file due to technical error. Displays error. <br> 4b2. **Use case ends here** |  

---

## Use Case: Edit Existing Campaign  

| **Attribute**    | **Description**                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Name:**         | Edit Existing Campaign                                                                             |
| **Actor:**        | Admin                                                                                               |
| **Description:**  | The Admin edits details of an existing campaign.                                                    |
| **Precondition:** | The system is operational. A campaign exists. The Admin is authenticated. <br>Use Case: View Mega-Campaign                           |
| **Scenario:**     | 1. **Actor:** Requests to edit campaign. <br> 2. **System:** Displays campaign details. <br> 3. **Actor:** Updates campaign details. <br> 4. **System:** Validates changes and saves them. <br> 5. **System:** Confirms update. |
| **Result:**       | The campaign is updated with the new details.                                                       |
| **Extensions:**   | 3a1. **Actor:** Leaves mandatory fields empty. <br> 3a2. **System:** Displays error message. <br> 3a3. **Continue with step 3** |
| **Exceptions:**   | 4a1. **System:** Cannot save updates due to technical error. Displays error. <br> 4a2. **Use case ends here** |  
