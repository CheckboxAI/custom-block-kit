# custom-block-kit

## 1.6.4

### Patch Changes

- 9daf7e8: Reverted the value of formatList

## 1.6.3

### Patch Changes

- 9543c77: Updating label of checkbox options for set-variable

## 1.6.2

### Patch Changes

- 3adeda3: add showPageRef for text field

## 1.6.1

### Patch Changes

- f4d6973: add deselector for ticketing fields

## 1.6.0

### Minor Changes

- c5c593a: Added feature to support var input for document var in set var block

## 1.5.10

### Patch Changes

- b0a5b55: modify ticket svg

## 1.5.9

### Patch Changes

- 495dd9e: Fix empty attachment causes crash

## 1.5.8

### Patch Changes

- f45a48d: Added in RAD/CBX input to set-variable

## 1.5.7

### Patch Changes

- 903848b: ticketing block reset key value mapping when layout change

## 1.5.6

### Patch Changes

- 95ff9fe: add runtime to ticketing block

## 1.5.5

### Patch Changes

- c007021: Added in missing type

## 1.5.4

### Patch Changes

- 72c7aa3: Added in changes for KeyValueListInput

## 1.5.3

### Patch Changes

- ab5ec04: move key value mapping under create new ticket group

## 1.5.2

### Patch Changes

- 12d04f2: Added in key value input for ticketing

## 1.5.1

### Patch Changes

- 5c4c5d0: Added list variables component

## 1.5.0

### Minor Changes

- db55527: add ticket block

## 1.4.12

### Patch Changes

- fd38f34: Widget not showing updated values of variable

## 1.4.11

### Patch Changes

- c684ec2: Site and drive should be dependent on connection change

## 1.4.10

### Patch Changes

- 8a14e64: Updated the logic for set list

## 1.4.9

### Patch Changes

- e54d849: Made change to lazy load the api clients

## 1.4.8

### Patch Changes

- 7b1c718: Ignore invalid date

## 1.4.7

### Patch Changes

- a4f445c: Added in null check for files in sharepoint

## 1.4.6

### Patch Changes

- 940d65d: Adding in new option into set-variable

## 1.4.5

### Patch Changes

- 44d42fc: Remove not needed validation

## 1.4.4

### Patch Changes

- e2992af: Use npm run build before pushing

## 1.4.3

### Patch Changes

- e51256c: Add feature flag to triage block

## 1.4.2

### Patch Changes

- 4cae94a: Do not check file type for non doc

## 1.4.1

### Patch Changes

- 06afb3f: Follow golang validation for static variable name

## 1.4.0

### Minor Changes

- 18b6f2c: Allow function in showIf, skip corrupted .pdf.docx

## 1.3.4

### Patch Changes

- 9805eae: Add validation of at least one file types and bug fix to Sharepoint

## 1.3.3

### Patch Changes

- 60b270c: added format to setvar add timezone

## 1.3.2

### Patch Changes

- 48470db: DEV-11106: Set_variable allows for space in variable name

## 1.3.1

### Patch Changes

- c4fe137: Added file types to sharepoint block

## 1.3.0

### Minor Changes

- f6cfc76: All existing blocks now support variable interpolation within the appropriate fields

### Patch Changes

- b091654: Added connection option for sharepoint

## 1.2.13

### Patch Changes

- 1beae65: Added try catch to sharepoint options api calls

## 1.2.12

### Patch Changes

- 9404db8: added missing character exclusion

## 1.2.11

### Patch Changes

- 630a466: added exclusion to sharepoint characters
  also added minimum for datecalc sub period

## 1.2.10

### Patch Changes

- 0eb374d: removed start of day in set variable create datetime

## 1.2.9

### Patch Changes

- 9323c6c: added varAutocomplete to date_calc time_period

## 1.2.8

### Patch Changes

- 4bfd274: Updated the sharepoint search props

## 1.2.7

### Patch Changes

- f6762b7: This is done to allow the sharepoint block to upload multiple blocks and switch it to prefix"

## 1.2.6

### Patch Changes

- b63fd55: Change output type of triage output and rename confidence threshold

## 1.2.5

### Patch Changes

- 5da2e04: Updating the sharepoint block

## 1.2.4

### Patch Changes

- 99eb55e: updated colours and groups

## 1.2.3

### Patch Changes

- 093011d: Add fallback category to Triage block

## 1.2.2

### Patch Changes

- 9181064: Update types for triage block

## 1.2.1

### Patch Changes

- a44d616: fixed tz issues + aligned data types with the backend

## 1.2.0

### Minor Changes

- 10e1cf4: Add triage block

## 1.1.10

### Patch Changes

- b2b3ed4: Moved new variable for add/sub date calc out of children as it was causing variable unique conflicts

## 1.1.9

### Patch Changes

- ecc957a: This is to update the options api of sharepoint get folder

## 1.1.8

### Patch Changes

- f5eb68b: added whenchanged functionality to CBK schema

## 1.1.7

### Patch Changes

- 455ccd7: added a UTC parse in the diff to make sure both dates are in the same timezone

## 1.1.6

### Patch Changes

- e36e00f: Update different types in set variable

## 1.1.5

### Patch Changes

- 2cf5dcc: Update the set variable to include doc type"

## 1.1.4

### Patch Changes

- 4e31dc9: Added missing dates

## 1.1.3

### Patch Changes

- 18b69a2: Added date formatting + date options

## 1.1.2

### Patch Changes

- 82b381f: Fixed periodUnit fn to apply date manipulation to preserve timezone

## 1.1.1

### Patch Changes

- 11b9263: Run changeset

## 1.1.0

### Minor Changes

- c98fce0: added block types

## 1.0.10

### Patch Changes

- 1d41e54: Just removing an unnecessary regex

## 1.0.9

### Patch Changes

- 06282c5: Rename MSGraph to Sharepoint

## 1.0.8

### Patch Changes

- 7a4895c: updated sharepoint to added file extension

## 1.0.7

### Patch Changes

- 5273eed: Updated the sharepoint code to interpolation input and to use the display name

## 1.0.6

### Patch Changes

- bfd3f72: This is to include an option for FileInput

## 1.0.5

### Patch Changes

- 5544d32: Implement create folder for sharepoint block

## 1.0.4

### Patch Changes

- 2ff571e: Moved msgraph from dev dep to dep

## 1.0.2

### Patch Changes

- c70bdb4: Added upload file function to sharepoint

## 1.0.1

### Patch Changes

- 8561652: Add max 50 character validation to variable input

## 1.0.0

### Major Changes

- 8266c90: publish the first version of the custom block kit package

  **What breaking changes:**
  None

  **Why the change was made**
  publishing the first package

## 0.0.3

### Patch Changes

- 7a709c0: test new version

## 0.0.2

### Patch Changes

- 8f99f20: updated changset configs
- f529a87: test for changeset pipeline
- daf80a4: test 2
